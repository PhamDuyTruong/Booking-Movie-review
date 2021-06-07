import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom'
import { getDetailMovies } from '../../actions/detailMovie';

export default function MovieDetail(props) {
    const {movieId} = useParams();
    const {detailMovie, Loading, error} = useSelector((state) => state.detailMovie);
    console.log(detailMovie);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailMovies(movieId))
        
    }, [movieId])

    if(Loading){
        return <div>Loading...</div>
      }
      if(error){
          <div>{error}</div>
      }
      const handleStar=(score) =>{
            if(score > 0 && score <= 2){
                return (
                    <div>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star"></i>
                    </div>
                )
            }
            if(score > 2 && score <= 4){
                return (
                    <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    </div>
                )
            }
            if(score > 4 && score <= 5){
                return (
                    <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    </div>
                )
            }
            if(score > 5 && score <= 7){
                return (
                    <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                    </div>
                )
            }
            if(score > 7 && score <= 10){
                return (
                    <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    </div>
                )
            }
            if(score > 10){
                return(
                <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                </div>
                )
            }
      }

    return (
        <div className="container-fluid detailMovie">
            <div className="detail-background" >
                <img src={detailMovie.hinhAnh} alt="Hinh anh" style={{width:"100%", height:"850px", opacity:"0.8"}}/>
               
            </div>
            <div className="style-gradient" style={{overflow:"hidden", padding:0}}></div>
           
            <div className="detail-container" style={{width:"100%", overflowX:"hidden"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-8 d-flex" style={{color:"#fff"}}>
                        <img src={detailMovie.hinhAnh} alt="Hình ảnh" style={{width:"200px", height:"250px", cursor:"pointer"}} />
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
                                <td >
                                    <div className="imdbs">{detailMovie.danhGia}</div>
                                    
                                    </td>
                            </tr>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-4">
                        <h3 style={{color:"#fff"}}>Đánh giá</h3>
                        <div className="d-flex">
                        <div className="danhGia">
                            <h2>{detailMovie.danhGia} </h2>
                        </div>
                        <span style={{fontWeight:"400", color:"#fff", fontSize:"30px"}}>/10</span>
                        </div>
                        {handleStar(detailMovie.danhGia)}
                    </div>
                </div>

            </div>
            <div className="detail-content">
                <div className="row">
                    <div className="col-9">
                        <h2 style={{color:"#fbbd61"}}>Thông tin phim</h2>
                        <p style={{color:"#fff"}}>{detailMovie.moTa}</p>
                    </div>
                    <div className="col-3">
                        
                    </div>
                </div>
                <div className="detail-method">
                    <div className="row">
                        <div className="col-8 d-flex">
                            <button className="detail-trailer btn">
                                Xem Trailer
                            </button>
                            <button className="detail-ticket btn">
                                Mua Vé
                            </button>
                        </div>
                        <div className="col-4">

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
