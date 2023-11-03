// 영우님 작업
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loginAtom } from "../../atoms/LoginAtom";
import { userInfoAtom } from "../../atoms/UserAtom";
import { postUserLogin } from "../../api/auth";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/ButtonContainer";
import GlobalSprite from "../../assets/sprite/GlobalSprite";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  Form,
  Section,
  LinkContainer,
  ErrorMessage,
  LoginSection,
  SnsButton
} from "./LoginFormStyle";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [emailValid, setEmailValid] = useState(false); //email 유효한지 확인하는 state
  const [pwValid, setPwValid] = useState(false); //pw 유효한지 확인하는 state
  const [errorMsg, setErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState(""); // 이메일 오류 메시지
  const [pwErrorMsg, setPwErrorMsg] = useState(""); //비밀번호 오류 메시지
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const setLogin = useSetRecoilState(loginAtom);

  /*이메일 유효성 검사*/
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput); //target은 event가 발생한 DOM요소
    if (emailInput.length === 0) {
      //input이 아무것도 없을경우
      setEmailValid(false);
      setEmailErrorMsg("");
    } else {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValid = emailPattern.test(e.target.value);
      setEmailValid(isValid);
      setEmailErrorMsg(isValid ? "" : "*이메일의 형식이 올바르지 않습니다 😥");
    }
    // 입력 필드가 수정되면 전역 에러 메시지를 초기화
    setErrorMsg("");
  };
  /* 비밀번호 유효성 검사 */
  const handlePw = (e) => {
    const pwInput = e.target.value;
    setPw(pwInput); //target은 event가 발생한 DOM요소
    if (pwInput.length === 0) {
      //input이 아무것도 없을경우
      setPwValid(false);
      setPwErrorMsg("");
    } else {
      const pwPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/; // 예: 비밀번호 길이가 6 이상
      const isValid = pwPattern.test(e.target.value);
      setPwValid(isValid);
      setPwErrorMsg(
        isValid ? "" : "*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요."
      );
    }
    // 입력 필드가 수정되면 전역 에러 메시지를 초기화
    setErrorMsg("");
  };

  /* 로그인 요청을 보내고 결과 반환 */
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!emailValid || !pwValid) {
      setErrorMsg("*이메일 또는 비밀번호 형식이 올바르지 않습니다");
      return;
    }

    const loginData = await postUserLogin(email, pw);
    console.log(loginData);
    if (loginData.status === 422) {
      setErrorMsg("*이메일 또는 비밀번호가 일치하지 않습니다");
    } else {
      setUserInfo({
        ...userInfo,
        account: loginData.user.accountname,
        profileImg: loginData.user.image,
        username: loginData.user.username,
        intro: loginData.user.intro
      });
      setLogin(true);
      localStorage.setItem("token", loginData.user.token);
      navigate("/home", {
        state: {
          token: loginData.user.token
        }
      });
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return emailValid && pwValid;
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
          />
          {emailErrorMsg && <ErrorMessage>{emailErrorMsg}</ErrorMessage>}
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            value={pw}
            onChange={handlePw}
            required
          />
          {pwErrorMsg && <ErrorMessage>{pwErrorMsg}</ErrorMessage>}
          {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </Section>

        <LoginSection>
          <Button
            width="322px"
            type="submit"
            disabled={!handleActivateButton()}>
            로그인
          </Button>
          <SnsButton to="kakao" className="kakao-login">
            <GlobalSprite id="message-circle" />
            {/*카카오톡 로고*/}
            카카오톡 계정으로 로그인
          </SnsButton>
          <SnsButton to="google" className="google-login">
            <GlobalSprite id="google-g-logo-1" />
            구글 계정으로 로그인
          </SnsButton>
          <SnsButton to="facebook" className="facebook-login">
            <GlobalSprite id="facebook" />
            페이스북 계정으로 로그인
          </SnsButton>
          <LinkContainer>
            <Link to="/signup">이메일로 회원가입 </Link> |{" "}
            <Link to="/findPw">비밀번호 찾기</Link>
          </LinkContainer>
        </LoginSection>
      </Form>
    </Container>
  );
}
