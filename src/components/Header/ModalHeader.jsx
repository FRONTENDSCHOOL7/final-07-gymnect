import React from "react";
import styled from "styled-components";
import BackButton from "../common/Button/BackButton";
import MoreIcon from "../../assets/images/icon-more.svg";

const ModalNav = ({ toggleModal }) => {
  return (
    <Container>
      <BackButton />
      <button onClick={toggleModal}>
        <MoreIconImg src={MoreIcon} alt="더보기 버튼" />
      </button>
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
  padding: 0 5px 0 12px;
`;

const MoreIconImg = styled.img`
  padding: 14px;
`;
