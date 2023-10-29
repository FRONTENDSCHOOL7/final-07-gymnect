import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import ChatHeader from "../../components/Header/ChatHeader";
import ChatFooter from "../../components/Footer/ChatFooter";
import profileImage from "../../assets/images/signup-profile-1.svg";

import {
  Container,
  Message,
  Main,
  Chat,
  Image,
  From,
  To,
  Time,
  Img
} from "./ChatRoomStyle";

const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      //공백만 있는 문자열은 무시
      setMessages([...messages, message]);
      setMessage(""); // 메시지 전송 후 입력 필드를 초기화
    }
  };
  return (
    <Container>
      <ChatHeader />
      <Main message={message}>
        <Chat className="chat-mine">
          {messages.map((message, index) => (
            <To key={index}>{message}</To>
          ))}
        </Chat>
      </Main>
      <ChatFooter
        message={message}
        setMessage={setMessage}
        handleSend={handleSend}
      />
    </Container>
  );
};
export default ChatRoom;

{
  /* <Main>
  <List>
    <Chat>
      <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
      <From>안녕하세요~ 게시글 올리신거 봤어요!!</From>
      <Time>12:39</Time>
    </Chat>
    <Chat>
      <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
      <From>무게를 상당히 많이 치시던데 대단하세요!😊</From>
      <Time>12:41</Time>
    </Chat>
    <Chat className="chat-mine">
      <Time>12:50</Time>
      <To>아 아닙니닿ㅎ...</To>
    </Chat>
    <Chat className="chat-mine">
      <Time>12:48</Time>
      <Img src={profileImage} alt="강아지 사진" />
    </Chat>
    <Chat>
      <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
      <From>오 몸 좋으시네요! 저도 꽤 치는데...</From>
      <Time>12:51</Time>
    </Chat>
  </List>
</Main>; */
}
