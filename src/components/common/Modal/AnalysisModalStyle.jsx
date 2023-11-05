import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 8px;
  height: 8px;
  background: none;
  border: 2.05px;
  padding: 0;
  outline: none;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  width: 350px;
  height: 620px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const P = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -1.5px;
  padding: 11px 0 0 34px;
`;

export const PrimaryText = styled.div`
  color: #828282;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.6px;
  margin: 39px 0 0 34px;
`;

export const SecondaryText = styled.div`
  padding: 17px 0px 7px 34px;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  //height: 200px;
  //background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d9d9d9;
`;

export const Chart = styled.img`
  padding-top: 12px;
  width: 80%;
  //height: 80%;
`;

export const Description = styled.div`
  width: 322px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
  line-height: normal;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
// 운동 데이터의 부모 컨테이너 스타일링
export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between; // 컨테이너들 사이에 공간을 균등하게 분배
  flex-wrap: wrap; // 추가 컨테이너들은 새로운 줄로 감싸짐
  align-items: center;
  max-width: 600px; // 부모 컨테이너의 최대 너비를 설정하여 가운데 정렬하기 쉽게 함
  margin: auto; // 가운데 정렬
`;
// 데이터 컨테이너 스타일링
export const DataContainer = styled.div`
  flex-basis: calc(50% - 20px); // 전체 가용 너비의 50%에서 간격을 빼준 만큼
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  align-items: center;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin: 10px; // 컨테이너 간의 간격
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
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 5px;
  margin-top: 6px;
`;

// 데이터 값 스타일링
export const DataValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  //color: #000;
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
