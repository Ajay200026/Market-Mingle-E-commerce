import React from "react";
import { Link } from "react-router-dom";
import "./productcard.css";

const ProductCard = ({ product }) => {
  const links = {
    1: "/casual",
    2: "/blazer",
    3: "/formal",
    4: "/jeans",
    5: "/casual",
  };

  const linkTo = links[product.id] || "/default";

  return (
    <div className="products-card-main-h">
      <div className="grid-card">
        <div className="product-card">
          <Link to={linkTo}>
            {" "}
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>

          {product.sponsored && (
            <div className="sponsored-label">Sponsored</div>
          )}

          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="fit-description">{product.fit}</p>
            <div className="price-section">
              <span className="original-price">₹{product.price}</span>
              {product.discount !== 0 && (
                <div>
                  <span className="discount"> -{product.discount}%</span>
                  <span className="discounted-price">
                    {" "}
                    ₹{product.price - (product.price * product.discount) / 100}
                  </span>
                </div>
              )}
            </div>
            {product.freeDelivery && (
              <p className="free-delivery-tag">Free Delivery</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
