import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoginPage from "../../pages/Login";

const ProtectedRoute = ({ children, requiredRole }) => {
  const location = useLocation();
  const token = Cookies.get('token'); // Lấy token từ cookie
  const userRole = Cookies.get('role'); // Lấy role từ cookie

  const loginPage = location.pathname == "/login"
  
  //nếu đăng nhâp, và vào trang login
  if (token && loginPage) {
    return <Navigate to="/" replace />;
  }

  // Nếu chưa đăng nhập, chuyển hướng đến trang login
  if (!token) {
    return loginPage ? <LoginPage/> : <Navigate to="/login" replace />;
  }
  
  // Nếu cần quyền, kiểm tra vai trò
  if (requiredRole && userRole !== requiredRole && requiredRole !== "all") {
    return <Navigate to="/" replace />;
  }

  return children; // Nếu tất cả điều kiện thỏa mãn, hiển thị children
};

export default ProtectedRoute;
