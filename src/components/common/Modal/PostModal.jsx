import React, { useState } from "react";
import { Background, Section, Container, Button } from "./PostModalStyle";
import ReportAlert from "../Alert/LogoutAlert";

export default function Modal({ handleLogout, toggleModal }) {
  const [isAlertVisible, setAlertVisible] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  const handleInsideClick = (e) => {
    e.stopPropagation();
  };

  const showAlert = () => {
    setAlertVisible(true);
  };
  
  const closeAlertAndModal = () => {
    setAlertVisible(false);
    toggleModal();
  };

  return (
    <>
      {isAlertVisible && (
        <ReportAlert handleLogout={handleLogout} closeAlert={closeAlertAndModal} />
      )}
      <Background onClick={handleOutsideClick} />
      <Section onClick={handleInsideClick}>
        <Container>
          <Button>설정 및 개인정보</Button>
          <Button onClick={showAlert}>로그아웃</Button>
        </Container>
      </Section>
    </>
  );
}
