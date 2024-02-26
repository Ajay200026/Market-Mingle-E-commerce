import React from "react";
import "./privacy.css";
const PrivacyText = () => {
  return (
    <footer className="privacy-footer">
      <marquee behavior="right" direction="right">
        <h2>Privacy Policy of Market Mingle Ecommerce Website</h2>
      </marquee>
      <div className="container">
        <div className="pricacy-foot">
          <h3>Privacy Policy</h3>
          <p>
            At Market Mingle, we take your privacy seriously. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our website or services.
          </p>
          <p>
            By providing your personal information, you consent to the practices
            described in this Privacy Policy. Please take a moment to review the
            following details:
          </p>
        </div>
        <div className="pricacy-foot">
          <h4>Information We Collect</h4>
          <p>
            We collect personal information that you voluntarily provide to us
            when you use our website or services. This information may include:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Address</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            {/* Add any other relevant information you collect */}
          </ul>
        </div>

        <div className="pricacy-foot">
          {" "}
          <h4>How We Use Your Information</h4>
          <p>
            We use the information we collect for various purposes, including
            but not limited to:
          </p>
          <ul>
            <li>Processing and fulfilling your orders</li>
            <li>Communicating with you about your orders and account</li>
            <li>Improving our website and services</li>
            <li>Marketing and promotional purposes (with your consent)</li>
            {/* Add any other relevant purposes */}
          </ul>
        </div>
        <div className="pricacy-foot">
          {" "}
          <h4>Security</h4>
          <p>
            We take appropriate measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
          </p>
        </div>

        <div className="pricacy-foot">
          <h4>Third-Party Services</h4>
          <p>
            We may use third-party services that collect, monitor, and analyze
            information. These third parties have their own privacy policies,
            and we encourage you to review them.
          </p>
        </div>

        <div className="pricacy-foot">
          {" "}
          <h4>Changes to This Privacy Policy</h4>
          <p>
            We reserve the right to update or change our Privacy Policy at any
            time. Your continued use of our website or services after any
            changes will constitute your acceptance of such changes.
          </p>
        </div>
        <div className="pricacy-foot">
          <p>
            For more detailed information on our privacy practices, please refer
            to our full{" "}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PrivacyText;
