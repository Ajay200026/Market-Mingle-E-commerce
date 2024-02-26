import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./navbar.css";

const NavBar = ({ size, setShow, isLoggedIn, userId }) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isNavListOpen, setNavListOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(window.innerWidth <= 768);

  const scrollFunction = () => {
    setScrollPos(document.body.scrollTop || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null;
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleNavList = () => {
    setNavListOpen(!isNavListOpen);
  };

  const closeNavList = () => {
    setNavListOpen(false);
  };
  return (
    <div className={`ecommerce-nav ${scrollPos > 20 ? "scroll-down" : ""}`}>
      <nav className="nav-bar">
        <div className="first-nav">
          <img
            src="./src/assets/Logo-Ecom-removebg-preview (1) (1).png"
            alt="Logo"
          />
          <div>
            <SearchBar />
          </div>
          <div className="modified-button">
            {isLoggedIn ? (
              <div className="profile-menu">
                <button className="profile-nav-bar">
                  <Link to="/profile">
                    {" "}
                    <img src="./src/assets/profile.png" alt="user" />
                  </Link>
                </button>
                <p>{userId}</p>
              </div>
            ) : (
              <div className="login-menu">
                <button className="login-nav-bar">
                  <Link to="/login">Login</Link>
                </button>
              </div>
            )}
          </div>

          <Link to="/Cart">
            {" "}
            <div className="cart " onClick={() => setShow(false)}>
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{size}</span>
                <h3>cart</h3>
              </a>
            </div>
          </Link>

          <div className="chart">
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i>
              <h3>chat with us</h3>
            </a>
          </div>
        </div>

        <div className="nav-list-menu">
          <img
            src="./src/assets/Logo-Ecom-removebg-preview (1) (1).png"
            alt="Logo"
          />
          {isMobileView == isNavListOpen && (
            <ul className="nav-card" onClick={closeNavList}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Mens">Mens</Link>
              </li>
              <li>
                <Link to="/Womens">Womens</Link>
              </li>
              <li>
                <Link to="/Kids">Kids</Link>
              </li>
              <li>
                <Link to="/Gadget Galaxy">Gadget Galaxy</Link>
              </li>
              <li>
                <Link to="/AgroHarbor">AgroHarbor</Link>
              </li>
              <li>
                <Link to="/Auto Essentials">AutoEssentials</Link>
              </li>
              <li>
                <Link to="/Pharmacy">Pharmacy</Link>
              </li>
              <li>
                <Link to="/Sports">Sports</Link>
              </li>
              <li>
                <Link to="/Homehub">Home Hub</Link>
              </li>
              <li>
                <Link to="/Watches">Watches</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <Outlet />
      {isMobileView && (
        <footer
          className={`mobile-view ${scrollPos > 20 ? "scroll-down" : ""}`}
        >
          <Link to="/">
            <a href="#">
              <i className="fa-solid fa-house"></i>
            </a>
          </Link>

          <div className="modified-button">
            {/* Use the existing link for toggling the navigation list */}
            <a href="#" onClick={toggleNavList}>
              <i
                className={`fa-solid fa-list ${isNavListOpen ? "open" : ""}`}
              ></i>
            </a>
          </div>
          <a href="#">
            <i className="fa-solid fa-bell"></i>
          </a>
          <Link to="/profile">
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </Link>

          <Link to="/cart">
            <div className="cart-1 " onClick={() => setShow(false)}>
              <a href="#">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{size}</span>
              </a>
            </div>
          </Link>
        </footer>
      )}
    </div>
  );
};

export default NavBar;
