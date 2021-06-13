import React, { useState } from 'react';
import {
    Background,
    ModalWrapper, 
    ModalContent, 
    ModalHeading, 
    ModalSubText, 
    CloseModalButton, 
    ButtonWrapper, 
    UploadButton,
    FileInput,  
    SubmitButton
} from './ModalElements';
const BufferList = require('bl/BufferList');
const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

const AuthorizeAccounts = (props) => {
    const [file, setfile] = useState(null);
  
    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      setfile(fileUploaded);
    };

    async function getVoters(hash) {
        for await (const file of ipfs.get(hash)) {
            const content = new BufferList()
            for await (const chunk of file.content) {
                content.append(chunk)
            }
            var data = content.toString();
            data = JSON.parse(data);
            return data["Authorized"].length;
        }
    }
  
    const handleSubmit = () => {
        if(file === null)
        {
            alert("No file selected!");
            return;
        }
        ipfs.add(file)
        .then(result => {
            props.sethash(result["path"]);
            getVoters(result['path'])
            .then((count) => {
                props.setVoters(count);
                props.contract.methods.setipfsHash(result['path'], count).send({from: props.currentAccount})
                .then(()=>{
                    props.setShowModal();
                    alert("Accounts Added successfullly");
                })
            })
        })
    }
  
    return (
        <>
            {props.showModal ? (
                <Background >
                <ModalWrapper>
                <ModalContent>
                    <ModalHeading>Authorize Accounts</ModalHeading>
                    <ModalSubText>Upload the JSON file containing updated list of accounts authorized to vote.</ModalSubText>
                </ModalContent>
                <ButtonWrapper>
                  <UploadButton onClick={handleClick}>Upload file</UploadButton>
                  <FileInput
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                  />
                  <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
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

export default AuthorizeAccounts;