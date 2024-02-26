import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";

const Cart = ({ cartItems, setCart, toggleCheckout }) => {
  // State to keep track of the total price

  const [setTotalPrice] = useState(0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.mrp) || 0) * (item.quantity || 0),
    0
  );

  // Function to handle adding quantity of an item
  const addQuantity = (id, price) => {
    setCart(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );

    // Update the total price
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  // Function to handle removing quantity of an item
  const removeQuantity = (id, price) => {
    setCart(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: (item.quantity || 0) - 1 }
          : item
      )
    );

    // Update the total price
    setTotalPrice((prevTotal) => Math.max(0, prevTotal - price));
  };

  // Function to handle removing an item from the cart
  const removeItem = (id, price, quantity) => {
    setCart(cartItems.filter((item) => item.id !== id));

    // Update the total price
    setTotalPrice((prevTotal) => Math.max(0, prevTotal - price * quantity));
  };
  const PlaceOrder = () => {
    setCart([]);
    toggleCheckout();
  };

  return (
    <div className="shopping-cart-container-4">
      <h2>Market Mingle Shopping Cart</h2>
      <div className="shopping-cart">
        <div className="shopping-container">
          {" "}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.productName} />
              <div className="item-details">
                <p>{item.productName}</p>
                <p>₹{item.mrp}</p>
                <br />
                <div className="quantity-buttons">
                  <button onClick={() => removeQuantity(item.id, item.mrp)}>
                    -
                  </button>
                  <div className="quantity-display">{item.quantity || 0}</div>
                  <button onClick={() => addQuantity(item.id, item.mrp)}>
                    +
                  </button>

                  <button
                    onClick={() =>
                      removeItem(item.id, item.mrp, item.quantity || 0)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-price">
          <marquee behavior="right" direction="right">
            <h2>Your order is eligible for FREE Delivery.</h2>
          </marquee>
          <p>Subtotal: ₹{totalPrice.toFixed(1)}</p>
          <span>
            <input type="radio" />
            This order contains a gift
          </span>
          <div className="place-order">
            <Link
              to={{
                pathname: "/checkoutform",
                search: `?totalPrice=${totalPrice}`,
              }}
            >
              <button onClick={PlaceOrder}>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
