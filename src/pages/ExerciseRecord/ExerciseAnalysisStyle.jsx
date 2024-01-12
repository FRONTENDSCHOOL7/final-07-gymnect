import styled from "styled-components";
import rightArrow from "../../assets/images/right-arrow.svg";
import leftArrow from "../../assets/images/left-arrow.svg";

export const AnalysisWrapper = styled.div`
  max-width: 94%; // 최대 너비를 90%로 설정
  width: 100%; // 전체 너비를 부모 컨테이너에 맞춤
  margin: 0 auto; // 상하 마진은 0, 좌우 마진은 자동으로 설정하여 가운데 정렬
  padding: 15px 0px; // 안쪽 여백 추가
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleWithButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftBtn = styled.button`
  background-image: url(${leftArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-top: 11px;
`;

export const RightBtn = styled.button`
  background-image: url(${rightArrow});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  margin-top: 11px;
`;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   width: 8px;
//   height: 8px;
//   background: none;
//   border: 2.05px;
//   padding: 0;
//   outline: none;
//   cursor: pointer;
// `;

export const P = styled.h2`
  color: #3D3D3D;
  font-size: 16px;
  font-weight: 500;
  /* letter-spacing: -1.5px; */
  //padding: 11px 0 0 0;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

export const SecondaryText = styled.div`
  padding: 8px 0px 10px 0;
  font-size: 11px;
  text-align: center;
  margin: 0;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  //height: 200px;
  //background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  //border-top: 1px solid #d9d9d9;
  //border-bottom: 1px solid #d9d9d9;
`;

export const Chart = styled.div`
  padding-top: 9px;
  width: 90%;
  height: 25vh;
`;

export const Description = styled.div`
  //width: 322px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0 5px 0;
  line-height: normal;
  //position: absolute;
  //bottom: 0;
  left: 50%;
  //transform: translateX(-50%);
`;
// 운동 데이터의 부모 컨테이너 스타일링
export const StatsContainer = styled.div`
  display: flex;
  justify-content: center; // 컨테이너들 사이에 공간을 균등하게 분배
  align-items: center;
  flex-wrap: wrap; // 추가 컨테이너들은 새로운 줄로 감싸짐
  max-width: 600px; // 부모 컨테이너의 최대 너비를 설정하여 가운데 정렬하기 쉽게 함
  width: 100%;
  margin: 0 auto; // 가운데 정렬
  padding: 0;
`;
// 데이터 컨테이너 스타일링
export const DataContainer = styled.div`
  flex-basis: calc(50% - 20px); // 전체 가용 너비의 50%에서 간격을 빼준 만큼
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 3px; // 컨테이너 간의 간격
  box-sizing: border-box;
`;

// DataValue와 DataUnit을 가로로 배치하기 위한 새로운 컨테이너 스타일
export const DataTop = styled.div`
  display: flex; // flexbox 적용
  justify-content: center; // 가운데 정렬
  align-items: baseline; // 텍스트 베이스라인에 따라 정렬
  width: 100%; // 컨테이너의 너비를 100%로 설정
`;

// 데이터 타이틀 스타일링 (거리, 시간 등)
export const DataTitle = styled.div`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
  margin-top: 6px;
`;

// 데이터 값 스타일링
export const DataValue = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: #006cd8;
  padding-top: 7px;
`;
// 단위 표시 스타일링 (km, kcal, 걸음)
export const DataUnit = styled.div`
  font-size: 1.1rem;
  color: #777;
  padding-left: 3px;
  // margin-top: 2px;
`;
