import React, {useState} from "react";
import { authInstance } from "../../../api/axiosInstance";

import styled from "styled-components";

export default function FollowButton({ followAction, followerId, initialFollowingStatus = false }) {
  const [following, setFollowing] = useState(initialFollowingStatus);

  const handleClick = async () => {
    const newFollowingStatus = !following;
    try {
      if (newFollowingStatus) {
        // Call the API to follow this user
        await authInstance.post(`/follow/${followerId}`);
      } else {
        // Call the API to unfollow this user
        await authInstance.delete(`/unfollow/${followerId}`);
      }
      // If the API calls are successful, update the local state
      setFollowing(newFollowingStatus);
    } catch (error) {
      console.error("Error while trying to follow/unfollow:", error);
    }
  };

  // const handleClick = async () => {
  //   const newFollowingStatus = !following;
  //   try {
  //     if (newFollowingStatus) {
  //       // Call the API to follow this user
  //       await authInstance.post(`/follow/${followerId}`);
  //     } else {
  //       // Call the API to unfollow this user
  //       await authInstance.delete(`/unfollow/${followerId}`);
  //     }
  //     // If the API calls are successful, update the local state
  //     setFollowing(newFollowingStatus);
  //     // Notify the parent component about the change
  //     followAction(followerId, newFollowingStatus);
  //   } catch (error) {
  //     console.error("Error while trying to follow/unfollow:", error);
  //   }
  // };



  return (
    <StyledButton following={following} onClick={handleClick}>
      {following ? "팔로우" : "취소"}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${props => props.following ? '#006cd8' : '#FFFFFF'};
  color: ${props => props.following ? '#FFFFFF' : '#767676'};
  border: ${props => props.following ? '1px solid #006cd8' : '1px solid #D9D9D9'};
  width: 55px;
  height: 27px;
  border-radius: 26px;
  font-size: 12px;
`;