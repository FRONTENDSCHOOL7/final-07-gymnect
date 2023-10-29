import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import BackNav from "../../components/Header/BackspaceHeader";

function ScrollableCalendar() {
  const [months, setMonths] = useState([
    moment().subtract(1, "months").format("YYYY-MM"),
    moment().format("YYYY-MM"),
    moment().add(1, "months").format("YYYY-MM")
  ]);

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
  }, []);

  return (
    <>
      <BackNav />
      <CalendarScrollContainer onScroll={handleScroll}>
        {months.map((month) => (
          <MonthCalendar key={month} month={month} />
        ))}
      </CalendarScrollContainer>
    </>
  );
}

function MonthCalendar({ month }) {
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
    const dayDate = moment(`${month}-${i}`).format("YYYY-MM-DD");
    const isToday = dayDate === currentDate;
    days.push(
      <DayCell key={i} isToday={isToday}>
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
    display: none;
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

  background-color: ${(props) => (props.isToday ? "#D9D9D9" : "transparent")};
  border-radius: 50%;
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
