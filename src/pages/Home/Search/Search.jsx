import React from "react";
import SearchNav from "../../../components/Header/SearchHeader";
import styled from "styled-components";

export default function Search() {
  return (
    <>
      <SearchNav />
      <Container></Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
