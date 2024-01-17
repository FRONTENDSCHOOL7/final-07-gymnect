import React from "react";
import { Container, ButtonContainer, Button } from "./IconPostModalStyle";

const IconPostModal = ({
  text,
  onButtonClick,
  setShowAlert,
  setTempFunc,
  setMessage
}) => {
  const handleClick = () => {
    setShowAlert(true);
    setTempFunc(() => onButtonClick);
    setMessage(text);
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          <Button onClick={handleClick}>{text}</Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default IconPostModal;
