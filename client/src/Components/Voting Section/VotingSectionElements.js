import styled from 'styled-components';

export const VoteSection = styled.div`
  padding: 30px 0;
  background: #121212;
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 100px;
    padding-left: 100px;
`;

export const CardWrapper = styled.div`
  max-width: 1200px;
  padding-top: 0;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  color: #fff;
  opacity: 0.75;
  font-size: 32px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #0467FB;
  white-space: nowrap;
  padding: 12px 24px;
  margin-top: 25px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 225px;
`;

export const SubText = styled.p`
  max-width: 440px;
  margin-top: 25px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #a9b3c1;
`;

export const VotedTextDiv = styled.div`
  border-radius: 8px;
  border: 3px rgba(21, 61, 121, 0.3) solid;
  margin: 20px;
  margin-top: 15px;
`;

// rgba(21, 61, 121, 0.7)

export const VotedText = styled.div`
  color: #fff;
  font-size: 16px;
  padding: 10px;
  background-color: rgba(21, 61, 121, 0.3);
`;

export const CarouselDiv = styled.div`
  width: 100%;
  max-width: 1300px;
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSelect = styled.select`
  margin-top: 15px;
  height: 30px; 
  background-color: #404040;
  color: #fff;
  opacity: 0.87;
  font-size: 16px;
`;

export const StyledOption = styled.option`
  font-size: 16px;
`;