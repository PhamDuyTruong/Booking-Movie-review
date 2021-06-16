import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailMovies } from "../../actions/detailMovie";
import PageLoading from "../pageLoading";
import CumRapChiTiet from '../cumRapChiTiet'

export default function MovieDetail(props) {
  const { movieId } = useParams();
  const { detailMovie, Loading, error } = useSelector(
    (state) => state.detailMovie
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovies(movieId));
  }, [movieId]);

  if (Loading) {
    return (
      <div className="container" style={{height:"850px", width:"100%", paddingTop:"200px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
              <PageLoading></PageLoading>;
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    ) 
  }
  if (error) {
    <div>{error}</div>;
  }
  const handleStar = (score) => {
    if (score > 0 && score <= 2) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
      );
    }
    if (score > 2 && score <= 4) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
      );
    }
    if (score > 4 && score <= 5) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-half"></i>
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
        </div>
      );
    }
    if (score > 5 && score <= 7) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star"></i>
        </div>
      );
    }
    if (score > 7 && score <= 10) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
      );
    }
    if (score > 10) {
      return (
        <div>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
      );
    }
  };

  return (
    <>
    <div className="container-fluid detailMovie">
      <div className="detail-background">
        <img
          src={detailMovie.hinhAnh}
          alt="Hinh anh"
          style={{ width: "100%", height: "850px", opacity: "0.8" }}
        />
      </div>
      <div
        className="style-gradient"
        style={{ overflow: "hidden", padding: 0 }}
      ></div>

      <div
        className="detail-container"
        style={{ width: "100%", overflowX: "hidden" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-8 d-flex" style={{ color: "#fff" }}>
            <div className="card-container">
            <img
              src={detailMovie.hinhAnh}
              alt="Hình ảnh"
              style={{ width: "200px", height: "250px", cursor: "pointer" }}
            />
            <button className="btn btn-cardmovie" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <span className="trailer-card" style={{fontWeight:"600"}}><i className="bi bi-play-fill"></i></span>
            </button>
            </div>
            <div className="movie-content px-3">
              <p className="movieName">{detailMovie.tenPhim}</p>
              <tr>
                <td className="px-2">Ngày khởi chiếu:</td>
                <td>{detailMovie.ngayKhoiChieu}</td>
              </tr>
              <tr>
                <td className="px-2">Thời gian:</td>
                <td>120 phút</td>
              </tr>
              <tr>
                <td className="px-2">Ngôn ngữ: </td>
                <td>Lồng tiếng Việt</td>
              </tr>
              <tr>
                <td className="px-2">Thể loại: </td>
                <td>Action, Adventurous, Humourous</td>
              </tr>
              <tr>
                <td className="px-2">Điểm IMDb: </td>
                <td>
                  <div className="imdbs">{detailMovie.danhGia}</div>
                </td>
              </tr>
            </div>
          </div>

          <div className="col-lg-6 col-md-4 detail-recommend">
            <h3 style={{ color: "#fff" }}>Đánh giá</h3>
            <div className="d-flex">
              <div className="danhGia">
                <h2>{detailMovie.danhGia} </h2>
              </div>
              <span
                style={{ fontWeight: "400", color: "#fff", fontSize: "30px" }}
              >
                /10
              </span>
            </div>
            {handleStar(detailMovie.danhGia)}
          </div>
        </div>
      </div>
      <div className="detail-content">
        <div className="row">
          <div className="col-9">
            <h2 style={{ color: "#fbbd61" }}>Thông tin phim</h2>
            <p style={{ color: "#fff" }}>{detailMovie.moTa}</p>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="detail-method">
          <div className="row">
            <div className="col-8 d-flex">
              <button className="detail-trailer btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Xem Trailer</button>

              <button className="detail-ticket btn">Mua Vé</button>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content" style={{width:"675px"}}>
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel" style={{fontWeight:"600", color:"#C62828"}}>
                {detailMovie.tenPhim}
              </h3>
              <button
                type="button"
                className="close close-trailer"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" style={{fontSize:"20px", fontWeight:"bold"}}>×</span>
              </button>
            </div>
            <div className="modal-body">
                <iframe src={detailMovie.trailer} width="630" height="580" style={{border:"1px, solid, #000"}}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CumRapChiTiet props={detailMovie}></CumRapChiTiet>
  </>
  );
}
