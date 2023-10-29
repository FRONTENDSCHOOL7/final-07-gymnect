import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  /* background-color: #f2f2f2;
  background-attachment: fixed; // 배경화면 고정
  flex-direction: column;
  height: 100vh;
  overflow-y: auto; */
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
  //display: flex;
  flex-direction: column-reverse; // 메시지가 위에서부터 쌓이도록 설정
  justify-content: flex-end;
  position: relative;
  /* /height: 10vh; */
  //overflow-y: auto;
  padding: 1rem 0.8rem;

  background-color: #f2f2f2;
  //background-attachment: fixed; // 배경화면 고정
  //flex-direction: column;
  height: 89.1vh;
  overflow: auto;

  // 크롬, 엣지 브라우저용 스크롤바 스타일
  &::-webkit-scrollbar {
    width: 8px; // 스크롤바 너비
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d2d2d2; // 스크롤바 색상
    border-radius: 4px; // 스크롤바 모서리 둥글게
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; // 스크롤바 배경색
  }
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
    flex-direction: row;
    justify-content: flex-end;
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
  max-width: 21rem;
  margin: 0 0.6rem 1rem;
  background-color: #fff;
  color: #000000;
  border-radius: 0 1rem 1rem 1rem;
`;

export const To = styled.p`
  padding: 1.2rem;
  margin-bottom: 1rem;
  max-width: 21rem;
  background-color: #006cd8;
  color: #fff;
  border-radius: 1rem 0 1rem 1rem;
  font-size: 1.4rem;
`;

export const Time = styled.span`
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
