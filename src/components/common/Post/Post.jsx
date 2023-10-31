import React from "react";
import { useNavigate } from "react-router-dom";
import basicProfile from "../../../assets/images/signup-profile.svg";
import iconDot from "../../../assets/images/icon-dot.svg";
import postBackground from "../../../assets/images/post-img.svg";
import iconHeart from "../../../assets/images/icon-heart.svg";
import iconMessage from "../../../assets/images/icon-reply.svg";
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
  const imageCheck = data.image ? true : false;
  console.log(imageCheck);
  const arr = data.content.split("\n");
  console.log(arr);
  const handleProfileClick = (e) => {
    console.log("hi");
    navigate(`/profile/${data.author.accountname}`, {
      state: { data: data }
    });
  };

  const handleFeedClick = (e) => {
    navigate(`/post/${data.author.accountname}`, {
      state: { data: data }
    });
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
          <Time>
            <span>2</span>시간<span>23</span>분
          </Time>
          <DotButton>
            <DotImg src={iconDot} alt="점 버튼"></DotImg>
          </DotButton>
        </PostFlexWrap>
        <Wrap>
          <FeedButton onClick={handleFeedClick}>
            <HealthWrap>
              <HealthList>
                <span>랫 풀 다운</span>
                <span>70</span>kg<span>8</span>회<span>5</span>세트
              </HealthList>
              <HealthList>
                <span>데드리프트</span>
                <span>100</span>kg<span>8</span>회<span>5</span>세트
              </HealthList>
              <HealthList>
                <span>시티드롱풀</span>
                <span>50</span>kg<span>10</span>회<span>3</span>세트
              </HealthList>
            </HealthWrap>
            {imageCheck && (
              <PostUploadImg
                src={data.image}
                alt="업로드한 사진"></PostUploadImg>
            )}
            <PostContent>{data.content}</PostContent>
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
          <PostDay>2020년 10월 21일</PostDay>
        </Wrap>
      </PostArticle>
    </>
  );
}
