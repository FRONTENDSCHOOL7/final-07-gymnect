import React, { useState, useEffect } from "react";
import HomeNav from "../../components/Header/HomeHeader";
import NoFollowerHome from "./NoFollowerHome";
import { getFollowFeed } from "../../api/post";
import Post from "../../components/common/Post/Post";
import styled from "styled-components";
import Loading from "../../components/common/Loading/Loading";

export default function Home() {
  const [posts, setPosts] = useState([]); //팔로우하는 사람의 게시물을 저장하는배열
  const [isLoading, setIsLoading] = useState(true); //데이터가 로딩중인지 나타냄
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const data = await getFollowFeed(20, 0, userToken); // limit=6 skip=0
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching follow feed:", error);
        setIsLoading(false);
      }
    };
    fetchFeed();
  }, []);

  // 팔로우하는 사람이 없거나 게시물이 없을 경우 NoFollowerHome 컴포넌트를 보여줍니다.
  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }
  return (
    <>
      <HomeNav />
      <Container>
        <PostContainer>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => <Post key={index} data={post} />)
          ) : (
            <NoFollowerHome />
          )}
        </PostContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 390px;
  height: calc(100vh - 108px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 1.6rem;
  overflow: auto;
`;
