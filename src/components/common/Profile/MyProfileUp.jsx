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
import moment from "moment"; // moment 라이브러리 추가
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
          // 현재 주의 시작일과 종료일 계산
          const startOfWeek = moment().startOf("week");
          const endOfWeek = moment().endOf("week");

          // 이번 주에 해당하는 게시물만 필터링
          const thisWeekPosts = data.post.filter((post) => {
            const postDate = moment(post.createdAt);
            return (
              postDate.isSameOrAfter(startOfWeek) &&
              postDate.isSameOrBefore(endOfWeek)
            );
          });

          const exerciseData = extractExerciseData(thisWeekPosts); //데이터 가공
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

  //운동데이터 추출 함수
  const extractExerciseData = (postData) => {
    return postData.map((post) => {
      const parts = post.content.split("&&&&");

      let timeInMinutes = 0; //시간을 분으로 변환한 값
      //시간 문자열 파싱
      const timePattern = /(\d+)시간\s+(\d+)분/;
      const timeMatch = timePattern.exec(parts[3]);

      const hours = parseInt(timeMatch[1]);
      const minutes = parseInt(timeMatch[2]);
      timeInMinutes = hours * 60 + minutes; // 시간을 분으로 변환
      console.log("timeInMinutes = ", timeInMinutes);

      //운동별 칼로리 계산 함수
      const calculateCalories = (exerciseType, timeInMinutes) => {
        const caloriesPerMinute = {
          근력운동: 7.3,
          달리기: 11.5,
          걷기: 4.3,
          등산: 9.8,
          "자전거 타기": 7.5,
          수영: 8.0,
          스트레칭: 3.0,
          필라테스: 5.0,
          발레: 6.0,
          풋살: 10.0,
          "기타 운동": 6.0 //일반적인 가벼운 운동 기준
        };
        return timeInMinutes * (caloriesPerMinute[exerciseType] || 6.0);
      };
      const kcal = calculateCalories(parts[0], timeInMinutes); //칼로리 변수

      if (parts[0] === "근력 운동") {
        const weightPattern = /\d+x\d+/g; // 무게 데이터 추출을 위한 정규표현식
        let weightSum = 0; //근력 운동 총 무게를 합산한 데이터
        let match;
        while ((match = weightPattern.exec(parts[1])) !== null) {
          const [sets, reps] = match[0].split("x").map(Number);
          weightSum += sets * reps; // 두 숫자를 곱하여 sum에 더함
        }
        const time = timeInMinutes; // 시간 데이터
        return { weightSum, time, kcal };
      } else if (["달리기", "걷기", "등산", "자전거 타기"].includes(parts[0])) {
        const distance = parts[1]; // 거리 데이터
        const time = timeInMinutes; // 시간 데이터
        return { distance, time, kcal };
      } else {
        //그 외 운동
        const time = timeInMinutes; // 시간 데이터
        return { time, kcal };
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
