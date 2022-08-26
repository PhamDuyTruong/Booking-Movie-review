import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataMovies } from "../../actions/movieActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDataComingMovies } from "../../actions/movieComingAction";
import CardMovie from "../CardMovie";
import PageLoading from "../pageLoading";
import { getMovies } from "../../actions/movieAPIAction";
import SearchIcon from "@material-ui/icons/Search"

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
        breakpoint: 1245,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows:false,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:4,
          slidesToScroll: 4,
          centerPadding: '40px',
          initialSlide: 2,
          arrows:false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false,
          initialSlide: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [searchValue, setSearchValue] = useState("");
  const [moviesSearch, setMovies] = useState([]);
  const { movies, isLoading, error } = useSelector((state) => state.movie);
  const {moviesAPI, isLoadingMovies} = useSelector((state) => state.dataMovies)
  const { moviesComing, Loading, errorComing } = useSelector(
    (state) => state.movieComing
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getDataMovies());
    dispatch(getDataComingMovies());
  }, []);

  if (Loading && isLoading) {
    return (
      <div
        className="container"
        style={{ height: "850px", width: "100%", paddingTop: "200px" }}
      >
        <div className="row">
          <div className="col-4"></div>
          <div className="col-6">
            <PageLoading></PageLoading>;
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    );
  }
  if(isLoadingMovies){
    <div>Loading...</div>
  }
  if (error && errorComing) {
    return <div>{error}</div>;
  }
  const resetInputField = () => {
    setSearchValue([]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let tenPhim = searchValue.length !== 0 ? searchValue.toLowerCase() : "null";
    const newArrayMovies = moviesAPI.filter((item) => (item.tenPhim).toLowerCase().indexOf(tenPhim) > -1);
    setMovies(newArrayMovies);
    resetInputField();
  };
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-2"></div>
          <div className="col-md-6 d-flex">
          <form
            className="search py-3"
            onSubmit={handleOnSubmit}
            style={{ width: "100%", backgroundColor:"#fff" }}
          >
            <input
              className ="searchBtn"
              value={searchValue}
              onChange={handleSearchInputChanges}
              type="search"
              placeholder="Nhập tên phim..."
            />
          </form>
          <button className="btn btn-primary" style={{height:"50px", marginTop:"15px", marginLeft:"5px"}} onClick={handleOnSubmit}>
                <SearchIcon />
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      {moviesSearch ? (
        <div className="container">
           <div className="row">
          {moviesSearch.map((item, index) => (
            <div key={index} className="col-md-3 col-6">
            <CardMovie key={index} props={item} />
            </div>
          ))}
          </div>
        </div>
      ) : (
        <div className="container" style={{display:"block"}}>
          <p style={{color:"#dcdcdc"}}>Không tìm thấy phim nào !!!</p>
        </div>
      )}
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
              {movies.map((item, index) => (
                <CardMovie key={index} props={item} />
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
              {moviesComing.map((item, index) => (
                <CardMovie key={index} props={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
