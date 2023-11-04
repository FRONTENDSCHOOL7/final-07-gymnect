import React, { useState } from "react";
import { Background, Section, Container, Button } from "./ReportModalStyle";
import ReportAlert from "../Alert/ReportAlert";

export default function Modal({ handleShowAlert, toggleModal }) {
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

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
    {isAlertVisible && (
      <ReportAlert handleShowAlert={handleShowAlert} closeAlert={closeAlert} />
      )}
      <Background onClick={handleOutsideClick} />
      <Section onClick={handleInsideClick}>
        <Container>
          <Button onClick={showAlert}>유저 신고하기</Button>
        </Container>
      </Section>
    </>
  );
}