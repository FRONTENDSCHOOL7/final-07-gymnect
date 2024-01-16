import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import moment from "moment";
import styled from "styled-components";
import BackNav from "../../../components/Header/BackspaceHeader";
import { getUserPosts } from "../../../api/post";
import { userInfoAtom } from "../../../atoms/UserAtom";
import Loading from "../../../components/common/Loading/Loading";
import { useNavigate } from "react-router-dom";
import ExerciseAnalysis from "../ExerciseAnalysis";
import {
  AnalysisContainer,
  CalendarAndModalContainer,
  CalendarScrollContainer,
  MonthContainer,
  MonthTitleWithButtons,
  LeftBtn,
  RightBtn,
  DayCell,
  WeekdayCell,
  MonthTitle
} from "./CalendarStyle";
const MemoizedExerciseAnalysis = React.memo(ExerciseAnalysis);

export default function ButtonCalendar() {
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
              <MemoizedExerciseAnalysis
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
