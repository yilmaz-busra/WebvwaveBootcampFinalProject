import React from "react";
import Slider from "react-slick";
import Shapedot from "./shape-dot";
import "./Header.css";
import Shapekesik from "./shape-kesik";
function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slidercontent">
          <div className="sliderdoticon">
            <Shapedot />
          </div>
          <div className="sliderkesikicon">
            <Shapekesik />
          </div>
          <img src="carousel.png" alt="carousel2" />
        </div>
        <div className="slidercontent">
          <div className="sliderdoticon">
            <Shapedot />
          </div>
          <div className="sliderkesikicon">
            <Shapekesik />
          </div>
          <img src="carousel2.png" alt="carousel2" />
        </div>
        <div className="slidercontent">
          <div className="sliderdoticon">
            <Shapedot />
          </div>
          <div className="sliderkesikicon">
            <Shapekesik />
          </div>
          <img src="carousel3.png" alt="carousel3" />
        </div>
        <div className="slidercontent">
          <div className="sliderdoticon">
            <Shapedot />
          </div>
          <div className="sliderkesikicon">
            <Shapekesik />
          </div>
          <img src="carousel4.png" alt="carousel4" />
        </div>
      </Slider>
    </div>
  );
}

export default Header;
