import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 586px;
    // height is static!
    position: relative;
    z-index: 1;
`

export const HeroBackground= styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
`

export const VideoBackground= styled.video`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: brightness(0.5);
`

export const HeroContent = styled.div`
    position: absolute;
    height: 100%;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 3;
`

export const HeroHeading = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
`

export const HeroText = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 20px;
    text-align: center:
    max-width: 600px;
`