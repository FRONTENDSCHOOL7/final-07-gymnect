import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
  pointer-events: auto;
  z-index: 99999;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25.2rem;
  background-color: #ffffff;
  border: 0.1rem solid #DBDBDB;
  border-radius: 1rem;
`;

export const Message = styled.p`
  padding: 2rem 0rem;
  color: black;
  font-size: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  color: #000000;
  border-top: 0.5px solid #DBDBDB;
  font-size: 14px;
  
  button {
    padding: 1.3rem 0;
    width: 12.5rem;
  }
`;

export const DeleteButton = styled.button`
  color: #006CD8;
  border-right: 0.05rem solid #DBDBDB;
  `;

export const CancelButton = styled.button``;