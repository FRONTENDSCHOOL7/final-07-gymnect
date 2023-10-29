import React, { useState } from "react";
import Post from "../../components/common/Post/Post";
import MyProfileUp from "../../components/common/Profile/MyProfileUp";
import ModalNav from "../../components/Header/ModalHeader";
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

export default function MyProfile() {
  const [isExpandedView, setIsExpandedView] = useState(false);

  const handleIconClick = (viewType) => {
    if (viewType === "grid") {
      setIsExpandedView(true);
    } else if (viewType === "flex") {
      setIsExpandedView(false);
    }
  };

  return (
    <>
      <ModalNav />
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
            <GridContainer isExpanded={true}>
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
              <Post />
              <Post />
            </PostContainer>
          )}
        </MainWrap>
      </Container>
    </>
  );
}
