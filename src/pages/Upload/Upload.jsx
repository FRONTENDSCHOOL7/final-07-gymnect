import React, { useState } from "react";
import UploadNav from "../../components/Header/UploadHeader";
import styled from "styled-components";
import Button from "../../components/common/Button/ButtonContainer";

// 셀렉트창 운동종류 데이터
const ExerciseData = [
  { id: null, value: "운동 종류" },
  { id: 1, value: "근력 운동" },
  { id: 2, value: "걷기" },
  { id: 3, value: "달리기" },
  { id: 4, value: "자전거 타기" },
  { id: 5, value: "등산" },
  { id: 6, value: "수영" },
  { id: 7, value: "스트레칭" },
  { id: 8, value: "필라테스" },
  { id: 9, value: "발레" },
  { id: 10, value: "풋살" },
  { id: 11, value: "기타 운동" }
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

  // 시간 입력
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  // 운동이름과 세트 추가
  const [exerciseEntries, setExerciseEntries] = useState([
    { name: "", sets: [{ weight: "", reps: "" }] }
  ]);

  const handleAddExerciseInput = () => {
    setExerciseEntries([
      ...exerciseEntries,
      { name: "", sets: [{ weight: "", reps: "" }] }
    ]);
  };

  // 운동 항목 삭제
  const handleRemoveExerciseInput = (index) => {
    const newEntries = [...exerciseEntries];
    newEntries.splice(index, 1);
    setExerciseEntries(newEntries);
  };

  // 운동 항목 이름 변경
  const handleExerciseNameChange = (index, value) => {
    const newEntries = [...exerciseEntries];
    newEntries[index].name = value;
    setExerciseEntries(newEntries);
  };

  // 운동 항목에 새로운 세트 추가
  const handleAddSet = (exerciseIndex) => {
    const newEntries = [...exerciseEntries];
    newEntries[exerciseIndex].sets.push({ weight: "", reps: "", sets: "" });
    setExerciseEntries(newEntries);
  };

  // 세트 삭제
  const handleRemoveSet = (exerciseIndex, setIndex) => {
    const newEntries = [...exerciseEntries];
    if (newEntries[exerciseIndex].sets.length > 1) {
      newEntries[exerciseIndex].sets.splice(setIndex, 1);
      setExerciseEntries(newEntries);
    }
  };

  // weight, reps 값 변경
  const handleSetChange = (exerciseIndex, setIndex, field, value) => {
    const newEntries = [...exerciseEntries];
    newEntries[exerciseIndex].sets[setIndex][field] = value;
    setExerciseEntries(newEntries);
  };

  return (
    <>
      <UploadNav />
      <Container>
        <DropDown onClick={handleDropdownToggle}>
          <ArrowIcon $isOpen={isOpen}></ArrowIcon>
          <SelectedValue>{selectedValue}</SelectedValue>
        </DropDown>
        <OptionsContainer $isOpen={isOpen}>
          {ExerciseData.map((item) => (
            <Option key={item.id} onClick={() => handleOptionClick(item.value)}>
              {item.value}
            </Option>
          ))}
        </OptionsContainer>
        {selectedValue === "근력 운동" && (
          <>
            <PlusExerciseBtn>
              <Button
                width="310px"
                height="29px"
                onClick={handleAddExerciseInput}>
                + 운동 추가
              </Button>
            </PlusExerciseBtn>
            {exerciseEntries.map((exercise, exerciseIndex) => (
              <div key={exerciseIndex}>
                <ExerciseNameInput>
                  <LabelExerciseName htmlFor="exerciseName">
                    운동 이름
                  </LabelExerciseName>
                  <Input
                    id="exerciseName"
                    value={exercise.name}
                    onChange={(e) =>
                      handleExerciseNameChange(exerciseIndex, e.target.value)
                    }
                  />
                  <Button
                    width="68px"
                    height="29px"
                    onClick={() => handleRemoveExerciseInput(exerciseIndex)}>
                    삭제
                  </Button>
                </ExerciseNameInput>
                {exercise.sets.map((set, setIndex) => (
                  <SetContainer key={setIndex}>
                    <Count>{setIndex + 1} </Count>
                    <div>
                      <SetInput
                        id="kgInput"
                        value={set.weight}
                        onChange={(e) =>
                          handleSetChange(
                            exerciseIndex,
                            setIndex,
                            "weight",
                            e.target.value
                          )
                        }
                      />
                      <Labelset htmlFor="kgInput">kg</Labelset>
                    </div>
                    <div>
                      <SetInput
                        id="NumInput"
                        value={set.reps}
                        onChange={(e) =>
                          handleSetChange(
                            exerciseIndex,
                            setIndex,
                            "reps",
                            e.target.value
                          )
                        }
                      />
                      <Labelset htmlFor="NumInput">회</Labelset>
                    </div>
                    <Button
                      className="setSubBtn"
                      width="10px"
                      height="10px"
                      bgColor="#FFFFF"
                      border="none"
                      color="#000000"
                      onClick={() => handleRemoveSet(exerciseIndex, setIndex)}>
                      ㅡ
                    </Button>
                  </SetContainer>
                ))}
                <SetBtn>
                  <Button
                    width="310px"
                    height="29px"
                    bgColor="#FFFFF"
                    border="1px solid #006CD8"
                    color="#000000"
                    onClick={() => handleAddSet(exerciseIndex)}>
                    + 세트 추가
                  </Button>
                </SetBtn>
              </div>
            ))}
          </>
        )}
        {(selectedValue === "걷기" ||
          selectedValue === "달리기" ||
          selectedValue === "등산" ||
          selectedValue === "자전거 타기") && (
          <KmContainer>
            <KmInput id="distanceInput" type="number" />
            <Kmlabel htmlFor="distanceInput">km</Kmlabel>
          </KmContainer>
        )}
        <InputContainer $isOpen={isOpen}>
          <TimeField
            id="timeInput"
            type="number"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            min="0"
            max="23"
          />
          <TimeLabel htmlFor="timeInput">시간</TimeLabel>
          <TimeField
            id="MinuteInput"
            type="number"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
            min="0"
            max="59"
          />
          <MinuteLabel htmlFor="MinuteInput">분</MinuteLabel>
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
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
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
  max-height: ${({ $isOpen }) => ($isOpen ? "150px" : "0")};
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
  /* border-bottom: 1px solid #d9d9d9; */
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
  padding: 11px;
`;

const TimeField = styled.input`
  width: 75px;
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

const ExerciseNameInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 23px;
`;

const SetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 51px 15px;
  :last-child {
    margin-bottom: 5px;
  }
`;

const SetInput = styled.input`
  width: 42px;
  height: 24px;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  width: 178px;
  height: 24px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
  &:focus {
    outline: none;
  }
`;

const Count = styled.span`
  font-size: 14px;
  font-weight: border;
`;

const PlusExerciseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const LabelExerciseName = styled.label`
  font-size: 14px;
  margin-right: 12px;
`;

const SetBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Labelset = styled.label`
  font-size: 14px;
`;

const MinuteLabel = styled.label``;

const TimeLabel = styled.label``;

const KmInput = styled.input`
  width: 71px;
  height: 24px;
  font-size: 14px;
  text-align: center;
  border-bottom: 1px solid #d9d9d9;
  &:focus {
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Kmlabel = styled.label`
  font-size: 14px;
`;

const KmContainer = styled.div`
  margin-left: 90px;
`;
