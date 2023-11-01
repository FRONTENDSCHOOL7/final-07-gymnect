import styled from "styled-components";
import AddImg from "../../assets/images/icon-img-btn.svg";

export const Container = styled.main`
  margin: 0 auto;

  .spriteImg-wrapper {
    position: absolute;
    bottom: 0;
  }

  .upload-button {
    position: absolute;
    left: 0;
  }
`;

export const ImageSection = styled.section``;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 3.5rem auto 5.5rem;
  background-color: white;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 3.6em;
    height: 3.6rem;
    background: url(${AddImg}) no-repeat center / 3.6rem 3.6rem;
    z-index: 2;
  }
`;

export const Form = styled.form`
  &:last-child {
    margin-bottom: 30px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  width: 110px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const ImageInput = styled.input`
  width: 1px;
  height: 1px;
  position: absolute;
  z-index: -1000rem;
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: rgba(235, 87, 87, 1);
  align-self: flex-start;
`;
