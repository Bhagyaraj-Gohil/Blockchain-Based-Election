import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBarDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 15px;
  height: 120px;
  width: 700px;
  border-radius: 12px;
  background: #202122;
`;

const Bar = styled.div`
  height: 20px;
  width: 650px;
  background: #121212;
  border-radius: 50px;
  margin: 25px;
  overflow: hidden;
`;

const ProgressText = styled.h1`
  margin-left: 25px;
  color: #fff;
  font-size: 22px;
  opacity: 0.75;
`;

const progressBarAnimation = (value) => keyframes`
  0% {
      width: 0%
  }
  100% {
      width: ${value}%
  }
`;

const Progress = styled.div`
  background: #0467FB;
  height: 100%;
  border-radius: 50px;
  animation: ${props => progressBarAnimation(props.value)} 3s ease forwards;
`;

const ProgressBar = (props) => {
  
  return (
    <ProgressBarDiv>
      <ProgressText>Election Progress: {props.percentage}%</ProgressText>
      <Bar>
        <Progress value={props.percentage}/>
      </Bar>
    </ProgressBarDiv>
  );
};

export default ProgressBar;