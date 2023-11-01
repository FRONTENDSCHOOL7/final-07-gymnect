import { ReactComponent as HeartIconBase } from "../../../assets/images/icon-heart.svg";
import styled from "styled-components";

export default function HeartIcon({ liked }) {
  return <StyledHeartIcon liked={liked} />;
}

const StyledHeartIcon = styled(HeartIconBase)`
  path {
    fill: ${(props) => (props.liked ? "red" : "white")};
    stroke: ${(props) => (props.liked ? "red" : "#767676")};
  }
`;
