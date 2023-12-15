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

  exerciseData.forEach((data) => {
    if (data.weightSum) {
      totalVolume += data.weightSum;
    }
    if (data.distance) {
      totalDistance += parseFloat(data.distance);
    }
    if (data.time) {
      totalTime += parseFloat(data.time);
    }
  });
  console.log("totalVolume = ", totalVolume);
  return isOpen ? (
    <Overlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>
          <IconExit />
        </CloseButton>
        <PrimaryText>GYM-NECT</PrimaryText>
        <P>이번 주 운동분석</P>
        <SecondaryText>2023년 11월 5일~11일</SecondaryText>
        <StatsContainer>
          <AnalysisData title="볼륨" value={totalVolume} unit="kg" />
          <AnalysisData
            title="거리"
            value={totalDistance.toFixed(2)}
            unit="km"
          />
          <AnalysisData title="시간" value={totalTime} unit="" />
          <AnalysisData title="소비 칼로리" value="3577" unit="kcal" />
        </StatsContainer>
        <ChartWrapper>
          <Chart src={ChartImg} alt="Chart" />
        </ChartWrapper>
        <Description>
          {username} 님의 이번 주 총 운동시간은 8시간 25분 입니다!
        </Description>
      </ModalWrapper>
    </Overlay>
  ) : null;
}
