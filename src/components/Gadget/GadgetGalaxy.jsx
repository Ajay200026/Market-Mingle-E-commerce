import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./gadget.css";

const GadgetGalaxy = () => {
  const images = [
    { src: "./src/assets/gadget/slider-1.jpg" },
    { src: "./src/assets/gadget/slider-2.jpg" },
    { src: "./src/assets/gadget/slider-3.gif" },
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
          <Link to="/mobilephones">Mobile Phones</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/casuali.jpg" alt="image" />
          <Link to="/laptops">Laptops</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/jeans.jpg" alt="image" />
          <Link to="/desktops">Desktops</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/shoes2.jpg" alt="image" />
          <Link to="/printers">Printers</Link>
        </li>
      </div>
      <div className="blog-card">
        <h3>TOP Deals of Weakend</h3>
        <div className="card-container-blog-img-1">
          <img src="./src/assets/gadget/mb1.jpg" alt="image" />
          <img src="./src/assets/gadget/mb2.jpg" alt="image" />
          <img src="./src/assets/gadget/mb3.jpg" alt="image" />
          <img src="./src/assets/gadget/mb4.jpg" alt="image" />
          <img src="./src/assets/gadget/mb5.jpg" alt="image" />
          <img src="./src/assets/gadget/mb6.jpg" alt="image" />
        </div>
        <div className="card-container-blog-img-2">
          <img src="./src/assets/gadget/mb7.jpg" alt="image" />
          <img src="./src/assets/gadget/mb8.jpg" alt="image" />
          <img src="./src/assets/gadget/mb9.jpg" alt="image" />
          <img src="./src/assets/gadget/mb10.jpg" alt="image" />
          <img src="./src/assets/gadget/mb11.jpg" alt="image" />
          <img src="./src/assets/gadget/mb12.jpg" alt="image" />
        </div>
      </div>
      <div className="card-container-2">
        <div className="slider-auto-3">
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
        <h2>Bestselling premium smartphones</h2>
        <div className="block-buster">
          <img src="./src/assets/gadget/pr1.jpg" alt="image" />
          <img src="./src/assets/gadget/pr2.jpg" alt="image" />
          <img src="./src/assets/gadget/pr3.jpg" alt="image" />
          <img src="./src/assets/gadget/pr4.jpg" alt="image" />
          <img src="./src/assets/gadget/pr5.jpg" alt="image" />
          <img src="./src/assets/gadget/pr6.jpg" alt="image" />
        </div>
      </div>
      <div className="card-container-4">
        <h2>Hottest deals</h2>
        <div className="gym-section">
          <img src="./src/assets/gadget/gg1.jpg" alt="image" />
          <img src="./src/assets/gadget/gg2.jpg" alt="image" />
          <img src="./src/assets/gadget/gg3.jpg" alt="image" />
          <img src="./src/assets/gadget/gg4.jpg" alt="image" />
          <img src="./src/assets/gadget/gg5.jpg" alt="image" />
          <img src="./src/assets/gadget/gg6.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default GadgetGalaxy;
