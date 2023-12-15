import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  margin: 0 auto;
  min-height: 100%;
`;

export const Title = styled.h1`
  padding-top: 30px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  padding-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  color: #eb5757;
`;

export const SuccessMessage = styled.p`
  margin-top: 6px;
  color: blue;
`;
/*회원가입,비번찾기 링크버튼 컨테이너*/
export const LinkContainer = styled.div`
  text-align: center;
  padding-top: 1.9rem;
  color: #767676;
`;
/*회원가입 이동 버튼*/
export const SignupLink = styled(Link)`
  display: block;
  padding-top: 1.9rem;
  margin: auto;
  color: #767676;
`;
/*SNS로그인 버튼*/
export const SnsButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 32rem;
  height: 4.4rem;
  padding: 1rem;
  border-radius: 4.4rem;
  font-size: 14px;
  margin-top: 1rem;
  color: #767676;
  svg {
    margin-left: 1rem;
    margin-right: 5rem;
  }
`;
/*SNS로그인 섹션*/
export const LoginSection = styled.section`
  .kakao-login {
    border: 0.1rem solid #f2c94c;
  }

  .google-login {
    border: 0.1rem solid;
  }

  .facebook-login {
    margin-bottom: 2rem;
    border: 0.1rem solid #2d9cdb;
  }
`;

export const ToggleFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const ToggleText = styled.p`
  font-size: 12px;
  color: #767676;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 37px;
  height: 21px;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ToggleSlider} {
    background-color: #006cd8;
  }

  &:focus + ${ToggleSlider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${ToggleSlider}:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }
`;
