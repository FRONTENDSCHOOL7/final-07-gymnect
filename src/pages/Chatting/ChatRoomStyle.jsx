import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #f2f2f2;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.h2`
  display: none;
`;

// export const ChatBody = styled.div`
//   flex: 1;
//   padding: 20px;
//   overflow-y: auto; // 메시지가 많아져서 넘치면 스크롤바 생성
// `;

// export const Message = styled.div`
//   max-width: 60%;
//   padding: 10px;
//   margin: 10px;
//   border-radius: 12px;
//   background-color: ${(props) =>
//     props.type === "received" ? "#eee" : "#006cd8"};
//   align-self: ${(props) =>
//     props.type === "received" ? "flex-start" : "flex-end"};
//   color: ${(props) => (props.type === "received" ? "black" : "white")};
// `;
export const Main = styled.main`
  display: flex;
  flex-direction: column-reverse; // 메시지가 위에서부터 쌓이도록 설정
  justify-content: flex-end;
  position: relative;
  /* /height: 10vh; */
  overflow-y: auto;
  padding: 1rem 1.6rem;
`;

export const Message = styled.div`
  margin: 10px 0;
  background-color: #e0e0e0;
  padding: 8px 10px;
  border-radius: 10px;
  width: fit-content;
`;
export const Chat = styled.li`
  display: flex;
  flex-direction: column;
  color: #fff;
  &.chat-mine {
    align-items: flex-end;
  }
  &.chat-yours {
    justify-content: flex-start;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

export const ChatBox = styled.p`
  padding: 1.2rem;
  border: #425db3;
  box-sizing: border-box;
  font-size: 1.4rem;
`;

export const From = styled(ChatBox)`
  width: 24rem;
  margin: 0 0.6rem 1rem 1.2rem;
  background-color: #fff;
  color: #000000;
  border-radius: 0 1rem 0 1rem;
`;

export const To = styled.p`
  padding: 1.2rem;
  margin-bottom: 1rem;
  //width: 12rem;
  background-color: #006cd8;
  color: #fff;
  border-radius: 1rem 0 1rem 1rem;
  font-size: 1.4rem;
`;

export const Time = styled.p`
  margin: 0 0.6rem 1rem 0;
  margin-top: auto;
  color: #969696;
  font-size: 1rem;
`;

export const Img = styled.img`
  width: 24rem;
  height: 24rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;
