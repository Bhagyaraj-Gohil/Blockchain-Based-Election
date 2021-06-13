import React from 'react';
import { Button, FormDiv, StyledSelect, StyledOption } from '../Voting Section/VotingSectionElements';

class Form extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Value:");
        console.log(this.candidateId.value);
        this.props.contract.methods.vote(this.candidateId.value).send({from: this.props.currentAccount})
        .then(()=>{
            this.props.sethasVoted();
            this.props.setShowModal();
            alert("Vote Registered");
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <FormDiv>
                        <StyledSelect style={{width: 200}} ref={(input) => this.candidateId = input}>
                            {this.props.candidates.map((candidate) => {
                                return <StyledOption value={candidate.id}>{candidate.name}</StyledOption>
                            })}
                        </StyledSelect>
                        <Button type='submit'>Vote</Button>
                    </FormDiv>
                </form>
            </>
        )
    }
}

export default Form;