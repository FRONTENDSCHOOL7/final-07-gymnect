import styled, { keyframes, css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  z-index: 99999;
`;

export const slideUpAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  height: 92px;
  padding: 30px 0 0 0;
  background: #ffffff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  animation: ${css`
    ${slideUpAnimation} 0.5s ease-in-out forwards;
  `};

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 20px;
    transform: translate(-50%);
    width: 50px;
    height: 4px;
    background: #dbdbdb;
    border-radius: 5px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 46px;
  font-size: 14px;
  padding: 14px 0 0 26px;
`;
