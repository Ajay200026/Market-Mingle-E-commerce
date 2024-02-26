import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer-container-block">
      <div className="footer-block-box">
        <div className="footer-section about-section">
          <h3>About Us</h3>
          <p>
            We are a company <br />
            dedicated to <br />
            providing innovative <br />
            solutions...
          </p>
        </div>

        <div className="footer-section social-section">
          <h3>Social</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>

        <div className="footer-section help-section">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section mail-us-section">
          <h3>Mail Us</h3>
          <p>Email: info@example.com</p>
          <p>Address: 123 Main Street, Cityville, State, Zip</p>
        </div>

        <div className="footer-section consumer-policy-section">
          <h3>Consumer Policy</h3>
          <p>
            Read our <a href="/consumer-policy">Consumer Policy</a> <br />
            for more information.
          </p>
        </div>

        <div className="footer-section office-address-section">
          <h3>Registered Office Address</h3>
          <p>Company Name Ltd.</p>
          <p>456 Business Center, Street Avenue, City</p>
          <p>Country, Zip Code</p>
        </div>
      </div>
      <div className="footer-section copyrights-section">
        <p>
          &copy; {new Date().getFullYear()} Market Mingle Ecommerce Site. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
