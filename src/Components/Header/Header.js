import React from "react";
import Slider from "react-slick";
import "./Header.css";
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
        <div>
          <img src="carousel.png" alt="carousel2" />
        </div>
        <div>
          <img src="carousel2.png" alt="carousel2" />
        </div>
        <div>
          <img src="carousel3.png" alt="carousel3" />
        </div>
        <div>
          <img src="carousel4.png" alt="carousel4" />
        </div>
      </Slider>
    </div>
  );
}

export default Header;
