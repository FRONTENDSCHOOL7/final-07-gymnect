import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Post from "../../components/common/Post/Post";
import commentImg from "../../assets/images/signup-profile.svg";
import ModalHeader from "../../components/Header/ModalHeader";
import Modal from "../../components/common/Modal/DeleteCommentModal";
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
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // 삭제 모달의 상태
  const [commentToDelete, setCommentToDelete] = useState(null); // 삭제할 댓글의 ID or Index
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputComment.trim() !== "") {
      const newComment = {
        userName: "만두", // 여기에는 현재 사용자의 이름을 넣어주세요.
        text: inputComment
      };
      setComments([...comments, newComment]);
      setInputComment("");
    }
  };

  const handleCommentDelete = (id) => {
    setCommentToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setComments((prev) =>
      prev.filter((comment, idx) => idx !== commentToDelete)
    );
    setIsDeleteModalOpen(false);
    setCommentToDelete(null);
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
              onDelete={() => handleCommentDelete(idx)}
            />
          ))}
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={confirmDelete}
          />
          <Form onSubmit={handleSubmit}>
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
