import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 75px;
`;

export const CandidateForm = styled.form`
  margin-top: 20px;
  margin-left: 50px;
`;

export const InputDiv = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormLabel = styled.label`
  font-size: 18px;
  margin-top: 10px;
  color: #fff;
  opacity: 0.87;
`;

export const FormInput = styled.input`
  margin-top: 10px;
  background-color: #404040;
  color: #fff;
  opacity: 0.87;
  padding: 5px;
  height: 30px;
  width: 300px;
  outline: none;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
  
  &::placeholder {
    color: #fff;
    opacity: 0.75;
  }
`;

export const FormFileInput = styled.input`
    opacity: 0;
    position: relative;
    top: -25px;
    cursor: pointer;
`;

export const UploadDiv = styled.div`
    margin-bottom: 0.5rem;
    width: 80%;
    display: flex;
    flex-direction: column;
`;

export const UploadButton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #404040;
  opacity: 0.70;
  padding: 7px;
  margin-top: 10px;
  width: 300px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  :focus{
    outline:none;
  }
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #0467FB;
  margin-top: 15px;
  padding: 10px 25px;
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: bold;
  :focus{
    outline: none;
  }
`;