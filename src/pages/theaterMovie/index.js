import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTheaterMovie } from "../../actions/addTheaterMovie";
import { getDataTheater } from "../../actions/theaterMovieAction";
import PageLoading from "../pageLoading";
import '../../Styles/customArrow.scss'


export default function TheaterMovie() {
  const { theater, isLoading, error } = useSelector(
    (state) => state.theaterMovie
  );
  const [active, setActive] = useState("");
  const { theaterMethod } = useSelector((state) => state.addTheater);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataTheater());
  }, []);

  if (isLoading) {
    <PageLoading></PageLoading>;
  }
  if (error) {
    <div>{error}</div>;
  }

  const handleAddMovie = (item, maCumRap) => {
    dispatch(addTheaterMovie(item, maCumRap));
    setActive(maCumRap);
  };
  // Dùng để lấy ngày nhằm render ra phim tương ứng
  function getday(item){
    let ngay = new Date(item);
    let thu = ngay.getDay();

    return thu
}

  return (
    // <div style={{paddingTop:"50px"}}>
    //     <div class="container-fluid py-4" style={{position:"relative"}}>
    //     <div class="content">
    //       <p>Nhấn vào đây !</p>
    //       <svg id="more-arrows">
    //         <polygon
    //           class="arrow-top"
    //           points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
    //         />
    //         <polygon
    //           class="arrow-middle"
    //           points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
    //         />
    //         <polygon
    //           class="arrow-bottom"
    //           points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
    //         />
    //       </svg>
    //     </div>
    //   </div>
    //   <div
    //     className="container-fluid py-3"
    //     style={{ width: "100%", height: "650px" }}
    //   >
    //     <div className="row tm-content" style={{ overflowY: "scroll", scrollBehavior:"smooth", height: "600px" }}>
    //       <div className="col-md-6 col-12">
    //         <div className="row">
    //           <div className="col-2 logo">
    //             {theater.map((item) => {
    //               return (
    //                 <button
    //                   className="logo-theater"
    //                   key={item.maCumRap}
    //                   style={{
    //                     height: "70px",
    //                     border: "none",
    //                     background: "#fff",
    //                     opacity: ".5",
    //                   }}
    //                 >
    //                   <Link to={`/theaterdetail/${item.maHeThongRap}`}>
    //                     <img
    //                       src={item.logo}
    //                       alt="Hình ảnh"
    //                       style={{ width: "50px", height: "50px" }}
    //                     />
    //                   </Link>
    //                 </button>
    //               );
    //             })}
    //           </div>
    //           <div className="col-10 theaterDetail">
    //             {theater.map((item) => {
    //               return (
    //                 <div key={item.maHeThongRap}>
    //                   <div className="theater-content">
    //                     {item.lstCumRap.map((item, index) => {
    //                       return (
    //                         <>
    //                           <button
    //                             key={index}
    //                             className={
    //                               "d-flex py-4 button-theater " +
    //                               (item.maCumRap === active ? "active" : " ")
    //                             }
    //                             style={{
    //                               border: "none",
    //                               background: "#fff",
    //                               opacity: ".5",
    //                               cursor: "pointer",
    //                             }}
    //                             onClick={() =>
    //                               handleAddMovie(
    //                                 item.danhSachPhim,
    //                                 item.maCumRap
    //                               )
    //                             }
    //                           >
    //                             <img
    //                               src="./img/bhd-star-discovery.png"
    //                               alt="Hình ảnh"
    //                               style={{ width: "60px", height: "60px" }}
    //                             ></img>
    //                             <div className="theater-information px-3">
    //                               <h5>{item.tenCumRap}</h5>
    //                               <p
    //                                 style={{
    //                                   fontSize: "15px",
    //                                   marginBottom: "5px",
    //                                   color: "#949494",
    //                                 }}
    //                               >
    //                                 {item.diaChi.length < 6
    //                                   ? item.diaChi
    //                                   : item.diaChi.substring(0, 20) + "..."}
    //                               </p>
    //                               <a
    //                                 className="theater-detail"
    //                                 data-bs-toggle="tooltip" data-bs-placement="top" title="09191919191"
    //                                 href="#"
    //                                 style={{
    //                                   textDecoration: "none",
    //                                   color: "#fb4226",
    //                                 }}
    //                               >
    //                                 Liên hệ Tix
    //                               </a>
    //                             </div>
    //                           </button>
    //                         </>
    //                       );
    //                     })}
    //                   </div>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //       {theaterMethod.length === 0 ? (
    //         <div className="col-md-6 col-12" style={{ color: "#dcdcdc" }}>
    //           Vui lòng chọn cụm rạp
    //         </div>
    //       ) : (
    //         <div className="col-md-6 col-12">
    //           {theaterMethod.map((item) => {
    //             return (
    //               <div
    //                 key={item.maPhim}
    //                 className="py-4 theater-container"
    //                 style={{ borderBottom: "1px solid #dcdcdc" }}
    //               >
    //                 <div className="d-flex">
    //                   <img
    //                     src={item.hinhAnh}
    //                     alt="Hình anh"
    //                     style={{ width: "60px", height: "60px" }}
    //                   ></img>
    //                   <div>
    //                     <h3 className="px-3" style={{ fontSize: "20px" }}>
    //                       {item.tenPhim}
    //                     </h3>
    //                     <div className="d-flex" style={{ color: "#dcdcdc" }}>
    //                       <p className="px-3">120 phút</p>
    //                       <p>IMDb: 10</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Mon: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===1){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                  <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                     <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                   </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Tue: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===2){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                 <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                 <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                 </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Wed: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===3){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                 <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                    <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                 </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Thu: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===4){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                 <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                   <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                 </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Fri: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===5){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                 <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                     <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                 </Link>
    //                               </div>

    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Sat: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===6){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                 <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                     <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                 </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="time d-flex">
    //                         <div className="hour">
    //                           <p className="px-2" style={{color:"#fb4226", fontSize:"20px", fontWeight:"bold"}}>Sun: </p>
    //                         </div>
    //                         <div className="hour-container">
    //                           <div className="row">
                         
    //                             {item.lstLichChieuTheoPhim.map((item, index) =>{
    //                               if(getday(item.ngayChieuGioChieu.substring(0,10))===0){
    //                               return (
    //                               <div key={index} className="col-md-3 col-6" style={{marginRight:"25px"}}>
    //                                  <Link to={`/ticketdetail/${item.maLichChieu}`} style={{textDecoration:"none"}}>
    //                                     <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{item.ngayChieuGioChieu.substring(11,16)}</p>
    //                                   </Link>
    //                               </div>
    //                               )
    //                             }})}

    //                           </div>
    //                         </div>
    //                       </div>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
}
