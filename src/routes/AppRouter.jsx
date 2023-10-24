import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ChatList from "../pages/Chatting/ChatList";
import Posting from "../pages/Posting/Posting";
import Calender from "../pages/Calender/Calender";
import Profile from "../pages/Profile/MyProfile";
import Login from "../pages/Login/Login";
import Splash from "../pages/Splash/Splash";
import Signup from "../pages/Signup/Signup";
import SetProfile from "../pages/Signup/SetProfile";
import Navbar from "../components/Footer/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
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
          path="/chatlist"
          element={
            <>
              <Navbar />
              <ChatList />
            </>
          }
        />
        <Route
          path="/posting"
          element={
            <>
              <Navbar />
              <Posting />
            </>
          }
        />
        <Route
          path="/calender"
          element={
            <>
              <Navbar />
              <Calender />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/account/*" element={<Outlet />}>
          <Route path="signup/" element={<Signup />} />
          <Route path="setprofile/" element={<SetProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
