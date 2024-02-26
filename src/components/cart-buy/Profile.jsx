import React from "react";
import "./profile.css";
const Profile = ({ onLogout }) => {
  const handleLogout = () => {
    // You can perform logout logic here
    console.log("Logout logic here");
    // Call the provided onLogout callback if available
    if (typeof onLogout === "function") {
      onLogout();
    }
  };
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    orders: [
      {
        orderId: 1,
        orderDate: "2024-01-26",
        productName: "Product A",
        quantity: 2,
        totalPrice: 50.0,
      },
      {
        orderId: 2,
        orderDate: "2024-01-25",
        productName: "Product B",
        quantity: 1,
        totalPrice: 30.0,
      },
    ],
    addresses: [
      {
        addressId: 1,
        street: "123 Main St",
        city: "Cityville",
        zipCode: "12345",
      },
      {
        addressId: 2,
        street: "456 Oak St",
        city: "Townsville",
        zipCode: "67890",
      },
    ],
  };
  return (
    <div className="prfile-container">
      <h1>User Profile</h1>
      <div className="profile-user">
        <div className="profile-user-1">
          <img src="./src/assets/profile.png" alt="user" />
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className="profile-user-h">
          <h2>Order History</h2>
          <div className="profile-user-2">
            {user.orders.map((order) => (
              <div key={order.orderId}>
                <p>Order #{order.orderId}</p>
                <p>Order Date: {order.orderDate}</p>
                <p>Product: {order.productName}</p>
                <p>Quantity: {order.quantity}</p>
                <p>Total Price: ${order.totalPrice}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="profile-user-h">
          <h2>Delivery Addresses</h2>
          <div className="profile-user-3">
            {user.addresses.map((address) => (
              <div key={address.addressId}>
                <p>Address #{address.addressId}</p>
                <p>Street: {address.street}</p>
                <p>City: {address.city}</p>
                <p>Zip Code: {address.zipCode}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
