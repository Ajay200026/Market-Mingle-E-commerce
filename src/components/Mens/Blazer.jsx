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
    image: "./src/assets/mens-images/means-card/bzz1.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz3.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz15.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz18.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz5.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz25.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz7.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz8.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz9.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz10.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz12.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz13.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz14.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz3.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz16.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz17.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz18.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz19.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz20.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz21.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz22.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/bzz23.jpg", // Add image file name for product 1
    quantity: 1,
  },
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
    image: "./src/assets/mens-images/means-card/bzz24.jpg", // Add image file name for product 1
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
    image: "./src/assets/mens-images/means-card/form25.jpg", // Add image file name for product 1
    quantity: 1,
  },

  // Add similar entries for other products with unique image file names
];

const Blazer = ({ setCartSize, cart, setCart }) => {
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
      <h2>Blazer Collections</h2>
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

export default Blazer;
