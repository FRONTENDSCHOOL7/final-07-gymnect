import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100000;
`;

export const Section = styled.div`
  width: 252px;
  height: 110px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
`;

export const Message = styled.p`
  font-size: 16px;
  padding-top: 22px;
`;

export const Button = styled.button`
  width: 126px;
  height: 46px;
  font-size: 14px;
  background: #FFF;
  border-top: 0.5px solid #DBDBDB;

  &:first-child{
    border-bottom-left-radius: 10px;
    border-right: 0.5px solid #DBDBDB;
  }

  &:last-child{
    border-bottom-right-radius: 10px;
    color: #006CD8;
  }
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

