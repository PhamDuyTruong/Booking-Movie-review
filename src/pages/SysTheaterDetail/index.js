import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addSysMovie } from '../../actions/addSysMovieAction';
import { handleButton } from '../../actions/handleDetailButton';
import { getInfoSystemTheater } from '../../actions/infoSystemTheaterAction';
import PageLoading from "../pageLoading";
export default function SysTheaterDetail(props) {

    const {theaterId} = useParams();
    const [active, setActive] = useState("");
    const {sysTheater, Loading, error} = useSelector((state) => state.sysTheaterMovie);
    const {SystemMovie} = useSelector((state) => state.addSysMovie);
    const {name, address} = useSelector((state) => state.button)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInfoSystemTheater(theaterId))
    }, [theaterId]);
    console.log(sysTheater);
    const handleDetailButton =(ten, diaChi) =>{
        dispatch(handleButton(ten, diaChi))
    }

    console.log(name);
    const handleAddSysMovie =(item, id)=>{
        dispatch(addSysMovie(item, id))
        setActive(id)
    }
    console.log(SystemMovie);

    if (Loading) {
        return (
          <div className="container" style={{height:"850px", width:"100%", paddingTop:"200px"}}>
            <div className="row">
              <div className="col-4"></div>
              <div className="col-6">
                  <PageLoading />
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        ) 
      }
      if (error) {
        <div>{error}</div>;
      }
    return (
      <>
      {name == null && address == null ? <div className="sysTheater-background" style={{position:"relative"}}>
   
   <div className="context">
     <h1 style={{fontWeight:"400"}}>Tix là nơi để bạn giải trí </h1>
   </div>

   <div className="area">
     <ul className="circles">
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       </ul>
     </div>
   </div>:

    <div className="background-content">
      <div className="image-background" style={{position:"relative"}}>
        <img src="../img/Cumrap.jpg" alt="Hình ảnh" style={{width:"100%", height:"350px", opacity:".8"}}>
        </img>
      </div>
        <div className="button-gradient">
        </div>
        <div className="system-container" style={{width:"100%"}}>
            <div className="row">
              <div className="col-lg-6 col-md-8 d-flex">
                  <img src="../img/Cumrap.jpg" alt="Hình ảnh" style={{width:"150px", height:"150px"}}></img>
                  <div className="system-content px-2" style={{color:"#fff"}}>
                      <h3>{name}</h3>
                      <p>{address}</p>
                  </div>
              </div>
              <div className="col-lg-6 col-md-4">

              </div>
            </div>
        </div>
    </div>
   }
       
        <div className="container-fluid py-4">
            <div className="row " style={{width:"100%", height:"750px", overflowY:"scroll"}}>
                <div className="col-md-5 col-12">
                    {sysTheater.map((item, index) =>{
                      return(
                      <div key={index}>
                      {item.lstCumRap.map((item,index) =>{
                        return (
                          <>
                          <button
                            key={index}
                            className={"d-flex py-3 sysTheater-content " + (item.maCumRap === active ? "active" : " ")}
                            style={{ border: "none", background: "#fff", opacity:".5" }}
                            onClick={() =>
                              handleAddSysMovie(
                                item.danhSachPhim,
                                item.maCumRap
                              )
                            }
                          >
                            <img
                              src="../img/Cumrap.jpg"
                              alt="Hình ảnh"
                              style={{ width: "70px", height: "70px" }}
                            ></img>
                            <div className="px-2">
                              <h5 style={{ fontSize: "20px" }}>
                                {item.tenCumRap}
                              </h5>
                              <p style={{ color: "#dcdcdc" }}>
                                {" "}
                                {item.diaChi.length < 6
                                  ? item.diaChi
                                  : item.diaChi.substring(0, 20) + "..."}
                              </p>
                              <button
                              className="sysTheater-button "
                              onClick={() => handleDetailButton(item.tenCumRap, item.diaChi)}
                            >
                                Chi tiết
                            </button>
                            </div>
                          </button>
                         </>
                        );
                      })
                        
                      }
                      </div>
                      )
                    })}
                </div>
                {SystemMovie.length ==0 ?<div className="col-md-7 col-12" style={{color:"#dcdcdc"}}> Vui lòng chọn cụm rạp  </div>
                :
                <div className="col-md-7 col-12">
                    {SystemMovie.map((item,index)=>{
                      return (
                        <div
                          key={index}
                          className="py-4 sysMovie-container "
                          style={{ borderBottom: "1px solid #dcdcdc" }}
                        >
                          <div className="d-flex">
                            <img
                              src={item.hinhAnh}
                              alt="Hình anh"
                              style={{ width: "60px", height: "60px" }}
                            ></img>
                            <div>
                              <h3 className="px-3" style={{ fontSize: "20px" }}>
                                {item.tenPhim}
                              </h3>
                              <div
                                className="d-flex"
                                style={{ color: "#dcdcdc" }}
                              >
                                <p className="px-3">120 phút</p>
                                <p>IMDb: 10</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
                }
                      
             
            </div>
        </div>
      </>
    );
}
