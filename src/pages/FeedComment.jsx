import React  from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
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
  Comment,
  Button
} from "./FeedCommentStyle";

export default function FeedComment({ content, handleClickMoreButton}) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <>
      <Container>
        <CommentSection>
          <Link to={`/profile/${userInfo.account}`}>
            <Image src={userInfo.profileImg} alt="유저 프로필 이미지" />
          </Link>
          <Contents>
            <UserInfo>
              <UserName>{userInfo.username}</UserName>
            </UserInfo>
            <Comment>{content}</Comment>
          </Contents>
        </CommentSection>
        <Button onClick={handleClickMoreButton}>
          <img src={iconDot} alt="삭제" />
        </Button>
      </Container>
    </>
  );
}
