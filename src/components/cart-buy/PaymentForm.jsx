// PaymentForm.jsx

import React, { useState } from "react";
import "./payment.css";
const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [cardValidThru, setCardValidThru] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardholderNameChange = (e) => {
    setCardholderName(e.target.value);
  };

  const handleCardValidThruChange = (e) => {
    setCardValidThru(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleUpiIdChange = (e) => {
    setUpiId(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContinue = async () => {
    if (paymentMethod === "upi") {
      // Perform phone number verification for UPI payments
      const otpSent = await sendOTP(phoneNumber);

      if (otpSent) {
        alert("OTP sent to your phone. Please verify.");
        // Additional logic for OTP verification goes here
        // After successful verification, proceed with the payment
        alert("Payment successful!");
        // Reset the form or navigate to the next step/page
        setCardNumber("");
        setCardholderName("");
        setCardValidThru("");
        setCvv("");
        setUpiId("");
        setPhoneNumber("");
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } else {
      // Handle payment for other methods (cash_on_delivery, debit_card, etc.)
      alert("Payment continued!");
      // Reset the form or navigate to the next step/page
      setCardNumber("");
      setCardholderName("");
      setCardValidThru("");
      setCvv("");
      setUpiId("");
      setPhoneNumber("");
    }
  };
  const sendOTP = async (phoneNumber) => {
    try {
      const response = await fetch(
        "/42bccfa8cef8161c321604fbcbaddd56/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phoneNumber }),
        }
      );

      if (!response.ok) {
        console.error(
          `Failed to send OTP. Server returned ${response.status}.`
        );
        return false;
      }

      const data = await response.json();
      N;
      return data.success;
    } catch (error) {
      console.error("Error sending OTP:", error);
      return false;
    }
  };
  return (
    <div className="payment-form">
      <h2>Select a Payment Method</h2>

      {/* Payment Method Section */}
      <div className="payment-method">
        <div className="payment-option">
          <input
            type="radio"
            name="payment_method"
            id="cash_on_delivery"
            checked={paymentMethod === "cash_on_delivery"}
            onChange={() => handlePaymentMethodChange("cash_on_delivery")}
          />
          <label htmlFor="cash_on_delivery">
            Cash on Delivery / Pay on Delivery
          </label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            name="payment_method"
            id="debit_card"
            checked={paymentMethod === "debit_card"}
            onChange={() => handlePaymentMethodChange("debit_card")}
          />
          <label htmlFor="debit_card">Debit Card</label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            name="payment_method"
            id="upi"
            checked={paymentMethod === "upi"}
            onChange={() => handlePaymentMethodChange("upi")}
          />
          <label htmlFor="upi">UPI</label>
        </div>

        {/* Debit Card Details Section */}
        {paymentMethod === "debit_card" && (
          <div className="card-details">
            <label htmlFor="card_number">Card Number:</label>
            <input
              type="text"
              id="card_number"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />

            <label htmlFor="cardholder_name">Cardholder Name:</label>
            <input
              type="text"
              id="cardholder_name"
              placeholder="Enter cardholder name"
              value={cardholderName}
              onChange={handleCardholderNameChange}
            />

            <label htmlFor="card_valid_thru">Card Valid Through:</label>
            <input
              type="text"
              id="card_valid_thru"
              placeholder="MM/YYYY"
              value={cardValidThru}
              onChange={handleCardValidThruChange}
            />

            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter CVV"
              value={cvv}
              onChange={handleCvvChange}
            />
          </div>
        )}

        {/* UPI Section */}
        {paymentMethod === "upi" && (
          <div className="upi-details">
            <label htmlFor="upi_id">UPI ID:</label>
            <input
              type="text"
              id="upi_id"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={handleUpiIdChange}
            />
          </div>
        )}

        {/* Phone Number Section */}
        {paymentMethod === "upi" && (
          <div className="phone-number-details">
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="text"
              id="phone_number"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        )}

        <button onClick={handleContinue} className="continue-btn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
