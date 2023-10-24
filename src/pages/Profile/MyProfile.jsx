import React from "react";
import Post from "../../components/common/Post/Post";
import MyProfileUp from "../../components/common/Profile/MyProfileUp";
import ModalNav from "../../components/Header/ModalHeader";

export default function MyProfile() {
  return (
    <>
    <ModalNav />
      <MyProfileUp />
      {/* <Post /> */}
    </>
  );
}
