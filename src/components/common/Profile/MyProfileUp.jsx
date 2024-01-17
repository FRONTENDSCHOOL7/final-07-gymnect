import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { getUserProfile } from "../../../api/profile";
import Button from "../Button/ButtonContainer";
import FollowButton from "../Button/FollowButton";
import profileImage from "../../../assets/images/signup-profile.svg";
import commentIcon from "../../../assets/images/icon-reply.svg";
import shareIcon from "../../../assets/images/icon-share.svg";
import {
  MyProfileUpContainer,
  Wrap,
  UserImg,
  FollowerNum,
  Follower,
  FollowingNum,
  Following,
  UserSpan,
  AccountSpan,
  IntroSpan,
  ButtonWrap,
  CommentButton,
  ShareButton,
  CommentImg,
  ShareImg
} from "./MyProfileUpStyle";

export default function MyProfileUp({ accountId }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const [profileInfo, setProfileInfo] = useState("");
  const token = localStorage.getItem("token");
  const account = userInfo.account;

  const goToProfileEdit = () => {
    navigate(`/profile/${userInfo.account}/edit`);
  };

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const profileData = await getUserProfile(token, accountId);
        setProfileInfo(profileData);
      } catch (error) {
        console.error("프로필 정보를 가져오는데 실패했습니다:", error);
      }
    };
    fetchMyProfile();
  }, [accountId, token]);

  const getImageSrc = (image) => {
    if (
      //만약 이미지가 존재하면서 특정 키워드를 포함하는 경우
      image.includes("api.mandarin.weniv.co.kr") &&
      !image.includes("undefined")
    ) {
      return image;
    } else {
      return profileImage;
    }
  };

  const handleFollowStatusChange = async () => {
    try {
      const updatedProfile = await getUserProfile(token, accountId);
      setProfileInfo(updatedProfile); // 프로필 정보 상태 업데이트
    } catch (error) {
      console.error("프로필 정보 업데이트에 실패했습니다:", error);
    }
  };

  return (
    <>
      <MyProfileUpContainer>
        <Wrap>
          <Link
            to={`/profile/${
              profileInfo && profileInfo.profile.accountname
            }/follower`}>
            <FollowerNum>
              {profileInfo && profileInfo.profile.followerCount}
            </FollowerNum>
            <Follower>팔로워</Follower>
          </Link>
          <UserImg
            src={profileInfo && getImageSrc(profileInfo.profile.image)}
            alt="유저사진"></UserImg>
          <Link
            to={`/profile/${
              profileInfo && profileInfo.profile.accountname
            }/following`}>
            <FollowingNum>
              {profileInfo && profileInfo.profile.followingCount}
            </FollowingNum>
            <Following>팔로잉</Following>
          </Link>
        </Wrap>
        <UserSpan>{profileInfo && profileInfo.profile.username}</UserSpan>
        <AccountSpan>
          {profileInfo && profileInfo.profile.accountname}
        </AccountSpan>
        <IntroSpan>{profileInfo && profileInfo.profile.intro}</IntroSpan>
        <ButtonWrap>
          <CommentButton>
            <CommentImg src={commentIcon} />
          </CommentButton>
          {account === accountId ? (
            <>
              <Button height="34px" onClick={goToProfileEdit}>
                프로필 수정
              </Button>
            </>
          ) : (
            <>
              <FollowButton
                data={profileInfo && profileInfo.profile.isfollow}
                accountname={profileInfo && profileInfo.profile.accountname}
                type="A"
                onFollowStatusChange={handleFollowStatusChange}
              />
            </>
          )}
          <ShareButton>
            <ShareImg src={shareIcon} />
          </ShareButton>
        </ButtonWrap>
      </MyProfileUpContainer>
    </>
  );
}
