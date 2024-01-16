import React from "react";
import styled from "styled-components";
import profileImage from "../../../assets/images/signup-profile.svg";

export default function ProfileList({ image, name, intro, children }) {
  const getImageSrc = (image) => {
    if (
      //만약 이미지가 존재하면서 특정 키워드를 포함하는 경우
      image.includes("api.mandarin.weniv.co.kr") &&
      !image.includes("undefined")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  return (
    <Container>
      <UserProfile src={getImageSrc(image)} alt="유저 프로필 사진" />
      <UserBox>
        <UserName>{name}</UserName>
        <UserIntro>{intro} </UserIntro>
      </UserBox>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* width: 358px; */
  width: 290px;
  height: 50px;
`;

const UserProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
`;

const UserBox = styled.div`
  padding: 5px 0 6px 12px;
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 12px;
`;

const UserIntro = styled.p`
  font-size: 12px;
  color: #767676;
`;
