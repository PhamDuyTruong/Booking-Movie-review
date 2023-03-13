import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfoTheater } from "../../actions/infoTheater";
import { addShowtimeMovie } from "../../actions/showtimeAction";
import CategoryDate from "../CategoryDate";

export default function CumRapChiTiet(props) {
  const { infoTheater, error } = useSelector((state) => state.info);
  const { showtimeItem } = useSelector((state) => state.showtime);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoTheater());
  }, []);
  if (error) {
    <div>{error}</div>;
  }

  console.log(infoTheater)

  const handleShowtimes = (item, id) => {
    dispatch(addShowtimeMovie(item, id));
    setActive(id);
  };
  let newNgay = [];
  function pushNgay(item) {
    newNgay.push(item);
  }
  // Dùng để láy thứ trong tuần nhằm render ra phim tương ứng 
  function getday(item) {
    let ngay = new Date(item);
    let thu = ngay.getDay();

    return thu;
  }

  return (
    <div className="container-fluid py-3">
      <div
        className="row"
        style={{ width: "100%", height: "750px", overflowY: "scroll" }}
      >
        <div className="col-md-5 col-12">
          {infoTheater.map((info) => {
            return (
              <button
                className={
                  "d-flex py-3 button-theater " +
                  (info.maHeThongRap === active ? "active" : " ")
                }
                style={{
                  border: "none",
                  background: "#fff",
                  opacity: ".5",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShowtimes(props.lichChieu, info.maHeThongRap)
                }
              >
                <img
                  className="my-3"
                  src={info.logo}
                  alt="Hình ảnh"
                  style={{ height: "70px", width: "70px" }}
                ></img>
                <div className="info-content">
                  <h3 className="px-2 pt-3" style={{ fontSize: "22px" }}>
                    {info.tenHeThongRap}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>
        {showtimeItem && showtimeItem.length === 0 ? (
          <div className="col-md-7 col-12 pt-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link active"
                  id="Mon-tab"
                  data-bs-toggle="tab"
                  href="#Mon"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 2
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Tue-tab"
                  data-bs-toggle="tab"
                  href="#Tue"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 3
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Wed-tab"
                  data-bs-toggle="tab"
                  href="#Wed"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 4
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Thu-tab"
                  data-bs-toggle="tab"
                  href="#Thu"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 5
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Fri-tab"
                  data-bs-toggle="tab"
                  href="#Fri"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 6
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Sat-tab"
                  data-bs-toggle="tab"
                  href="#Sat"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 7
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Sun-tab"
                  data-bs-toggle="tab"
                  href="#Sun"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Chủ nhật
                </a>
              </li>
            </ul>
            <p
              style={{ color: "#dcdcdc", paddingTop: "17px", fontSize: "17px" }}
            >
              Hiện chưa có phim. Xin quý khách thông cảm
            </p>
          </div>
        ) : (
          <div className="col-md-7 col-12 pt-4">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link active"
                  id="Mon-tab"
                  data-bs-toggle="tab"
                  href="#Mon"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 2
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Tue-tab"
                  data-bs-toggle="tab"
                  href="#Tue"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 3
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Wed-tab"
                  data-bs-toggle="tab"
                  href="#Wed"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 4
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Thu-tab"
                  data-bs-toggle="tab"
                  href="#Thu"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 5
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Fri-tab"
                  data-bs-toggle="tab"
                  href="#Fri"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 6
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Sat-tab"
                  data-bs-toggle="tab"
                  href="#Sat"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Thứ 7
                </a>
              </li>
              <li className="nav-item " role="presentation">
                <a
                  className="nav-link"
                  id="Sun-tab"
                  data-bs-toggle="tab"
                  href="#Sun"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ marginRight: "5px", fontSize: "20px" }}
                >
                  Chủ nhật
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Mon"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 1) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Tue"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 2) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Wed"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 3) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Thu"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 4) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Fri"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 5) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Sat"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 6) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
              <div
                className="tab-pane fade"
                id="Sun"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {showtimeItem.map((item, index) => {
                  if (getday(item.ngayChieuGioChieu.substring(0, 10)) === 0) {
                    {
                      pushNgay(item.ngayChieuGioChieu.substring(11, 16));
                    }
                    return (
                      <div key={index}>
                        <CategoryDate  item={item} ngay={newNgay} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
