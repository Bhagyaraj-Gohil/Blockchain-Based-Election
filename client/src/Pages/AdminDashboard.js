import React, { useState } from 'react';
import Navbar from '../Components/Navigation/Navbar';
import { 
    AdminSection,
    Column1, 
    Column2, 
    Container, 
    GraphDiv, 
    GraphText, 
    GraphAlt, 
    Img, 
    ModalDiv, 
    ModalDivText, 
    Row 
} from '../Components/Admin Section/AdminPageElements';
import ProgressBar from '../Components/Admin Section/ProgressBar';
import Graph from '../Components/Admin Section/Graph';
import AddCandidates from '../Components/Modals/Add Candidates Modal/AddCandidates';
import AuthorizeAccounts from '../Components/Modals/AuthorizeAccounts';
import AccessDenied from './AccessDenied';
import StartElection from '../Components/Modals/StartElection';

const AdminDashboard = (props) => {

    const [candidateModal, setcandidateModal] = useState(false);
    const [accountModal, setaccountModal] = useState(false);
    const [startElectionModal, setstartElectionModal] = useState(false);

    if(!(props.isAdmin))
    {
        return(
            <AccessDenied />
        )
    }
    else
    {
        return(
            <>
                <AddCandidates
                    showModal={candidateModal} 
                    setShowModal={() => {setcandidateModal(!candidateModal)}} 
                    sethash={props.sethash} 
                    contract={props.contract} 
                    currentAccount={props.currentAccount} 
                />
                <AuthorizeAccounts
                    showModal={accountModal} 
                    setShowModal={() => {setaccountModal(!accountModal)}} 
                    sethash={props.sethash} 
                    contract={props.contract} 
                    currentAccount={props.currentAccount} 
                    setVoters={props.setVoters}
                />
                <StartElection 
                    showModal={startElectionModal} 
                    setShowModal={() => {setstartElectionModal(!startElectionModal)}} 
                    currentAccount={props.currentAccount} 
                    contract={props.contract} 
                    noOfVoters={props.noOfVoters} 
                    noOfCandidates={props.candidates.length} 
                    setStartFlag={props.setStartFlag} 
                />
                <Navbar 
                    title={'Dashboard'}
                    account={props.account} 
                    hasVoted={props.hasVoted} 
                    authorized={props.authorized} 
                    isAdmin={props.isAdmin} 
                />
                <AdminSection>
                    <Container>
                        <Row>
                            <Column1>
                                <ProgressBar percentage={props.percentage}/>
                                <GraphDiv>
                                {
                                    (props.percentage === 100) ?
                                    <Graph candidates={props.candidates} /> :
                                    <GraphAlt>
                                        <Img src={require("../Media/Lock.svg")} alt="Failed to load" />
                                        <GraphText>Locked</GraphText>
                                    </GraphAlt>
                                }
                                </GraphDiv>
                            </Column1>
                            <Column2>
                            {
                                props.startFlag ? 
                                <>
                                    <ModalDiv disabled>
                                        <Img src={require("../Media/AddCandidates.svg")} alt="Failed to load" />
                                        <ModalDivText>Add Candidates</ModalDivText>
                                    </ModalDiv>
                                    <ModalDiv disabled>
                                        <Img src={require("../Media/AuthorizeAccounts.svg")} alt="Failed to load" />
                                        <ModalDivText>Authorize Accounts</ModalDivText>
                                    </ModalDiv>
                                    <ModalDiv disabled>
                                        <Img src={require("../Media/LockElection.svg")} alt="Failed to load" />
                                        <ModalDivText>Start Election</ModalDivText>
                                    </ModalDiv>
                                </> :
                                <>
                                    <ModalDiv onClick={() => {setcandidateModal(!candidateModal)}}>
                                        <Img src={require("../Media/AddCandidates.svg")} alt="Failed to load" />
                                        <ModalDivText>Add Candidates</ModalDivText>
                                    </ModalDiv>
                                    <ModalDiv onClick={() => {setaccountModal(!accountModal)}}>
                                        <Img src={require("../Media/AuthorizeAccounts.svg")} alt="Failed to load" />
                                        <ModalDivText>Authorize Accounts</ModalDivText>
                                    </ModalDiv>
                                    <ModalDiv onClick={() => {setstartElectionModal(!startElectionModal)}}>
                                        <Img src={require("../Media/LockElection.svg")} alt="Failed to load" />
                                        <ModalDivText>Start Election</ModalDivText>
                                    </ModalDiv>
                                </>
                            }
                            </Column2>
                        </Row>
                    </Container>
                </AdminSection>
            </>
        )
    }
}

export default AdminDashboard;