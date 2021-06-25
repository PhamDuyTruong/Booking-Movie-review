import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const handleHeaderWhenLogin = () => {
    // Handle Before Login: Only a Symbol and the letter Account
    // Handle After Login: A symbol and the user name, when hover the (symbol and name) appear the infouser, admin, logout, ...
    // If user is admin has a Link to admin page

    const userInfoInLocalStorage = JSON.parse(localStorage.getItem("userInfo"));
    // Handle Before Login
    console.log("userInfoInLocalStorage", userInfoInLocalStorage);
    if (!userInfoInLocalStorage) {
      return (
        <Link
          to="/login"
          style={{
            position: "absolute",
            textDecoration: "none",
            top: "10px",
            right: "15px",
            color: "rgba(0,0,0,.55)",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
          <span className="navbar-account" style={{ margin: "5px" }}>
            Account
          </span>
        </Link>
      );
    } else {
      return (
        <Link
          to="/userInfo"
          style={{
            position: "absolute",
            textDecoration: "none",
            top: "10px",
            right: "15px",
            color: "rgba(0,0,0,.55)",
            cursor: "pointer",
          }}
        >
          <i className="bi bi-person-circle" style={{ fontSize: "30px" }}></i>
          <span className="navbar-account" style={{ margin: "5px" }}>
            {userInfoInLocalStorage.taiKhoan}
          </span>
        </Link>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-left">
          <a className="navbar-brand" href="#">
            <img
              src="./img/web-logo.png"
              alt="Logo"
              style={{ width: "60px", height: "100%" }}
            ></img>
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMovie"
          aria-controls="navbarMovie"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div>
            <input
              type="checkbox"
              className="openSidebarMenu"
              id="openSidebarMenu"
            />
            <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
              <div className="spinner diagonal part-1" />
              <div className="spinner horizontal" />
              <div className="spinner diagonal part-2" />
            </label>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarMovie">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movie">What's on</Link>
            </li>
            <li className="nav-item">
              <Link to="/theater">Theaters</Link>
            </li>
            <li className="nav-item">
              <Link to="/">News</Link>
            </li>
            <li className="nav-item navAdd">{handleHeaderWhenLogin()}</li>
            <li className="nav-account">{handleHeaderWhenLogin()}</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
