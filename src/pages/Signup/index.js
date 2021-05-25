import React from "react";
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#fdfcf0" }}>
      <div className="row">
        <div className="col-6">
          <h3 className="mb-3 text-danger text-center">Registration Form</h3>
          <div className="form-group">
            {" "}
            <label className="form-control-label text-muted">
              Full Name
            </label>{" "}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              className="form-control"
            />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label className="form-control-label text-muted">Email</label>{" "}
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
            />{" "}
          </div>
          <div className="form-group">
            {" "}
            <label className="form-control-label text-muted">Phone</label>{" "}
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="form-control"
            />{" "}
          </div>
          <div className="input_field radio_option mb-3">
            <label className="form-control-label text-muted">Gender</label>
            <div className="d-flex">
              <input type="radio" name="radiogroup1" id="rd1" />
              <label htmlFor="rd1" style={{ marginRight: "20px" }}>
                Male
              </label>
              <input
                type="radio"
                name="radiogroup1"
                id="rd2"
                style={{ marginRight: "0.16em" }}
              />
              <label htmlFor="rd2">Female</label>
            </div>
          </div>
          <div className="form-group">
            {" "}
            <label className="form-control-label text-muted">
              Birthday
            </label>{" "}
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              required
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
              required
            />{" "}
          </div>
          <div className="input_field checkbox_option mt-3">
                <div className="d-flex">
                    <input type="checkbox" id="cb1" />
                    <label htmlFor="cb1">I agree with <Link to="/useterm" style={{textDecoration:"none",color:"#fb4226" }}>terms and conditions</Link></label>
                </div>
            </div>
            <div className="row justify-content-center my-3 px-3">
                      {" "}
                <button className="btn-block btn-signup">
                    Sign Up
                </button>{" "}
            </div>
        </div>
       

        <div className="col-6">
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
                  style={{ width: "150px", height: "620px" }}
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
