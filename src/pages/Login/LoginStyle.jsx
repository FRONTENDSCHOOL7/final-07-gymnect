import styled, { keyframes } from "styled-components";

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(270px);
  }
  100% {
    transform: translateY(100px);
  }
`;

const BackOpacity = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;

export const Container = styled.div`
  background-color: #006cd8;
  width: 100%;
  min-height: 100vh;
`;

export const TitleDiv = styled.div`
  animation: ${slideUpAnimation} 0.7s ease-in-out forwards;
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
  animation: ${BackOpacity} 0.7s ease-in-out forwards;
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

export const ThunderDiv = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "showButton"
})`
  position: absolute;
  width: 22px;
  top: 76%;
  right: 51.5%;
  transform: translate(-50%, -50%);
  z-index: 10;

  & > svg > path {
    animation: ${lightUp} forwards 1;
  }
`;
