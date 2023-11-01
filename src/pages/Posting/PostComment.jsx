import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import ModalHeader from "../../components/Header/ModalHeader";
import Comment from "../FeedComment";
import { userInfoAtom } from "../../atoms/UserAtom";
import Post from "../../components/common/Post/Post";
import {
  Container,
  TopContainer,
  BottomContainer,
  Form,
  CommentInput,
  Input,
  Image,
  Button,
  NoComment
} from "./PostCommentStyle.jsx";
import { postComment, getComment } from "../../api/comment";

export default function PostComment() {
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const token = localStorage.getItem("token");
  const location = useLocation();
  const data = location.state?.data;
  const postId = location.state?.data.id;
  const navigate = useNavigate();

  const [commentData, setCommentData] = useState([]);
  const [inputComment, setInputComment] = useState("");


  useEffect(() => {
    if (postId) {
      fetchCommentList();
    }
  }, [postId]);

  /* 댓글 리스트 받아오기 */
  const fetchCommentList = async () => {
    const response = await getComment(postId, token);
    setCommentData(response.comments);
    data.commentCount = response.comments.length;
  };

  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  /* 댓글 작성 */
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const response = await postComment(token, postId, inputComment);
    console.log('Post Comment Response:', response);
    setInputComment("");
    fetchCommentList();
  };
  

  return (
    <>
      <ModalHeader />
      <Container>
        <TopContainer>
          <Post data={data} />
        </TopContainer>
        <BottomContainer>
        {commentData && commentData.length > 0 ? (
            commentData.map((comment, index) => (
              <Comment
                key={comment.id}
                time={comment.createdAt}
                content={comment.content}
              />
            ))
          ) : (
            <NoComment>댓글이 존재하지 않습니다.</NoComment>
          )}
          {/* <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={confirmDelete}
          /> */}
          <Form onSubmit={handleCommentSubmit}>
            <CommentInput>
              <Image src={userInfo.profileImg} alt="프로필 비활성화" />
              <Input
                placeholder="댓글을 입력하세요..."
                onChange={handleInput}
                value={inputComment}
              />
            </CommentInput>
            <Button active={inputComment.trim() !== ""} type="submit">
              게시
            </Button>
          </Form>
        </BottomContainer>
      </Container>
    </>
  );
}
