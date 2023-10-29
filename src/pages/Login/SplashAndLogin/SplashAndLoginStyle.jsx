import styled from "styled-components";

export const Container = styled.div`
  background-color: #006cd8;
  width: 100%;
  min-height: 100vh;
  position: relative;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  // Animation for login modal
  & > div:nth-child(2) {
    opacity: 0;
    transform: translateY(100%); // Start from bottom

    animation: slideUp 0.5s forwards 0.5s;

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(-50%);
      }
    }
  }
`;
