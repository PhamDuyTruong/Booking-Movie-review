import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminRoute({ children, ...props }) {
  //   const { dataLogin } = useSelector((state) => state.login);

  const dataLogin = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  // Chưa đăng nhập
  if (!dataLogin) {
    return <Redirect to="/login" />;
  }

  return <Route {...props}>{children}</Route>;
}
