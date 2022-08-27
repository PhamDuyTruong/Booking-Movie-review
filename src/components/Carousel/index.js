import React, {useState} from "react";
import ModalVideo from 'react-modal-video'
import '../../Styles/modal-video.scss';



export default function Carousel() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div id="carouselMovie" className="carousel slide" data-bs-ride="carousel" >
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
            src="./img/thor.jpg"
            style={{ width: "100%", height: "500px" }}
            className="d-block w-100"
            alt="Hinh anh"
          />
          <div>
            <div className="carousel-item_overlay" />
            <div className="container carousel-caption ">
             
              <div className="carousel-trailer">
              <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="UBgPypHGAqE" onClose={() => setOpen(false)} />
              <button className="btn btn-trailer">
                  <span><i className="bi bi-play-fill" onClick={()=> setOpen(true)}></i></span>
              </button>  
              
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="./img/The-gioi-khung-long.jpg"
            style={{ width: "100%", height: "500px" }}
            className="d-block w-100"
            alt="hinh anh"
          />
          <div className="carousel-item_overlay"></div>
          <div class="container carousel-caption ">
            
            <div className="carousel-trailer">
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="3y0KM5jUnmk" onClose={() => setOpen(false)} />
            <button class="btn btn-trailer" onClick={()=> setOpen(true)}>
                  <span><i className="bi bi-play-fill"></i></span>
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
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="ykBfss-8H4Y" onClose={() => setOpen(false)} />
            <button class="btn btn-trailer">
                  <span>
                    <i className="bi bi-play-fill" onClick={()=> setOpen(true)}></i>
                  </span>
            </button>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
