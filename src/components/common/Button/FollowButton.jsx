import React from "react";
import styled from "styled-components";

export default function FollowButton() {
    const [following, setFollowing] = React.useState(false);
  
    return (
      <StyledButton following={following} onClick={() => setFollowing(!following)}>
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