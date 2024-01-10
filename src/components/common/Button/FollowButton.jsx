import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../atoms/UserAtom";
import styled from "styled-components";
import { postFollow, deleteFollow } from "../../../api/follow";

export default function FollowButton({
  data,
  accountname,
  type,
  onFollowStatusChange
}) {
  const [isfollow, setIsfollow] = useState(data);
  const userInfo = useRecoilValue(userInfoAtom);

  useEffect(() => {
    setIsfollow(data);
  }, [data]);

  const handleClick = async () => {
    try {
      if (isfollow) {
        await deleteFollow(accountname); // accountname을 매개변수로 전달
      } else {
        await postFollow(accountname); // accountname을 매개변수로 전달
      }
      setIsfollow(!isfollow);

      if (onFollowStatusChange) {
        onFollowStatusChange(!isfollow);
      }
    } catch (error) {
      console.error("Error while trying to follow/unfollow:", error);
    }
  };

  if (userInfo?.account === accountname) {
    // 같다면 아무것도 렌더링하지 않습니다.
    return null;
  }

  return (
    <StyledButton $type={type} $follow={isfollow} onClick={handleClick}>
      {type === "A"
        ? isfollow
          ? "언팔로우"
          : "팔로우"
        : isfollow
        ? "취소"
        : "팔로우"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${(props) => (!props.$follow ? "#006cd8" : "#FFFFFF")};
  color: ${(props) => (!props.$follow ? "#FFFFFF" : "#767676")};
  border: ${(props) =>
    !props.$follow ? "1px solid #006cd8" : "1px solid #D9D9D9"};
  width: ${(props) => (props.$type === "A" ? "120px" : "56px")};
  height: ${(props) => (props.$type === "A" ? "34px" : "28px")};
  border-radius: 26px;
  font-size: 12px;
`;
