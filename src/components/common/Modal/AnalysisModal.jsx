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
  DataTitle,
  DataValue,
  DataUnit
} from "./AnalysisModalStyle";
import { ReactComponent as IconExit } from "../../../assets/images/icon-exit.svg";
import ChartImg from "../../../assets/images/chart-analysis.png";

const ExerciseData = ({ title, value, unit }) => {
  return (
    <DataContainer>
      <DataValue>{value}</DataValue>
      <DataUnit>{unit}</DataUnit>
      <DataTitle>{title}</DataTitle>
    </DataContainer>
  );
};

export default function AnalysisModal({ isOpen, onClose, username }) {
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
          <ExerciseData title="볼륨" value="48725" unit="kg" />
          <ExerciseData title="거리" value="29.19" unit="km" />
          <ExerciseData title="시간" value="08:25" unit="hour" />
          <ExerciseData title="소비 칼로리" value="3577" unit="kcal" />
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
