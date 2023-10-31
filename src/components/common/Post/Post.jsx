import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconDot from "../../../assets/images/icon-dot.svg";
import iconHeart from "../../../assets/images/icon-heart.svg";
import iconMessage from "../../../assets/images/icon-reply.svg";
import Modal from "../Modal/DeleteEditModal";
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
  HeartImg,
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

export default function Post({ data }) {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const imageCheck = data.image ? true : false;
  const arr = data.content.split("\n");
  console.log(arr[1]);

  const handleProfileClick = (e) => {
    navigate(`/profile/${data.author.accountname}`, {
      state: { data: data }
    });
  };

  const handleFeedClick = (e) => {
    navigate(`/post/${data.author.accountname}`, {
      state: { data: data }
    });
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  }

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
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
          <DotButton onClick={toggleModal}>
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
            <HeartButton>
              <HeartImg src={iconHeart} alt="좋아요 사진"></HeartImg>
              <HeartSpan>0</HeartSpan>
            </HeartButton>
            <MessageButton onClick={handleFeedClick}>
              <MessageImg src={iconMessage} alt="댓글 이동 사진"></MessageImg>
              <MessageSpan>0</MessageSpan>
            </MessageButton>
          </ButtonWrap>
          <PostDay>{formatDate(data.createdAt)}</PostDay>
        </Wrap>
      </PostArticle>
      {isModalVisible && <Modal toggleModal={toggleModal} />}
    </>
  );
}
