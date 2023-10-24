import React from 'react'

export default function ProfileList() {
  return (
    <Container>
        <img src="" alt="" />
        <div>
            <p>사용자 닉네임</p>
            <p>사용자 소개</p>
        </div>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    align-items: center;

    width: 358px;
    height: 50px;
`