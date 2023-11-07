import React from "react";
import { Container, Label, Text } from "./InputStyle";

const Input = ({
  label,
  type,
  id,
  placeholder,
  onChange,
  onBlur,
  name,
  value,
  hasError,
  errorText,
  shake
}) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <Text
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        hasError={hasError} // 에러 발생 여부 prop 전달
        errorText={errorText}
        shake={shake}
      />
      {errorText && <div>{errorText}</div>}
    </Container>
  );
};

export default Input;
