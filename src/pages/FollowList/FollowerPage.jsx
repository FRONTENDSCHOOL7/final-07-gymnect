import React, { useState, useEffect }  from "react";
import { getFollowerList } from "../../api/follow";  // adjust the path accordingly
import BackNav from "../../components/Header/BackspaceHeader";
import FollowerProfile from "../../components/common/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowerPage() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace 'accountname' with the relevant account name or user ID -> 확인 및 재질문 필요
    getFollowerList('accountname')
      .then(data => {
        setFollowers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching followers:", err);
        setLoading(false);
      });
  }, []);  // The empty dependency array means this useEffect will run once when the component mounts

  if (loading) return <div>Loading...</div>;  // You can replace this with a proper loading spinner or component -> 모르겠음


  return (
    <Container>
      <BackNav />
      {followers.map(follower => (
        <ListContainer key={follower.id}> 
        {/* assuming each follower has an 'id'. Adjust accordingly. */}
          <FollowerProfile 
            // Pass relevant props based on your follower data structure
            name={follower.name}
            Profile={follower.profileImg}
            intro={follower.intro}
            // ... other props
          />
          <FollowButton />
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

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 16px;
`;