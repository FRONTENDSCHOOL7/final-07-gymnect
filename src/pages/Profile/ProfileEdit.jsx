import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEditNav from "../../components/Header/ProfileEditHeader";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getMyInfo, editProfile } from "../../api/profile";
import { postAccountnameDuplicate, postUploadProfile } from "../../api/auth";
import {
  ImageSection,
  Label,
  Image,
  ImageInput,
  Form,
  Container,
  ErrorMessage
} from "./ProfileEditStyle";
import Input from "../../components/common/Input/Input";

export default function ProfileEdit() {
  const URL = "https://api.mandarin.weniv.co.kr/";
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const formData = new FormData();

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  useEffect(() => {
    const fetchMyInfo = async () => {
      const response = await getMyInfo(token);
      setUserInfo({
        ...userInfo,
        account: response.user.accountname,
        profileImg: response.user.image,
        username: response.user.username,
        intro: response.user.intro
      });
    };
    fetchMyInfo();
  }, []);

  /* 이미지 업로드 */
  const handleInputImage = async (e) => {
    const file = e.target.files[0];
    formData.append("image", file);
    const imgData = await postUploadProfile(formData);
    setImage(URL + imgData.filename);
  };

  // username 유효성 검사
  const handleInputUsername = (e) => {
    const usernameInp = e.target.value;
    if (usernameInp === "") {
      setUsernameErrorMsg("*입력해주세요");
      setUsernameValid(false);
    } else if (usernameInp.length < 2 || usernameInp.length > 8) {
      setUsernameErrorMsg("*2~8자 이내여야 합니다.");
      setUsernameValid(false);
    } else {
      setUsernameErrorMsg("");
      setUsernameValid(true);
      setUsername(usernameInp);
    }
  };

  // accountname 유효성 검사
  const handleInputAccountname = async (e) => {
    const accountnameInp = e.target.value;
    console.log(accountnameInp.length);
    const accountnameRegex = /^[a-zA-Z0-9._]+$/;
    const checkAccountname = await postAccountnameDuplicate(accountnameInp);
    if (accountnameInp === "") {
      setAccountnameErrorMsg("*입력해주세요");
      setAccountnameValid(false);
    } else if (!accountnameRegex.test(accountnameInp)) {
      setAccountnameErrorMsg("*영문, 숫자, 특수문자 ., _ 만 입력해주세요");
      setAccountnameValid(false);
    } else if (checkAccountname.message === "이미 가입된 계정ID 입니다.") {
      setAccountnameErrorMsg("*이미 존재하는 계정ID 입니다.");
      setAccountnameValid(false);
    } else if (accountnameInp.length < 2 || accountnameInp.length > 8) {
      setAccountnameErrorMsg("*4~16자 이내여야 합니다.");
      setAccountnameValid(false);
    } else {
      setAccountnameValid(true);
      setAccountnameErrorMsg("");
      setAccountname(accountnameInp);
    }
  };

  const handleInputIntro = (e) => {
    const inputValue = e.target.value;
    const maxLength = 25;

    if (inputValue.length <= maxLength) {
      setIntro(inputValue);
    } else {
      e.target.value = inputValue.slice(0, maxLength);
    }
  };

  /* 에러 메시지 초기화 */
  useEffect(() => {
    setUsernameErrorMsg();
  }, [username]);

  useEffect(() => {
    setAccountnameErrorMsg();
  }, [accountname]);

  /* 프로필 수정 */
  const handleProfileEdit = async (e) => {
    console.log("Profile edit button clicked!");
    e.preventDefault();
    try {
      if (usernameValid && accountnameValid) {
        await editProfile({
          username,
          accountname,
          intro,
          image
        });
        setUserInfo({
          ...userInfo,
          account: accountname,
          profileImg: image,
          username: username,
          intro: intro
        });
        alert("프로필 수정이 완료되었습니다.");
        navigate(`/profile/${accountname}`);
      }
    } catch (error) {
      console.error("프로필 수정 중 오류 발생:", error);
    }
  };

  return (
    <>
      <ProfileEditNav onEditButtonClick={handleProfileEdit} />
      <Container>
        <Form onSubmit={handleProfileEdit}>
          <ImageSection>
            <Label htmlFor="upload-image">
              <Image
                src={image || userInfo.profileImg}
                alt="사용자 프로필 이미지"
              />
            </Label>
            <ImageInput
              type="file"
              accept="image/*"
              id="upload-image"
              ref={fileInputRef}
              onChange={handleInputImage}
            />
          </ImageSection>

          <Input
            label="사용자 이름"
            placeholder="2~8자 이내여야 합니다."
            id="username"
            type="text"
            name="username"
            onChange={handleInputUsername}
            required
          />
          {usernameErrorMsg && <ErrorMessage>{usernameErrorMsg}</ErrorMessage>}
          <Input
            label="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            id="accountname"
            type="text"
            name="accountname"
            onChange={handleInputAccountname}
            required
          />
          {accountnameErrorMsg && (
            <ErrorMessage>{accountnameErrorMsg}</ErrorMessage>
          )}
          <Input
            label="소개"
            placeholder="자신에 대해 소개해 주세요!"
            id="intro"
            type="text"
            name="intro"
            value={intro}
            onChange={handleInputIntro}
            required
          />
        </Form>
      </Container>
    </>
  );
}
