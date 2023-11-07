import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingCircle></LoadingCircle>
      <LoadingText>LOADING</LoadingText>
    </LoadingContainer>
  );
};
export default Loading;

const rotateLoading = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const loadingTextOpacity = keyframes`
    0%, 5% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const LoadingCircle = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;
  border: 3px solid transparent;
  border-color: transparent #006cd8 transparent #006cd8;
  animation: ${rotateLoading} 1s linear infinite;
  transform-origin: 50% 50%;
  transition: all 0.5s ease-in-out;
`;

const LoadingContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100%;
  position: absolute; // 상위 요소에 대한 절대 위치 지정
  top: 45%; // 상위 요소의 중앙에 위치
  left: 50%; // 상위 요소의 중앙에 위치
  transform: translate(-50%, -50%); // 요소 자신의 크기에 따라 중앙으로 이동
  // 기존 스타일
  margin: 0 auto; // margin-top과 margin-bottom을 0으로 설정
`;

const LoadingText = styled.div`
  animation: ${loadingTextOpacity} 0.5s linear infinite;
  color: #006cd8;
  font-family: "Helvetica Neue, Helvetica, arial";
  font-size: 10px;
  font-weight: bold;
  margin-top: 45px;
  opacity: 0; // 기본 opacity 값을 1로 변경
  position: absolute;
  text-align: center;
  text-transform: uppercase;
  top: 0;
  width: 100px;
`;
