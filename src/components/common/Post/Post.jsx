import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { postLike, deleteLike } from "../../../api/post";
import HeartIcon from "./HeartStyle";
import HealthData from "./HealthData";
import iconMessage from "../../../assets/images/icon-reply.svg";
import iconDot from "../../../assets/images/icon-dot.svg";
import profileImage from "../../../assets/images/signup-profile.svg";
import Modal from "../Modal/Modal";
import { deletePostData, reportUserPost } from "../Modal/ModalFunction";
import IconPostModal from "../Modal/IconPostModal";
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
  ProfileButton,
  FeedButton,
  DotButton,
  HeartButton,
  MessageButton
} from "./PostStyle";

export default function Post({ data, commentCount }) {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo = useRecoilValue(userInfoAtom);
  const [isVisible, setIsVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState([]);
  const [modalFunc, setModalFunc] = useState([]);
  const imageCheck = data?.image ? true : false;
  const arr = data?.content.split("&&&&");
  const token = localStorage.getItem("token");
  const account = userInfo.account;
  const [postLikeState, setPostLikeState] = useState(data && data.hearted);
  const [postLikeCount, setPostLikeCount] = useState(data && data.heartCount);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setPostLikeCount(data && data.heartCount);
    setPostLikeState(data && data.hearted);
  }, [data]);

  const isProfilePage = location.pathname.startsWith(
    `/profile/${data?.author.accountname}`
  );
  const isPostPage = location.pathname.startsWith(
    `/post/${data?.author.accountname}/${data?.id}`
  );

  const handleProfileClick = (e) => {
    if (location.pathname.startsWith(isProfilePage)) {
      console.log("이미 프로필 페이지에 있어서 navigate를 실행하지 않습니다.");
    } else {
      navigate(`/profile/${data?.author.accountname}`);
    }
  };

  const handleFeedClick = (e) => {
    if (location.pathname.startsWith(isPostPage)) {
      console.log(
        "이미 포스트 상세 페이지에 있어서 navigate를 실행하지 않습니다."
      );
    } else {
      navigate(`/post/${data?.author.accountname}/${data?.id}`);
    }
  };

  // 현재 경로가 '/profile/:accountname'인지 판별하여 스타일 결정
  const profileButtonStyle = isProfilePage
    ? { pointerEvents: "none", cursor: "default" }
    : {};

  const postButtonStyle = isPostPage
    ? { pointerEvents: "none", cursor: "default" }
    : {};

  const postId = data?.id;

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
    if (postLikeState) {
      await fetchDisLike();
      setPostLikeState(false);
    } else {
      await fetchLike();
      setPostLikeState(true);
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  useEffect(() => {
    if (isDelete) {
      navigate(`/profile/${data?.author.accountname}`);
      setIsDelete(false);
    }
  }, [isDelete, navigate, data?.author.accountname]);

  const onShowModal = (post) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      if (data.author.accountname === account) {
        setModalText(["수정", "삭제"]);
        setModalFunc([
          () => {
            navigate(`/post/postedit/${postId}`, {
              state: { editingPost: data }
            });
          }, // '수정'을 클릭했을 때 handleEditClick 호출
          () => {
            deletePostData(token, postId, setIsDelete);
            setIsVisible(false);
          }
        ]);
      } else {
        setModalText(["신고"]);
        setModalFunc([() => reportUserPost(token, post.id)]);
      }
    }
  };

  /*이미지가 있으면 보여주고 없으면 기본이미지 보여줌*/
  const getImageSrc = (image) => {
    if (
      //만약 이미지가 존재하면서 특정 키워드를 포함하는 경우
      image.includes("api.mandarin.weniv.co.kr")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  return isVisible ? (
    <>
      <PostArticle>
        <PostFlexWrap>
          <ProfileButton
            onClick={handleProfileClick}
            style={profileButtonStyle}>
            <PostProfileImg
              src={data && getImageSrc(data?.author.image)}
              alt="프로필사진"></PostProfileImg>
            <PostNameWrap>
              <UserSpan>{data?.author.username}</UserSpan>
              <AccountSpan>{data?.author.accountname}</AccountSpan>
              <Time>{data && arr[3]}</Time>
            </PostNameWrap>
          </ProfileButton>
          <DotButton onClick={() => onShowModal("")}>
            <DotImg src={iconDot} alt="점 버튼"></DotImg>
          </DotButton>
        </PostFlexWrap>
        <Wrap>
          <FeedButton onClick={handleFeedClick} style={postButtonStyle}>
            <HealthWrap>
              <HealthData kind={data && arr[0]} data={data && arr[1]} />
            </HealthWrap>
            {imageCheck && (
              <PostUploadImg
                src={data?.image}
                alt="업로드한 사진"></PostUploadImg>
            )}
            <PostContent>{data && arr[2]}</PostContent>
          </FeedButton>
          <ButtonWrap>
            <HeartButton onClick={handleToggleLike}>
              <HeartIcon isLiked={postLikeState} />
              <HeartSpan>{postLikeCount}</HeartSpan>
            </HeartButton>
            <MessageButton onClick={handleFeedClick} style={postButtonStyle}>
              <MessageImg src={iconMessage} alt="댓글 이동 사진"></MessageImg>
              <MessageSpan>{commentCount}</MessageSpan>
            </MessageButton>
          </ButtonWrap>
          <PostDay>{formatDate(data?.createdAt)}</PostDay>
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
