import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { getInfoTheater } from "../../actions/infoTheater";

export default function CumRapChiTiet({scheduleItem}) {
  const { infoTheater, error } = useSelector((state) => state.info);
  const [active, setActive] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoTheater());
  }, []);
  if (error) {
    <div>{error}</div>;
  }

   console.log(scheduleItem)


  return (
    <div className="container-fluid py-3">
      <div
        className="row"
        style={{ width: "100%" }}
      >
        <div className="col-md-5 col-12">
          {scheduleItem.length !== 0 && scheduleItem.heThongRapChieu.map((info) => {
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
        <div className="col-md-7 col-12">
            <div className="row">
              
                {scheduleItem.length !== 0 && scheduleItem.heThongRapChieu.map(item => (
                  <>
                      {item.cumRapChieu.map(info => (
                        <>
                          <div className="col-md-3 col-6">
                              <img
                            className="my-3"
                            src={info.hinhAnh}
                            alt="Hình ảnh"
                            style={{ height: "110px", width: "110px" }}
                            ></img>
                            </div>
                            <div className="col-md-9 col-6">
                                <h3>{info.tenCumRap}</h3>
                                <p>{info.diaChi}</p>
                                <div>
                                  {info.lichChieuPhim.map(lich => (
                                    <div key={lich.maRap} className="col-md-3 col-6" style={{marginRight:"25px"}}>
                                    <Link to={`/ticketdetail/${lich.maLichChieu}`} style={{textDecoration:"none"}}>
                                    <p className="time-content" style={{color:"#ffbd61", fontSize:"20px", fontWeight:"bold"}}>{lich.ngayChieuGioChieu.substring(11,16)}</p>
                                    </Link>
                                  </div>
                                  ))}
                                </div>
                            </div>
                        </>
                      ))}
                  </>
                ))}
                </div>
            </div>
        </div>
      </div>
  );
}
