import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { postEmailDuplicate } from "../api/auth";

const Signup = () => {
  // const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [emailSuccessMsg, setEmailSuccessMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  /* 이메일 유효성 검사 */
  const handleInputEmail = async (e) => {
    const userEmail = e.target.value;
    const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (userEmail === "") {
      setEmailErrorMsg("*입력해주세요");
    } else if (!emailRegex.test(userEmail)) {
      setEmailErrorMsg("*이메일의 형식이 올바르지 않습니다 😥");
    } else {
      setEmailValid(true);
      setEmailErrorMsg("");
      setUserEmail(userEmail);
    }
  };
  /* 중복된 이메일 확인 */
  /* onBlur event로 설정되어 있어서 input에서 포커스가 벗어날 때 호출됩니다. */
  const handleEmailDuplicate = async (e) => {
    const checkEmail = await postEmailDuplicate(e.target.value);
    if (checkEmail.message === "이미 가입된 이메일 주소 입니다.") {
      setEmailErrorMsg("*이미 가입된 이메일 주소 입니다 😥");
    } else if (checkEmail.message === "사용 가능한 이메일 입니다.") {
      setEmailValid(true);
      setEmailErrorMsg("");
      setEmailSuccessMsg("사용 가능한 이메일 입니다 🤗");
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
        "*영문+숫자+특수기호 조합으로 6자리 이상 입력해주세요"
      );
    } else {
      setPasswordValid(true);
      setPasswordErrorMsg("");
      setUserPassword(userPassword);
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

  /* 아이디와 비밀번호 모두 유효 시, 프로필 설정 페이지로 이동 */
  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    if (emailValid && passwordValid) {
      setIsComplete(true);
      // navigate("/signup/profile", {
      //   state: {
      //     email: userEmail,
      //     password: userPassword
      //   }
      // });
      console.log("다음창으로 넘어갑니다");
    } else {
      setIsComplete(false);
    }
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return emailValid && passwordValid;
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="email">이메일</label>
        <input
          placeholder="이메일 주소를 입력해주세요"
          id="email"
          type="email"
          name="email"
          onChange={handleInputEmail}
          onBlur={handleEmailDuplicate}
          required
        />
        {emailErrorMsg && <p>{emailErrorMsg}</p>}
        {emailSuccessMsg && <p>{emailSuccessMsg}</p>}

        <label htmlFor="password">비밀번호</label>

        <input
          placeholder="비밀번호를 입력해주세요"
          id="password"
          type="password"
          name="password"
          onChange={handleInputPassword}
          required
        />

        {passwordErrorMsg && <p>{passwordErrorMsg}</p>}

        {/* 회원가입 버튼의 활성화 상태는 emailValid와 passwordValid의 상태에 따라 결정됩니다 */}
        {/* disabled 속성을 이용하여 버튼의 활성화 상태를 제어합니다 */}

        <button type="submit" disabled={!(emailValid && passwordValid)}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
