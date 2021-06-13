import React from 'react';
import useForm from './useForm';
import {
    FormContainer, 
    CandidateForm, 
    InputDiv, 
    FormInput, 
    FormFileInput, 
    FormLabel, 
    UploadDiv, 
    UploadButton, 
    SubmitButton
} from './FormElements';

const Form = (props) => {
  const { handleChange, handleSubmit, values } = useForm({
    setShowModal: props.setShowModal, 
    contract: props.contract, 
    currentAccount: props.currentAccount 
  });

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <FormContainer>
      <CandidateForm onSubmit={handleSubmit}>
        <InputDiv>
          <FormLabel>Name: </FormLabel>
          <FormInput
            type='text'
            name='name'
            placeholder='Enter Candidate name'
            value={values.name}
            onChange={handleChange}
          />
        </InputDiv>
        <InputDiv>
          <FormLabel>Description: </FormLabel>
          <FormInput
            type='text'
            name='description'
            placeholder="Enter candidate description"
            value={values.description}
            onChange={handleChange}
          />
        </InputDiv>
        <UploadDiv>
          <FormLabel>Image: </FormLabel>
          <UploadButton onClick={handleClick}>Upload Image</UploadButton>
          <FormFileInput
            type='file'
            name='image' 
            ref={hiddenFileInput} 
            onChange={handleChange}
          />
        </UploadDiv>
        <SubmitButton type='submit'>
          Submit
        </SubmitButton>
      </CandidateForm>
    </FormContainer>
  );
};

export default Form;