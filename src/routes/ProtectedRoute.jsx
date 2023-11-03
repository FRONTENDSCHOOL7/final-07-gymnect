import React from "react";
//Navigate:라우터에서 페이지간 이동 처리하는 컴포넌트,useLocation:현재페이지위치를 알수있는Hook
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil"; //recoil상태관리 라이브러리에서 특정atom값을 가져오는Hook
import { loginAtom } from "../atoms/LoginAtom"; //로그인상태나타내는atom

const ProtectedRoute = ({ children }) => {
  const isUserAuthenticated = useRecoilValue(loginAtom); //현재 로그인되어있는지 여부 저장
  const location = useLocation(); //현재 페이지의 url정보 담겨있음

  if (!isUserAuthenticated) {
    //로그인 되어있지 않다면
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <>{children}</>; //로그인되어 있ㄷ면
};
export default ProtectedRoute;
