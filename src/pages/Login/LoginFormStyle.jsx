import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  margin: 0 auto;
  width: 39rem;
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
  padding-bottom: 30px;
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
