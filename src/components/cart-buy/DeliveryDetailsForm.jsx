import React, { useState } from "react";
import "./delivery.css";
const DeliveryDetailsForm = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming you have a validation logic here

    // Update the state to indicate that the form has been submitted
    setSubmitted(true);
  };

  return (
    <div className="delivery-detiles">
      {submitted ? (
        <div>
          <h2>Delivery Details</h2>
          <p>
            <strong>Full Name:</strong> {fullName}
          </p>
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>City:</strong> {city}
          </p>
          <p>
            <strong>Zip Code:</strong> {zipCode}
          </p>
        </div>
      ) : (
        <div>
          <h2>Enter Delivery Detils to ship the order</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>

            <label>
              City:
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>

            <label>
              Zip Code:
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DeliveryDetailsForm;
