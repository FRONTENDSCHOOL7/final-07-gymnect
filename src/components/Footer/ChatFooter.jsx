import React from "react";
import styled from "styled-components";
import PhotoIcon from "../../assets/images/icon-img-btn.svg";

const ChatFooter = ({
  message,
  setMessage,
  handleSend,
  handleImageMessage
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //엔터키 누르면 메시지 전송
      e.preventDefault(); //개행 방지
      handleSend();
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        //ChatRoom 컴포넌트에서 처리하기 위한 콜백을 호출합니다.
        handleImageMessage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container>
      <ImageUpload>
        <img src={PhotoIcon} alt="포토아이콘" />
        <input type="file" onChange={handleImageUpload} />
      </ImageUpload>
      <MessageInput
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress} //엔터키누르면 전송
        placeholder="메시지 입력.."
      />
      <SendButton onClick={handleSend}>전송</SendButton>
    </Container>
  );
};
export default ChatFooter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  position: sticky;
  bottom: 0;
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
`;
const ImageUpload = styled.label`
  display: flex;
  align-items: center;
  margin-left: 16px;
  cursor: pointer; //마우스올리면 손모양으로 변환
  input[type="file"] {
    display: none;
  }
`;
const MessageInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 14px;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const SendButton = styled.button`
  font-size: 14px;
  color: #c4c4c4;
  padding-right: 16px;
  &:hover {
    color: #006cd8;
  }
`;
