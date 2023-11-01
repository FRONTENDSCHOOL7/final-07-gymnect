import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginAtom } from "../../atoms/LoginAtom";
import { userInfoAtom } from "../../atoms/UserAtom";
import { useNavigate } from "react-router-dom";
import Post from "../../components/common/Post/Post";
import MyProfileUp from "../../components/common/Profile/MyProfileUp";
import ModalNav from "../../components/Header/ModalHeader";
import { getUserPosts } from "../../api/post";
import {
  FlexIconImg,
  GridIconImg,
  MainWrap,
  GridContainer,
  Wrap,
  GridItem,
  SVGIcon,
  Container,
  PostContainer
} from "./MyProfileStyle";
import flexIconOn from "../../assets/images/icon-flex-on.svg";
import flexIconOff from "../../assets/images/icon-flex-off.svg";
import gridIconOn from "../../assets/images/icon-grid-on.svg";
import gridIconOff from "../../assets/images/icon-grid-off.svg";
import layer from "../../assets/images/icon-img-layers.svg";
import Modal from "../../components/common/Modal/PostModal";

export default function MyProfile() {
  const [isExpandedView, setIsExpandedView] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [myPosts, setMyPosts] = useState([]);
  const setLogin = useSetRecoilState(loginAtom);
  const navigate = useNavigate();
  const userInfo = useRecoilValue(userInfoAtom);
  const account = userInfo.account;
  const token = localStorage.getItem("token");

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
    setLogin(false); // Recoil 상태 변경
    localStorage.removeItem("token"); // 만약 토큰을 로컬 스토리지에 저장했다면 삭제합니다.
    navigate("/login"); // 로그인 페이지로 리다이렉트
  };

  useEffect(() => {
    const fetchMyPosts = async () => {
      try {
        const data = await getUserPosts(token, account, 10, 0);
        if (Array.isArray(data.post)) {
          setMyPosts(data.post);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.log("게시글을 가져오는데 실패했습니다:", error);
      }
    };

    fetchMyPosts();
  }, [userInfo]);

  return (
    <>
      <ModalNav toggleModal={toggleModal} />
      <Container>
        <MyProfileUp />
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
              <GridItem />
              <GridItem>
                <SVGIcon src={layer} alt="SVG Icon" />
              </GridItem>
              <GridItem />
              <GridItem />
              <GridItem />
              <GridItem>
                <SVGIcon src={layer} alt="SVG Icon" />
              </GridItem>
              <GridItem />
              <GridItem />
              <GridItem>
                <SVGIcon src={layer} alt="SVG Icon" />
              </GridItem>
            </GridContainer>
          ) : (
            <PostContainer>
              {myPosts.map((post, index) => (
                <Post key={index} data={post} />
              ))}
            </PostContainer>
          )}
        </MainWrap>
      </Container>
      {isModalVisible && (
        <Modal handleLogout={handleLogout} toggleModal={toggleModal} />
      )}
    </>
  );
}
