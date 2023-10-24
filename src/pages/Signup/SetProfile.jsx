import { useRef, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LineContainer,
  ImageSection,
  ImageInput,
  Image,
  Label,
  Title,
  P,
  ErrorMessage,
  Form
} from "./SetProfileStyle";
import Button from "../../components/common/Button/ButtonContainer";
import Input from "../../components/common/Input/Input";
import { useRecoilState, useRecoilValue } from 'recoil';
import { postAccountnameDuplicate, postUploadProfile } from '../../api/auth';
import { getMyInfo, editProfile } from '../../api/profile';
import { userInfoAtom } from '../../atoms/UserAtom';

const SetProfile = () => {
  const token = localStorage.getItem('token');
  const [page, setPage] = useState(true);
  const handlePage = () => {
    setPage((prev) => !prev);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountname, setAccountname] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    setImgSrc("");
  }, []);
  const [info, setInfo] = useState("");
  const [usernameErrorMsg, setUsernameErrorMsg] = useState('');
  const [accountnameErrorMsg, setAccountnameErrorMsg] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [accountnameValid, setAccountnameValid] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const [intro, setIntro] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
    

  const submitJoin = () => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
        intro: info,
        image: imgSrc
      }
    };
    join(joinData);
  };

  const uploadImage = async (imageFile) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr/";
    const reqUrl = baseUrl + "image/uploadfile";
    const form = new FormData();
    form.append("image", imageFile);
    const res = await fetch(reqUrl, {
        method: "POST",
        body: form
    });
    const json = await res.json();
      setImgSrc(baseUrl + json.filename);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  const join = async (joinData) => {
    console.log(joinData);
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/";
    const data = await fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(joinData)
    }).then((res) => res.json());
    console.log(data);
  };

  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return usernameValid && accountnameValid;
  };

  /* 기존 프로필 정보 불러오기 */
  // useEffect(() => {
  //   const fetchMyInfo = async () => {
  //     const response = await getMyInfo(token);
  //     setIsLoading(false);
  //     setUserInfo({
  //       ...userInfo,
  //       account: response.user.accountname,
  //       profileImg: response.user.image,
  //       username: response.user.username,
  //       intro: response.user.intro,
  //     })
  //   };
  //   fetchMyInfo();
  // }, []);

  /* username 유효성 검사 */
  const handleInputUsername = (e) => {
    const usernameInp = e.target.value;
    const usernameRegex = /^[a-zA-Z0-9]{2,10}$/;
    if (usernameInp === '') {
      setUsernameErrorMsg('*입력해주세요');
    } else if (!usernameRegex.test(usernameInp)) {
      setUsernameErrorMsg('*영문 2~10자 이내로 입력해주세요');
    } else {
      setUsernameErrorMsg('');
      setUsernameValid(true);
      setUsername(usernameInp);
    }
  };

  // accountname 유효성 검사
  const handleInputAccountname = async (e) => {
    const accountnameInp = e.target.value;
    const accountnameRegex = /^[a-zA-Z0-9._]+$/;
    const checkAccountname = await postAccountnameDuplicate(accountnameInp);
    if (accountnameInp === '') {
      setAccountnameErrorMsg('*입력해주세요');
      setAccountnameValid(false);
    } else if (!accountnameRegex.test(accountnameInp)) {
      setAccountnameErrorMsg('*영문, 숫자, 특수문자 ., _ 만 입력해주세요');
      setAccountnameValid(false);
    } else if (checkAccountname.message === '이미 가입된 계정ID 입니다.') {
      setAccountnameErrorMsg('*이미 존재하는 계정ID 입니다 😥');
      setAccountnameValid(false);
    } else {
      setAccountnameValid(true);
      setAccountnameErrorMsg('');
      setAccountname(accountnameInp);
    }
  };

  /* 소개 글자 수 제한 */
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
    e.preventDefault();
    if (usernameValid && accountnameValid) {
      await editProfile({
        username,
        accountname,
        intro,
        imgSrc,
      });
      setUserInfo({
        ...userInfo,
        account: accountname,
        profileImg: imgSrc,
        username: username,
        intro: intro,
      })
      alert('프로필 수정이 완료되었습니다 🌬️');
      navigate(`/profile/${accountname}`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleProfileEdit}>
        <Title>프로필 설정</Title>
        <P>나중에 언제든지 변경할 수 있습니다.</P>

        <ImageSection>
          <LineContainer>
            <Label src={imgSrc} htmlFor="profileImg">
              <Image src={imgSrc} alt="" />
            </Label>
            <ImageInput
              type="file"
              onChange={handleChangeImage}
              id="profileImg"
              name="image"
              accept="image/*"
            />
          </LineContainer>
        </ImageSection>

        <LineContainer>
          {/* <label htmlFor="userNameInput">사용자 이름</label> */}
          <Input
            label="사용자 이름"
            value={username}
            onChange={handleInputUsername}
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
            required
          />
          {usernameErrorMsg && <ErrorMessage>{usernameErrorMsg}</ErrorMessage>}
        </LineContainer>

        <LineContainer>
          {/* <label htmlFor="userIdInput">계정 ID</label> */}
          <Input
            label="계정 ID"
            value={accountname}
            onChange={handleInputAccountname}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
            required
          />
          {accountnameErrorMsg && <ErrorMessage>{accountnameErrorMsg}</ErrorMessage>}
        </LineContainer>

        <LineContainer>
          {/* <label htmlFor="userIntroInput">소개</label> */}
          <Input
            label="소개"
            type="text"
            onChange={handleInputIntro}
            id="userIntroInput"
            name="intro"
            placeholder="자신의 운동루틴에 대해 소개해 주세요!"
            required
          />
        </LineContainer>

        <Button
          width="322px"
          type="submit"
          // onClick={submitJoin}
          text="짐넥 시작하기"
          isDisabled={!handleActivateButton()}
          handleClick={handleProfileEdit}>
          짐넥 시작하기
        </Button>
      </Form>
    </Container>
  );
};

export default SetProfile;
