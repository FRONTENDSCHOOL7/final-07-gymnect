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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            saepe dolorum dolorem tenetur neque qui officia, enim deleniti
            tempore aut molestiae consequatur harum nam quae eos facere quo et
            blanditiis?
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
