import React, { useState, useEffect, useRef } from "react";
import { getFollowFeed } from "../../api/post";
import HomeNav from "../../components/Header/HomeHeader";
import NoFollowerHome from "./NoFollowerHome";
import Post from "../../components/common/Post/Post";
import styled from "styled-components";
import Loading from "../../components/common/Loading/Loading";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userToken = localStorage.getItem("token");
  const observer = useRef();
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(0);

  const fetchFeed = async () => {
    try {
      const data = await getFollowFeed(7, skip, userToken);
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setSkip(skip + data.length);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching follow feed:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const onIntersect = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setPage((p) => p + 1);
      }
    };

    const io = new IntersectionObserver(onIntersect, { threshold: 1 });
    if (observer?.current) {
      io.observe(observer.current);
    }

    return () => io && io.disconnect();
  }, [observer, isLoading]);

  useEffect(() => {
    fetchFeed();
  }, []);

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
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <Post key={index} data={post} commentCount={post.commentCount} />
            ))
          ) : (
            <NoFollowerHome />
          )}
        </PostContainer>
        <div ref={observer} />
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
