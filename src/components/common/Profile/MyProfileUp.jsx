import React from "react";
import userImg from "../../../assets/images/signup-profile.svg";
import {
  MyProfileUpContainer,
  Wrap,
  FollowerWrap,
  FollowingWrap,
  UserImg,
  FollowerNum,
  Follower,
  FollowingNum,
  Following,
  UserSpan,
  AccountSpan,
  IntroSpan,
  ButtonWrap
} from "./MyProfileUpStyle";
import Button from "../Button/ButtonContainer";

export default function MyProfileUp() {
  return (
    <>
      <MyProfileUpContainer>
        <Wrap>
          <FollowerWrap>
            <FollowerNum>2950</FollowerNum>
            <Follower>팔로워</Follower>
          </FollowerWrap>
          <UserImg src={userImg} alt="유저사진"></UserImg>
          <FollowingWrap>
            <FollowingNum>128</FollowingNum>
            <Following>팔로잉</Following>
          </FollowingWrap>
        </Wrap>
        <UserSpan>애월읍 위니브 감귤농장</UserSpan>
        <AccountSpan>@weniv_Mandarin</AccountSpan>
        <IntroSpan>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</IntroSpan>
        <ButtonWrap>
          <Button height="34px">프로필 수정</Button>
          <Button width="100px" height="34px">
            운동 분석
          </Button>
        </ButtonWrap>
      </MyProfileUpContainer>
    </>
  );
}
