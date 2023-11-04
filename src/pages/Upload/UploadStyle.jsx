import styled from "styled-components";
import Button from "../../components/common/Button/ButtonContainer";
import { ReactComponent as ImageBtn } from "../../assets/images/icon-img-btn.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* box-sizing: border-box; */
  max-height: calc(100vh - 48px);
  /* overflow-y: auto; */
`;

export const TopContainer = styled.div`
  box-sizing: border-box;
  max-height: 50vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }
`

export const DropDown = styled.div`
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.1s;
  margin-right: 8px;
  &:before {
    content: "▼";
  }
`;

export const OptionsContainer = styled.div`
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

export const Option = styled.div`
  padding: 8px 35px;
  cursor: pointer;
  font-size: 14px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExerciseNameInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 23px;
`;

export const LabelExerciseName = styled.label`
  font-size: 14px;
  margin-right: 12px;
`;

export const Input = styled.input`
  width: 178px;
  height: 24px;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid #d9d9d9;
  &:focus {
    outline: none;
  }
`;

export const SetContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 51px 15px;
  :last-child {
    margin-bottom: 5px;
  }
`;

export const Count = styled.span`
  font-size: 14px;
  font-weight: border;
`;

export const SetInputContainer = styled.div`
  font-size: 14px;
`;

export const SetInput = styled.input`
  width: 42px;
  height: 24px;
  border-bottom: 1px solid #d9d9d9;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const SetBtn = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const KmContainer = styled.div`
  margin-left: 89px;
  font-size: 14px;
`;

export const KmInput = styled.input`
  width: 75px;
  height: 24px;
  font-size: 14px;
  text-align: center;
  margin-right: 8.5px;
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

export const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  padding: 11px;
`;

export const TimeField = styled.input`
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

export const BottomContainer = styled.div`
  width: 390px;
  margin: 0 auto;
`

export const StyledTextarea = styled.textarea`
  width: 390px;
  font-size: 14.3px;
  border-top: 1px solid #d9d9d9;
  padding: 17px 25px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledImageBtn = styled(ImageBtn)`
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
`;

export const ImagesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 24px;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 304px;
  max-height: 228px;
  aspect-ratio: 1/1;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
