import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button/ButtonContainer";
import BackButton from "../common/Button/BackButton";

export default function ProfileEditNav({ onEditButtonClick }) {
  return (
    <Container>
      <BackButton />
      <Button
        width="85.29px"
        height="29px"
        color="#006CD8"
        bgColor="#FFFFFF"
        onClick={onEditButtonClick} // 여기에 함수를 연결
      >
        저장
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
