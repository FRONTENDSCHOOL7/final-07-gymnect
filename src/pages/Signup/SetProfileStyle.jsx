import styled, { css } from "styled-components";
import AddImg from "../../assets/images/icon-img-btn.svg";

export const Container = styled.main`
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding-top: 30px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;

export const SubTitle = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  color: #767676;
  text-align: center;
  font-weight: 400;
`;

export const Header = styled.header``;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 11rem;
  height: 11rem;
  margin: 0 auto;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    background: url(${AddImg}) no-repeat center;
    z-index: 10;
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  top: 18px;
  right: 12px;

  width: 90%;
  height: 90%;
  object-fit: cover;
`;

export const ImgInput = styled.input`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const Section = styled.div`
  padding-top: 14px;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: rgba(235, 87, 87, 1);
`;
