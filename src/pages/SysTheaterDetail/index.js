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
    }, [theaterId])

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
        <div>
            Đây là chi tiết hệ thống rạp
        </div>
    )
}
