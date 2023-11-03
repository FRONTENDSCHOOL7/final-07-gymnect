import React from "react";
import iconDot from "../assets/images/icon-dot.svg";
import { Link } from "react-router-dom";
import {
  Container,
  Image,
  CommentSection,
  Contents,
  UserInfo,
  UserName,
  Time,
  Comment,
  Button
} from "./FeedCommentStyle";
import profileImage from "../assets/images/signup-profile.svg";
import { getTimeGap } from "../utils/getTime";

export default function FeedComment({
  user,
  content,
  time,
  image,
  authorAccount,
  handleCommentClick
}) {
  const getImageSrc = (image) => {
    if (
      image &&
      !image.includes("https://api.mandarin.weniv.co.kr%22/") &&
      !image.includes("undefined") &&
      !image.includes("Ellipse")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  return (
    <>
      <Container>
        <CommentSection>
          <Link to={`/profile/${authorAccount}`}>
            <Image src={getImageSrc(image)} alt="유저 프로필 이미지" />
          </Link>
          <Contents>
            <UserInfo>
              <UserName>{user}</UserName>
              <Time>{getTimeGap(time)}</Time>
            </UserInfo>
            <Comment>{content}</Comment>
          </Contents>
        </CommentSection>
        <Button onClick={() => handleCommentClick(authorAccount)}>
          <img src={iconDot} alt="삭제" />
        </Button>
      </Container>
    </>
  );
}
