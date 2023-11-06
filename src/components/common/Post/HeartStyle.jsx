import styled from "styled-components";
import { ReactComponent as HeartIconBase } from "../../../assets/images/icon-heart.svg";

export default function HeartIcon({ isLiked }) {
  return <StyledHeartIcon $likedValue={isLiked ? 1 : 0} />;
}

const StyledHeartIcon = styled(HeartIconBase)`
  path {
    fill: ${(props) => (props.$likedValue ? "red" : "white")};
    stroke: ${(props) => (props.$likedValue ? "red" : "#767676")};
  }
`;
