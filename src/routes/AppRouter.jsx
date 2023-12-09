import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChatList from "../pages/Chatting/ChatList";
import ChatRoom1 from "../pages/Chatting/ChatRoom1";
import ChatRoom2 from "../pages/Chatting/ChatRoom2";
import ChatRoom3 from "../pages/Chatting/ChatRoom3";
import ChatRoom4 from "../pages/Chatting/ChatRoom4";
import Upload from "../pages//Upload/Upload";
import Calendar from "../pages/Calendar/Calendar";
import PostList from "../pages/Calendar/PostList";
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
          path="/chatroom1/:username"
          element={
            <ProtectedRoute>
              <ChatRoom1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatroom2/:username"
          element={
            <ProtectedRoute>
              <ChatRoom2 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatroom3/:username"
          element={
            <ProtectedRoute>
              <ChatRoom3 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chatroom4/:username"
          element={
            <ProtectedRoute>
              <ChatRoom4 />
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
          path="/postlist"
          element={
            <ProtectedRoute>
              <Navbar />
              <PostList />
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
              <Follower />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id/following"
          element={
            <ProtectedRoute>
              <Following />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id/edit"
          element={
            <ProtectedRoute>
              <ProfileEdit />
            </ProtectedRoute>
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
