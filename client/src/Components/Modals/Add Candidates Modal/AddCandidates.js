import React from 'react';
import {
    Background,
    ModalWrapper, 
    ModalContent, 
    CloseModalButton,
    ModalHeading
} from '../ModalElements';
import Form from './Form/Form';

const AddCandidates = (props) => {
    return (
        <>
            {props.showModal ? (
                <Background >
                <ModalWrapper style={{height: 450, width: 600}}>
                <ModalContent>
                    <ModalHeading>Add Candidate</ModalHeading>
                </ModalContent>
                <Form 
                    setShowModal={props.setShowModal} 
                    contract={props.contract} 
                    currentAccount={props.currentAccount} 
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

export default AddCandidates;