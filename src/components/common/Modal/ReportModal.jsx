import React from 'react';
import { Background, Section, Container, Button } from './PostModalStyle';

export default function ReportModal({ isOpen, onReport }) {
  if (!isOpen) return null;

  return (
    <>
      <Background />
      <Section>
        <Container>
          <Button onClick={onReport}>유저 신고하기</Button>
        </Container>
      </Section>
    </>
  );
}