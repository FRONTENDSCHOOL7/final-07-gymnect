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
  FeedButton
} from "./PostStyle1";

export default function Post() {
  const navigate = useNavigate();

  const handleProfileClick = (e) => {
    navigate(`/profile/weniv_Mandarin`);
  };

  const handleFeedClick = (e) => {
    navigate(`/post/weniv_Mandarin`);
  };

  return (
    <>
      <PostArticle>
        <PostFlexWrap>
          <ProfileButton onClick={handleProfileClick}>
            <PostProfileImg
              src={basicProfile}
              alt="프로필사진"></PostProfileImg>
            <PostNameWrap>
              <UserSpan>서귀포시 한라봉 타운</UserSpan>
              <AccountSpan>@weniv_Mandarin</AccountSpan>
            </PostNameWrap>
          </ProfileButton>
          <Time>
            <span>2</span>시간<span>23</span>분
          </Time>
          <DotImg src={iconDot} alt="점 버튼"></DotImg>
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
            <PostUploadImg
              src={postBackground}
              alt="업로드한 사진"></PostUploadImg>
            <PostContent>
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </PostContent>
          </FeedButton>
          <ButtonWrap>
            <HeartImg src={iconHeart} alt="좋아요 사진"></HeartImg>
            <HeartSpan>0</HeartSpan>
            <MessageImg src={iconMessage} alt="댓글 이동 사진"></MessageImg>
            <MessageSpan>0</MessageSpan>
          </ButtonWrap>
          <PostDay>2020년 10월 21일</PostDay>
        </Wrap>
      </PostArticle>
    </>
  );
}
