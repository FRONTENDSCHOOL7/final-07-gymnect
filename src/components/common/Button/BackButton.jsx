import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/images/icon-backspace.svg";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
