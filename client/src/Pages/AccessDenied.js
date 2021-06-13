import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Container = styled.div`
    padding: 180px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify content: center;
    background: #121212;
`;

const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    display: inline-block;
    max-height: 225px;
`;

const SubText = styled.div`
    max-width: 440px;
    margin-top: 25px;
    font-size: 20px;
    line-height: 24px;
    color: #a9b3c1;
`;

const BackButton = styled.button`
    border-radius: 4px;
    background: #0467FB;
    white-space: nowrap;
    padding: 12px 24px;
    margin-top: 15px;
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
`;

const AccessDenied = () => {

    var history = useHistory();

    return (
        <Container>
            <Img src={require("../Media/AccessDenied.svg")} alt=""/>
            <SubText>Access Denied</SubText>
            <BackButton onClick={() => history.goBack()} >Go Back</BackButton>
        </Container>
    )
}

export default AccessDenied;