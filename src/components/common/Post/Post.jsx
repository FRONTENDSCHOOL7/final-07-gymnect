import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iconDot from "../../../assets/images/icon-dot.svg";
import HeartIcon from "./HeartStyle";
import iconMessage from "../../../assets/images/icon-reply.svg";
import { deletePostData, reportUserPost } from "../Modal/ModalFunction";
import Modal from "../Modal/Modal";
import { userInfoAtom } from "../../../atoms/UserAtom";
import IconPostModal from "../Modal/IconPostModal";
import { postLike, deleteLike } from "../../../api/post";
import { useRecoilValue } from "recoil";
import {
  PostArticle,
  PostProfileImg,
  PostNameWrap,
  UserSpan,
  AccountSpan,
  PostFlexWrap,
  DotImg,
  Wrap,
  PostContent,
  PostUploadImg,
  MessageImg,
  PostDay,
  ButtonWrap,
  HeartSpan,
  MessageSpan,
  Time,
  HealthWrap,
  HealthList,
  ProfileButton,
  FeedButton,
  DotButton,
  HeartButton,
  MessageButton
} from "./PostStyle";

export default function Post({ data, commentCount }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const imageCheck = data.image ? true : false;
  const arr = data.content.split("\n");
  const token = localStorage.getItem("token");
  const account = userInfo.account;
  const [liked, setLiked] = useState(false);
  const [postLikeState, setPostLikeState] = useState(data.hearted);
  const [postLikeCount, setPostLikeCount] = useState(data.heartCount);
  const [isDelete, setIsDelete] = useState(false);
  console.log(arr[1]);

  useEffect(() => {
    setPostLikeCount(data && data.heartCount);
    setPostLikeState(data && data.hearted);
  }, [data]);

  const handleProfileClick = (e) => {
    navigate(`/profile/${data.author.accountname}`, {
      state: { data: data }
    });
  };

  const handleFeedClick = (e) => {
    navigate(`/post/${data.author.accountname}/${data.id}`, {
      state: { data: data }
    });
  };
  const postId = data.id;
  /* 좋아요 기능 */
  const fetchLike = async () => {
    const response = await postLike(token, postId);
    setPostLikeCount(response.post.heartCount);
    setPostLikeState(true);
  };

  /* 좋아요 취소 */
  const fetchDisLike = async () => {
    const response = await deleteLike(token, postId);
    setPostLikeCount(response.post.heartCount);
    setPostLikeState(false);
  };

  /* 좋아요 토글 */
  const handleToggleLike = async (e) => {
    if (liked) {
      await fetchDisLike();
      setLiked(false);
    } else {
      await fetchLike();
      setLiked(true);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  // 모달
  useEffect(() => {
    if (isDelete) {
      setIsDelete(false);
      setIsModalOpen(false);
    }
  }, [isDelete]);

  const onShowModal = (post) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (data.author.accountname === account) {
        setModalText(["삭제", "수정"]);
        setModalFunc([
          () => {
            deletePostData(token, post.id, setIsDelete);
            setIsVisible(false);
          },
          () =>
            navigate(`edit`, {
              state: {
                data: post
              }
            })
        ]);
      } else {
        setModalText(["신고"]);
        setModalFunc([() => reportUserPost(token, post.id)]);
      }
    }
  };

  return isVisible ? (
    <>
      <PostArticle>
        <PostFlexWrap>
          <ProfileButton onClick={handleProfileClick}>
            <PostProfileImg
              src={data.author.image}
              alt="프로필사진"></PostProfileImg>
            <PostNameWrap>
              <UserSpan>{data.author.username}</UserSpan>
              <AccountSpan>{data.author.accountname}</AccountSpan>
            </PostNameWrap>
          </ProfileButton>
          <Time>{arr[arr.length - 1]}</Time>
          <DotButton onClick={() => onShowModal(data)}>
            <DotImg src={iconDot} alt="점 버튼"></DotImg>
          </DotButton>
        </PostFlexWrap>
        <Wrap>
          <FeedButton onClick={handleFeedClick}>
            <HealthWrap>{arr[1]};</HealthWrap>
            {imageCheck && (
              <PostUploadImg
                src={data.image}
                alt="업로드한 사진"></PostUploadImg>
            )}
            <PostContent>{arr[0]}</PostContent>
          </FeedButton>
          <ButtonWrap>
            <HeartButton onClick={handleToggleLike}>
              <HeartIcon isLiked={postLikeState} />
              <HeartSpan>{postLikeCount}</HeartSpan>
            </HeartButton>
            <MessageButton onClick={handleFeedClick}>
              <MessageImg src={iconMessage} alt="댓글 이동 사진"></MessageImg>
              <MessageSpan>{data.commentCount}</MessageSpan>
            </MessageButton>
          </ButtonWrap>
          <PostDay>{formatDate(data.createdAt)}</PostDay>
        </Wrap>
      </PostArticle>
      {isModalOpen && ( // 여기에 모달을 추가합니다.
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
    </>
  ) : null;
}
