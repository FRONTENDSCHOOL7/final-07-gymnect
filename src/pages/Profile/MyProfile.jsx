import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { loginAtom } from "../../atoms/LoginAtom";
import { userInfoAtom } from "../../atoms/UserAtom";
import { getUserPosts } from "../../api/post";
import ModalNav from "../../components/Header/ModalHeader";
import Post from "../../components/common/Post/Post";
import MyProfileUp from "../../components/common/Profile/MyProfileUp";
import flexIconOn from "../../assets/images/icon-flex-on.svg";
import flexIconOff from "../../assets/images/icon-flex-off.svg";
import gridIconOn from "../../assets/images/icon-grid-on.svg";
import gridIconOff from "../../assets/images/icon-grid-off.svg";
import Modal from "../../components/common/Modal/PostModal";
import {
  FlexIconImg,
  GridIconImg,
  MainWrap,
  GridContainer,
  Wrap,
  GridItem,
  Container,
  PostContainer
} from "./MyProfileStyle";
import Loading from "../../components/common/Loading/Loading";

export default function MyProfile() {
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const setLogin = useSetRecoilState(loginAtom);
  const navigate = useNavigate();
  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [loadingMorePosts, setLoadingMorePosts] = useState(false);
  const observer = useRef();
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const handleIconClick = (viewType) => {
    if (viewType === "grid") {
      setIsExpandedView(true);
    } else if (viewType === "flex") {
      setIsExpandedView(false);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    resetUserInfo();
    setLogin(false); // Recoil 상태 변경
    localStorage.removeItem("token");

    navigate("/login"); // 로그인 페이지로 리다이렉트
  };

  const fetchMyPosts = async () => {
    setLoadingMorePosts(true);
    try {
      const data = await getUserPosts(token, id, 7, skip);
      if (Array.isArray(data.post)) {
        if (data.post.length < 7) setHasMorePosts(false);
        setMyPosts((prevPosts) => [...prevPosts, ...data.post]);
        setSkip((prevSkip) => prevSkip + data.post.length);
      } else {
        console.error("API response is not an array:", data);
      }
    } catch (error) {
      console.log("게시글을 가져오는데 실패했습니다:", error);
    }
    setIsLoading(false);
    setLoadingMorePosts(false);
  };

  useEffect(() => {
    if (!loadingMorePosts) {
      const onIntersect = async (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading && hasMorePosts) {
          await fetchMyPosts();
        }
      };

      const io = new IntersectionObserver(onIntersect, { threshold: 0.1 });
      if (observer.current) {
        io.observe(observer.current);
      }

      return () => io && io.disconnect();
    }
  }, [observer, isLoading, loadingMorePosts]);

  useEffect(() => {
    setSkip(0);
    setMyPosts([]);
  }, [id]);

  useEffect(() => {
    if (skip === 0) {
      fetchMyPosts();
    }
  }, [skip]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      <ModalNav toggleModal={toggleModal} />
      <Container>
        <MyProfileUp accountId={id} />
        <MainWrap>
          <Wrap>
            <FlexIconImg
              src={!isExpandedView ? flexIconOn : flexIconOff}
              alt="나열방식"
              onClick={() => handleIconClick("flex")}
            />
            <GridIconImg
              src={isExpandedView ? gridIconOn : gridIconOff}
              alt="그리드방식"
              onClick={() => handleIconClick("grid")}
            />
          </Wrap>
          {isExpandedView ? (
            <GridContainer>
              {myPosts &&
                myPosts
                  .filter((post) => {
                    return post && post.image;
                  })
                  .map((post) => {
                    console.log(post);
                    return (
                      <>
                        <GridItem key={post.id}>
                          <Link
                            to={{
                              pathname: `/post/${id}/${post.id}`
                            }}>
                            <img src={post.image} alt="Post Thumbnail" />
                          </Link>
                        </GridItem>
                      </>
                    );
                  })}
            </GridContainer>
          ) : (
            <PostContainer>
              {myPosts.map((post) => (
                <Post
                  key={post.id}
                  data={post}
                  commentCount={post.commentCount}
                />
              ))}
            </PostContainer>
          )}
        </MainWrap>
        <div ref={observer} style={{ height: "50px", width: "100%" }} />
      </Container>
      {isModalVisible && (
        <Modal handleLogout={handleLogout} toggleModal={toggleModal} />
      )}
    </>
  );
}
