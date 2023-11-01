import React from "react";
import {
  Background,
  Section,
  Container,
  Button
} from "./DeleteCommentModalStyle";

export default function DeleteCommentModal({ isOpen, actions, text }) {
  if (!isOpen) return null;

  return (
    <>
      <Background />
      <Section>
        <Container>
          {actions.map((action, index) => (
            <Button key={index} onClick={action}>
              {text[index]}
            </Button>
          ))}
        </Container>
      </Section>
    </>
  );
}
