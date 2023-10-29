import React from 'react';
import { Background, Section, Container, Button } from './PostModalStyle';

export default function Modal() {

  return (
    <>
        <Background />
        <Section>
            <Container>
              <Button>삭제</Button>
              <Button>수정</Button>
            </Container>
        </Section>
    </>
  )
}
