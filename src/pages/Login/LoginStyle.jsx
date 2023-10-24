import styled from "styled-components";
//import { Link } from 'react-router-dom';

export const Container = styled.main`
  margin: 0 auto;
`;

export const Title = styled.h1`
  padding-top: 30px;
  padding-bottom: 24px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;
export const Form = styled.form`
`;
export const Section = styled.div`
  padding-bottom: 30px;
`;

export const ErrorMessage = styled.p`
  margin-top: 6px;
  color: rgba(235, 87, 87, 1);
`;

export const SuccessMessage = styled.p`
  margin-top: 6px;
  color: blue;
`;
export const SignupLink = styled.button`
  display: block;
  padding-top: 1.9rem;
  margin:auto;
  color: #767676;
`;

/*SNS로그인 버튼*/
export const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 32rem;
  height: 4.4rem;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #767676;
  border-radius: 4.4rem;
  font-size: 14px;
  svg {
    margin-left: 1rem;
    margin-right: 5rem;
  }

  &:nth-child(2) {
    svg {
    margin-right: 6.3rem;
    }
  }
`
/*SNS로그인 섹션*/
export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 39rem;
  height: 30rem;
  padding: 5rem 3.4rem;
  background-color: #ffffff;
  border-top-left-radius: 5rem;
  border-top-right-radius: 2rem;

  .kakao-login {
      border: 0.1rem solid #F2C94C;
    }

  .google-login {
      border: 0.1rem solid ;
    }

  .facebook-login {
      margin-bottom: 2rem;
      border: 0.1rem solid #2D9CDB;
    }
`