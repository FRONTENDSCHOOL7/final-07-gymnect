import { useState, useEffect } from "react";
import {
  Container,
  LineContainer,
  ImageSection,
  ImageInput,
  Image,
  Label,
  Title,
  P
} from "./SetProfileStyle";
import Button from "../../components/common/Button/ButtonContainer";
import {
  postAccountnameDuplicate,
  postUserSignup,
  postUploadProfile
} from "../../api/auth";
import BasicProfileImg from "../../assets/images/signup-profile.svg";
import {
  Container,
  Title,
  SubTitle,
  ImageSection,
  Label,
  ProfileImg,
  ImgInput,
  Section,
  ErrorMessage
} from "./SetProfileStyle";

const ProfileSettingPage = () => {
  const URL = "https://api.mandarin.weniv.co.kr/";
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const location = useLocation();
  const userEmail = location.state.email;
  const userPassword = location.state.password;
  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [imgSrc, setImgSrc] = useState("");
    useEffect(() => {
      
      setImgSrc("");
    }, []);
  const [info, setInfo] = useState("");


  const submitJoin = () => {
    const joinData = {
      user: {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
        intro: info,
        image: imgSrc,
      },
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
      body: form,
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
        "Content-type": "application/json",
      },
      body: JSON.stringify(joinData),
    }).then((res) => res.json());
    console.log(data);
  };


  /* 버튼 활성화 */
  const handleActivateButton = () => {
    return usernameValid && accountnameValid;
  };

  return (
    <Container>
      <Title>프로필 설정</Title>
      <SubTitle>나중에 언제든지 변경할 수 있습니다.</SubTitle>
      <form onSubmit={handleProfileSignup}>
        <ImageSection>
            <LineContainer>
            <Label src={imgSrc} htmlFor="profileImg">
              <Image src={imgSrc} alt=""/>
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
        <Section>
          <Input
            lable="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={handleInputChange}
            required
          />
        </Section>
        <Button
          width="322px"
          type="submit"
          disabled={!handleActivateButton()}
          // handleClick={handleProfileSignup}
        >
          짐넥 시작하기
        </Button>

      </section>
    </Container>
  );
};

export default ProfileSettingPage;
