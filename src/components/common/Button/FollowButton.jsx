import React, { useState } from "react";
import { postFollow, deleteFollow } from "../../../api/follow";
import styled from "styled-components";

export default function FollowButton({ data: initialize, accountname }) {
  console.log(initialize, accountname);
  const [isfollow, setIsfollow] = useState(initialize);
  const handleClick = async () => {
    try {
      if (isfollow) {
        await deleteFollow(accountname); // accountname을 매개변수로 전달
      } else {
        await postFollow(accountname); // accountname을 매개변수로 전달
      }
      setIsfollow(!isfollow);
    } catch (error) {
      console.error("Error while trying to follow/unfollow:", error);
    }
  };

  return (
    <StyledButton $follow={isfollow} onClick={handleClick}>
      {isfollow ? "취소" : "팔로우"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (!props.$follow ? "#006cd8" : "#FFFFFF")};
  color: ${(props) => (!props.$follow ? "#FFFFFF" : "#767676")};
  border: ${(props) =>
    !props.$follow ? "1px solid #006cd8" : "1px solid #D9D9D9"};
  width: 55px;
  height: 27px;
  border-radius: 26px;
  font-size: 12px;
`;
