import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getInfoSystemTheater } from '../../actions/infoSystemTheaterAction';
import PageLoading from "../pageLoading";
export default function SysTheaterDetail(props) {

    const {theaterId} = useParams();
    const {sysTheater, Loading, error} = useSelector((state) => state.sysTheaterMovie)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInfoSystemTheater(theaterId))
    }, [theaterId]);
    console.log(sysTheater);

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
        <div className="sysTheater-background" style={{position:"relative"}}>
   
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
        </div>
        <div className="container-fluid py-4">
            <div className="row " style={{width:"100%", height:"750px", overflowY:"scroll"}}>
                <div className="col-md-5 col-12">
                    {sysTheater.map((item, index) =>{
                      return(
                        <button key={index} className="d-flex py-3 sysTheater-content" style={{border:"none", background:"#fff"}}>
                          <img src="../img/Cumrap.jpg" alt="Hình ảnh" style={{width:"70px", height:"70px"}}></img>
                          <h5 style={{fontSize:"20px"}}>{item.tenCumRap}</h5>
                        </button>
                      )
                    })}
                </div>
                <div className="col-md-7 col-12">

                </div>
            </div>
        </div>
      </>
    );
}
