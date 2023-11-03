import React, { useState, useEffect } from "react";
import { getFollowerList } from "../../api/follow";
import { Link, useParams } from "react-router-dom";

import BackNav from "../../components/Header/BackspaceHeader";
import FollowerProfile from "../../components/common/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowerPage() {
  const [followers, setFollowers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMyFollowerList = async () => {
      try {
        const data = await getFollowerList(id);
        setFollowers(data);
      } catch (error) {
        console.error("데이터를 가져오는데 실패했습니다:", error);
      }
    };
    fetchMyFollowerList();
  }, [id]);

  console.log(followers);

  return (
    <Container>
      <BackNav />
      {followers && followers.length > 0 ? (
        followers.map((data) => (
          <ListContainer key={data._id}>
            <Link to={`/profile/${data.accountname}`}>
              <FollowerProfile
                image={data.image}
                name={data.username}
                intro={data.intro}
              />
            </Link>
            <ButtonContainer>
              <FollowButton
                data={data.isfollow}
                accountname={data.accountname}
              />
            </ButtonContainer>
          </ListContainer>
        ))
      ) : (
        <NoComment>팔로워가 존재하지 않습니다.</NoComment>
      )}
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

export const NoComment = styled.p`
  margin-top: 30px;
  font-size: 12px;
  text-align: center;
  color: #333333;
`;
