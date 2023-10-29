import React from "react";
import BasicProfile from "../assets/images/signup-profile.svg";
import iconDot from "../assets/images/icon-dot.svg";
import {
  Container,
  Image,
  CommentSection,
  Contents,
  UserInfo,
  UserName,
  Comment,
  Button
} from "./FeedCommentStyle";

export default function FeedComment() {
  return (
    <>
      <Container>
        <CommentSection>
          <Image src={BasicProfile} alt="유저 프로필 이미지" />
          <Contents>
            <UserInfo>
              <UserName>만듀</UserName>
            </UserInfo>
            <Comment>우와 멋져요!!</Comment>
          </Contents>
        </CommentSection>
        <Button>
          <img src={iconDot} alt="" />
        </Button>
      </Container>
    </>
  );
}
