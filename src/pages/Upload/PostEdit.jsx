import React, { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfoAtom } from "../../atoms/UserAtom";
import { putEditPost, getPostDetail } from "../../api/post";
import UploadNav from "../../components/Header/UploadHeader";
import Button from "../../components/common/Button/ButtonContainer";
import {
  Container,
  TopContainer,
  DropDown,
  ArrowIcon,
  OptionsContainer,
  Option,
  BtnWrapper,
  ExerciseNameInput,
  LabelExerciseName,
  Input,
  SetContainer,
  Count,
  BottomContainer,
  SetInputContainer,
  SetInput,
  SetBtn,
  KmContainer,
  KmInput,
  TimeInputContainer,
  TimeField,
  StyledTextarea,
  StyledImageBtn,
  ImagesContainer,
  ImageWrapper,
  StyledImage,
  CloseButton
} from "./UploadStyle";

// 셀렉트창 운동종류 데이터
const ExerciseData = [
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

export default function PostEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo] = useRecoilState(userInfoAtom);
  const [editingPostId, setEditingPostId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("운동 종류");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [postContent, setPostContent] = useState("");
  const inputRef = useRef(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [distanceInput, setDistanceInput] = useState("");

  // 게시글 수정 모드에서 기존 데이터 로딩
  const loadPostData = async (postId) => {
    try {
      const data = await getPostDetail(postId);
      if (data && data.post.content) {
        const contentParts = data.post.content.split("&&&&");
        if (contentParts.length === 4) {
          const [selectedKind, exerciseData, postText, timeData] = contentParts;

          // 운동 종류 설정
          setSelectedValue(selectedKind);

          // 게시글 내용 설정
          setPostContent(postText);

          // 시간 데이터 설정
          const [hours, minutes] = timeData.split("시간 ");
          setHour(hours);
          setMinute(minutes.replace("분", ""));

          // 운동 데이터 설정
          if (selectedKind === "근력 운동") {
            const exercises = exerciseData.split(";").map((exercise) => {
              const [name, setsData] = exercise.split("-");
              const sets = setsData.split(",").map((set) => {
                const [weight, reps] = set.split("x");
                return { weight, reps };
              });
              return { name, sets };
            });
            setExerciseEntries(exercises);
          } else if (
            ["걷기", "달리기", "등산", "자전거 타기"].includes(selectedKind)
          ) {
            setDistanceInput(exerciseData.replace("km", ""));
          }
        }
      }

      // 이미지 설정
      setUploadedImages(data.post.images || []);
    } catch (error) {
      console.error("Error loading post data:", error);
    }
  };

  useEffect(() => {
    const postId = location.state?.editingPost?.id;
    if (postId) {
      setEditingPostId(postId);
      loadPostData(postId);
    }
  }, [location.state]);

  //데이터 저장
  const createApiData = () => {
    let contentData = postContent;
    let imageString = uploadedImages.join(", ");
    let exerciseData = "";

    if (selectedValue === "근력 운동") {
      exerciseData = exerciseEntries
        .map((entry) => {
          return `${entry.name}-${entry.sets
            .map((set) => `${set.weight}x${set.reps}`)
            .join(", ")}`;
        })
        .join(";");
      exerciseData = `${exerciseData}`;
    } else if (
      ["걷기", "달리기", "등산", "자전거 타기"].includes(selectedValue)
    ) {
      exerciseData = `${distanceInput}km`;
    } else {
      exerciseData = `${selectedValue}`;
    }

    let timeData = `${hour}시간 ${minute}분`;

    contentData = `${selectedValue}&&&&${exerciseData}&&&&${contentData}&&&&${timeData}`;

    return {
      post: {
        content: contentData,
        image: imageString
      }
    };
  };

  const saveDataToAPI = async () => {
    if (selectedValue === "운동 종류") {
      alert(`운동을 선택해주세요!`);
      return;
    }

    if (!postContent || postContent.trim().length === 0) {
      alert("게시글을 입력해주세요!");
      return;
    }

    if (!timeisNumeric(hour) || !timeisNumeric(minute)) {
      alert("시간 입력 창을 올바르게 입력해주세요!");
      return;
    }

    if (
      ["걷기", "달리기", "등산", "자전거 타기"].includes(selectedValue) &&
      (!distanceInput || !timeisNumeric(distanceInput))
    ) {
      alert("km 입력 창을 올바르게 입력해주세요!");
      return;
    }

    if (postContent.length > 500) {
      alert("게시글은 500자를 초과할 수 없습니다!");
      return;
    }

    if (selectedValue === "근력 운동") {
      const emptyNames = exerciseEntries.some(
        (entry) => entry.name.trim() === ""
      );
      if (emptyNames) {
        alert("운동 이름을 입력해주세요!");
        return;
      }

      const invalidSets = exerciseEntries.some((entry) => {
        return entry.sets.some((set) => {
          if (!set.weight || !set.reps) {
            return true;
          }
          if (!timeisNumeric(set.weight) || !timeisNumeric(set.reps)) {
            return true;
          }
          return false;
        });
      });

      if (invalidSets) {
        alert("무게와 횟수를 올바르게 입력해주세요!");
        return;
      }
    }

    try {
      const apiData = createApiData();

      const response = await putEditPost(editingPostId, apiData.post);

      if (response) {
        const updatedData = await getPostDetail(editingPostId);
        alert("게시글이 성공적으로 수정되었습니다.");
        navigate(`/profile/${userInfo.account}`);
      } else {
        console.error("Error while updating data to the API:", response.data);
      }
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  const saveData = async () => {
    if (isSubmitting) {
      return;
    } else {
      setIsSubmitting(true);
      await saveDataToAPI();
      setIsSubmitting(false);
    }
  };

  const handleDropdownToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  // 시간 확인
  const timeisNumeric = (value) => {
    return !isNaN(value) && !isNaN(parseFloat(value));
  };

  const handleTimeChange = (value, setter) => {
    const numericValue = value.replace(/^0+|[^0-9]/g, "");
    if (numericValue.length <= 2) {
      setter(numericValue);
    }
  };

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
    let numericValue = value.replace(/^0+|[^0-9]/g, ""); // 입력값에서 숫자가 아닌 문자를 제거하고, 앞에 오는 0을 제거

    if (field === "weight" && numericValue.length > 3) {
      numericValue = numericValue.slice(0, 3);
    }

    if (field === "reps" && numericValue.length > 2) {
      numericValue = numericValue.slice(0, 2);
    }
    newEntries[exerciseIndex].sets[setIndex][field] = numericValue;
    setExerciseEntries(newEntries);
  };

  const handleDistanceChange = (value) => {
    const numericValue = value.replace(/^0+|[^0-9]/g, "");
    if (numericValue.length <= 2) {
      setDistanceInput(numericValue);
    }
  };

  // Textarea 높이 자동조절
  function autoResizeTextarea(event) {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  const handleIconClick = () => {
    inputRef.current.click();
  };

  const handleImageUpload = (e) => {
    if (uploadedImages.length >= 1) {
      alert("이미지는 한 장만 등록할 수 있습니다.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages([...uploadedImages, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 삭제
  const removeImage = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  return (
    <>
      <UploadNav saveData={saveData} />
      <Container>
        <TopContainer>
          <DropDown onClick={handleDropdownToggle}>
            <ArrowIcon $isOpen={isOpen}></ArrowIcon>
            <span>{selectedValue}</span>
          </DropDown>
          <OptionsContainer $isOpen={isOpen}>
            {ExerciseData.map((item) => (
              <Option
                key={item.id}
                onClick={() => handleOptionClick(item.value)}>
                {item.value}
              </Option>
            ))}
          </OptionsContainer>
          {selectedValue === "근력 운동" && (
            <>
              <BtnWrapper>
                <Button
                  width="310px"
                  height="29px"
                  onClick={handleAddExerciseInput}>
                  + 운동 추가
                </Button>
              </BtnWrapper>
              {exerciseEntries.map((exercise, exerciseIndex) => (
                <div key={exerciseIndex}>
                  <ExerciseNameInput>
                    <LabelExerciseName htmlFor="exerciseName">
                      운동 이름
                    </LabelExerciseName>
                    <Input
                      id="exerciseName"
                      maxLength="14"
                      value={exercise.name}
                      onChange={(e) =>
                        handleExerciseNameChange(exerciseIndex, e.target.value)
                      }
                    />
                    <Button
                      width="68px"
                      height="29px"
                      fontSize="12px"
                      onClick={() => handleRemoveExerciseInput(exerciseIndex)}>
                      삭제
                    </Button>
                  </ExerciseNameInput>
                  {exercise.sets.map((set, setIndex) => (
                    <SetContainer key={setIndex}>
                      <Count>{setIndex + 1} </Count>
                      <SetInputContainer>
                        <SetInput
                          id="kgInput"
                          type="text"
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
                        <label htmlFor="kgInput">kg</label>
                      </SetInputContainer>
                      <SetInputContainer>
                        <SetInput
                          id="NumInput"
                          type="text"
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
                        <label htmlFor="NumInput">회</label>
                      </SetInputContainer>
                      <Button
                        className="setSubBtn"
                        width="10px"
                        height="10px"
                        bgColor="#FFFFF"
                        border="none"
                        color="#000000"
                        onClick={() =>
                          handleRemoveSet(exerciseIndex, setIndex)
                        }>
                        ㅡ
                      </Button>
                    </SetContainer>
                  ))}
                  <BtnWrapper>
                    <SetBtn
                      width="310px"
                      height="29px"
                      bgColor="#FFFFF"
                      border="1px solid #006CD8"
                      color="#000000"
                      fontSize="12px"
                      onClick={() => handleAddSet(exerciseIndex)}>
                      + 세트 추가
                    </SetBtn>
                  </BtnWrapper>
                </div>
              ))}
            </>
          )}
          {(selectedValue === "걷기" ||
            selectedValue === "달리기" ||
            selectedValue === "등산" ||
            selectedValue === "자전거 타기") && (
            <KmContainer>
              <KmInput
                id="distanceInput"
                type="text"
                value={distanceInput}
                onChange={(e) => handleDistanceChange(e.target.value)}
              />
              <label htmlFor="distanceInput">km</label>
            </KmContainer>
          )}
          <TimeInputContainer $isOpen={isOpen}>
            <TimeField
              id="timeInput"
              type="text"
              value={hour}
              onChange={(e) => handleTimeChange(e.target.value, setHour)}
              maxLength="2"
            />
            <label htmlFor="timeInput">시간</label>
            <TimeField
              id="MinuteInput"
              type="text"
              value={minute}
              onChange={(e) => handleTimeChange(e.target.value, setMinute)}
              maxLength="2"
            />
            <label htmlFor="MinuteInput">분</label>
          </TimeInputContainer>
        </TopContainer>
        <BottomContainer>
          <StyledTextarea
            value={postContent}
            maxLength={500}
            onChange={(e) => {
              setPostContent(e.target.value);
              autoResizeTextarea(e);
            }}
            placeholder="게시글을 작성해주세요."
          />
          <StyledImageBtn onClick={handleIconClick} />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={inputRef}
            onChange={handleImageUpload}
          />
          <ImagesContainer>
            {uploadedImages.map((image, index) => (
              <ImageWrapper key={index}>
                <StyledImage src={image} alt={`Uploaded Preview ${index}`} />
                <CloseButton onClick={() => removeImage(index)}>×</CloseButton>
              </ImageWrapper>
            ))}
          </ImagesContainer>
        </BottomContainer>
      </Container>
    </>
  );
}
