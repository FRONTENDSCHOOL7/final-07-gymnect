//스타일 컴포넌트
import styled from "styled-components";
import rightArrow from "../../../assets/images/right-arrow.svg";
import leftArrow from "../../../assets/images/left-arrow.svg";

export const AnalysisContainer = styled.div``;

export const CalendarAndModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CalendarScrollContainer = styled.div`
  max-height: calc(100vh - 108px);
`;

export const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const MonthTitleWithButtons = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const LeftBtn = styled.button`
  background-image: url(${leftArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 25px;
`;

export const RightBtn = styled.button`
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 23px;
`;

export const DayCell = styled.div`
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

export const WeekdayCell = styled(DayCell)`
  font-size: 10px;
  font-weight: 500;
`;

export const MonthTitle = styled.h2`
  grid-column: span 7;
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  color: #3d3d3d;
`;
