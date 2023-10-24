import { useState, useEffect } from "react";
import { Container, LineContainer, ImageSection, ImageInput, Image, Label, Title, P } from "./SetProfileStyle";
import Button from "../../components/common/Button/ButtonContainer";
import Input from "../../components/common/Input/Input";

const SetProfile = () => {
  const [page, setPage] = useState(true);

  const handlePage = () => {
    setPage((prev) => !prev);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountname, setAccountname] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    
    setImgSrc("");
  }, []);

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
  // const handleActivateButton = () => {
  //   return emailValid && passwordValid && passwordCheckValid;
  // };

  return (
    <Container>
      <section>
        <Title>프로필 설정</Title>
        <P>나중에 언제든지 변경할 수 있습니다.</P>

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

        <LineContainer>
          <label htmlFor="userNameInput">사용자 이름</label>
          <input
            lable="사용자 이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="userNameInput"
            name="username"
            placeholder="2~10자 이내여야 합니다."
          />
        </LineContainer>

        <LineContainer>
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            value={accountname}
            onChange={(e) => setAccountname(e.target.value)}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        </LineContainer>

        <LineContainer>
          <label htmlFor="userIntroInput">소개</label>
          <input
            type="text"
            onChange={(e) => setInfo(e.target.value)}
            id="userIntroInput"
            name="intro"
            placeholder="자신의 운동루틴에 대해 소개해 주세요!"
          />
        </LineContainer>

        <Button width="322px" type="submit" onClick={submitJoin}>
          짐넥 시작하기
        </Button>

      </section>
    </Container>
  );
};

export default SetProfile;
