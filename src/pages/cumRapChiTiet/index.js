import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getInfoTheater } from '../../actions/infoTheater';
import { addShowtimeMovie } from '../../actions/showtimeAction';


export default function CumRapChiTiet({props}) {
   
    const {infoTheater, error} = useSelector((state) => state.info);
    const {showtimeItem} = useSelector((state) => state.showtime)
    const [active, setActive] = useState("BHDStar")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInfoTheater())
    }, [])
    if(error){
        <div>{error}</div>
    }
  
    console.log(showtimeItem);


    const handleShowtimes = (item,id) =>{
        console.log(id);
        dispatch(addShowtimeMovie(item, id));
        setActive(id)

    }
    function deduplicate(arr) {
        let isExist = (arr, x) => {
          for(let i = 0; i < arr.length; i++) {
            if (arr[i].thongTinRap.tenCumRap === x.thongTinRap.tenCumRap) return true;
          }
          return false;
        }
      
        let newShowtime = [];
        arr.forEach(element => {
          if(!isExist(newShowtime, element)) newShowtime.push(element);
        });
        return newShowtime;
      }

      function getday(item){
          let ngay = new Date(item);
          let thu = ngay.getDay();

          return thu
      }

    return (
      <div className="container-fluid py-3">
        <div className="row" style={{ width: "100%", height: "750px" }}>
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
                  style={{ marginRight: "10px" }}
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
                >
                  Thứ 3
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
                {showtimeItem.map((item) => {
                    if(getday(item.ngayChieuGioChieu.substring(0,10))==1){
                            return (
                                <button
                                  className="d-flex pt-2 showtime-content"
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
                                  <div className="showtime-detail">
                                    <h3 className="px-2" style={{ fontSize: "22px" }}>
                                      {item.thongTinRap.tenCumRap}
                                    </h3>
                                  </div>
                                </button>
                              );
                    }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
