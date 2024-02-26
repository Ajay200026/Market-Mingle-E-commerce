import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Womens = () => {
  const images = [
    { src: "./src/assets/womens/sl1.gif" },
    { src: "./src/assets/womens/sl2.jpg" },
    { src: "./src/assets/womens/sl3.jpg" },
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
          <img src="./src/assets/images/women-menu (6).png" alt="image" />
          <Link to="/clothing">Clothing</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu (2).png" alt="image" />
          <Link to="/accessories">Accessories</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu (4).png" alt="image" />
          <Link to="/womenshoes">Womens Shoes</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu7.png" alt="image" />
          <Link to="/intimates">Intimates</Link>
        </li>

        <li>
          <img src="./src/assets/images/women-menu (3).png" alt="image" />
          <Link to="/womensbeauty">Womens Beauty</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu8.png" alt="image" />
          <Link to="/athleisure">Athleisure</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu (5).png" alt="image" />
          <Link to="/special occasions">Special Occasion</Link>
        </li>
        <li>
          <img src="./src/assets/images/women-menu (1).png" alt="image" />
          <Link to="/workwear">Workwear</Link>
        </li>
      </div>
      <div className="blog-card">
        <h3>TOP BRAND OFFERS</h3>
        <div className="card-container-blog-img-1">
          <img src="./src/assets/womens/po1.png" alt="image" />
          <img src="./src/assets/womens/po2.png" alt="image" />
          <img src="./src/assets/womens/po3.png" alt="image" />
          <img src="./src/assets/womens/po4.png" alt="image" />
          <img src="./src/assets/womens/po5.png" alt="image" />
          <img src="./src/assets/womens/po6.png" alt="image" />
        </div>
        <div className="card-container-blog-img-2">
          <img src="./src/assets/womens/po7.png" alt="image" />
          <img src="./src/assets/womens/po8.png" alt="image" />
          <img src="./src/assets/womens/po9.png" alt="image" />
          <img src="./src/assets/womens/po10.png" alt="image" />
          <img src="./src/assets/womens/po11.png" alt="image" />
          <img src="./src/assets/womens/po12.png" alt="image" />
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
        <h2>MORE BRAND OFFERS</h2>
        <div className="block-buster">
          <img src="./src/assets/womens/br1.png" alt="image" />
          <img src="./src/assets/womens/br2.png" alt="image" />
          <img src="./src/assets/womens/br3.png" alt="image" />
          <img src="./src/assets/womens/br4.png" alt="image" />
          <img src="./src/assets/womens/br5.png" alt="image" />
          <img src="./src/assets/womens/br6.png" alt="image" />
        </div>
      </div>
      <div className="card-container-4">
        <h2>PREMIUM BRANDS</h2>
        <div className="gym-section">
          <img src="./src/assets/womens/br7.png" alt="image" />
          <img src="./src/assets/womens/br8.png" alt="image" />
          <img src="./src/assets/womens/br9.png" alt="image" />
          <img src="./src/assets/womens/br10.png" alt="image" />
          <img src="./src/assets/womens/br11.png" alt="image" />
          <img src="./src/assets/womens/br12.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Womens;
