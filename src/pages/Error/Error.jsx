import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/ButtonContainer";
import ErrorLogo from "../../assets/images/error-logo.svg.svg";
import styled from "styled-components";

export default function Error() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <LogoSection>
        <LogoImage src={ErrorLogo} />
        <Text1>404</Text1>
        <Text2>페이지를 찾을 수 없습니다.</Text2>
        <Button onClick={goBack}>이전 페이지</Button>
      </LogoSection>
    </Container>
  );
}

export const Container = styled.div``;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  margin-top: 30vh;
  margin-right: 1vh;
`;

export const Text1 = styled.p`
  font-weight: 700;
  color: #006cd8;
  font-size: 30px;
  margin-bottom: 11px;
`;

export const Text2 = styled.p`
  color: #767676;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 11px;
`;

export const LogoImage = styled.img`
  width: 121.526px;
  height: 90px;
  margin-left: -14px;
`;
