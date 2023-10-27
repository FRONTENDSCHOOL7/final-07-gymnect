import styled from "styled-components";

export const TopContainer = styled.div`
  margin: 15px auto 11px auto;
`;

export const BottomContainer = styled.div`
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

export const Form = styled.form`
  background-color: white;
  display: flex;
  position: fixed;
  bottom: 0;
  width: 39rem;
  height: 61px;
  padding: 0 16px;
  border-top: 1px solid #d9d9d9;
`;

export const CommentInput = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  margin-right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
`;

export const Input = styled.input`
  width: 270px;
  margin-right: 10px;
  border: none;
  outline: none;
  font-size: 14px;

  &::placeholder {
    color: #c4c4c4;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  color: #c4c4c4;
`;
