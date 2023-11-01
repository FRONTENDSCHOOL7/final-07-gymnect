import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { getFollowerList } from "../../../api/follow";
import { Link, useNavigate } from "react-router-dom";
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

export default function MyProfileUp() {
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const goToProfileEdit = () => {
    navigate(`/profile/${userInfo.account}/edit`);
  };

  // 팔로워카운트
  const [followersCount, setFollowersCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFollowerList(userInfo.account)
      .then(data => {
        setFollowersCount(data.length);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching followers:", err);
        setLoading(false);
      });
  }, [userInfo.account]);
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <MyProfileUpContainer>
        <Wrap>
          <Link to={`/profile/${userInfo.account}/follower`}>
            <FollowerNum>{followersCount}</FollowerNum>
            <Follower>팔로워</Follower>
          </Link>
          <UserImg src={userInfo.profileImg} alt="유저사진"></UserImg>
          <Link to={`/profile/${userInfo.account}/following`}>
            <FollowingNum>128</FollowingNum>
            <Following>팔로잉</Following>
          </Link>
        </Wrap>
        <UserSpan>{userInfo.username}</UserSpan>
        <AccountSpan>{userInfo.account}</AccountSpan>
        <IntroSpan>{userInfo.intro}</IntroSpan>
        <ButtonWrap>
          <Button height="34px" onClick={goToProfileEdit}>
            프로필 수정
          </Button>
          <Button width="100px" height="34px">
            운동 분석
          </Button>
        </ButtonWrap>
      </MyProfileUpContainer>
    </>
  );
}
