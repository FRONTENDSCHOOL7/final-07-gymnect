import React from "react";
import {
  Container,
  Section,
  Message,
  Button,
  ButtonContainer
} from "./ReportAlertStyle";

function ReportAlert({ handleShowAlert, closeAlert }) {
  return (
    <Container>
      <Section>
        <Message>신고 하시겠어요?</Message>
        <ButtonContainer>
          <Button onClick={closeAlert}>취소</Button>
          <Button onClick={handleShowAlert}>네</Button>
        </ButtonContainer>
      </Section>
    </Container>
  );
}

export default ReportAlert;
