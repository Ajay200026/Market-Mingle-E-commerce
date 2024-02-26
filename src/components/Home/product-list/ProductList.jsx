import React from "react";
import ProductCard from "../ProductCard";

import "./productlist.css";
const ProductList = () => {
  const products = [
    {
      id: 1,
      image: "./src/assets/mens-images/means-card/casu7.jpg",
      sponsored: true,
      name: "Casual Shirt",
      fit: "Regular Fit",
      price: 1500,
      discount: 10,
      freeDelivery: true,
    },
    {
      id: 2,
      image: "./src/assets/mens-images/means-card/bzz1.jpg",
      sponsored: true,
      name: "Blazer",
      fit: "Slim Fit",
      price: 2500,
      discount: 15,
      freeDelivery: true,
    },
    {
      id: 3,
      image: "./src/assets/mens-images/means-card/form-22-1.jpg",
      sponsored: true,
      name: "Formal Shirt",
      fit: "Regular Fit",
      price: 1800,
      discount: 5,
      freeDelivery: true,
    },
    {
      id: 4,
      image: "./src/assets/mens-images/means-card/jen-s-22.jpg",
      sponsored: true,
      name: "Jeans",
      fit: "Skinny Fit",
      price: 1200,
      discount: 0,
      freeDelivery: true,
    },
    {
      id: 5,
      image: "./src/assets/images/shoes.jpg",
      sponsored: true,
      name: "Nike Shoes",
      fit: "Regular Fit",
      price: 800,
      discount: 20,
      freeDelivery: true,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
