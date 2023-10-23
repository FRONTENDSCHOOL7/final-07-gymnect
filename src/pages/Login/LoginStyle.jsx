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
export const SignupLink = styled.div`
  display: block;
  padding-top: 1.9rem;
  //color: ${({ theme }) => theme.colors.textColor};
  //font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
`;
