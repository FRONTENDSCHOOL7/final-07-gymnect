import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/images/icon-search.svg";
import GymNectIcon from "../../assets/images/home-gymnect-logo.svg";

export default function HomeNav() {
  return (
    <Container>
      <h1 className="a11y-hidden">짐넥 피드</h1>
      <Logo className="" src={GymNectIcon} alt="짐넥 아이콘" />
      <Link to="/search">
        <img src={SearchIcon} alt="검색하기 아이콘" />
      </Link>
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

const Logo = styled.img`
  width: 37px;
  height: 26px;
`;
