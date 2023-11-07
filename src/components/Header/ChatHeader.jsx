import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import BackButton from "../common/Button/BackButton";
import { ReactComponent as MoreIcon } from "../../assets/images/icon-more.svg";

const ChatHeader = ({ toggleModal }) => {
  const { username } = useParams();
  return (
    <Container>
      <BackButton />
      <ChatUserName>{username}</ChatUserName>
      <button onClick={toggleModal}>
        <MoreIcon />
      </button>
    </Container>
  );
};
export default ChatHeader;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 48px;
  z-index: 999; //요소가 화면 맨앞에 나오도록
  background-color: #006cd8;
  padding: 0 12px;
`;
const ChatUserName = styled.span`
  position: absolute;
  left: 48px;
  font-size: 15px;
  color: #fff;
  line-height: 80%;
  margin-bottom: 3px;
`;
