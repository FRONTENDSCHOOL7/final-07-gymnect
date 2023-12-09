import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Post from "../../components/common/Post/Post";
import Loading from "../../components/common/Loading/Loading";
import { getUserPosts } from "../../api/post";
import moment from "moment";

const PostList = () => {
    const [myPosts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const { date, accountname } = location.state;
    const token = localStorage.getItem("token");
  
    useEffect(() => {
      const fetchMyPosts = async () => {
        try {
          const data = await getUserPosts(token, accountname, Infinity, 0);
          if (Array.isArray(data.post)) {
            const filteredPosts = data.post.filter(post =>
              moment.utc(post.createdAt).local().format("YYYY-MM-DD") === date
            );
            setMyPosts(filteredPosts);
          } else {
            console.error("API response is not an array:", data);
          }
        } catch (error) {
          console.log("게시글을 가져오는데 실패했습니다:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchMyPosts();
    }, [date, accountname, token]);
  
    if (isLoading) {
      return <Loading />;
    }
  
    return (
      <Container>
        <h1>게시글 목록 - {date}</h1>
        <PostContainer>
          {myPosts.map((post, index) => (
            <Post
              key={index}
              data={post}
              commentCount={post.commentCount}
            />
          ))}
        </PostContainer>
      </Container>
    );
  };

export default PostList;

const Container = styled.div`
  max-height: calc(100vh - 108px);
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

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;