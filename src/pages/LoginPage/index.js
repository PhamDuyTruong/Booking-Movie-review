import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginAction } from "../../actions/loginAction";
import * as yup from "yup";

// Tạo schame validation
const schema = yup.object().shape({
  taiKhoan: yup.string().required("Account can not be blank"),
  matKhau: yup.string().required("Password can not be blank"),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleLogin = (value) => {
    dispatch(loginAction(value));
  };

  return (
    <div
      className="login-background"
      style={{
        width: "100%",
        backgroundImage: "url('./img/backapp.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-12"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px",
            }}
          >
            <form className="cardLogin" onSubmit={handleSubmit(handleLogin)}>
              <div className="row justify-content-center my-auto">
                <div className="col-md-8 col-10">
                  <div className="row justify-content-center px-3 mb-3">
                    {" "}
                    <img
                      id="logo"
                      src="./img/web-logo.png"
                      style={{ width: "60px", height: "100%" }}
                    />{" "}
                  </div>
                  <h6 className="text-center">Please login to your account</h6>
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Username
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Phone or email"
                      className="form-control"
                      {...register("taiKhoan")}
                    />{" "}
                    {errors.taiKhoan && (
                      <div className="alert alert-danger mt-3">
                        {errors.taiKhoan.message}
                      </div>
                    )}
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
                      {...register("matKhau")}
                    />{" "}
                    {errors.matKhau && (
                      <div className="alert alert-danger mt-3">
                        {errors.matKhau.message}
                      </div>
                    )}
                  </div>
                  <div className="row justify-content-center px-3">
                    {" "}
                    <button className="btn-block btn-color" type="submit">
                      Login
                    </button>{" "}
                  </div>
                  <div className="row justify-content-center my-2">
                    {" "}
                    <Link to="/forgot" className="text-center">
                      <small className="text-muted">Forgot Password?</small>
                    </Link>{" "}
                  </div>
                </div>
              </div>
              <div className="bottom text-center">
                <p href="#" className="sm-text mx-auto mb-3 mr-3">
                  Don't have an account?
                  <button
                    className="btn btn-secondary ml-2"
                    style={{ borderRadius: "15px", marginLeft: "5px" }}
                  >
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      {" "}
                      Create New
                    </Link>
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
