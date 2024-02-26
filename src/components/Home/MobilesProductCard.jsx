import React from "react";
import { Link } from "react-router-dom";
const MobilesProductCard = ({ mobpro }) => {
  const links = {
    1: "/Gadget Galaxy",
    2: "/Gadget Galaxy",
    3: "/Gadget Galaxy",
    4: "/Gadget Galaxy",
    5: "/Gadget Galaxy",
  };

  const linkTo = links[mobpro.id] || "/default";
  return (
    <div className="products-card-main-h">
      <div className="product-card">
        <Link to={linkTo}>
          {" "}
          <img src={mobpro.image} alt={mobpro.name} className="product-image" />
        </Link>

        {mobpro.sponsored && <div className="sponsored-label">Sponsored</div>}

        <div className="product-details">
          <h2 className="product-name">{mobpro.name}</h2>
          <p className="fit-description">{mobpro.fit}</p>
          <div className="price-section">
            <span className="original-price">₹{mobpro.price}</span>
            {mobpro.discount !== 0 && (
              <div>
                <span className="discount"> -{mobpro.discount}%</span>
                <span className="discounted-price">
                  {" "}
                  ₹{mobpro.price - (mobpro.price * mobpro.discount) / 100}
                </span>
              </div>
            )}
          </div>
          {mobpro.freeDelivery && (
            <p className="free-delivery-tag">Free Delivery</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilesProductCard;
