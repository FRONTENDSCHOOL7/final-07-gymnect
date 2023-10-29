import styled from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainWrap = styled.main`
  padding: 0 16px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin: 9px 0 25px 0;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FlexIconImg = styled.img`
  width: 26px;
`;

export const GridIconImg = styled.img`
  width: 26px;
`;
