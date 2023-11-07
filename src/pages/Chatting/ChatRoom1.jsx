import React, { useState, useRef, useEffect } from "react";
import ChatHeader from "../../components/Header/ChatHeader";
import ChatFooter from "../../components/Footer/ChatFooter";
import profileImage from "../../assets/images/signup-profile.svg";
import Modal from "../../components/common/Modal/ReportModal";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const mainRef = useRef(null); // DOM 요소에 대한 참조를 생성
  /*메시지 전송*/
  const handleSend = () => {
    if (message.trim()) {
      //공백만 있는 문자열은 무시
      const timestamp = Date.now();
      setMessageList([...messageList, { content: message, timestamp }]);
      setMessage(""); // 메시지 전송 후 입력 필드를 초기화
    }
  };
  /*사진 업로드*/
  const handleImageMessage = (imageData) => {
    const timestamp = Date.now();
    setMessageList([
      ...messageList,
      { content: imageData, timestamp, type: "image" }
    ]);
  };

  useEffect(() => {
    // messageList의 길이가 변경될 때(새로운 메시지가 추가될 때) 아래쪽으로 스크롤
    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.scrollTop = mainElement.scrollHeight;
    }
  }, [messageList]);

  const timeOptions = { hour: "2-digit", minute: "2-digit" }; //시간,분 만 표시

  // 모달

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleShowAlert = () => {
    alert("신고되었습니다!");
    toggleModal();
  };

  return (
    <>
      {/* <ChatNav toggleModal={toggleModal} /> */}
      <ChatHeader toggleModal={toggleModal} />
      <Container>
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
            <From>몸 좋으시네요! 다음에 시간되시면 운동 같이 해요~</From>
            <Time>오후12:51</Time>
          </Chat>
          {messageList.map((messageItem, index) =>
            messageItem.type === "image" ? (
              <Chat className="chat-mine" key={index}>
                <Time>
                  {new Date(messageItem.timestamp).toLocaleTimeString(
                    undefined,
                    timeOptions
                  )}
                </Time>
                <Img src={messageItem.content} alt="Uploaded image" />
              </Chat>
            ) : (
              <Chat className="chat-mine" key={index}>
                <Time>
                  {new Date(messageItem.timestamp).toLocaleTimeString(
                    undefined,
                    timeOptions
                  )}
                </Time>
                <To>{messageItem.content}</To>
              </Chat>
            )
          )}
        </Main>
        <ChatFooter
          message={message}
          setMessage={setMessage}
          handleSend={handleSend}
          handleImageMessage={handleImageMessage}
        />
      </Container>
      {isModalVisible && (
        <Modal handleShowAlert={handleShowAlert} toggleModal={toggleModal} />
      )}
    </>
  );
};
export default ChatRoom;
