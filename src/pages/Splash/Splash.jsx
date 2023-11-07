import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backLogo from "../../assets/images/title-gymnect-background.svg";
import mainLogo from "../../assets/images/짐넥.svg";
import styled, { keyframes } from "styled-components";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // 3초 후에 버튼 보여주기
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    // 컴포넌트 언마운트 시 타이머 해제
    return () => clearTimeout(timer);
  });

  const ThunderIcon = () => (
    <svg
      width="23"
      height="14"
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2465 6.91081C22.2529 6.77437 22.2421 6.65325 22.2257 6.5542C22.1932 6.35715 22.0474 6.21187 21.8746 6.12931L9.21231 0.079113C8.68568 -0.172516 8.07592 0.206237 8.06832 0.789708L7.99725 6.24402L0.680732 6.14418C0.349129 6.13966 0.0179627 6.34467 0.0018393 6.69186C-0.0044969 6.8283 0.00629203 6.94942 0.0226484 7.04847C0.0551873 7.24552 0.200923 7.3908 0.373713 7.47336L13.0361 13.5236C13.5627 13.7752 14.1724 13.3965 14.18 12.813L14.2511 7.35867L21.5676 7.45849C21.8992 7.46301 22.2304 7.258 22.2465 6.91081Z"
      />
    </svg>
  );

  return (
    <Container>
      <TitleDiv>
        <Title>
          <MainLogo src={mainLogo} alt="짐넥 로고" />
          <BackLogo src={backLogo} alt="아령 로고" />
          <ThunderDiv>
            <ThunderIcon />
          </ThunderDiv>
        </Title>
        <SubTitle>운동과 일상을 연결 하다</SubTitle>
      </TitleDiv>
      <FooterDiv>GYM-NECT</FooterDiv>
    </Container>
  );
}

export const Container = styled.div`
  background-color: #006cd8;
  width: 100%;
  min-height: 100vh; // 높이를 최소한으로 설정
`;

export const TitleDiv = styled.div`
  margin-top: 270px;
`;

export const Title = styled.h1`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainLogo = styled.img`
  width: 105px;
  aspect-ratio: 2/1;
  z-index: 5;
`;

export const BackLogo = styled.img`
  position: absolute;
  width: 262px;
  height: 149px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const SubTitle = styled.p`
  margin-top: 8px;
  position: relative;
  text-align: center;
  color: white;
  font-size: 9.5px;
  z-index: 2;
`;

const lightUp = keyframes`
  0%, 10% {
    fill: #0060BF;
  }
  12.5% {
    fill: #FFC107;
  }
  17.5%, 27.5% {
    fill: #0060BF;
  }
  30%, 35% {
    fill: #FFC107;
  }
  40%, 50% {
    fill: #0060BF;
  }
  100% {
    fill: #FFC107;
  }
`;

const ThunderDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showButton"
})`
  position: absolute;
  width: 22px;
  top: 76%;
  right: 51.5%;
  transform: translate(-50%, -50%);
  z-index: 10;

  & > svg > path {
    animation: ${lightUp} 3s forwards 1;
  }
`;

export const FooterDiv = styled.p`
  position: absolute;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 9.5px;
`;
