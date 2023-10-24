import React from 'react';
import Profile from '../../assets/images/signup-profile.svg';
import styled from 'styled-components';

export default function ProfileList({children}) {
  return (
    <Container>
        <UserProfile src={Profile} alt="유저 프로필 사진" />
        <UserBox>
            <UserName>근육 빵빵맨</UserName>
            <UserIntro>내가 이구역 최고 근육맨</UserIntro>
        </UserBox>
        {children}
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 358px;
    height: 50px;
`

const UserProfile = styled.img`
  width: 50px;
  height: 50px;
`

const UserBox = styled.div`
  padding: 5px 0 6px 12px;
`

const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 12px;
`

const UserIntro = styled.p`
  font-size: 12px;
  color: #767676;
`