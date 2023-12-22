import React, { useState } from "react";
import {
  Overlay,
  ModalWrapper,
  CloseButton,
  P,
  PrimaryText,
  SecondaryText,
  ChartWrapper,
  Chart,
  Description,
  StatsContainer,
  DataContainer,
  DataTop,
  DataTitle,
  DataValue,
  DataUnit
} from "./AnalysisModalStyle";
import { ReactComponent as IconExit } from "../../../assets/images/icon-exit.svg";
import ChartImg from "../../../assets/images/chart-analysis.png";
import moment from "moment"; // moment 라이브러리 추가

const AnalysisData = ({ title, value, unit }) => {
  return (
    <DataContainer>
      <DataTop>
        <DataValue>{value}</DataValue>
        <DataUnit>{unit}</DataUnit>
      </DataTop>
      <DataTitle>{title}</DataTitle>
    </DataContainer>
  );
};

export default function AnalysisModal({
  isOpen,
  onClose,
  username,
  exerciseData
}) {
  // exerciseData에서 볼륨, 거리 및 시간 데이터 추출
  let totalVolume = 0;
  let totalDistance = 0;
  let totalTime = 0;
  let totalKcal = 0;

  exerciseData.forEach((data) => {
    if (data.weightSum) {
      totalVolume += data.weightSum;
    }
    if (data.distance) {
      totalDistance += parseFloat(data.distance);
    }
    if (data.time) {
      totalTime += data.time;
    }
    if (data.kcal) {
      totalKcal += data.kcal;
    }
  });
  console.log("totalVolume = ", totalVolume); //60으로 나눈 몫
  console.log("totalTime = ", totalTime); //60으로 나눈나머지

  const hours = Math.floor(totalTime / 60); //
  const minutes = totalTime % 60;

  // 이번 주의 시작일(일요일)과 종료일(토요일) 계산
  const startOfWeek = moment().startOf("week").format("YYYY년 MM월 DD일");
  const endOfWeek = moment().endOf("week").format("DD일");

  return isOpen ? (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <IconExit />
        </CloseButton>
        <PrimaryText>GYM-NECT</PrimaryText>
        <P>이번 주 운동분석</P>
        <SecondaryText>
          {startOfWeek} ~ {endOfWeek}
        </SecondaryText>
        <StatsContainer>
          <AnalysisData title="볼륨" value={totalVolume} unit="kg" />
          <AnalysisData
            title="거리"
            value={totalDistance.toFixed(2)}
            unit="km"
          />
          <AnalysisData title="시간" value={hours + ":" + minutes} unit="" />
          <AnalysisData
            title="예상 소비 칼로리"
            value={Math.floor(totalKcal)}
            unit="kcal"
          />
        </StatsContainer>
        <ChartWrapper>
          <Chart src={ChartImg} alt="Chart" />
        </ChartWrapper>
        <Description>
          {username} 님의 이번 주 총 운동시간은 {hours}시간 {minutes}분 입니다!
        </Description>
      </ModalWrapper>
    </Overlay>
  ) : null;
}
