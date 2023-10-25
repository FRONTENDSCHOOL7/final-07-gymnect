import React from "react";
import BackNav from "../../components/Header/BackspaceHeader";
import FollowingProfile from "../../components/common/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowingPage() {
  return (
    <Container>
      <BackNav />
      <ListContainer>
        <FollowingProfile />
        <FollowButton />
      </ListContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 16px;
`;