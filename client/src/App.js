import React, { Component } from "react";
import getWeb3 from "./getWeb3";
import Election from "./contracts/Election.json";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import AdminDashboard from "./Pages/AdminDashboard";
import VotingPage from "./Pages/VotingPage";
const BufferList = require('bl/BufferList');
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });


class App extends Component {
  state = { 
    web3: null, 
    currentAccount: null, 
    accounts: null, 
    contract: null, 
    candidates: [],
    admin: null,
    ipfsHash: '',
    authorized: false,
    noOfVoters: 0,
    noOfVotes: 0,
    hasVoted: false,
    startFlag : false
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = Election.networks[networkId];
      const instance = new web3.eth.Contract(
        Election.abi,
        deployedNetwork && deployedNetwork.address,
      );

      this.setState({ 
        web3, 
        accounts, 
        currentAccount:accounts[0], 
        contract: instance
      });

      this.state.contract.methods.noOfCandidates().call().then((candidatesCount) => {
        for (var i = 1; i <= candidatesCount; i++) {
          this.state.contract.methods.candidates(i).call().then((candidate) => {
            const candidates = [...this.state.candidates]
            candidates.push({
              id: candidate[0],
              name: candidate[1],
              description: candidate[2],
              image: candidate[3],
              voteCount: candidate[4]
            });
            this.setState({ candidates: candidates })
          });
        }
      })

      const flag = await instance.methods.startFlag().call();
      const voterCount = await instance.methods.noOfVoters().call();
      const voteCount = await instance.methods.noOfVotes().call();
      const voteStatus = await (instance.methods.voters(this.state.currentAccount).call());
      const admin = await instance.methods.owner().call();
      const hash = await instance.methods.getipfsHash().call();
      this.setState({
        noOfVoters: parseInt(voterCount),
        noOfVotes: parseInt(voteCount),
        hasVoted: voteStatus,
        admin: admin,
        ipfsHash: hash,
        startFlag: flag
      });

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  async authorizeAccount()
  {
    if(this.state.ipfsHash !== '')
    {
      for await (const file of ipfs.get(this.state.ipfsHash)) {
        const content = new BufferList()
        for await (const chunk of file.content) {
          content.append(chunk)
        }
        var data = content.toString();
        data = JSON.parse(data);
        if(data["Authorized"].indexOf(this.state.currentAccount) !== -1 )
        {
          this.setState({
            authorized: true
          });
        }
      }
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if(
      prevState.ipfsHash !== this.state.ipfsHash || 
      prevState.currentAccount !== this.state.currentAccount
    )
    {
      this.authorizeAccount();
    }
  }

  render() {
    
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Switch>
          <Route 
            path="/" exact
            render={(props) => (
              <HomePage {...props} 
                account={this.state.currentAccount}
                hasVoted={this.state.hasVoted} 
                authorized={this.state.authorized} 
                isAdmin={(this.state.admin === this.state.currentAccount)} 
              />
            )}
          />
          <Route 
            path="/admin" 
            render={(props) => (
              <AdminDashboard 
                {...props} 
                startFlag={this.state.startFlag} 
                setStartFlag={()=>{this.setState({startFlag: true})}} 
                isAdmin={(this.state.admin === this.state.currentAccount)}
                currentAccount={this.state.currentAccount}
                account={this.state.currentAccount} 
                hasVoted={this.state.hasVoted} 
                percentage={(this.state.noOfVotes / ((this.state.noOfVoters === 0) ? 1 : this.state.noOfVoters) * 100)}  
                ipfsHash={this.state.ipfsHash} 
                sethash={(newHash) => {this.setState({ipfsHash: newHash})}}
                setVoters={(count) => {this.setState({noOfVoters: count})}}
                contract={this.state.contract} 
                authorized={this.state.authorized} 
                noOfVoters={this.state.noOfVoters} 
                candidates={this.state.candidates} 
              />
            )}
          />
          <Route 
            path="/vote" 
            render={(props) => (
              <VotingPage 
                {...props} 
                isAdmin={(this.state.admin === this.state.currentAccount)} 
                startFlag={this.state.startFlag} 
                authorized={this.state.authorized} 
                account={this.state.currentAccount} 
                candidates={this.state.candidates} 
                hasVoted={this.state.hasVoted} 
                sethasVoted={() => {this.setState({hasVoted: !this.state.hasVoted})}} 
                contract={this.state.contract}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;