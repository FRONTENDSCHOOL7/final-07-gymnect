import React from "react";
import {
  Background,
  Section,
  Container,
  Button
} from "./DeleteCommentModalStyle";

export default function Modal({ isOpen, onDelete }) {
  if (!isOpen) return null;

  return (
    <>
      <Background />
      <Section>
        <Container>
          <Button onClick={onDelete}>삭제</Button>
        </Container>
      </Section>
    </>
  );
}
