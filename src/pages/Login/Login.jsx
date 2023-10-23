import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { loginAtom } from '../../atoms/LoginAtom';
import { userInfoAtom } from '../../atoms/UserAtom';
import { postUserLogin } from '../../api/auth';
import Input from '../../components/common/Input/Input';
import ButtonContainer from '../../components/common/Button/ButtonContainer';
import {
  Container,
  Title,
  Form,
  Section,
  SignupLink,
  ErrorMessage,
} from './LoginStyle';

export default function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [pw,setPw] = useState('');
  const [emailValid,setEmailValid] = useState(false);//email 유효한지 확인하는 state
  const [pwValid,setPwValid] = useState(false);//pw 유효한지 확인하는 state
  const [isComplete, setIsComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [hasError, setHasError] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);
  
  /*이메일 유효성 검사*/
  const handleEmail = (e)=>{
    setEmail(e.target.value); //target은 event가 발생한 DOM요소
    setErrorMsg('');
    setHasError(false);
  }
  /* 비밀번호 유효성 검사 */
  const handlePw = (e)=>{
    setPw(e.target.value);
    setErrorMsg('');
    setHasError(false);
  }

  /* 로그인 요청을 보내고 결과 반환 */
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = await postUserLogin(email, pw);
    console.log(loginData);
    if (loginData.status === 422) {
      setErrorMsg('*이메일 또는 비밀번호가 일치하지 않습니다 🥲');
      setHasError(true);
      setIsComplete(false);
    } else {
      localStorage.setItem('token', loginData.user.token);
      setUserInfo({
        ...userInfo,
        account: loginData.user.accountname,
        profileImg: loginData.user.image,
        username: loginData.user.username,
        intro: loginData.user.intro,
      })
      setIsComplete(!isComplete);
      setLogin(true);
      navigate('/home', {
        state: {
          token: loginData.user.token,
        },
      });
    }
  };

    /* 버튼 활성화 */
  const handleActivateButton = () => {
    return email !== '' && pw !== '';
  };


  return (
    <Container>
      <Title>로그인</Title>
      <Form onSubmit={handleLogin}>
        <Section>
          <Input
            label="이메일"
            placeholder="이메일 주소를 입력해주세요"
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            required
            hasError={hasError}
          />
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            value={pw}
            onChange={handlePw}
            required
            hasError={hasError}
          />
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Section>
        <ButtonContainer
          type={'L'}
          text={'로그인'}
          isDisabled={!handleActivateButton()}
        />
      </Form>
      <SignupLink to="/signup">이메일로 회원가입</SignupLink>
    </Container>
  );
}
