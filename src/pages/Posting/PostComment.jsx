import React, { useState } from "react";
import Post1 from "../../components/common/Post/Post";
import commentImg from "../../assets/images/signup-profile.svg";
import ModalHeader from "../../components/Header/ModalHeader";
import {
  Container,
  TopContainer,
  BottomContainer,
  Form,
  CommentInput,
  Input,
  Image,
  Button
} from "./PostCommentStyle.jsx";
import FeedComment from "../FeedComment";

export default function PostComment() {
  const [comments, setComments] = useState([]); // 댓글들을 관리하는 상태
  const [inputComment, setInputComment] = useState(""); // 입력 필드의 값을 관리하는 상태

  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 행동을 막습니다.
    if (inputComment.trim() !== "") {
      // 입력이 비어있지 않을 경우
      setComments([...comments, inputComment]);
      setInputComment(""); // 입력 필드를 초기화합니다.
    }
  };

  return (
    <>
      <ModalHeader />
      <Container>
        <TopContainer>
          <Post1 />
        </TopContainer>
        <BottomContainer>
          {comments.map((comment, idx) => (
            <FeedComment key={idx} text={comment} /> // 각 댓글을 FeedComment 컴포넌트로 렌더링합니다.
          ))}
          <Form>
            <CommentInput>
              <Image src={commentImg} alt="프로필 비활성화" />
              <Input
                placeholder="댓글을 입력하세요..."
                onChange={handleInput}
                value={inputComment}
              />
            </CommentInput>
            <Button type="submit">게시</Button>
          </Form>
        </BottomContainer>
      </Container>
    </>
  );
}
