import React from "react";
import { Link } from "react-router-dom";
const WomensProductCard = ({ product1 }) => {
  const links = {
    1: "/Womens",
    2: "/womens",
    3: "/womens",
    4: "/womens",
    5: "/womens",
  };

  const linkTo = links[product1.id] || "/default";
  return (
    <div className="products-card-main-h">
      <div className="product-card">
        <Link to={linkTo}>
          {" "}
          <img
            src={product1.image}
            alt={product1.name}
            className="product-image"
          />
        </Link>

        {product1.sponsored && <div className="sponsored-label">Sponsored</div>}

        <div className="product-details">
          <h2 className="product-name">{product1.name}</h2>
          <p className="fit-description">{product1.fit}</p>
          <div className="price-section">
            <span className="original-price">₹{product1.price}</span>
            {product1.discount !== 0 && (
              <div>
                <span className="discount"> -{product1.discount}%</span>
                <span className="discounted-price">
                  {" "}
                  ₹{product1.price - (product1.price * product1.discount) / 100}
                </span>
              </div>
            )}
          </div>
          {product1.freeDelivery && (
            <p className="free-delivery-tag">Free Delivery</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WomensProductCard;
