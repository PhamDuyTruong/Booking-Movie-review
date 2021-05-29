import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getDataMovies} from '../../actions/movieActions'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Movie() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const {movies, isLoading, error} = useSelector((state) => state.movie);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(getDataMovies());
        }
    }, [])
    console.log(movies);
    console.log(window.innerWidth);
  

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

    return (
      <div className="container mb-3" id="showtime">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item " role="presentation">
            <a
              className="nav-link active"
              id="On-tab"
              data-bs-toggle="tab"
              href="#On"
              role="tab"
              aria-controls="home"
              aria-selected="true"
              style={{ marginRight: "10px" }}
            >
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item " role="presentation">
            <a
              className="nav-link movie-link"
              id="Coming-tab"
              data-bs-toggle="tab"
              href="#Coming"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Phim sắp chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="On"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
              <Slider {...settings}>
             
                {movies.map((item, index) => (
                  <div  key={item.maPhim} className="card card-movie" >
                    <img
                      className="card-img-top"
                      src={item.hinhAnh}
                      alt="khoa hoc"
                      style={{ width: "214px", height: "250px" }}
                    ></img>
                    <div className="card-body">
                      <h4 className="card-title">{item.tenPhim}</h4>
                      <div className="card-text">
                        <div className="row ">
                          <div className="col-6">100 phút</div>
                          <div className="col-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
               
              ))}
              </Slider>
              
              
          </div>
          
          <div
            className="tab-pane fade"
            id="Coming"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="row py-5">
              <div className="col-md-2 col-12 showtime_img">
                <img
                  className="img-fluid"
                  src="./img/lat-mat-48h.png"
                  alt="Hinh anh"
                />
              </div>
              <div className="col-md-10 col-12">
                <p className="showtime_genre">ACTION, ADVENTURE, FANTASY</p>
                <h3 className="showtime_title">It's over</h3>
                <p>
                  European mercenaries searching for black powder become
                  embroiled in the defense of It's over of China against a horde
                  of monstrous creatures.
                </p>
                <a href="#" className="showtime_item">
                  Full Synosis &gt;
                </a>
                <div className="row mt-4">
                  <div className="col-lg-8 col-sm-12 col-12">
                    <span className="showtime_view">
                      <i className="bi bi-clock" />
                      <span className="mr-2">Viewing Times</span>
                    </span>
                    <button
                      type="button"
                      className="btn btn-secondary  mr-2"
                      disabled
                    >
                      14:30
                    </button>
                    <button type="button" className="btn btn-secondary  mr-2">
                      16:30
                    </button>
                    <button type="button" className="btn btn-secondary  mr-2">
                      17:30
                    </button>
                    <button type="button" className="btn btn-secondary  mr-2">
                      18:30
                    </button>
                  </div>
                  <div className="col-lg-4 col-sm-12 col-12 text-right showtime_sta">
                    <span>105 MINS</span>
                    <span
                      className="showtime_number d-inline-block bg-dark text-white font-weight-bold
              text-center ml-2"
                    >
                      15
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
