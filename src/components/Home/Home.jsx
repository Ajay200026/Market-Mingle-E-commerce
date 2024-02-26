import React from "react";
import AutoSlider from "./AutoSlider";
import Footer from "./Footer";
import MobilesProductCard from "./MobilesProductCard";
import WomensProductCard from "./WomensProductCard";
import "./home.css";
import KidsProductsCard from "./product-list/KidsProductsCard";
import ProductList from "./product-list/ProductList";
const Home = () => {
  const product1 = [
    {
      id: 1,
      image: "./src/assets/womens/sum1.jpg",
      sponsored: true,
      name: "Summer Dress",
      fit: "A-line",
      price: 1200,
      discount: 15,
      freeDelivery: true,
    },
    {
      id: 2,
      image: "./src/assets/womens/hi1.jpg",
      sponsored: true,
      name: "High Heels",
      fit: "Slim Fit",
      price: 1800,
      discount: 10,
      freeDelivery: true,
    },
    {
      id: 3,
      image: "./src/assets/womens/formal1.jpg",
      sponsored: true,
      name: "Formal Blouse",
      fit: "Regular Fit",
      price: 1500,
      discount: 5,
      freeDelivery: true,
    },
    {
      id: 4,
      image: "./src/assets/womens/sky1.jpg",
      sponsored: true,
      name: "Skinny Jeans",
      fit: "Skinny Fit",
      price: 1000,
      discount: 0,
      freeDelivery: true,
    },
    {
      id: 5,
      image: "./src/assets/womens/cas1.jpg",
      sponsored: true,
      name: "Casual Top",
      fit: "Regular Fit",
      price: 800,
      discount: 20,
      freeDelivery: true,
    },
  ];

  const mobpro = [
    {
      id: 1,
      image: "./src/assets/womens/ip1.jpg",
      sponsored: true,
      name: "Smartphone X",
      brand: "BrandX",
      price: 12000,
      discount: 8,
      freeDelivery: true,
    },
    {
      id: 2,
      image: "./src/assets/images/mobile2.jpg",
      sponsored: true,
      name: "Budget Phone Y",
      brand: "BrandY",
      price: 8000,
      discount: 5,
      freeDelivery: true,
    },
    {
      id: 3,
      image: "./src/assets/womens/mac1.jpg",
      sponsored: true,
      name: "UltraBook Z",
      brand: "BrandZ",
      price: 45000,
      discount: 10,
      freeDelivery: false,
    },
    {
      id: 4,
      image: "./src/assets/womens/gam1.jpg",
      sponsored: true,
      name: "Gaming Laptop A",
      brand: "BrandA",
      price: 75000,
      discount: 15,
      freeDelivery: false,
    },
    {
      id: 5,
      image: "./src/assets/womens/mon1.jpg",
      sponsored: true,
      name: "Flagship Phone B",
      brand: "BrandB",
      price: 15000,
      discount: 12,
      freeDelivery: true,
    },
  ];
  const dizz = [
    {
      id: 1,
      image: "./src/assets/womens/k1.jpg",
      sponsored: true,
      name: "Cute Teddy ",
      category: "Toys",
      price: 500,
      discount: 5,
      freeDelivery: true,
    },
    {
      id: 2,
      image: "./src/assets/womens/k2.jpg",
      sponsored: true,
      name: "Colorful Buil ",
      category: "Educational",
      price: 800,
      discount: 10,
      freeDelivery: true,
    },
    {
      id: 3,
      image: "./src/assets/womens/k3.jpg",
      sponsored: true,
      name: " Clothing Set",
      category: "Clothing",
      price: 1200,
      discount: 15,
      freeDelivery: true,
    },
    {
      id: 4,
      image: "./src/assets/womens/k4.jpg",
      sponsored: false,
      name: "Interactive  ",
      category: "Electronics",
      price: 1500,
      discount: 8,
      freeDelivery: true,
    },
    {
      id: 5,
      image: "./src/assets/womens/k5.jpg",
      sponsored: true,
      name: "Cartoon Design",
      category: "Accessories",
      price: 600,
      discount: 0,
      freeDelivery: true,
    },
  ];

  return (
    <div className="home-container">
      <marquee behavior="right" direction="right">
        {" "}
        <p>Sales is live in Market Mingle Ecommerce website Trusted site</p>
      </marquee>

      <div className="home-content">
        <AutoSlider />
      </div>
      <h2 className="mens-header">Mens Collections</h2>
      <div className="mens-bg">
        <ProductList />
      </div>
      <div>
        <h2 className="mens-header">Womens Collections</h2>
        <div className="product-list-womens">
          {product1.map((product1) => (
            <WomensProductCard key={product1.id} product1={product1} />
          ))}
        </div>
      </div>
      <div className="home-design-section">
        <div>
          <h2 className="mens-header">Gadget Collections</h2>
          <div className="product-list-womens">
            {mobpro.map((mobpro) => (
              <MobilesProductCard key={mobpro.id} mobpro={mobpro} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="mens-header">Kids Collections</h2>
          <div className="product-list-womens">
            {dizz.map((dizz) => (
              <KidsProductsCard key={dizz.id} dizz={dizz} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
