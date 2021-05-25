import React from "react";


export default function Carousel() {
  return (
    <div id="carouselMovie" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselMovie"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselMovie"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        <button
          type="button"
          data-bs-target="#carouselMovie"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="./img/trang-ti.jpg"
            style={{ width: "100%", height: "500px" }}
            className="d-block w-100"
            alt="Hinh anh"
          />
          <div>
            <div className="carousel-item_overlay" />
            <div className="container carousel-caption ">
             
              <div className="carousel-trailer">
                
              <button class="btn btn-trailer">
              <a className="venobox" data-vbtype="video" href="https://youtu.be/VTnGOjtaWAY">
                  <span><i className="bi bi-play-fill"></i></span>
              </a>
              </button>  
              
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./img/ban-tay-diet-quy-evil.png"
            style={{ width: "100%", height: "500px" }}
            className="d-block w-100"
            alt="hinh anh"
          />
          <div className="carousel-item_overlay"></div>
          <div class="container carousel-caption ">
            
            <div className="carousel-trailer">
            
            <button class="btn btn-trailer">
              <a className="venobox" data-vbtype="video" href="https://youtu.be/uqJ9u7GSaYM">
                  <span><i className="bi bi-play-fill"></i></span>
              </a>
            </button>  
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./img/lat-mat-48h.png"
            style={{ width: "100%", height: "500px" }}
            className="d-block w-100"
            alt="Hinh anh"
          />
          <div className="carousel-item_overlay"></div>
          <div className="container carousel-caption ">
           
            <div className="carousel-trailer">
            <button class="btn btn-trailer">
              <a className="venobox" data-vbtype="video" href="https://youtu.be/ykBfss-8H4Y">
                  <span>
                    <i className="bi bi-play-fill"></i>
                  </span>
              </a>
            </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
