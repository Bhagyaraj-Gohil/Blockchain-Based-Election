import React from 'react';
import Video from '../../Media/Video.mp4';
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroHeading,
    HeroText
} from './HeroSectionElements';

const HeroSection = () => {
    return(
        <>
            <HeroContainer>
                <HeroBackground>
                    <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBackground>
                <HeroContent>
                    <HeroHeading>Online Voting Made Secure</HeroHeading>
                    <HeroText>Keep reading to know how Blockchain technology can change the way we vote.</HeroText>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;