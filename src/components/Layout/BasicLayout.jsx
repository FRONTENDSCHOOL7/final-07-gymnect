import React from "react";
import styled from "styled-components";

const BasicLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Screen>{children}</Screen>
    </LayoutContainer>
  );
};

export default BasicLayout;

const LayoutContainer = styled.div`
  max-width: 390px;
  height: 100vh;
  /* min-height: 100vh; */
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
