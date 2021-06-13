import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import {
    LandingSection,
    Container,
    Row,
    Column,
    TextWrapper,
    TopLine,
    Heading,
    SubText,
    Button,
    ImgWrapper,
    Img
} from './LandingPageElements';

const LandingPage = () => {
    return(
        <>
            <LandingSection>
                <Container>
                    <Row>
                        <Column>
                            <TextWrapper>
                                <TopLine>Blockchain Based Election</TopLine>
                                <Heading>Online Voting Made Secure</Heading>
                                <SubText>Participate in a Blockchain based election to know how it can change the way we vote.</SubText>
                                <LinkR to='/vote'>
                                <Button>Vote</Button>
                                </LinkR>
                            </TextWrapper>
                        </Column>
                        <Column>
                            <ImgWrapper>
                                <Img src={require("../../Media/LandingPage.svg")} alt="Failed to load" />
                            </ImgWrapper>
                        </Column>
                    </Row>
                </Container>
            </LandingSection>
        </>
    )
}

export default LandingPage;