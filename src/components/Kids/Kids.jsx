import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Kids = () => {
  const images = [
    { src: "./src/assets/kids/slk1.png" },
    { src: "./src/assets/kids/slk2.png" },
    { src: "./src/assets/kids/slk3.png" },
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
          <Link to="/winter wear">Winter Wear</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/casuali.jpg" alt="image" />
          <Link to="/baby">Baby</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/jeans.jpg" alt="image" />
          <Link to="/boy">Boy</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/shoes2.jpg" alt="image" />
          <Link to="/girl">Girl</Link>
        </li>

        <li>
          <img src="./src/assets/mens-images/slipper1.jpg" alt="image" />
          <Link to="/kidsaccess">Kids Acces</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/beauty.jpg" alt="image" />
          <Link to="/bags">Bags</Link>
        </li>
        <li>
          <img src="./src/assets/mens-images/innerweare.jpg" alt="image" />
          <Link to="/footwear">FootWear</Link>
        </li>
      </div>
      <div className="blog-card">
        <h3>TOP OFF YOUR LOOK | T-SHIRTS, SHIRTS & POLOS</h3>
        <div className="card-container-blog-img-1">
          <img src="./src/assets/kids/mm1.png" alt="image" />
          <img src="./src/assets/kids/mm2.png" alt="image" />
          <img src="./src/assets/kids/mm3.png" alt="image" />
          <img src="./src/assets/kids/mm4.png" alt="image" />
          <img src="./src/assets/kids/mm5.png" alt="image" />
          <img src="./src/assets/kids/mm6.png" alt="image" />
        </div>
        <div className="card-container-blog-img-2">
          <img src="./src/assets/kids/mm7.png" alt="image" />
          <img src="./src/assets/kids/mm8.png" alt="image" />
          <img src="./src/assets/kids/mm9.png" alt="image" />
          <img src="./src/assets/kids/mm10.png" alt="image" />
          <img src="./src/assets/kids/mm11.png" alt="image" />
          <img src="./src/assets/kids/mm12.png" alt="image" />
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
          <img src="./src/assets/kids/nn1.png" alt="image" />
          <img src="./src/assets/kids/nn2.png" alt="image" />
          <img src="./src/assets/kids/nn3.png" alt="image" />
          <img src="./src/assets/kids/nn4.png" alt="image" />
          <img src="./src/assets/kids/nn5.png" alt="image" />
          <img src="./src/assets/kids/nn6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Kids;
