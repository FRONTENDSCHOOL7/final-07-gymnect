import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import moment from "moment";
import styled from "styled-components";
import BackNav from "../../../components/Header/BackspaceHeader";
import { getUserPosts } from "../../../api/post";
import { userInfoAtom } from "../../../atoms/UserAtom";
import Loading from "../../../components/common/Loading/Loading";
import { useNavigate } from "react-router-dom";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";
//import AnalysisModal from "../../../components/common/Modal/AnalysisModal";
import ExerciseAnalysis from "../ExerciseAnalysis";

function ButtonCalendar() {
  const [months, setMonths] = useState([moment().format("YYYY-MM")]);
  const [myPosts, setMyPosts] = useState([]);
  const token = localStorage.getItem("token");
  const userInfo = useRecoilValue(userInfoAtom);
  const accountname = userInfo.account;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const data = await getUserPosts(token, accountname, Infinity, 0);
        if (Array.isArray(data.post)) {
          setMyPosts(data.post);
        } else {
          console.error("API response is not an array:", data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setIsLoading(false);
      }
    };
    fetchMyPosts();
  }, [userInfo, accountname, token]);

  const handleDayClick = (dayDate) => {
    const postsForDay = myPosts.filter(
      (post) =>
        moment.utc(post.createdAt).local().format("YYYY-MM-DD") === dayDate
    );

    if (postsForDay.length === 1) {
      navigate(`/post/accountname/${postsForDay[0].id}`);
    } else if (postsForDay.length > 1) {
      navigate("/postlist", {
        state: { date: dayDate, accountname: accountname }
      });
    }
  };

  const renderCalendar = (month) => {
    const daysInWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const startDay = moment(month).startOf("month").day();
    const daysInMonth = moment(month).daysInMonth();

    let days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<DayCell key={`empty-start-${i}`} empty />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = moment(`${month}-${String(i).padStart(2, "0")}`).format(
        "YYYY-MM-DD"
      );
      const isToday = dayDate === moment().format("YYYY-MM-DD");

      const isUploadDay = myPosts.some(
        (post) =>
          moment.utc(post.createdAt).local().format("YYYY-MM-DD") === dayDate
      );

      days.push(
        <DayCell
          key={i}
          $isToday={isToday}
          $isUploadDay={isUploadDay}
          onClick={() => handleDayClick(dayDate)}
          style={{ cursor: isUploadDay ? "pointer" : "default" }}>
          {i}
        </DayCell>
      );
    }

    return (
      <MonthContainer>
        <MonthTitleWithButtons>
          <LeftBtn
            onClick={() =>
              setMonths((prev) => [
                moment(prev[0]).subtract(1, "months").format("YYYY-MM"),
                ...prev.slice(0, -1)
              ])
            }
          />
          <MonthTitle>{moment(month).format("YYYY년 MM월")}</MonthTitle>
          <RightBtn
            onClick={() =>
              setMonths((prev) => [
                ...prev.slice(1),
                moment(prev[prev.length - 1])
                  .add(1, "months")
                  .format("YYYY-MM")
              ])
            }
          />
        </MonthTitleWithButtons>
        {daysInWeek.map((day) => (
          <WeekdayCell key={day}>{day}</WeekdayCell>
        ))}
        {days}
      </MonthContainer>
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackNav />
          <CalendarAndModalContainer>
            <AnalysisContainer>
              <ExerciseAnalysis
                isOpen={true}
                username={userInfo.username}
                accountId={userInfo.account}
                token={token}
              />
            </AnalysisContainer>

            <CalendarScrollContainer>
              {months.map((month) => renderCalendar(month))}
            </CalendarScrollContainer>
          </CalendarAndModalContainer>
        </>
      )}
    </>
  );
}
// 스타일 컴포넌트

const AnalysisContainer = styled.div``;
const CalendarAndModalContainer = styled.div`
  display: flex;
  flex-direction: column; //컨텐츠 세로 정렬
  //justify-content: center;
  //padding: 20px;
  //align-items: flex-start; // 컴포넌트들을 상단에 정렬
  //padding: 0 10px 10px 10px;
  height: 90vh; // 전체 화면 높이
  overflow-y: auto; // 세로 스크롤 허용
  &::-webkit-scrollbar {
    // 스크롤 바 숨기기
    display: none;
  }
  //margin-top: 12px;
`;

const CalendarScrollContainer = styled.div`
  max-height: calc(100vh - 108px);
`;

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const MonthTitleWithButtons = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const LeftBtn = styled.button`
  background-image: url(${leftArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 25px;
`;

const RightBtn = styled.button`
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 25px;
`;

const DayCell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$isToday && !props.$isUploadDay
      ? "#D9D9D9"
      : props.$isUploadDay
      ? "#1294F2"
      : "transparent"};
  color: ${(props) =>
    props.$isUploadDay || (props.$isToday && props.$isUploadDay)
      ? "#FFFFFF"
      : "#000000"};
  cursor: ${(props) => (props.$isUploadDay ? "pointer" : "default")};
  &:hover {
    background-color: ${(props) =>
      props.$isUploadDay || (props.$isToday && props.$isUploadDay)
        ? "#006cd8"
        : undefined};
    color: ${(props) =>
      props.$isUploadDay || (props.$isToday && props.$isUploadDay)
        ? "#FFFFFF"
        : undefined};
    transition: 0.3s;
  }
`;

const WeekdayCell = styled(DayCell)`
  font-size: 10px;
  font-weight: 500;
`;

const MonthTitle = styled.h2`
  grid-column: span 7;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #767676;
`;

export default ButtonCalendar;
