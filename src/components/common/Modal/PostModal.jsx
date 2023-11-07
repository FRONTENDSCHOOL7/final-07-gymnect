import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { Background, Section, Container, Button } from "./PostModalStyle";
import ReportAlert from "../Alert/LogoutAlert";

export default function Modal({ handleLogout, toggleModal }) {
  const [isAlertVisible, setAlertVisible] = useState(false);
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

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

  const goToProfileEdit = () => {
    navigate(`/profile/${userInfo.account}/edit`); // 여기에 userInfo의 account를 사용하여 경로를 설정합니다.
  };

  return (
    <>
      {isAlertVisible && (
        <ReportAlert
          handleLogout={handleLogout}
          closeAlert={closeAlertAndModal}
        />
      )}
      <Background onClick={handleOutsideClick} />
      <Section onClick={handleInsideClick}>
        <Container>
          <Button onClick={goToProfileEdit}>설정 및 개인정보</Button>
          <Button onClick={showAlert}>로그아웃</Button>
        </Container>
      </Section>
    </>
  );
}
