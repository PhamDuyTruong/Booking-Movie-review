import React from "react";
import { Link } from "react-router-dom";
import { getDetailMovies } from "../../actions/detailMovie";

import MovieDetail from "../MovieDetail";
export default function CardMovie({ props }) {
  return (
    <>
      <div key={props.maPhim} className="card card-movie mb-4">
        <div className="detailButton pl-0">
          <img
            className="card-img-top"
            src={props.hinhAnh}
            alt="Phim "
            style={{ width: "214px", height: "250px", cursor: "pointer" }}
          ></img>
          <div className="buttonContent">
            <Link
              to={`/moviedetail/${props.maPhim}`}
              className="btn-detail pt-0"
            >
              Chi tiết
            </Link>
          </div>
        </div>

        <div className="card-body" style={{ height: "100px" }}>
          <h4 className="card-title" style={{ fontSize: "20px" }}>
            {props.tenPhim}
          </h4>
          <div className="card-text">
            <div className="row" style={{ fontWeight: "300" }}>
              <div className="col-6">120 phút</div>
              <div className="col-6">{props.danhGia} IMDb</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
