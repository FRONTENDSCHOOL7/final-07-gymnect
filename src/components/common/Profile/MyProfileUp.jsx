import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import { getUserProfile } from "../../../api/profile";
import { getUserPosts } from "../../../api/post";
import Button from "../Button/ButtonContainer";
import FollowButton from "../Button/FollowButton";
import profileImage from "../../../assets/images/signup-profile.svg";
import commentIcon from "../../../assets/images/icon-reply.svg";
import shareIcon from "../../../assets/images/icon-share.svg";
import AnalysisModal from "../../common/Modal/AnalysisModal";
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
  const [postData, setPostData] = useState([]); //게시물 데이터 상태
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const account = userInfo.account;
  const [lender, setLender] = useState(true);
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
  }, [accountId, token, lender]);

  const getImageSrc = (image) => {
    if (
      //만약 이미지가 존재하면서 특정 키워드를 포함하는 경우
      image.includes("api.mandarin.weniv.co.kr") &&
      !image.includes("undefined")
    ) {
      console.log("이미지가 존재합니다.");
      return image;
    } else {
      console.log("!!이미지가 존재하지 않습니다.");
      return profileImage;
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // API 호출
        const data = await getUserPosts(token, accountId, Infinity, 0);
        if (Array.isArray(data.post)) {
          const exerciseData = extractExerciseData(data.post); //데이터 가공
          setPostData(exerciseData); // 가공된 데이터 저장
          console.log("exerciseData : ", exerciseData);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("게시글을 가져오는데 실패했습니다.", error);
      }
    };
    fetchPosts();
  }, [accountId, token]);

  const extractExerciseData = (postData) => {
    return postData.map((post) => {
      const parts = post.content.split("&&&&");
      if (parts[0] === "근력 운동") {
        const weightPattern = /\d+x\d+/g; // 무게 데이터 추출을 위한 정규표현식
        let weightSum = 0; //근력 운동 총 무게를 합산한 데이터
        let match;
        while ((match = weightPattern.exec(parts[1])) !== null) {
          const [sets, reps] = match[0].split("x").map(Number);
          weightSum += sets * reps; // 두 숫자를 곱하여 sum에 더함
        }

        const time = parts[3]; // 시간 데이터
        return { weightSum, time };
      } else if (["달리기", "걷기", "등산", "자전거 타기"].includes(parts[0])) {
        const distance = parts[1]; // 거리 데이터
        const time = parts[3]; // 시간 데이터
        return { distance, time };
      } else {
        const time = parts[3]; // 시간 데이터
        return { time };
      }
    });
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
          {account === accountId ? (
            <>
              <Button height="34px" onClick={goToProfileEdit}>
                프로필 수정
              </Button>
              <Button height="34px" onClick={handleOpenModal}>
                운동 분석
              </Button>
            </>
          ) : (
            <>
              <CommentButton>
                <CommentImg src={commentIcon} />
              </CommentButton>
              <FollowButton
                data={profileInfo && profileInfo.profile.isfollow}
                accountname={profileInfo && profileInfo.profile.accountname}
                type="A"
                setLender={setLender}
              />
              <ShareButton>
                <ShareImg src={shareIcon} />
              </ShareButton>
            </>
          )}
        </ButtonWrap>
      </MyProfileUpContainer>
      {showModal && (
        <AnalysisModal
          isOpen={handleOpenModal}
          onClose={handleCloseModal}
          username={profileInfo.profile.username}
          exerciseData={postData} //가공된 데이터 전달
        />
      )}
    </>
  );
}
