import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import Post from "../../components/common/Post/Post";
// import commentImg from "../../assets/images/signup-profile.svg";
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
import { postComment } from "../../api/comment";
import { userInfoAtom } from "../../atoms/UserAtom";

// 댓글 작성
export default function PostComment({ postId }) {
  const userInfo = useRecoilValue(userInfoAtom);
  const [comment, setComment] = useState('');  // 댓글 입력값을 관리할 상태
  const [comments, setComments] = useState([]); // 댓글들을 관리하는 상태

  const handleInputChange = (e) => {
    setComment(e.target.value);

  };

  const uploadCommentHandler = async () => {
    try {
      const newComment = await postComment(userInfo.token, postId, comment);
      setComments([...comments, newComment]);
      setComment('');
    } catch (err) {
      console.error('댓글 작성 중 오류가 발생했습니다:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // 기본 제출 동작 방지
    uploadCommentHandler();
  };

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <>
      <ModalHeader />
      <Container>
        <TopContainer>
          <Post data={data} />
        </TopContainer>
        <BottomContainer>
          {comments.map((comment, idx) => (
            <FeedComment
              key={idx}
              comment={comment}
            />
          ))}
          <Form onSubmit={handleSubmit}>
            <CommentInput>
              <Image src={userInfo.profileImg} alt="프로필 비활성화" />
              <Input
                placeholder="댓글을 입력하세요..."
                onChange={handleInputChange}
                value={comment}
              />
            </CommentInput>
            <Button type="submit">게시</Button>
          </Form>
        </BottomContainer>
      </Container>
    </>
  );
}
