import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../assets/images/icon-home.svg";
import { ReactComponent as ChatIcon } from "../../assets/images/icon-message.svg";
import { ReactComponent as PostIcon } from "../../assets/images/icon-post.svg";
import { ReactComponent as CalenderIcon } from "../../assets/images/icon-calender.svg";
import { ReactComponent as ProfileIcon } from "../../assets/images/icon-profile.svg";

const Navbar = () => {
  return (
    <NavContainer>
      <StyledNavLink to={"/home"}>
        <HomeIcon />홈
      </StyledNavLink>
      <StyledNavLink to={"/chatlist"}>
        <ChatIcon />
        채팅
      </StyledNavLink>
      <StyledNavLink to={"/posting"}>
        <PostIcon />
        게시물 작성
      </StyledNavLink>
      <StyledNavLink to={"/calender"}>
        <CalenderIcon />
        캘린더
      </StyledNavLink>
      <StyledNavLink to={"/profile"}>
        <ProfileIcon />
        프로필
      </StyledNavLink>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  width: 390px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 10px;
`;

const StyledNavLink = styled(NavLink)`
  width: 78.05px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.active {
    color: #006cd8;

    svg {
      fill: #006cd8;
    }
  }
  gap: 5px;
`;
