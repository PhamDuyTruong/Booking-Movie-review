import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getDataMovies} from '../../actions/movieActions'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDataComingMovies } from '../../actions/movieComingAction';
import CardMovie from '../CardMovie';
import PageLoading from '../pageLoading';



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
    const {moviesComing, Loading, errorComing} = useSelector((state) => state.movieComing)

    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(getDataMovies());
          dispatch(getDataComingMovies())
    }, [])

  

    if(isLoading){
        return (
          <div className="container" style={{height:"850px", width:"100%", paddingTop:"200px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
              <PageLoading></PageLoading>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
        )
    }
    if(Loading){
      return (
        <div className="container" style={{height:"850px", width:"100%", paddingTop:"200px"}}>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
              <PageLoading></PageLoading>;
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      )
    }
    if(errorComing){
      return < div>{error}</div>
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
              đang chiếu
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
               sắp chiếu
             
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
              {movies.map((item) => (
                <CardMovie props={item}/>
                
              ))}
            </Slider>
          </div>

          <div
            className="tab-pane fade"
            id="Coming"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <Slider {...settings}>
              {moviesComing.map((item) => (  
              <CardMovie props={item}/>
                
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
}
