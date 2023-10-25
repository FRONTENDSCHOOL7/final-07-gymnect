import React from "react";
import { Link } from "react-router-dom";
import ModalHeader from "../../components/Header/ModalHeader";
import profileImage from "../../assets/images/signup-profile.svg";
import styled from "styled-components";

const ChatList = () => {
  const UserData = [
    {
      id: 1,
      username: "짱쌘민주",
      message: "오 몸 좋으시네요! 저도 꽤 치는데..",
      date: "2023.10.24"
    },
    {
      id: 2,
      username: "킹왕짱영우",
      message: "내일 점심에 저도 같이 헬스 하고 싶습니다!",
      date: "2023.10.24"
    },
    {
      id: 3,
      username: "필라퀸가람",
      message: "필라테스 학원 정보 알고싶어요~",
      date: "2023.10.25"
    },
    {
      id: 4,
      username: "발레퀸연정",
      message: "식단도 같이 하시는거죠???",
      date: "2023.10.25"
    }
  ];

  return (
    <Container>
      <ModalHeader />
      <Main>
        <Title>채팅리스트</Title>
        <UserList>
          {UserData.map((user) => (
            <List key={user.id}>
              <ImageSection>
                <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
              </ImageSection>
              <ChatSection>
                <Link to={`/chatlist/${user.username}`}>
                  <UserName>{user.username}</UserName>
                  <Message>{user.message}</Message>
                </Link>
              </ChatSection>
              <Date>{user.date}</Date>
            </List>
          ))}
        </UserList>
      </Main>
    </Container>
  );
};

export default ChatList;

export const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 108px);
  margin: 16px;
`;

export const Title = styled.h2`
  display: none;
`;

export const UserList = styled.ul`
  li:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const List = styled.li`
  display: flex;
`;

export const ImageSection = styled.section`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 12px;
`;

export const Image = styled.img`
  width: 42px;
  height: auto;
`;

export const ChatSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const UserName = styled.strong`
  display: block;
  margin-bottom: 4px;
  color: #000;
  font-size: 14px;
  font-weight: 500;
`;

export const Message = styled.strong`
  display: block;
  color: #767676;
  font-size: 12px;
`;

export const Date = styled.strong`
  display: inline-block;
  margin-top: 26px;
  color: #dbdbdb;
  font-size: 10px;
`;
