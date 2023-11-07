import React from "react";
import { Link } from "react-router-dom";
import BackNav from "../../components/Header/BackspaceHeader";
import profileImage from "../../assets/images/signup-profile.svg";
import styled from "styled-components";

const ChatList = () => {
  const UserData = [
    {
      id: 1,
      username: "짱쌘민주",
      message: "몸 좋으시네요! 다음에 시간되시면 운동 같이 해요~",
      date: "2023.10.24"
    },
    {
      id: 2,
      username: "킹왕짱영우",
      message: "네 좋아요~ 그럼 내일밤8시에 보는걸로해용",
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
    <>
      <BackNav />
      <Container>
        <Main>
          <Title>채팅리스트</Title>
          <UserList>
            {UserData.map((user, index) => (
              <List key={user.id}>
                <ImageSection>
                  <Image
                    src={profileImage}
                    alt="유저의 프로필 사진"
                    width="50"
                  />
                </ImageSection>
                <ChatSection>
                  {/* Link의 to 속성을 수정하여 각 ChatRoom 컴포넌트로 연결 */}
                  <Link to={`/chatroom${index + 1}/${user.username}`}>
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
    </>
  );
};

export default ChatList;

export const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  overflow-y: none;
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
  height: 42px;
  border-radius: 50%; //원형으로 만듬
  border: 1px solid #d9d9d9;
  background-color: #fff;
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
  font-weight: 800;
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
