import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfile } from "../../../api/profile";
import AnalysisModal from "../../common/Modal/AnalysisModal";
// import userImg from "../../../assets/images/signup-profile.svg";
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
  ButtonWrap
} from "./MyProfileUpStyle";
import Button from "../Button/ButtonContainer";

export default function MyProfileUp({ accountId }) {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const [profileInfo, setProfileInfo] = useState("");
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const account = userInfo.account;
  const [isFollowed, setIsFollowed] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const goToProfileEdit = () => {
    navigate(`/profile/${userInfo.account}/edit`);
  };

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const profileData = await getUserProfile(token, accountId);
        setProfileInfo(profileData);
      } catch (error) {
        console.log("프로필 정보를 가져오는데 실패했습니다:", error);
      }
    };
    fetchMyProfile();
  }, []);

  const handleFollowToggle = () => {
    setIsFollowed(!isFollowed); // 팔로우 상태 토글

    // 실제로 API를 사용하여 팔로우/언팔로우 상태를 변경하는 코드를 여기에 추가해야 합니다.
    // 예: if(isFollowed) { unfollowUser(accountId) } else { followUser(accountId) }
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
            src={profileInfo && profileInfo.profile.image}
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
          {account === accountId ? (
            <ButtonWrap>
              <Button height="34px" onClick={goToProfileEdit}>
                프로필 수정
              </Button>
              <Button width="100px" height="34px">
                운동 분석
              </Button>
            </ButtonWrap>
          ) : (
            <Button onClick={handleFollowToggle}>
              {isFollowed ? "언팔로우" : "팔로우"}
            </Button>
          )}
        </ButtonWrap>
      </MyProfileUpContainer>
      {showModal && (
        <AnalysisModal isOpen={handleOpenModal} onClose={handleCloseModal} />
      )}
    </>
  );
}