import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getFollowingList } from "../../api/follow";
import BackNav from "../../components/Header/BackspaceHeader";
import FollowerProfile from "../../components/common/Profile/ProfileList";
import FollowButton from "../../components/common/Button/FollowButton";
import styled from "styled-components";

export default function FollowingPage() {
  const [followings, setFollowings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMyFollowingList = async () => {
      try {
        const data = await getFollowingList(id);
        setFollowings(data);
      } catch (error) {
        console.error("데이터를 가져오는데 실패했습니다:", error);
      }
    };
    fetchMyFollowingList();
  }, [id]);

  return (
    <>
      <BackNav />
      <Container>
        {followings && followings.length > 0 ? (
          followings.map((data) => (
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
          <NoComment>팔로잉이 존재하지 않습니다.</NoComment>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background: #bfbfbf; // 스크롤바 색상
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
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
