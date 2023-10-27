import React, { useState } from "react";
import UploadNav from "../../components/Header/UploadHeader";
import styled from "styled-components";

const ExerciseData = [
  { id: null, value: "운동 종류" },
  { id: 1, value: "근력 운동" },
  { id: 2, value: "걷기" },
  { id: 3, value: "달리기" },
  { id: 4, value: "자전거 타기" },
  { id: 5, value: "수영" },
  { id: 6, value: "등산" },
  { id: 7, value: "스트레칭" },
  { id: 8, value: "필라테스" },
  { id: 9, value: "발레" },
  { id: 10, value: "기타 운동" }
];

function Upload() {
  // 운동 선택 toggle
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("운동 종류");

  const handleDropdownToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  return (
    <>
      <UploadNav />
      <Container>
        <DropDown onClick={handleDropdownToggle}>
          <ArrowIcon isOpen={isOpen}></ArrowIcon>
          <SelectedValue>{selectedValue}</SelectedValue>
        </DropDown>
        <OptionsContainer isOpen={isOpen}>
          {ExerciseData.map((item) => (
            <Option key={item.id} onClick={() => handleOptionClick(item.value)}>
              {item.value}
            </Option>
          ))}
        </OptionsContainer>
        <InputContainer isOpen={isOpen}>
          <TimeField
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            min="0"
            max="23"
          />
          시간
          <TimeField
            type="number"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            min="0"
            max="59"
          />
          분
        </InputContainer>
      </Container>
    </>
  );
}

export default Upload;

const SelectedValue = styled.span``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowIcon = styled.span`
  display: inline-block;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.1s;
  margin-right: 8px;
  &:before {
    content: "▼";
  }
`;

const OptionsContainer = styled.div`
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow-y: auto;
  max-height: ${({ isOpen }) => (isOpen ? "150px" : "0")};
  transition: max-height 0.2s ease-in-out;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }
`;

const Option = styled.div`
  padding: 8px 35px;
  cursor: pointer;
  font-size: 14px;
`;

const DropDown = styled.div`
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #d9d9d9;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
`;

const TimeField = styled.input`
  width: 75px;
  padding: 8px 12px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  font-size: 14px;
  text-align: center;
  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
