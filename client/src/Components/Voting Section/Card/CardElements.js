import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    overflow: hidden;
    background: #252627;
    border-radius: 12px;
    margin: 0px 10px;
`;

export const Image = styled.img`
    height: 200px;
    overflow: hidden
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    height: 200px;
    padding: 20px;
`;

export const Title = styled.h2`
    color: #fff;
    opacity: 0.75;
`;

export const Description = styled.p`
    color: #fff;
    opacity: 0.75;
    margin-top: 10px;
`;