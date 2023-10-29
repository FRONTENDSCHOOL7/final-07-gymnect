import React from "react";
import { Button } from "./ButtonContainerStyle";

export default function ButtonContainer({
  children,
  type,
  color,
  bgColor = "#006CD8",
  width,
  height,
  disabled = false,
  onClick,
  border,
  fontSize
}) {
  return (
    <Button
      type={type || "button"}
      $color={color}
      $bgColor={bgColor}
      $width={width}
      $height={height}
      $disabled={disabled}
      onClick={onClick}
      $border={border}
      $fontSize={fontSize}>
      {children}
    </Button>
  );
}
