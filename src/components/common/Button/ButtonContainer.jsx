import React from "react";
import { Button } from "./ButtonContainerStyle";

export default function ButtonContainer({
  children,
  type,
  color,
  bgColor,
  width,
  height,
  disabled = false,
  onClick
}) {
  return (
    <Button
      type={type || "button"}
      color={color}
      bgColor={bgColor}
      width={width}
      height={height}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  );
}
