import React from "react";
import styled from "styled-components";
import BackButton from "../common/Button/BackButton";

const SearchNav = ({ value, onChange }) => {
  return (
    <Container>
      <BackButton />
      <Form>
        <Input
          type="text"
          placeholder="계정 검색"
          value={value}
          onChange={onChange}
        />
      </Form>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  height: 48px;
  z-index: 999;
  background-color: #006cd8;
  padding: 0 12px;
`;

const Form = styled.form`
  padding: 0.7rem;
  margin-right: 1.9rem;
`;

const Input = styled.input`
  width: 31rem;
  height: 3.2rem;
  border: none;
  background-color: white;
  color: #000000;
  border-radius: 3.2rem;
  padding-left: 1.6rem;

  &::placeholder {
    color: #d9d9d9;
  }

  &:focus {
    outline: none;
  }
`;

export default SearchNav;
