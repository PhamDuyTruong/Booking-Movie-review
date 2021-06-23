import React from "react";
import { Link } from "react-router-dom";

export default function CategoryDate({ item, ngay }) {
  return (
    <>
      <button
        key={item.maRap}
        className="d-flex pt-4"
        style={{
          border: "none",
          background: "#fff",
          height: "135px",
        }}
      >
        <img
          src="../img/bhd-star-discovery.png"
          alt="Hình ảnh"
          style={{ width: "70px", height: "70px" }}
        ></img>
        <Link
          to={`/theaterdetail/${item.thongTinRap.maHeThongRap}`}
          style={{ textDecoration: "none" }}
        >
          <div className="showtime-detail">
            <h3 className="px-2" style={{ fontSize: "22px" }}>
              {item.thongTinRap.tenCumRap}
            </h3>
            <p className="px-2" style={{ fontSize: "15px", color: "#dcdcdc" }}>
              Ngày chiếu: {item.ngayChieuGioChieu.substring(8, 10)}-
              {item.ngayChieuGioChieu.substring(5, 7)}-
              {item.ngayChieuGioChieu.substring(0, 4)}
            </p>
          </div>
        </Link>
      </button>
      <div
        className="cumRap-time"
        style={{ borderBottom: "1px solid #dcdcdc" }}
      >
        <div className="row">
          <div className="col-lg-3 col-6">
            <p
              style={{ color: "#ffbd61", fontSize: "20px", fontWeight: "bold" }}
            >
              {item.ngayChieuGioChieu.substring(11, 16)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
