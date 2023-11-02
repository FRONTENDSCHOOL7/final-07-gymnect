import React from "react";
import {
  Container,
  Section,
  Message,
  Button,
  ButtonContainer
} from "./LogoutAlertStyle";

function ReportAlert({ handleLogout, closeAlert }) {
  return (
    <Container>
      <Section>
        <Message>로그아웃 하시겠어요?</Message>
        <ButtonContainer>
          <Button onClick={closeAlert}>취소</Button>
          <Button onClick={handleLogout}>로그아웃</Button>
        </ButtonContainer>
      </Section>
    </Container>
  );
}

export default ReportAlert;
