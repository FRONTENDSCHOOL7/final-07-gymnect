import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getUserPosts } from "../../api/post";
import moment from "moment";
import BackNav from "../../components/Header/BackspaceHeader";
import styled from "styled-components";
import Loading from "../../components/common/Loading/Loading";

function ScrollableCalendar() {
  const [months, setMonths] = useState([
    moment().subtract(1, "months").format("YYYY-MM"),
    moment().format("YYYY-MM"),
    moment().add(1, "months").format("YYYY-MM")
  ]);
  const [myPosts, setMyPosts] = useState([]);
  const [postDates, setPostDates] = useState([]);
  const token = localStorage.getItem("token");
  const userInfo = useRecoilValue(userInfoAtom);
  const accountname = userInfo.account;
  const navigate = useNavigate();
  console.log("Account Name: ", accountname);

  const goToPost = (postId) => {
    navigate(`/post/accountname/${postId}`);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight && months.length < 6) {
      setMonths((prevMonths) => [
        ...prevMonths,
        moment(prevMonths[prevMonths.length - 1])
          .add(1, "months")
          .format("YYYY-MM")
      ]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const data = await getUserPosts(token, accountname, Infinity, 0);
        if (Array.isArray(data.post)) {
          setMyPosts(data.post);
          // 'updatedAt' 속성의 날짜를 'YYYY-MM-DD' 형식으로 변환하여 저장합니다.
          const dates = data.post.map((post) =>
            moment(post.updatedAt).format("YYYY-MM-DD")
          );
          setPostDates(dates);
        } else {
          console.error("API response is not an array:", data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("게시글을 가져오는데 실패했습니다:", error);
        setIsLoading(false);
      }
    };
    fetchMyPosts();
  }, [userInfo, accountname, token]);

  console.log(postDates);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BackNav />
          <CalendarScrollContainer onScroll={handleScroll}>
            {months.map((month) => (
              <MonthCalendar
                key={month}
                month={month}
                postDates={postDates}
                myPosts={myPosts}
                onDayClick={goToPost}
              />
            ))}
          </CalendarScrollContainer>
        </>
      )}
    </>
  );
}

function MonthCalendar({ month, postDates, myPosts, onDayClick }) {
  const daysInWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const startDay = moment(month).startOf("month").day();
  const daysInMonth = moment(month).daysInMonth();

  let days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<DayCell key={`empty-start-${i}`} empty />);
  }

  // 현재 날짜 확인
  const currentDate = moment().format("YYYY-MM-DD");

  // DayCell 컴포넌트를 렌더링 할 때 현재 날짜와 비교하기
  for (let i = 1; i <= daysInMonth; i++) {
    const dayDate = moment(`${month}-${String(i).padStart(2, "0")}`).format(
      "YYYY-MM-DD"
    );
    const isToday = dayDate === currentDate;
    const isUploadDay = postDates.includes(dayDate);
    const post = myPosts.find(
      (p) => moment(p.updatedAt).format("YYYY-MM-DD") === dayDate
    );
    days.push(
      <DayCell
        key={i}
        $isToday={isToday}
        $isUploadDay={isUploadDay}
        onClick={() => post && onDayClick(post.id)}
        style={{ cursor: post ? "pointer" : "default" }}>
        {i}
      </DayCell>
    );
  }

  return (
    <MonthContainer>
      <MonthTitle>{moment(month).format("YYYY년 MM월")}</MonthTitle>
      {daysInWeek.map((day) => (
        <WeekdayCell key={day}>{day}</WeekdayCell>
      ))}
      {days}
    </MonthContainer>
  );
}

const CalendarScrollContainer = styled.div`
  max-height: calc(100vh - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bfbfbf; // 스크롤바 색상
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888; // 여기에 원하는 hover 시의 색상을 지정하세요
  }
`;

const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin: 33px;
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
    props.$isToday && !props.$isUploadDay ? "#D9D9D9" : props.$isUploadDay ? "#1294F2" : "transparent"};
  color: ${(props) => (props.$isUploadDay || (props.$isToday && props.$isUploadDay)) ? "#FFFFFF" : "#000000"};
  cursor: ${(props) => (props.$isUploadDay ? "pointer" : "default")};
  &:hover {
    background-color: ${(props) => 
      (props.$isUploadDay || (props.$isToday && props.$isUploadDay)) ? "#006cd8" : undefined};
    color: ${(props) => 
      (props.$isUploadDay || (props.$isToday && props.$isUploadDay)) ? "#FFFFFF" : undefined};
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
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #767676;
`;

export default ScrollableCalendar;
