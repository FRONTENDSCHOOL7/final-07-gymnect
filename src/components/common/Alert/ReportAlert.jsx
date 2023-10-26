import React from 'react';
import { Container, Section, Message, Button, ButtonContainer } from './ReportAlertStyle'; 

function ReportAlert() {
  return (
    <Container>
      <Section>
        <Message>신고 하시겠어요?</Message>
        <ButtonContainer>
          <Button>취소</Button>
          <Button>네</Button>
        </ButtonContainer>
      </Section>
    </Container>
  );
}

export default ReportAlert;
