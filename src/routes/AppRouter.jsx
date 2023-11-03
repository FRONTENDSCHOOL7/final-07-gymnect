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
import ProtectedRoute from "./ProtectedRoute";

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
            <ProtectedRoute>
              <Navbar />
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Navbar />
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatlist"
          element={
            <ProtectedRoute>
              <Navbar />
              <ChatList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatlist/:name"
          element={
            <ProtectedRoute>
              <ChatRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/:id/:postId"
          element={
            <ProtectedRoute>
              <PostComment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/post/upload"
          element={
            <ProtectedRoute>
              <Upload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendar"
          element={
            <ProtectedRoute>
              <Navbar />
              <Calendar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute>
              <Navbar />
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id/follower"
          element={
            <ProtectedRoute>
              <Navbar />
              <Follower />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id/following"
          element={
            <ProtectedRoute>
              <Navbar />
              <Following />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id/edit"
          element={
            <ProtectedRoute>
              <Navbar />
              <ProfileEdit />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
