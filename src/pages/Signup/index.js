import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupAction } from "../../actions/signupAction";
import * as yup from "yup";

// Regex phone number
const regexVNPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

// Tạo schame validation
const schema = yup.object().shape({
  account: yup.string().required("Tài khoản không được để trống !"),
  fullName: yup.string().required("Tên không được để trống !"),
  email: yup
    .string()
    .required("Email không được để trống !")
    .email("Email sai định dạng !"),
  phone: yup
    .string()
    .required("Số điện thoại không được để trống !")
    .matches(regexVNPhoneNumber, "Số điện thoại sai định dạng !"),
  password: yup.string().required("Mật khẩu không được để trống !"),
  retypePassword: yup
    .string()
    .required("Số điện thoại không được để trống !")
    .oneOf([yup.ref("password"), null], "Mật khẩu không khớp"),
});

export default function Signup() {
  // Create variable dispatch and useSelector signup
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.signup);

  // Variable for form
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Handle CheckBox
  const [isChecked, setIsChecked] = useState(false);
  const handleChangeCheckBox = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  // Handle SignUp and dispatch action SignUp
  const handleSignUp = (value) => {
    // ObjSignUp is a object when call API and dispatch this obj for BE
    const ObjSignUp = {
      taiKhoan: value.account,
      matKhau: value.password,
      email: value.email,
      soDt: value.phone,
      maNhom: "GP10",
      maLoaiNguoiDung: "KhachHang",
      hoTen: value.fullName,
    };
    console.log("value", value);
    console.log("ObjSignUp", ObjSignUp);
    // check is true -> dispatch action
    if (isChecked) {
      dispatch(signupAction(ObjSignUp));
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: "#fdfcf0" }}>
      <div className="row">
        <form className="col-5" onSubmit={handleSubmit(handleSignUp)}>
          <h3 className="mb-3 text-danger text-center">Đăng ký</h3>
          <div className="form-group">
            <label className="form-control-label text-muted">Tài khoản</label>
            <input
              type="text"
              id="account"
              name="account"
              placeholder="Account"
              className="form-control"
              {...register("account")}
            />
            {errors.account && (
              <div className="alert alert-danger mt-3">
                {errors.account.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-control-label text-muted">Họ tên</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="form-control"
              {...register("fullName")}
            />
            {errors.fullName && (
              <div className="alert alert-danger mt-3">
                {errors.fullName.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-control-label text-muted">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
              {...register("email")}
            />
            {errors.email && (
              <div className="alert alert-danger mt-3">
                {errors.email.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-control-label text-muted">SĐT</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-control"
              {...register("phone")}
            />
            {errors.phone && (
              <div className="alert alert-danger mt-3">
                {errors.phone.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-control-label text-muted">Mật khẩu</label>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Password"
              className="form-control"
              {...register("password")}
            />
            {errors.password && (
              <div className="alert alert-danger mt-3">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="form-control-label text-muted">
              Nhập lại mật khẩu
            </label>
            <input
              type="password"
              id="psw"
              name="psw"
              placeholder="Retype Password"
              className="form-control"
              {...register("retypePassword")}
            />
            {errors.retypePassword && (
              <div className="alert alert-danger mt-3">
                {errors.retypePassword.message}
              </div>
            )}
          </div>
          <div className="input_field checkbox_option mt-3">
            <div className="d-flex">
              <input
                type="checkbox"
                id="cb1"
                defaultChecked={isChecked}
                onChange={handleChangeCheckBox}
              />
              <label htmlFor="cb1">
                Tôi đồng ý
                <Link
                  to="/useterm"
                  style={{ textDecoration: "none", color: "#fb4226", paddingLeft:"5px" }}
                >
                   các điều khoản
                </Link>
              </label>
            </div>
          </div>
          {!isChecked && (
            <div className="alert alert-danger mt-3">
               Làm ơn hãy chấp nhận các điều khoản !
            </div>
          )}
          {error && <div className="alert alert-danger mt-3">{error}</div>}
          <div className="row justify-content-center my-3 px-3">
            <button className="btn-block btn-signup" type="submit">
              Đăng ký
            </button>
          </div>
        </form>

        <div className="col-7">
          <div
            id="carouselSignup"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                data-bs-target="#carouselSignup"
                data-bs-slide-to={0}
                className="active"
              ></button>
              <button
                data-bs-target="#carouselSignup"
                data-bs-slide-to={1}
              ></button>
              <button
                data-bs-target="#carouselSignup"
                data-bs-slide-to={2}
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="./img/thanhvien1.jpg"
                  alt="Thành viên 1"
                  style={{ width: "150px", height: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/Thanhvien2.jpg"
                  alt="Thành viên 2"
                  style={{ width: "150px", height: "600px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="./img/Thanhvien3.jpg"
                  alt="Thành viên 3"
                  style={{ width: "150px", height: "600px" }}
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselSignup"
              role="button"
              data-bs-slide="prev"
            >
              <span class="carousel-prev-icon" style={{ fontWeight: "bold" }}>
                <i
                  class="bi bi-chevron-left"
                  style={{ fontSize: "30px", color: "#000" }}
                ></i>
              </span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselSignup"
              role="button"
              data-bs-slide="next"
            >
              <span class="carousel-next-icon">
                <i
                  class="bi bi-chevron-right"
                  style={{ fontSize: "30px", color: "#000" }}
                ></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
