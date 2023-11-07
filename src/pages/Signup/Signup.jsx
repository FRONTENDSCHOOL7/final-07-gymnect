import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postEmailDuplicate } from "../../api/auth";
import Button from "../../components/common/Button/ButtonContainer";
import Input from "../../components/common/Input/Input";
import {
  Container,
  Title,
  Section,
  ErrorMessage,
  SuccessMessage
} from "./SignupStyle";

const Signup = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState(""); //이메일에러
  const [emailSuccessMsg, setEmailSuccessMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(""); //비번에러
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordCheckValid, setPasswordCheckValid] = useState(false);
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [passwordCheckErrorMsg, setPasswordCheckErrorMsg] = useState("");
  const [passwordCheckSuccessMsg, setPasswordCheckSuccessMsg] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  /* 이메일 유효성 검사 */
  const handleInputEmail = async (e) => {
    const userEmail = e.target.value;
    if (userEmail === "") {
      setEmailErrorMsg("*입력해주세요");
      setEmailSuccessMsg("");
    } else if (!emailRegex.test(userEmail)) {
      setEmailErrorMsg("*이메일의 형식이 올바르지 않습니다 😥");
      setEmailSuccessMsg("");
    } else {
      setEmailValid(true);
      setEmailErrorMsg("");
      setUserEmail(userEmail);
    }
  };
  /* 중복된 이메일 확인 */
  /* onBlur event로 설정되어 있어서 input에서 포커스가 벗어날 때 호출됩니다. */
  const handleEmailDuplicate = async (e) => {
    const userEmail = e.target.value;
    if (emailRegex.test(userEmail)) {
      try {
        const checkEmail = await postEmailDuplicate(e.target.value);
        if (checkEmail.message === "이미 가입된 이메일 주소 입니다.") {
          setEmailErrorMsg("*이미 가입된 이메일 주소 입니다");
          setEmailValid(false); // 유효하지 않음을 표시
        } else if (checkEmail.message === "사용 가능한 이메일 입니다.") {
          setEmailValid(true);
          setEmailErrorMsg("");
          setEmailSuccessMsg("사용 가능한 이메일 입니다.");
        }
      } catch (error) {
        console.log("이메일 중복검사를 실패했습니다:", error);
      }
    } else {
      setEmailErrorMsg("*이메일의 형식이 올바르지 않습니다 😥");
      setEmailValid(false); // 유효하지 않음을 표시
    }
  };

  /* 비밀번호 유효성 검사 */
  /* 사용자가 비밀번호 필드에 입력할 때마다 호출되며 입력된 비밀번호가 유효한지 확인합니다. */
  const handleInputPassword = (e) => {
    const userPassword = e.target.value;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/;
    if (!passwordRegex.test(userPassword)) {
      setPasswordErrorMsg(
        "*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요."
      );
    } else {
      setPasswordValid(true);
      setPasswordErrorMsg("");
      setUserPassword(userPassword);
    }
  };

  const handleInputPasswordCheck = (e) => {
    const userPasswordCheck = e.target.value;
    if (userPassword !== userPasswordCheck) {
      setPasswordCheckErrorMsg("*비밀번호가 일치하지 않습니다.");
      setPasswordCheckSuccessMsg("");
    } else {
      setPasswordCheckValid(true);
      setPasswordCheckErrorMsg("");
      setPasswordCheckSuccessMsg("비밀번호가 일치합니다.");
    }
  };

  /* 에러 메시지 초기화 */
  useEffect(() => {
    setEmailErrorMsg("");
    setPasswordErrorMsg("");
  }, [userEmail]);

  useEffect(() => {
    setPasswordErrorMsg("");
  }, [userPassword]);

  useEffect(() => {
    setEmailErrorMsg("");
    setPasswordErrorMsg("");
    setPasswordCheckErrorMsg("");
  }, [userPasswordCheck]);

  /* 아이디와 비밀번호 모두 유효 시, 프로필 설정 페이지로 이동 */
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    if (emailValid && passwordValid && passwordCheckValid) {
      setIsComplete(true);
      navigate("/signup/setProfile", {
        state: {
          email: userEmail,
          password: userPassword
        }
      });
    } else {
      setIsComplete(false);
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return emailValid && passwordValid && passwordCheckValid;
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <form onSubmit={handleSignup}>
        <Section>
          <Input
            label="이메일"
            placeholder="이메일 주소를 입력해주세요"
            id="email"
            type="email"
            name="email"
            onChange={handleInputEmail}
            onBlur={handleEmailDuplicate}
            // hasError={emailErrorMsg != ""}
            required
          />
          {emailErrorMsg && <ErrorMessage>{emailErrorMsg}</ErrorMessage>}
          {emailSuccessMsg && (
            <SuccessMessage>{emailSuccessMsg}</SuccessMessage>
          )}
          <Input
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            type="password"
            name="password"
            onChange={handleInputPassword}
            required
          />
          {passwordErrorMsg && <ErrorMessage>{passwordErrorMsg}</ErrorMessage>}
          <Input
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            id="passwordCheck"
            type="password"
            name="passwordCheck"
            onChange={handleInputPasswordCheck}
            required
          />
          {passwordCheckErrorMsg && (
            <ErrorMessage>{passwordCheckErrorMsg}</ErrorMessage>
          )}
          {passwordCheckSuccessMsg && (
            <SuccessMessage>{passwordCheckSuccessMsg}</SuccessMessage>
          )}
        </Section>
        <Button width="322px" type="submit" disabled={!handleActivateButton()}>
          다음
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
