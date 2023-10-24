import React from "react";
import styled from "styled-components";
import BackButton from "../common/Button/BackButton";
import { ReactComponent as MoreIcon } from "../../assets/images/icon-more.svg";

const ModalNav = () => {
  return (
    <Container>
      <BackButton />
      <button>
        <MoreIcon />
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
  padding: 0 12px;
`;
