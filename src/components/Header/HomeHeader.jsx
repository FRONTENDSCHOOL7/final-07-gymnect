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
        <Button>
          <img src={SearchIcon} alt="검색하기 아이콘" />
        </Button>
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

const StyledLink  = styled(Link)`
  display: inline-block; /* 부모 영역 크기를 따라가도록 설정 */
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px 0 15px 50px; /* 여백 크기 조절 */

`;