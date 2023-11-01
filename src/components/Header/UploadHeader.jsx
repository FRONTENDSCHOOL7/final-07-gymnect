import React from "react";
import styled from "styled-components";
import BackButton from "../common/Button/BackButton";
import Button from "../common/Button/ButtonContainer";

export default function UploadNav(props) {
  return (
    <Container>
      <BackButton />
      <Button onClick={props.saveData} width="85.29px" height="29px" color="#006CD8" bgColor="#FFFFFF">
        업로드
      </Button>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 48px;
  z-index: 999;
  background-color: #006cd8;
  padding: 0 12px;
`;
