import React, { useState, useEffect }  from "react";
import { userInfoAtom } from "../../atoms/UserAtom"; 
import { getFollowingList, postFollow, deleteFollow } from "../../api/follow"; 
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

import BackNav from "../../components/Header/BackspaceHeader";
import FollowerProfile from "../../components/common/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowingPage() {
  const userInfo = useRecoilValue(userInfoAtom);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFollowingList(userInfo.account)
      .then(data => {
        if (Array.isArray(data)) { // Check if data is an array
          setFollowings(data);
          console.log("Followings Data:", data);

        } else {
          console.error("Received data is not an array:", data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching followings:", err);
        setLoading(false);
      });
  }, [userInfo.account]);

  if (loading) return <div>Loading...</div>;

  const handleFollow = async (followerId, isCurrentlyFollowing) => {
    try {
      if (isCurrentlyFollowing) {
        console.log(`Unfollowing user with ID: ${followerId}`);
        await deleteFollow(followerId);
      } else {
        console.log(`Following user with ID: ${followerId}`);
        await postFollow(followerId);
      }
  
      // Update the state to reflect the changes
      setFollowings(prevFollowings => 
        prevFollowings.map(follower => 
          follower.id === followerId 
            ? { ...follower, isFollowing: !isCurrentlyFollowing } 
            : follower
        )
      );
    } catch (error) {
      console.error("Error while updating follow status:", error);
    }
  };
  
  // const handleFollow = (followerId, isCurrentlyFollowing) => {
  //   setFollowings(prevFollowings => 
  //     prevFollowings.map(following => 
  //       following.id === followerId 
  //         ? { ...following, isFollowing: isCurrentlyFollowing } 
  //         : following
  //     )
  //   );
  // };

  


  return (
    <Container>
      <BackNav />
      {followings.map(Following => (
        <ListContainer key={Following.id}> 
          <Link to={`/profile/${Following.username}`}>
            <FollowerProfile 
              image={Following.image}
              name={Following.username}
              intro={Following.intro}
            />
          </Link>
          <ButtonContainer>
            <FollowButton
              followAction={(followerId, isFollowing) => handleFollow(followerId, isFollowing)}
              FollowingId={Following.id}
              initialFollowingStatus={false}
            />
          </ButtonContainer>
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

const ButtonContainer = styled.div`
  width: 55px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
`;