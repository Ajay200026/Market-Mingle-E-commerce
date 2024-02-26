// formal.js

import React from "react";
import "./css/formal.css";

const products = [
  {
    id: 1,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen1.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 2,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen2.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 3,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen3.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 4,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen4.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 5,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen5.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 6,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen6.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 7,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen7.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 8,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen8.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 9,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen9.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 10,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen10.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 11,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen11.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 12,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen12.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 13,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen13.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 14,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen14.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 15,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen15.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 16,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen16.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 17,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen17.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 18,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen18.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 19,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen19.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 20,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen20.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 21,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen21.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 22,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen22.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 23,
    bestSeller: "+13",
    brand: "Van Heusen",
    productName: "Men's Regular Fit Polo Shirt",
    rating: "✩✩✩✩✩  34,900",
    reviews: "Review 538",
    mrp: "1099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen23.jpg", // Add image file name for product 1
    quantity: 1,
  },
  {
    id: 24,
    bestSeller: "+9",
    brand: "Van Heusen",
    productName: " Polo Shirt",
    rating: "✩✩✩✩✩  34900",
    reviews: "Review 538",
    mrp: " 2099 ",
    titel: "M.R.P",
    price: "1199",
    discount: "(50% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/mens-images/means-card/jen24.jpg", // Add image file name for product 1
    quantity: 1,
  },

  // Add similar entries for other products with unique image file names
];

const Jeans = ({ setCartSize, cart, setCart }) => {
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update the quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Calculate the total number of items in the cart
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartSize(totalItems);
  };

  return (
    <div className="formal-dress-product">
      <h2>Jeans Collections</h2>
      <div className="formal-dress-container-1">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className="product-image">
              <img src={product.image} alt={product.productName} />
            </div>
            <div className="product-details">
              <p className="best-seller">Best Seller {product.bestSeller}</p>
              <div className="formal-card">
                <p className="brand">{product.brand}</p>
                <p className="product-name">{product.productName}</p>
                <div className="formal-review">
                  <p className="rating">{product.rating}</p>
                  <p className="reviews">{product.reviews}</p>
                </div>
                <div className="price-content">
                  <p className="mrp">₹{product.mrp}</p>
                  <p className="title">{product.titel}</p>
                  <p className="price">₹{product.price}</p>
                  <p className="discount">{product.discount}</p>
                </div>
                <p className="prime">{product.prime}</p>
                <p className="delivery">{product.delivery}</p>
              </div>

              <div className="buttons-formal-but">
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart"
                >
                  Add to Cart
                </button>
                &nbsp;
                <button
                  onClick={() => addToCart(product)}
                  className="add-to-cart"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jeans;
