import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        // <Footer>
            <Nav>
                <Link to={'/home'}>홈</Link>
                <Link to={'/chatlist'}>채팅</Link>
                <Link to={'/posting'}>게시물 작성</Link>
                <Link to={'/calender'}>캘린더</Link>
                <Link to={'/profile'}>프로필</Link>
            </Nav>
        // </Footer>
    );
};

// const Footer = styled.footer`
//   width: 100%;
//   height: 72px;
//   border-bottom: 1px solid var(--line-gray);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Nav = styled.nav`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: right;
  gap: 36px;
  align-items: center;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;
export default Navbar;
