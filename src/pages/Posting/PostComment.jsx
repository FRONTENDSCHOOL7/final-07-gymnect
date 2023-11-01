import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Modal from "../../components/common/Modal/Modal";
import IconPostModal from "../../components/common/Modal/IconPostModal";
import { deleteUserComment, reportUserComment, deletePostData, reportUserPost } from "../../components/common/Modal/ModalFunction";
import ModalHeader from "../../components/Header/ModalHeader";
import Comment from "../FeedComment";
import Post from "../../components/common/Post/Post";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getPostDetail } from "../../api/post";
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
  getComment
} from "../../api/comment";
import profileImage from "../../assets/images/signup-profile.svg";

export default function PostComment() {
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const token = localStorage.getItem("token");
  const location = useLocation();
  const data = location.state?.data;
  const postId = location.state?.data.id;
  const [postDetail, setPostDetail] = useState(null);
  const navigate = useNavigate();

  const [commentData, setCommentData] = useState([]);
  const [inputComment, setInputComment] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isDeleteComment, setIsDeleteComment] = useState(false);

  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const [pickedPost, setPickedPost] = useState('');

  useEffect(() => {
    if (isDelete) {
      navigate(-1);
    }
    setIsDelete(false);
    setIsModalOpen(false);
    console.log(11);
  }, [isDelete]);

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

  /* 모달 */
  const hiddenText = {
    whiteSpace: 'normal',
    wordWrap: 'break-word',
  };

  // 게시글
  const onShowModal = (postId) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (data.author.accountname === account) {
        setModalText(['삭제', '수정']);
        setModalFunc([
          () => deletePostData(token, postId.id, setIsDelete),
          () =>
            navigate(`edit`, {
              state: {
                data: postId,
              },
            }),
        ]);
      } else {
        setModalText('신고');
        setModalFunc([
          () => reportUserPost(token, postId.id)
        ]);
      }
    }
  };

  // 댓글
  const onShowCommentModal = (index, comment) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (commentData[index].author.accountname === account) {
        setModalText(['댓글 삭제']);
        setModalFunc([
          () =>
            deleteUserComment(
              token,
              data.id,
              commentData[index],
              setIsDeleteComment
            ),
        ]);
      } else {
        setModalText(['댓글 신고']);
        setModalFunc([
          () => reportUserComment(token, pickedPost, commentData[index]),
        ]);
      }
    }
  };

  return (
    <>
      <ModalHeader />
      <Container>
        <TopContainer>
          <Post data={data}
          userFeedTextStyle={hiddenText}
          setPickedPost={setPickedPost}
          showModal={onShowModal}/>
        </TopContainer>
        <BottomContainer>
          {commentData && commentData.length > 0 ? (
            commentData.map((comment, index) => (
              <Comment
                key={comment.id}
                user={comment.author.username}
                time={comment.createdAt}
                content={comment.content}
                authorAccount={comment.author.account}
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
