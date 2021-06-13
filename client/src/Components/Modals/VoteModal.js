import React from 'react';
import {
    Background,  
    ModalWrapper, 
    ModalContent, 
    CloseModalButton,
    ModalHeading
} from './ModalElements';
import Form from '../Voting Section/Form';

const VoteModal = (props) => {

    return (
        <>
            {props.showModal ? (
                <Background >
                <ModalWrapper>
                <ModalContent>
                    <ModalHeading>Select Candidate</ModalHeading>
                </ModalContent>
                <Form 
                    candidates={props.candidates} 
                    setShowModal={props.setShowModal} 
                    contract={props.contract} 
                    currentAccount={props.currentAccount} 
                    sethasVoted={props.sethasVoted}
                />
                <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => props.setShowModal()}
                />
                </ModalWrapper>
                </Background>
            ) : null}
        </>
    )
}

export default VoteModal;