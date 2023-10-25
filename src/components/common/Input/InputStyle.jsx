import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 322px;
  margin-top: 16px;
`;

export const Label = styled.label`
  font-size: 12px;
  margin-bottom: 6px;
  color: #767676;
`;

export const Text = styled.input`
  padding: 8px 0;
  border-bottom: solid 1px rgba(219, 219, 219, 1);
  font-size: 14px;
  outline: none;

  &:focus {
    border-bottom: 1px solid #006cd8;
  }

  &::placeholder {
    font-size: 14px;
    color: rgba(219, 219, 219, 1);
  }
`;
