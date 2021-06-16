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
  console.log(theaterMethod);
  

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
                                <a className="theater-detail"
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
        {theaterMethod.length == 0? <div className="col-md-6 col-12" style={{color:"#dcdcdc"}}>
              Vui lòng chọn cụm rạp
        </div> :
        <div className="col-md-6 col-12">
            {theaterMethod.map(item=>{
              return (
                <div key={item.maPhim} className="py-4 theater-container" style={{borderBottom:"1px solid #dcdcdc"}}>
                  <div className="d-flex">
                  <img src={item.hinhAnh} alt ="Hình anh" style={{width:"60px", height:"60px"}}></img>
                  <div >
                      <h3 className="px-3" style={{fontSize:"20px"}}>{item.tenPhim}</h3>
                      <div className="d-flex" style={{color:"#dcdcdc"}}>
                        <p className="px-3">120 phút</p>
                        <p>IMDb: 10</p>
                      </div>
                  </div>
                </div>
              <div className="time">
                  <div className="row">
                    { (item.lstLichChieuTheoPhim && item.lstLichChieuTheoPhim.length < 7) ? item.lstLichChieuTheoPhim.map(item=>{
                       return (
                         
                        <div className="col-lg-3 col-6">
                          <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>   
                        </div> 
                                         
                       )
                    }):
                  
                    <>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          10:10
                      </div>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          12:10
                      </div>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          14:10
                      </div>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          16:10
                      </div>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          18:10
                      </div>
                      <div className="col-lg-3 col-6" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>
                          20:10
                      </div>
                    </>
                    }
                  </div>
              </div>
              </div>
              )
            })}
         </div>}
      </div>
    </div>
  );
}
