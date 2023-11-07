import styled from "styled-components";
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

export const ImageSection = styled.section``;

export const Label = styled.label`
  display: block;
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
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
  width: 100%;
  height: 100%;
  border-radius: 50%;
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
  color: #eb5757;
`;
