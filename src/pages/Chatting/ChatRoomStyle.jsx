import styled from "styled-components";

export const Container = styled.div``;

export const Main = styled.main`
  flex-direction: column-reverse; // 메시지가 위에서부터 쌓이도록 설정
  justify-content: flex-end;
  position: relative;
  padding: 1rem 0.8rem 0;

  background-color: #f2f2f2;
  height: calc(100vh - 104px);
  overflow: auto; //컨텐츠 넘치면 자동으로 스크롤바 생기면서 확장

  &::-webkit-scrollbar {
    width: 7px; // 스크롤바 너비
  }

  &::-webkit-scrollbar-thumb {
    background: #bfbfbf; // 스크롤바 색상
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888; // 여기에 원하는 hover 시의 색상을 지정하세요
  }
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
  margin-top: 3px;
  width: 40px;
  height: 40px;
  border-radius: 50%; //원형으로 만듬
  border: 1px solid #d9d9d9;
  background-color: #fff;
`;

export const From = styled.p`
  padding: 1.2rem;
  font-size: 1.4rem;
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
