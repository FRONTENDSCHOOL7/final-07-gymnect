import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ProfileEditNav from "../../components/Header/ProfileEditHeader";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getMyInfo, editProfile } from "../../api/profile";
import { postAccountnameDuplicate, postUploadProfile } from "../../api/auth";
import {
  ImageSection,
  Label,
  Image,
  ImageInput,
  Form,
  Container
} from "./ProfileEditStyle";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/ButtonContainer";

export default function ProfileEdit() {
  const URL = "https://api.mandarin.weniv.co.kr";
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const fileInputRef = useRef();
  const formData = new FormData();

  const [isLoading, setIsLoading] = useState(true);

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState("");
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  /* 기존 프로필 정보 불러오기 */
  useEffect(() => {
    const fetchMyInfo = async () => {
      const response = await getMyInfo(token);
      setIsLoading(false);
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
    setImage(URL + "/" + imgData.filename);
  };

  // username 유효성 검사
  const handleInputUsername = (e) => {
    const usernameInp = e.target.value;
    const usernameRegex = /^[a-zA-Z0-9]{2,10}$/;
    if (usernameInp === "") {
      setUsernameErrorMsg("*입력해주세요");
    } else if (!usernameRegex.test(usernameInp)) {
      setUsernameErrorMsg("*영문 2~10자 이내로 입력해주세요");
    } else {
      setUsernameErrorMsg("");
      setUsernameValid(true);
      setUsername(usernameInp);
    }
  };

  // accountname 유효성 검사
  const handleInputAccountname = async (e) => {
    const accountnameInp = e.target.value;
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

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return usernameValid && accountnameValid;
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
    e.preventDefault();
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
  };

  return (
    <>
      <ProfileEditNav />
      <Container>
        <Form onSubmit={handleProfileEdit}>
          <ImageSection>
            <Label htmlFor="upload-image">
              <Image src={image} alt="사용자 프로필 이미지" />
            </Label>
            <ImageInput
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              id="upload-image"
              ref={fileInputRef}
              onChange={handleInputImage}
            />
          </ImageSection>

          <Input
            label="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            id="username"
            type="text"
            name="username"
            onChange={handleInputUsername}
            required
          />
          {/* {usernameErrorMsg && <ErrorMessage>{usernameErrorMsg}</ErrorMessage>} */}
          <Input
            label="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            id="accountname"
            type="text"
            name="accountname"
            onChange={handleInputAccountname}
            required
          />
          {/* {accountnameErrorMsg && (
            <ErrorMessage>{accountnameErrorMsg}</ErrorMessage>
          )} */}
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
          <Button
            width="85.29px"
            height="29px"
            color="#006CD8"
            bgColor="#FFFFFF"
            type="submit">
            저장
          </Button>
        </Form>
      </Container>
    </>
  );
}
