// CheckoutForm.jsx
import emailjs from "emailjs-com"; // Import emailjs library
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DeliveryDetailsForm from "./DeliveryDetailsForm";
import PaymentForm from "./PaymentForm";
import PrivacyText from "./PrivacyText";
import "./checkoutform.css";

const generateRandomDate = () => {
  const currentDate = new Date();
  const randomDays = Math.floor(Math.random() * 7) + 1; // Random number between 1 and 7
  currentDate.setDate(currentDate.getDate() + randomDays);
  return currentDate.toDateString();
};

const sendEmail = (bill) => {
  // Use your emailjs template ID and user ID
  const templateParams = {
    to_email: "ajayshetty636013@gmail.com", // Replace with the recipient's email address
    subject: "Order Details",
    message: bill,
  };

  emailjs.send(
    "Market_Mingle_z7jepvf", // Replace with your service ID
    "template_fbkq229", // Replace with your template ID
    templateParams,
    "vdeCQSzNTuCZDohXL" // Replace with your user ID
  );
};

const CheckoutForm = ({ cartItems, setCart }) => {
  console.log(cartItems);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [totalPrice, setTotalPrice] = useState(
    parseFloat(searchParams.get("totalPrice")) || 0
  );

  // Calculate if free delivery is available
  const isFreeDeliveryAvailable = totalPrice > 500;

  const PlaceOrder = () => {
    // Your logic for placing an order goes here
    // You can access the cartItems array to get product details
    // You can also use generateRandomDate() for the expected delivery date

    // Generate the bill
    const bill = `
    Order Date: ${new Date().toDateString()}
    Order Details:
    ${cartItems
      .map((item) => `${item.name} - Quantity: ${item.quantity}`)
      .join("\n")}
    Total Price: ₹${totalPrice.toFixed(2)}
    Expected Delivery Date: ${generateRandomDate()}
    Thank you for your order!
  `;

    // Send the email
    sendEmail(bill);

    // Update the total price to 0 after placing the order
    setTotalPrice(0);

    // Display a success message (you can handle this part based on your UI)
    alert("Order placed successfully!");
  };

  return (
    <div>
      <div className="checkout-form-container">
        <div className="checkout-form-container-2">
          <div className="checkout-form-order">
            <h2>Order Summary</h2>
            <p className="text-1">Total Price: ₹{totalPrice.toFixed(2)}</p>
            <p className="text-2">
              {isFreeDeliveryAvailable
                ? "Free Delivery Available for this order!"
                : "Free Delivery for orders over ₹500"}
            </p>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
            <p className="text-3">
              <marquee behavior="right" direction="right">
                {" "}
                Expected Delivery Date: {generateRandomDate()}
              </marquee>
            </p>
            <button onClick={PlaceOrder}>Place Order</button>
          </div>
        </div>
        <div className="payment-section-container-1">
          <PaymentForm />
        </div>
        <div className="delivery-detiles-container">
          <DeliveryDetailsForm />
        </div>
      </div>
      <PrivacyText />
      <div className="empty"></div>
    </div>
  );
};

export default CheckoutForm;
