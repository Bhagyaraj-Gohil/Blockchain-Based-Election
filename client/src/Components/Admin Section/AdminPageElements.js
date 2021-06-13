import styled from 'styled-components';

export const AdminSection = styled.div`
  padding: 57px 0;
  background: #121212;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: 75px;
  flex: 1;
  width: 800px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 0px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  width: 100px;
`;

export const ModalDiv = styled.div`
  width: 180px;
  height: 150px;
  background: #202122;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px;
  margin-top: 0px;
  margin-left: 0px;
  border-radius: 12px;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  opacity: ${props => props.disabled ? '0.50' : '1'};
  

  &:hover {
    transform: scale(${props => props.disabled ? '1' : '1.07'});
  }
`;

export const ModalDivText = styled.p`
  color: #fff;
  opacity: 0.60;
  font-size: 18px;
  margin-top: 10px;
`;

export const GraphDiv = styled.div`
  width: 700px;
  height: 350px;
  background: #0B3D87;
  margin: 20px;
  margin-top: 0px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GraphAlt = styled.div`
  display: flex;
  flex-direction: column;
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

export const Row = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const Img = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 75px;
`;

export const GraphText = styled.p`
  color: #fff;
  opacity: 0.75;
  font-size: 20px;
`;