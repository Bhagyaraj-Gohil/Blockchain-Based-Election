import React from 'react';
import {
    Background, 
    ButtonWrapper, 
    ModalWrapper, 
    ModalContent, 
    CloseModalButton,
    ModalHeading, 
    ModalSubText, 
    SubmitButton
} from './ModalElements';

const StartElection = (props) => {

    const handleSubmit = () => {
        if(props.noOfVoters <= 0 || props.noOfCandidates <= 1)
        {
            alert("Election Data not sufficient!");
        }
        else
        {
            props.contract.methods.startElection().send({from: props.currentAccount})
            .then(() => {
                props.setStartFlag();
                props.setShowModal();
                alert("Election Started");
            })
        }
    }

    return (
        <>
            {props.showModal ? (
                <Background >
                <ModalWrapper>
                <ModalContent>
                    <ModalHeading>Start Election</ModalHeading>
                    <ModalSubText>Note that no changes can be made to the candidates or authorized voters after starting the election.</ModalSubText>
                </ModalContent>
                <ButtonWrapper>
                    <SubmitButton onClick={handleSubmit} style={{marginRight:-50}}>Start</SubmitButton>
                </ButtonWrapper>
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

export default StartElection;