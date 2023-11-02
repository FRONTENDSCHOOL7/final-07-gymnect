import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 60px;
`;

export const Wrap = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 16px;
  top: 0;
  z-index: 10;
`;

export const FlexIconImg = styled.img`
  width: 26px;
  cursor: pointer;
  margin-left: 16px;
  ${({ active }) =>
    active &&
    css`
      filter: none;
    `}
`;

export const GridIconImg = styled(FlexIconImg)`
  margin-left: 16px;
  margin-right: -16px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const GridItem = styled.div`
  position: relative;
  width: 114px;
  height: 114px;
  background-color: #e0e0e0;
  overflow: hidden;
  border-radius: 14px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SVGIcon = styled.img`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 20px;
  height: 20px;
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 114px);
  position: relative;
`;
