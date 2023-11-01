import React, { useState, useEffect }  from "react";
import { userInfoAtom } from "../../atoms/UserAtom"; 
import { getFollowerList } from "../../api/follow"; 
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import BackNav from "../../components/Header/BackspaceHeader";
import FollowerProfile from "../../components/common/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowerPage() {
  const userInfo = useRecoilValue(userInfoAtom);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFollowerList(userInfo.account)
      .then(data => {
        if (Array.isArray(data)) { 
          setFollowers(data);
          console.log("Followers Data:", data);

        } else {
          console.error("Received data is not an array:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching followers:", err);
        setLoading(false);
      });
  }, [userInfo.account]);

  if (loading) return <div>Loading...</div>;


  return (
    <Container>
      <BackNav />
      {followers.map(follower => (
        <ListContainer to={`/profile/${follower.username}`} key={follower.id}> 
          <FollowerProfile 
            image={follower.image}
            name={follower.username}
            intro={follower.intro}
          />
          <StyledFollowButton onClick={(e) => e.stopPropagation()}/>
        </ListContainer>
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
`;

const ListContainer = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 16px;
  text-decoration: none;
  color: inherit;
`;

const StyledFollowButton = styled(FollowButton)`
  pointer-events: auto; 
  z-index: 2; 
`;
