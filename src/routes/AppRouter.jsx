import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChatList from "../pages/Chatting/ChatList";
import ChatRoom from "../pages/Chatting/ChatRoom";
import Upload from "../pages//Upload/Upload";
import Calendar from "../pages/Calendar/Calendar";
import Profile from "../pages/Profile/MyProfile";
import Login from "../pages/Login/Login";
import Splash from "../pages/Splash/Splash";
import Signup from "../pages/Signup/Signup";
import SetProfile from "../pages/Signup/SetProfile";
import Navbar from "../components/Footer/Navbar";
import Search from "../pages/Home/Search/Search";
import Follower from "../pages/FollowList/FollowerPage";
import Following from "../pages/FollowList/FollowingPage";
import ProfileEdit from "../pages/Profile/ProfileEdit";
import PostComment from "../pages/Posting/PostComment";
import Error from "../pages/Error/Error";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/setProfile" element={<SetProfile />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/search"
          element={
            <>
              <Navbar />
              <Search />
            </>
          }
        />
        <Route
          path="/chatlist"
          element={
            <>
              <Navbar />
              <ChatList />
            </>
          }
        />
        <Route
          path="/chatlist/:name"
          element={
            <>
              <ChatRoom />
            </>
          }
        />
        <Route path="/post/:id/:postId" element={<PostComment />} />
        <Route path="/post/upload" element={<Upload />} />
        <Route
          path="/calendar"
          element={
            <>
              <Navbar />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />
        <Route
          path="/profile/:id/follower"
          element={
            <>
              <Navbar />
              <Follower />
            </>
          }
        />
        <Route
          path="/profile/:id/following"
          element={
            <>
              <Navbar />
              <Following />
            </>
          }
        />
        <Route
          path="/profile/:id/edit"
          element={
            <>
              <Navbar />
              <ProfileEdit />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Error />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
