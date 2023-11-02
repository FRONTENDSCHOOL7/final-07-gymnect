import React from "react";
import { useRecoilValue } from "recoil";
import iconDot from "../assets/images/icon-dot.svg";
import { Link } from "react-router-dom";
import { userInfoAtom } from "../atoms/UserAtom";
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
import {getTimeGap} from "../utils/getTime";

export default function FeedComment({ content, time, authorAccount, handleCommentClick }) {
  const userInfo = useRecoilValue(userInfoAtom);

  const getImageSrc = (image) => {
    if (
      image.includes("https://api.mandarin.weniv.co.kr%22/") &&
      !image.includes("undefined")
    ) {
      console.log("이미지가 존재합니다.");
      return image;
    } else {
      console.log("!!이미지가 존재하지 않습니다.");
      return profileImage;
    }
  };

  return (
    <>
      <Container>
        <CommentSection>
          <Link to={`/profile/${userInfo.account}`}>
            <Image
              src={getImageSrc(userInfo.profileImg)}
              alt="유저 프로필 이미지"
            />
          </Link>
          <Contents>
            <UserInfo>
              <UserName>{userInfo.username}</UserName>
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