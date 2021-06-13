import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  z-index: 10;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: 650px;
  height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #202122;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -25px;
  line-height: 1.8;
  color: #fff;
  opacity: 0.87;
`;

export const ModalHeading = styled.h1`
  color: #fff;
  opacity: 0.87;
`;

export const ModalSubText = styled.p`
  margin-top: 15px;
  margin-bottom: 20px;
  max-width: 450px;
`;

export const UploadButton = styled.button`
  cursor: pointer;
  color: #0467FB;
  background-color: white;
  opacity: 0.87;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 20px;
  font-weight: bold;
  :focus{
    outline:none;
  }
`;

export const FileInput = styled.input`
  opacity: 0;
  position: relative;
  left: -150px;
  width: 150px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #0467FB;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: bold;
  :focus{
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 25px;
  margin-right: 45px;
`;