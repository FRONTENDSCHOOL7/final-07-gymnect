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

  /* &:hover {
    border-color: transparent #e45635 transparent #e45635;
  } */
`;

const LoadingContainer = styled.div`
  height: 100px;
  position: relative;
  width: 100px;
  border-radius: 100%;
  margin: 300px auto;
  /* &:hover ${LoadingCircle} {
    border-color: transparent #e45635 transparent #e45635;
  } */
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
  //z-index: 1; // z-index 추가
`;
