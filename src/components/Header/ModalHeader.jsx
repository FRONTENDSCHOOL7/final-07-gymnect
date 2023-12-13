import React from "react";
import styled from "styled-components";
import BackButton from "../common/Button/BackButton";
import { ReactComponent as MoreIcon } from "../../assets/images/icon-more.svg";

const ModalNav = ({ toggleModal }) => {
  return (
    <Container>
      <BackButton />
      <ButtonContainer onClick={toggleModal}>
        <MoreIcon />
      </ButtonContainer>
    </Container>
  );
};

export default ModalNav;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 48px;
  z-index: 999;
  background-color: #006cd8;
  padding: 0 0 0 12px;
`;

const ButtonContainer = styled.button`
  padding: 12px; /* 패딩값 적용 */
  background: none;
  border: none;
  cursor: pointer;
`;