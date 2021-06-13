import React, {useState} from 'react';
import AccessDenied from '../Pages/AccessDenied';
import Navbar from '../Components/Navigation/Navbar';
import {
    Container, 
    VoteSection ,
    CardWrapper ,
    Heading ,
    Button ,
    VotedText ,
    VotedTextDiv ,
    VoteWrapper ,
    CarouselDiv
} from '../Components/Voting Section/VotingSectionElements';
import Carousel from 'react-elastic-carousel';
import '../Components/Voting Section/CarouselStyles.css';
import Card from '../Components/Voting Section/Card/Card';
import VoteModal from '../Components/Modals/VoteModal';

const VotingPage = (props) => {
    const [voteModal,setvoteModal] = useState(false);

    if(!(props.authorized) || !(props.startFlag))
    {
        return(
            <AccessDenied />
        )
    }
    else
    {
        return(
            <>
                <VoteModal
                    showModal={voteModal} 
                    setShowModal={() => {setvoteModal(!voteModal)}} 
                    contract={props.contract} 
                    currentAccount={props.account} 
                    candidates={props.candidates} 
                    sethasVoted={props.sethasVoted}
                />
                <Navbar 
                    title={'Voting Page'}
                    account={props.account} 
                    hasVoted={props.hasVoted} 
                    authorized={props.authorized} 
                    isAdmin={props.isAdmin}
                />
                <VoteSection>
                    <Container>
                        <CardWrapper>
                            <Heading>Candidates:</Heading>
                            <CarouselDiv>
                                <Carousel 
                                    itemsToShow={3} 
                                    pagination={false} 
                                    enableAutoPlay={true} 
                                    autoPlaySpeed={3000}
                                >
                                    {
                                        props.candidates.map((candidate) => (
                                            <Card 
                                                key={candidate.id} 
                                                image={candidate.image} 
                                                name={candidate.name} 
                                                description={candidate.description} 
                                            />
                                        ))
                                    }
                                </Carousel>
                            </CarouselDiv>
                        </CardWrapper>
                        <VoteWrapper>
                        {
                            props.hasVoted ? 
                            <VotedTextDiv>
                                <VotedText>Your vote has been registered successfully.</VotedText>    
                            </VotedTextDiv> :
                            <Button onClick={() => {setvoteModal(!voteModal)}}>Vote</Button>
                        }
                        </VoteWrapper>
                    </Container>
                </VoteSection>
            </>
        )
    }
}

export default VotingPage;