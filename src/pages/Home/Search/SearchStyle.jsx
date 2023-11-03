import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  overflow-x: hidden;
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
export const Main = styled.div`
  height: 100%;
  margin-top: 2rem;
  margin-left: 1.6rem;
`;
export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 30vh;
  margin-right: 1vh;
`;
export const LogoImage = styled.img`
  width: 97.61px;
  height: 95.112px;
`;
export const Text = styled.p`
  font-size: 1.4rem;
  color: #767676;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 1.2rem;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  background-color: #fff;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export const UserName = styled.p`
  margin-bottom: 0.6rem;
  font-size: 14px;
`;
export const NickName = styled.p`
  font-size: 10px;
  color: #767676;
`;
