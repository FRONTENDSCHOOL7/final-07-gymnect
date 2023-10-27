import React from "react";
import Post1 from "../components/common/Post/Post1";
import commentImg from "../assets/images/signup-profile.svg";
import ModalHeader from "../components/Header/ModalHeader";
import {
  TopContainer,
  BottomContainer,
  Form,
  CommentInput,
  Input,
  Image,
  Button
} from "./PostCommentStyle.jsx";
import FeedComment from "./FeedComment";

export default function PostComment() {
  return (
    <>
      <ModalHeader />
      <TopContainer>
        <Post1 />
      </TopContainer>
      <BottomContainer>
        <FeedComment />
        <FeedComment />
        <Form>
          <CommentInput>
            <Image src={commentImg} alt="프로필 비활성화" />
            <Input
              placeholder="댓글을 입력하세요..."
              //   onChange={handleInput}
              //   value={inputComment}
            />
          </CommentInput>
          <Button type="submit">게시</Button>
        </Form>
      </BottomContainer>
    </>
  );
}
