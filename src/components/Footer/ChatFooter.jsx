import React, { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import PhotoIcon from "../../assets/images/icon-img-btn.svg";

const ChatFooter = ({ message, setMessage, handleSend }) => {
  // const handleSend = async () => {
  //   console.log(message);
  //   setMessage(""); // 메시지 전송 후 입력 필드를 초기화합니다.
  // };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //엔터키 누르면 메시지 전송
      e.preventDefault(); //개행 방지
      handleSend();
    }
  };
  return (
    <Container>
      <ImageUpload>
        <img src={PhotoIcon} />
        <input type="file" />
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
`;

const SendButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #006cd8;
  color: white;
  margin-right: 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #00478e;
  }
`;
