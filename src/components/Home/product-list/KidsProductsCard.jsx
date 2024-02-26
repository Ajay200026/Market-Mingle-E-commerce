import React from "react";
import { Link } from "react-router-dom";

const KidsProductsCard = ({ dizz }) => {
  const links = {
    1: "/Kids",
    2: "/Kids",
    3: "/Kids",
    4: "/Kids",
    5: "/Kids",
  };

  const linkTo = links[dizz.id] || "/default";
  return (
    <div className="products-card-main-h">
      <div className="product-card">
        <Link to={linkTo}>
          {" "}
          <img src={dizz.image} alt={dizz.name} className="product-image" />
        </Link>

        {dizz.sponsored && <div className="sponsored-label">Sponsored</div>}

        <div className="product-details">
          <h2 className="product-name">{dizz.name}</h2>
          <p className="fit-description">{dizz.fit}</p>
          <div className="price-section">
            <span className="original-price">₹{dizz.price}</span>
            {dizz.discount !== 0 && (
              <div>
                <span className="discount"> -{dizz.discount}%</span>
                <span className="discounted-price">
                  {" "}
                  ₹{dizz.price - (dizz.price * dizz.discount) / 100}
                </span>
              </div>
            )}
          </div>
          {dizz.freeDelivery && (
            <p className="free-delivery-tag">Free Delivery</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default KidsProductsCard;
