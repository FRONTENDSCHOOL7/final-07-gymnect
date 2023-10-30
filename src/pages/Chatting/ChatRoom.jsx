import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import ChatHeader from "../../components/Header/ChatHeader";
import ChatFooter from "../../components/Footer/ChatFooter";
import profileImage from "../../assets/images/signup-profile-1.svg";

import {
  Container,
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
  const [messageList, setMessageList] = useState([]);
  const mainRef = useRef(null); // DOM 요소에 대한 참조를 생성

  const handleSend = () => {
    if (message.trim()) {
      //공백만 있는 문자열은 무시
      const timestamp = Date.now();
      setMessageList([...messageList, { content: message, timestamp }]);
      setMessage(""); // 메시지 전송 후 입력 필드를 초기화
    }
  };
  useEffect(() => {
    // messageList의 길이가 변경될 때(새로운 메시지가 추가될 때) 아래쪽으로 스크롤
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.scrollTop = mainElement.scrollHeight;
    }
  }, [messageList]);

  const timeOptions = { hour: "2-digit", minute: "2-digit" };
  return (
    <Container>
      <ChatHeader />
      <Main message={message} ref={mainRef}>
        <Chat className="chat-yours">
          <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
          <From>안녕하세요~ 게시글 올리신거 봤어요!!</From>
          <Time>오후12:39</Time>
        </Chat>
        <Chat className="chat-yours">
          <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
          <From>무게를 상당히 많이 치시던데 대단하세요!😊</From>
          <Time>오후12:41</Time>
        </Chat>
        <Chat className="chat-mine">
          <Time>오후12:41</Time>
          <To>아 아닙니닿ㅎ...</To>
        </Chat>
        <Chat className="chat-mine">
          <Img src={profileImage} alt="강아지 사진" />
        </Chat>
        <Chat className="chat-yours">
          <Image src={profileImage} alt="유저의 프로필 사진" width="50" />
          <From>오 몸 좋으시네요! 저도 꽤 치는데...</From>
          <Time>오후12:51</Time>
        </Chat>
        {messageList.map((messageItem, index) => (
          <Chat className="chat-mine" key={index}>
            <Time>
              {new Date(messageItem.timestamp).toLocaleTimeString(
                "ko-KR",
                timeOptions
              )}
            </Time>
            <To>{messageItem.content}</To>
          </Chat>
        ))}
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
