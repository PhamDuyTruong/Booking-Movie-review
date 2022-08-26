import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'
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
                    <img
                      id="logo"
                      src="./img/web-logo.png"
                      style={{ width: "60px", height: "100%" }}
                    />
                  </div>
                  <h6 className="text-center">Hãy đăng nhập tài khoản của bạn</h6>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Tài khoản
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Account"
                      className="form-control"
                      {...register("taiKhoan")}
                    />
                    {errors.taiKhoan && (
                      <div className="alert alert-danger mt-3">
                        {errors.taiKhoan.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      className="form-control"
                      {...register("matKhau")}
                    />
                    {errors.matKhau && (
                      <div className="alert alert-danger mt-3">
                        {errors.matKhau.message}
                      </div>
                    )}
                  </div>
                  <div className="row justify-content-center px-3">
                    <button className="btn-block btn-color" type="submit">
                      Đăng nhập
                    </button>
                  </div>
                  <div className="row justify-content-center my-2">
                    <Link to="/forgot" className="text-center">
                      <small className="text-muted">Quên mật khẩu?</small>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bottom text-center">
                <p href="#" className="sm-text mx-auto mb-3 mr-3">
                  Không có tài khoản?
                  <button
                    className="btn btn-secondary ml-2"
                    style={{ borderRadius: "15px", marginLeft: "5px" }}
                  >
                    <Link
                      to="/signup"
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      Đăng ký
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
