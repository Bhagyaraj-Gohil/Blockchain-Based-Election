// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract Election {

    address public owner;

    string ipfsHash;
    uint public noOfVoters = 0;

    modifier ownerOnly {
        require(msg.sender == owner);
        _;
    }

    function setipfsHash(string memory _ipfsHash, uint _noOfVoters) public ownerOnly {
        ipfsHash = _ipfsHash;
        noOfVoters = _noOfVoters;
    }

    function getipfsHash() public view returns (string memory) {
        return ipfsHash;
    }

    bool public startFlag = false;

    function startElection() public ownerOnly {
        startFlag = true;
    }

    struct Candidate {
        uint id;
        string name;
        string description;
        string imagePath;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    uint public noOfCandidates = 0;

    mapping(address => bool) public voters;
    uint public noOfVotes = 0;

    constructor() public {
        owner = msg.sender;
    }

    function addCandidate(string memory _name, string memory _description, string memory _imagePath) public ownerOnly{
        noOfCandidates++;
        candidates[noOfCandidates] = Candidate(noOfCandidates, _name, _description, _imagePath, 0);
    }


    function vote(uint _candidateID) public {
        require(!voters[msg.sender]);

        require(_candidateID > 0 && _candidateID <= noOfCandidates);

        voters[msg.sender] = true;
        candidates[_candidateID].voteCount++;
        noOfVotes++;
    }

}