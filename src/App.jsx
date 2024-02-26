import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AgroHarbor from "./components/Agriculture/AgroHarbor";
import AutoEssentials from "./components/Automobile/AutoEssentials";
import Desktops from "./components/Gadget/Desktops";
import GadgetGalaxy from "./components/Gadget/GadgetGalaxy";
import Laptops from "./components/Gadget/Laptops";
import MobilePhones from "./components/Gadget/MobilePhones";
import Printers from "./components/Gadget/Printers";
import Home from "./components/Home/Home";
import Login from "./components/Home/Navbar/Login";
import NavBar from "./components/Home/Navbar/NavBar";
import BeddingLinens from "./components/HomeApplicable/BeddingLinens";
import DecorAccents from "./components/HomeApplicable/DecorAccents";
import Furniture from "./components/HomeApplicable/Furniture";
import HomeElectronics from "./components/HomeApplicable/HomeElectronics";
import HomeFitness from "./components/HomeApplicable/HomeFitness";
import HomeHub from "./components/HomeApplicable/HomeHub";
import SmartHome from "./components/HomeApplicable/SmartHome";
import Kids from "./components/Kids/Kids";
import Blazer from "./components/Mens/Blazer";
import Casual from "./components/Mens/Casual";
import Formal from "./components/Mens/Formal";
import InnerWears from "./components/Mens/InnerWears";
import Jeans from "./components/Mens/Jeans";
import Mens from "./components/Mens/Mens";
import MensBeauty from "./components/Mens/MensBeauty";
import Shoes from "./components/Mens/Shoes";
import Slippers from "./components/Mens/Slippers";
import Pharmacy from "./components/Pharmacy/Pharmacy";
import AthlateDress from "./components/Sports/AthlateDress";
import Cricket from "./components/Sports/Cricket";
import FootBall from "./components/Sports/FootBall";
import Hockey from "./components/Sports/Hockey";
import OtherGames from "./components/Sports/OtherGames";
import Sports from "./components/Sports/Sports";
import VollyBall from "./components/Sports/VollyBall";
import Watches from "./components/Watches/Watches";
import Accessories from "./components/Womens/Accessories";
import Athleisure from "./components/Womens/Athleisure";
import Clothing from "./components/Womens/Clothing";
import Intimates from "./components/Womens/Intimates";
import SpecialOccasions from "./components/Womens/SpecialOccasions";
import Womens from "./components/Womens/Womens";
import WomensBeauty from "./components/Womens/WomensBeauty";
import WomensShoes from "./components/Womens/WomensShoes";
import Workwear from "./components/Womens/Workwear";
import Cart from "./components/cart-buy/Cart";
import CheckoutForm from "./components/cart-buy/CheckoutForm";
import Profile from "./components/cart-buy/Profile";

const App = () => {
  const [cartSize, setCartSize] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // Update cart size to zero when cart is empty
  React.useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartSize(totalItems);
  }, [cart]);
  // Define the toggleCheckout function
  const toggleCheckout = () => {
    // Your toggleCheckout logic here
    console.log("Toggling checkout");
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(""); // Set the user ID when logged in

  const handleLoginStatusChange = (status, userId) => {
    setIsLoggedIn(status);
    if (status) {
      setUserId(userId); // Set the user ID when logged in
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavBar
              size={cartSize}
              setShow={() => {}}
              isLoggedIn={isLoggedIn}
              userId={userId}
            />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="mens" element={<Mens setCartSize={setCartSize} />} />
          <Route path="kids" element={<Kids />} />
          <Route path="womens" element={<Womens />} />
          <Route path="Gadget Galaxy" element={<GadgetGalaxy />} />
          <Route
            path="AgroHarbor"
            element={
              <AgroHarbor
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="Auto Essentials"
            element={
              <AutoEssentials
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="Pharmacy"
            element={
              <Pharmacy
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="Watches"
            element={
              <Watches
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="Sports" element={<Sports />} />
          <Route path="HomeHub" element={<HomeHub />} />
          <Route
            path="formal"
            element={
              <Formal setCartSize={setCartSize} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="casual"
            element={
              <Casual setCartSize={setCartSize} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="jeans"
            element={
              <Jeans setCartSize={setCartSize} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="Slippers"
            element={
              <Slippers
                setCartSize={setCartSize}
                cart={cartItems}
                setCart={setCart}
              />
            }
          />
          <Route
            path="Mens Beauty"
            element={
              <MensBeauty
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="shoes"
            element={
              <Shoes setCartSize={setCartSize} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="blazer"
            element={
              <Blazer setCartSize={setCartSize} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="Inner Wears"
            element={
              <InnerWears
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="login"
            element={
              <Login
                setCartSize={setCartSize}
                cart={cart}
                setCart={setCart}
                onLoginStatusChange={handleLoginStatusChange}
              />
            }
          />
          <Route
            path="Cart"
            element={
              <Cart
                cartItems={cart}
                setCart={setCart}
                toggleCheckout={toggleCheckout}
              />
            }
          />
          <Route path="accessories" element={<Accessories />} />
          <Route path="athleisure" element={<Athleisure />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="intimates" element={<Intimates />} />
          <Route path="special occasions" element={<SpecialOccasions />} />
          <Route path="womensbeauty" element={<WomensBeauty />} />
          <Route path="womenshoes" element={<WomensShoes />} />
          <Route path="Workwear" element={<Workwear />} />
          <Route path="athlatedress" element={<AthlateDress />} />
          <Route path="cricket" element={<Cricket />} />
          <Route path="football" element={<FootBall />} />
          <Route path="hockey" element={<Hockey />} />
          <Route path="othergames" element={<OtherGames />} />
          <Route path="sports" element={<Sports />} />
          <Route path="vollyball" element={<VollyBall />} />
          <Route path="bedding&linens" element={<BeddingLinens />} />
          <Route path="decor&accents" element={<DecorAccents />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="homeelectronics" element={<HomeElectronics />} />
          <Route path="homefitness" element={<HomeFitness />} />
          <Route path="smarthome" element={<SmartHome />} />
          <Route path="mobilephones" element={<MobilePhones />} />
          <Route path="desktops" element={<Desktops />} />
          <Route path="laptops" element={<Laptops />} />
          <Route path="printers" element={<Printers />} />
          <Route path="profile" element={<Profile />} />

          <Route
            path="checkoutform"
            element={<CheckoutForm cartItems={cart} setCart={setCart} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
