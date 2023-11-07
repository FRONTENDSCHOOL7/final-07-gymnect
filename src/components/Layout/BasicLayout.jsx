import React from "react";
import backimg from "../../assets/images/background.svg";
import styled from "styled-components";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Background />
      <LayoutContainer>
        <Screen>{children}</Screen>
      </LayoutContainer>
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
`;

const LayoutContainer = styled.div`
  position: relative;
  max-width: 390px;
  height: 100vh;
  /* min-height: 100vh; */
  margin-left: 55%;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
  background: white;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;