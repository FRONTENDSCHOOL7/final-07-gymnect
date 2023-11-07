import React from "react";
import backimg from "../../assets/images/background.svg";
import styled from "styled-components";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Background />
      <ParentContainer>
        <LayoutContainer>
          <Screen>{children}</Screen>
        </LayoutContainer>
      </ParentContainer>
    </>
  );
};

export default BasicLayout;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(${backimg}) no-repeat center center fixed;
  background-size: cover;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ParentContainer = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`

const LayoutContainer = styled.div`
  position: relative;
  width: 390px;
  height: 100vh;
  min-height: 100vh;
  transform: translateX(68%);
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
  background: white;
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
    transform: none;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;