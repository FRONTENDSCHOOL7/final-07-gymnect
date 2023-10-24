import React from "react";
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
  MessageSpan
} from "./PostStyle";

export default function Post() {
  return (
    <>
      <PostArticle>
        <PostProfileImg src={basicProfile} alt="프로필사진"></PostProfileImg>
        <Wrap>
          <PostFlexWrap>
            <PostNameWrap>
              <UserSpan>서귀포시 한라봉 타운</UserSpan>
              <AccountSpan>@weniv_Mandarin</AccountSpan>
            </PostNameWrap>
            <DotImg src={iconDot} alt="점 버튼"></DotImg>
          </PostFlexWrap>
          <PostContent>
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </PostContent>
          <PostUploadImg
            src={postBackground}
            alt="업로드한 사진"></PostUploadImg>
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
