import React from "react";
import { useRecoilValue } from "recoil";
import ChatHeader from "../../components/Header/ChatHeader";

import {
  Container,
  Main,
  Title,
  List,
  Chat,
  Image,
  From,
  To,
  Time,
  Img
} from "./ChatRoomStyle";

const ChatRoom = () => {
  return (
    <Container>
      <ChatHeader />
      <h2>채팅방</h2>
    </Container>
  );
};
export default ChatRoom;
