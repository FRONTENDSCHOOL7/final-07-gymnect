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
import {
  postComment,
  getComment,
  deleteComment,
  reportComment
} from "../../api/comment";
import profileImage from "../../assets/images/signup-profile.svg";
import DeleteCommentModal from "../../components/common/Modal/DeleteCommentModal";
import ReportModal from "../../components/common/Modal/ReportModal";

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

  const [isDeleteCommentModalOpen, setDeleteCommentModalOpen] = useState(false);
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);

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
    console.log("Post Comment Response:", response);
    setInputComment("");
    fetchCommentList();
  };

  /* 사진 검사 */
  const getImageSrc = (image) => {
    if (
      image.includes("https://api.mandarin.weniv.co.kr%22/") &&
      !image.includes("undefined")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  /* 댓글 모달 */
  const handleClickMoreButton = (comment) => {
    if (comment.author.accountname === userInfo.account) {
      // 자신의 댓글일 경우
      setModalText(["삭제"]);
      setModalFunc([
        () => {
          deleteComment(token, postId, comment); // API 호출하여 댓글 삭제
          setDeleteCommentModalOpen(false); // 모달 닫기
          fetchCommentList(); // 댓글 리스트 다시 불러오기
        }
      ]);
      setDeleteCommentModalOpen(true);
    } else {
      // 다른 사람의 댓글일 경우
      setModalText(["신고"]);
      setModalFunc([
        () => {
          reportComment(token, postId, comment); // API 호출하여 댓글 신고
          setReportModalOpen(false); // 모달 닫기
        }
      ]);
      setReportModalOpen(true);
    }
  };

  const closeDeleteCommentModal = () => setDeleteCommentModalOpen(false);
  const closeReportModal = () => setReportModalOpen(false);

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
                authorAccount={comment.author.account}
                handleClickMoreButton={() => handleClickMoreButton(comment)}
              />
            ))
          ) : (
            <NoComment>댓글이 존재하지 않습니다.</NoComment>
          )}
          <Form onSubmit={handleCommentSubmit}>
            <CommentInput>
              <Image
                src={getImageSrc(userInfo.profileImg)}
                alt="프로필 비활성화"
              />
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
      <DeleteCommentModal
        isOpen={isDeleteCommentModalOpen}
        actions={modalFunc}
        text={modalText}
      />
      <ReportModal isOpen={isReportModalOpen} onReport={modalFunc[0]} />
    </>
  );
}
