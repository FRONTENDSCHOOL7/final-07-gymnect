import { useState, useEffect } from "react";
import { Container, LineContainer, ImageSection, ImageInput, Image, Label, Title, P } from "./ProfileStyle";
import Button from "../../components/common/Button/ButtonContainer";
import Input from "../../components/common/Input/Input";

const SetProfile = () => {
  const [page, setPage] = useState(true);

  const handlePage = () => {
    setPage((prev) => !prev);
  };

  const [username, setUsername] = useState("");
  const [accountname, setAccountname] = useState("");
  const [imgSrc, setImgSrc] = useState(""); // This state will be updated with the URL of the image
  const [info, setInfo] = useState("");

  useEffect(() => {
    // Initially setting an empty string for imgSrc
    setImgSrc("");
  }, []);

  const submitJoin = () => {
    // Your submitJoin function
  };

  const uploadImage = async (imageFile) => {
    // Your uploadImage function
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
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
        {/* </LineContainer> */}

        {/* <LineContainer> */}
          <label htmlFor="userIdInput">계정 ID</label>
          <input
            value={accountname}
            onChange={(e) => setAccountname(e.target.value)}
            type="text"
            id="userIdInput"
            name="accountname"
            placeholder="영문, 숫자, 특수문자(,), (_)만 사용 가능합니다."
          />
        {/* </LineContainer> */}

        {/* <LineContainer> */}
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
