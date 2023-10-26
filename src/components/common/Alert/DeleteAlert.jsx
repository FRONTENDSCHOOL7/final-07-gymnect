import React from 'react';
import { Container, Section, Message, Button, ButtonContainer } from './DeleteAlertStyle'; 

function DeleteAlert() {
  return (
    <Container>
      <Section>
        <Message>게시글을 삭제할까요?</Message>
        <ButtonContainer>
          <Button>취소</Button>
          <Button>삭제</Button>
        </ButtonContainer>
      </Section>
    </Container>
  );
}

export default DeleteAlert;
