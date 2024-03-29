import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getPostDetail } from "../../api/post";
import { postComment, getComment } from "../../api/comment";
import BackNav from "../../components/Header/BackspaceHeader.jsx";
import Comment from "../../components/common/Comment/FeedComment.jsx";
import Post from "../../components/common/Post/Post";
import profileImage from "../../assets/images/signup-profile.svg";
import Modal from "../../components/common/Modal/Modal";
import IconPostModal from "../../components/common/Modal/IconPostModal";
import {
  deleteUserComment,
  reportUserComment
} from "../../components/common/Modal/ModalFunction";
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

export default function PostComment() {
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { postId } = useParams();
  const [commentCount, setCommentCount] = useState();
  const [commentData, setCommentData] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteComment, setIsDeleteComment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [detailPost, setDetailPost] = useState("");

  useEffect(() => {
    if (isDelete) {
      navigate(-1);
    }
    setIsDelete(false);
    setIsModalOpen(false);
  }, [isDelete, navigate]);

  useEffect(() => {
    setIsDeleteComment(false);
    setIsModalOpen(false);
    fetchCommentList();
  }, [isDeleteComment]);

  useEffect(() => {
    if (postId) {
      fetchCommentList();
    }
  }, [postId]);

  /*상세 게시글 받아오기*/
  useEffect(() => {
    const fetchDetailPosts = async () => {
      try {
        const data = await getPostDetail(postId);
        setDetailPost(data);
      } catch (error) {
        console.log("상세게시글을 가져오는데 실패했습니다:", error);
      }
    };
    fetchDetailPosts();
  }, [postId]);

  /* 댓글 리스트 받아오기 */
  const fetchCommentList = async () => {
    const response = await getComment(postId, token);
    setCommentData(response.comments);
    setCommentCount(response.comments.length);
  };

  const handleInput = (e) => {
    setInputComment(e.target.value);
  };

  /* 댓글 작성 */
  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!inputComment.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    if (isSubmitting) {
      return;
    } else {
      setIsSubmitting(true);
      const response = await postComment(token, postId, inputComment);
      setInputComment("");
      fetchCommentList();
      setIsSubmitting(false);
    }
  };

  /* 사진 검사 */
  const getImageSrc = (image) => {
    if (
      image &&
      !image.includes("https://api.mandarin.weniv.co.kr%22/") &&
      !image.includes("undefined") &&
      !image.includes("Ellipse")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  // 댓글
  const onShowCommentModal = (index, comment) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (commentData[index].author.accountname === account) {
        setModalText(["댓글 삭제"]);
        setModalFunc([
          () =>
            deleteUserComment(
              token,
              detailPost.post.id,
              commentData[index],
              setIsDeleteComment
            )
        ]);
      } else {
        setModalText(["댓글 신고"]);
        setModalFunc([
          () => reportUserComment(token, detailPost.post.id, commentData[index])
        ]);
      }
    }
  };

  return (
    <>
      <BackNav />
      <Container>
        <TopContainer>
          <Post data={detailPost.post} commentCount={commentCount} />
        </TopContainer>
        <BottomContainer>
          {commentData && commentData.length > 0 ? (
            commentData.map((comment, index) => (
              <Comment
                key={comment.id}
                user={comment.author.username}
                time={comment.createdAt}
                content={comment.content}
                authorAccount={comment.author.accountname}
                image={comment.author.image}
                handleCommentClick={() => onShowCommentModal(index, comment)}
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
            <Button $active={inputComment.trim() !== ""} type="submit">
              게시
            </Button>
          </Form>
        </BottomContainer>
        {isModalOpen && (
          <Modal setIsModalOpen={setIsModalOpen}>
            {modalText.map((text, index) => (
              <IconPostModal
                key={index}
                text={text}
                onButtonClick={modalFunc[index]}
              />
            ))}
          </Modal>
        )}
      </Container>
    </>
  );
}
