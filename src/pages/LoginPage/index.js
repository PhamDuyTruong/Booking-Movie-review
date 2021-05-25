import React from 'react'
import {Link} from 'react-router-dom'
export default function LoginPage() {
    return (
      <div className="container-fluid">
        <div
          className="login-background"
          style={{
            width: "100%",
            height: "850px",
            backgroundImage: "url('./img/backapp.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="row">
            <div className="col-lg-4 col-md-2"></div>
            <div className="col-lg-8 col-md-8">
              <div
                className="card card1"
                style={{ width: "500px", height: "680px" }}
              >
                <div className="row justify-content-center my-auto">
                  <div className="col-md-8 col-10 my-5">
                    <div className="row justify-content-center px-3 mb-3">
                      {" "}
                      <img
                        id="logo"
                        src="./img/web-logo.png"
                        style={{ width: "60px", height: "100%" }}
                      />{" "}
                    </div>
                    <h6 className="msg-info">Please login to your account</h6>
                    <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Username
                      </label>{" "}
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Phone or email id"
                        className="form-control"
                      />{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Password
                      </label>{" "}
                      <input
                        type="password"
                        id="psw"
                        name="psw"
                        placeholder="Password"
                        className="form-control"
                      />{" "}
                    </div>
                    <div className="row justify-content-center my-3 px-3">
                      {" "}
                      <button className="btn-block btn-color">
                        Login
                      </button>{" "}
                    </div>
                    <div className="row justify-content-center my-2">
                      {" "}
                      <Link to="/forgot">
                        <small className="text-muted">Forgot Password?</small>
                      </Link>{" "}
                    </div>
                  </div>
                </div>
                <div className="bottom text-center mb-5">
                  <p href="#" className="sm-text mx-auto mb-3 mr-3">
                    Don't have an account?
                    <button
                      className="btn btn-secondary ml-2"
                      style={{ borderRadius: "25px", marginLeft: "5px" }}
                    >
                      <Link to="/signup" style={{textDecoration:"none", color:"#fff"}}> Create New</Link>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    );
}
