import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./css/mens.css";
const Mens = () => {
  const images = [
    { src: "./src/assets/mens-images/means-card/slide-2.gif" },
    { src: "./src/assets/mens-images/means-card/slide-3.gif" },
    { src: "./src/assets/mens-images/means-card/slide-4.png" },
  ];
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
    <div>
      <div className="mens-list">
        <li>
          <img src="./src/assets/mens-images/formal1.jpg" alt="image" />
          <Link to="/Formal">Formal</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/casuali.jpg" alt="image" />
          <Link to="/Casual">Casual</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/jeans.jpg" alt="image" />
          <Link to="/jeans">Jeans</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/shoes2.jpg" alt="image" />
          <Link to="/Shoes">Shoes</Link>
        </li>

        <li>
          <img src="./src/assets/mens-images/slipper1.jpg" alt="image" />
          <Link to="/Slippers">Slippers</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/beauty.jpg" alt="image" />
          <Link to="/Mens Beauty">Means Beauty</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/innerweare.jpg" alt="image" />
          <Link to="/inner wears">Inner Wears</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/blazzer.jpg" alt="image" />
          <Link to="/Blazer">Blazer</Link>
        </li>
      </div>
      <div className="blog-card">
        <h3>TOP OFF YOUR LOOK | T-SHIRTS, SHIRTS</h3>
        <div className="card-container-blog-img-1">
          <img src="./src/assets/mens-images/means-card/cd1.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd2.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd3.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd4.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd5.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd6.png" alt="image" />
        </div>
        <div className="card-container-blog-img-2">
          <img src="./src/assets/mens-images/means-card/cd7.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd8.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd9.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd10.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd11.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/cd12.png" alt="image" />
        </div>
      </div>
      <div className="card-container-2">
        <div className="slider-auto">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index}>
                <img src={item.src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="card-container-3">
        <h2>BLOCKBUSTER DEALS</h2>
        <div className="block-buster">
          <img src="./src/assets/mens-images/means-card/bl1.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/bl2.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/bl3.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/bl4.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/bl5.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/bl6.png" alt="image" />
        </div>
      </div>
      <div className="card-container-4">
        <h2>GYM COLLECTIONS</h2>
        <div className="gym-section">
          <img src="./src/assets/mens-images/means-card/gm1.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/gm2.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/gm3.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/gm4.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/gm5.png" alt="image" />
          <img src="./src/assets/mens-images/means-card/gm6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Mens;
