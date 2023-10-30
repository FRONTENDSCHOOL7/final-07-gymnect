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

export default function FeedComment({ comment, onDelete }) {
  return (
    <>
      <Container>
        <CommentSection>
          <Image src={BasicProfile} alt="유저 프로필 이미지" />
          <Contents>
            <UserInfo>
              <UserName>{comment.userName}</UserName>
            </UserInfo>
            <Comment>{comment.text}</Comment>
          </Contents>
        </CommentSection>
        <Button onClick={onDelete}>
          <img src={iconDot} alt="삭제" />
        </Button>
      </Container>
    </>
  );
}
