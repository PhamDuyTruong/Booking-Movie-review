import React from 'react'
import {Link} from 'react-router-dom'
import MovieDetail from '../MovieDetail'
export default function CardMovie({props}) {
    

  const handleDetail = (props) =>{
        <Link to="/moviedetail/:{props.maPhim}">
            <MovieDetail props={props}/>
        </Link>
  }

    return (
        <>
        <div key={props.maPhim} className="card card-movie mb-4">
        <img
          className="card-img-top"
          src={props.hinhAnh}
          alt="Phim "
          style={{ width: "214px", height: "250px", cursor: "pointer" }}
        ></img>
        
        <div className="card-body" style={{height: "100px"}}>
          <h4 className="card-title">{props.tenPhim}</h4>
          <div className="card-text">
            <div className="row">
              <div className="col-6">100 phút</div>
              <div className="col-6">
                <div  className="btn-detail pt-0" onClick={()=> handleDetail(props)}>Chi tiết</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
