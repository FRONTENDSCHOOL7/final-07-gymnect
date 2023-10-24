import React from "react";
import Post from "../../components/common/Post/Post";
import MyProfileUp from "../../components/common/Profile/MyProfileUp";
import ModalNav from "../../components/Header/ModalHeader";
import { FlexIconImg, GridIconImg, MainWrap, Wrap } from "./MyProfileStyle";
import flexIcon from "../../assets/images/icon-flex-on.svg";
import gridIcon from "../../assets/images/icon-grid-off.svg";

export default function MyProfile() {
  return (
    <>
      <ModalNav />
      <MyProfileUp />
      <MainWrap>
        <Wrap>
          <FlexIconImg src={flexIcon} alt="나열방식"></FlexIconImg>
          <GridIconImg src={gridIcon} alt="그리드방식"></GridIconImg>
        </Wrap>
        <Post />
      </MainWrap>
    </>
  );
}
