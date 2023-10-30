import React from "react";
import { Background, Section, Container, Button } from "./PostModalStyle";

export default function Modal({ handleLogout }) {
  return (
    <>
      <Background />
      <Section>
        <Container>
          <Button>설정 및 개인정보</Button>
          <Button onClick={handleLogout}>로그아웃</Button>
        </Container>
      </Section>
    </>
  );
}
