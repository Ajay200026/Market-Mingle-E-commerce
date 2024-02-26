import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./autoslider.css";

const images = [
  { src: "./src/assets/images/banner-1.jpg" },
  { src: "./src/assets/images/banner-2.jpg" },
  { src: "./src/assets/images/banner-3.jpg" },
  { src: "./src/assets/images/banner-4.jpg" },
  { src: "./src/assets/images/banner-5.jpg" },
];

const AutoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) for automatic sliding
  };

  return (
    <div className="slider-auto">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <img src={item.src} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlider;
