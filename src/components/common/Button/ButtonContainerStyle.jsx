import styled from "styled-components";
import Theme from "../../../styles/Theme";

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "120px")};
  height: ${(props) => (props.height ? props.height : "44px")};
  background-color: ${(props) =>
    props.disabled
      ? Theme.backColors.disabledColor
      : Theme.backColors.mainColor};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
`;
