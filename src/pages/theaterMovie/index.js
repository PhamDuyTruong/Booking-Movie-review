import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTheaterMovie } from "../../actions/addTheaterMovie";
import { getDataTheater } from "../../actions/theaterMovieAction";
import PageLoading from "../pageLoading";


export default function TheaterMovie() {
  const { theater, isLoading, error } = useSelector(
    (state) => state.theaterMovie
  );
  const [active, setActive] = useState("bhd-star-cineplex-pham-hung");
  const {theaterMethod} = useSelector((state) => state.addTheater)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataTheater());
  }, []);

  if(isLoading){
    <PageLoading></PageLoading>
  }
  if(error){
    <div>{error}</div>
  }

  const handleAddMovie =(item, maCumRap) =>{
      dispatch(addTheaterMovie(item, maCumRap))
      setActive(maCumRap)
  }

  

  return (
    <div
      className="container-fluid py-5"
      style={{ width: "100%", height: "650px" }}
    >
      <div className="row" style={{ overflowY: "scroll", height: "600px" }}>
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-2 logo">
              {theater.map((item) => {
                return (
                  <div key={item.maCumRap} style={{ height: "70px" }}>
                    <img
                      src={item.logo}
                      alt="Hình ảnh"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="col-10 theaterDetail">
              {theater.map((item) => {
                return (
                  <div key={item.maHeThongRap}>
                    <div className="theater-content">
                      {item.lstCumRap.map((item) => {
                        return (
                          <>
                            <button
                              className={"d-flex py-4 button-theater " + (item.maCumRap === active ? "active" : " ")}
                              style={{ border: "none", background: "#fff", opacity:".5", cursor:"pointer" }}
                              onClick ={() => handleAddMovie(item.danhSachPhim, item.maCumRap)}
                            >
                              <img
                                src="./img/bhd-star-discovery.png"
                                alt="Hình ảnh"
                                style={{ width: "60px", height: "60px" }}
                              ></img>
                              <div className="theater-information px-3">
                                <h5>{item.tenCumRap}</h5>
                                <p
                                  style={{
                                    fontSize: "15px",
                                    marginBottom: "5px",
                                    color: "#949494",
                                  }}
                                >
                                  {item.diaChi.length < 6
                                    ? item.diaChi
                                    : item.diaChi.substring(0, 20) + "..."}
                                </p>
                                <a
                                  href="#"
                                  style={{
                                    textDecoration: "none",
                                    color: "#fb4226",
                                  }}
                                >
                                  Chi tiết
                                </a>
                              </div>
                            </button>
                          </>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
            {theaterMethod.map(item=>{
              return (
                <div key={item.maPhim} className="d-flex py-4" style={{borderBottom:"1px solid #dcdcdc"}}>
                  <img src={item.hinhAnh} alt ="Hình anh" style={{width:"60px", height:"60px"}}></img>
                  <div >
                      <h3 className="px-3" style={{fontSize:"20px"}}>{item.tenPhim}</h3>
                  </div>
                </div>
              )
            })}
         </div>
      </div>
    </div>
  );
}
