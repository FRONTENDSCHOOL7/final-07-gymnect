import React from "react";
import { Background, Section, Container, Button } from "./PostModalStyle";

export default function Modal({ toggleModal }) {
  // 모달 외부 클릭 핸들러
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  // 모달 내부 클릭 핸들러 (이벤트 버블링 중단)
  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Background onClick={handleOutsideClick} />
      <Section onClick={handleInsideClick}>
        <Container>
          <Button>삭제</Button>
          <Button>수정</Button>
        </Container>
      </Section>
    </>
  );
}
