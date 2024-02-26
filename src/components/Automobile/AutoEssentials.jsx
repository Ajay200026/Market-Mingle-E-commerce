// formal.js

import React from "react";

const products = [
  {
    id: 1,
    bestSeller: "+15",
    brand: "Tesla",
    productName: "Model S",
    rating: "✩✩✩✩✩  50,000",
    reviews: "Review 10,000",
    mrp: "79999 ",
    titel: "M.R.P",
    price: "74999",
    discount: "(6% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    bestSeller: "+12",
    brand: "Toyota",
    productName: "Camry Hybrid",
    rating: "✩✩✩✩☆  25,345",
    reviews: "Review 789",
    mrp: "37999 ",
    titel: "M.R.P",
    price: "34999",
    discount: "(8% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    bestSeller: "+10",
    brand: "Honda",
    productName: "Civic Type R",
    rating: "✩✩✩✩☆  12,876",
    reviews: "Review 432",
    mrp: "29999 ",
    titel: "M.R.P",
    price: "26999",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    bestSeller: "+14",
    brand: "Mercedes-Benz",
    productName: "S-Class",
    rating: "✩✩✩✩☆  18,543",
    reviews: "Review 876",
    mrp: "89999 ",
    titel: "M.R.P",
    price: "84999",
    discount: "(6% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut4.jpg",
    quantity: 1,
  },
  {
    id: 5,
    bestSeller: "+8",
    brand: "Ford",
    productName: "Mustang GT",
    rating: "✩✩✩✩☆  15,678",
    reviews: "Review 432",
    mrp: "44999 ",
    titel: "M.R.P",
    price: "41999",
    discount: "(7% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut5.jpg",
    quantity: 1,
  },
  {
    id: 6,
    bestSeller: "+11",
    brand: "Chevrolet",
    productName: "Camaro ZL1",
    rating: "✩✩✩✩✩  32,567",
    reviews: "Review 987",
    mrp: "55999 ",
    titel: "M.R.P",
    price: "52999",
    discount: "(5% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut6.jpg",
    quantity: 1,
  },
  {
    id: 7,
    bestSeller: "+9",
    brand: "Porsche",
    productName: "911 Carrera",
    rating: "✩✩✩✩☆  21,876",
    reviews: "Review 654",
    mrp: "99999 ",
    titel: "M.R.P",
    price: "94999",
    discount: "(5% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut7.jpg",
    quantity: 1,
  },
  {
    id: 8,
    bestSeller: "+13",
    brand: "Audi",
    productName: "Q7",
    rating: "✩✩✩✩☆  26,432",
    reviews: "Review 876",
    mrp: "69999 ",
    titel: "M.R.P",
    price: "64999",
    discount: "(7% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut8.jpg",
    quantity: 1,
  },
  {
    id: 9,
    bestSeller: "+16",
    brand: "Nissan",
    productName: "GT-R",
    rating: "✩✩✩✩☆  30,876",
    reviews: "Review 876",
    mrp: "119999 ",
    titel: "M.R.P",
    price: "114999",
    discount: "(4% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut9.jpg",
    quantity: 1,
  },
  {
    id: 10,
    bestSeller: "+14",
    brand: "Jeep",
    productName: "Wrangler",
    rating: "✩✩✩✩☆  25,543",
    reviews: "Review 789",
    mrp: "49999 ",
    titel: "M.R.P",
    price: "46999",
    discount: "(6% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut10.jpg",
    quantity: 1,
  },
  {
    id: 11,
    bestSeller: "+11",
    brand: "BMW",
    productName: "M5",
    rating: "✩✩✩✩☆  18,567",
    reviews: "Review 432",
    mrp: "97999 ",
    titel: "M.R.P",
    price: "94999",
    discount: "(3% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut11.jpg",
    quantity: 1,
  },
  {
    id: 12,
    bestSeller: "+9",
    brand: "Jaguar",
    productName: "F-Type",
    rating: "✩✩✩✩☆  15,876",
    reviews: "Review 543",
    mrp: "79999 ",
    titel: "M.R.P",
    price: "76999",
    discount: "(4% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut12.jpg",
    quantity: 1,
  },
  {
    id: 13,
    bestSeller: "+14",
    brand: "Lamborghini",
    productName: "Huracan",
    rating: "✩✩✩✩☆  28,765",
    reviews: "Review 987",
    mrp: "299999 ",
    titel: "M.R.P",
    price: "289999",
    discount: "(3% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut13.jpg",
    quantity: 1,
  },
  {
    id: 14,
    bestSeller: "+12",
    brand: "Land Rover",
    productName: "Range Rover Sport",
    rating: "✩✩✩✩☆  22,543",
    reviews: "Review 876",
    mrp: "119999 ",
    titel: "M.R.P",
    price: "114999",
    discount: "(4% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut14.jpg",
    quantity: 1,
  },
  {
    id: 15,
    bestSeller: "+10",
    brand: "Maserati",
    productName: "GranTurismo",
    rating: "✩✩✩✩☆  16,876",
    reviews: "Review 432",
    mrp: "159999 ",
    titel: "M.R.P",
    price: "154999",
    discount: "(3% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut15.jpg",
    quantity: 1,
  },
  {
    id: 16,
    bestSeller: "+15",
    brand: "Aston Martin",
    productName: "DB11",
    rating: "✩✩✩✩☆  26,567",
    reviews: "Review 765",
    mrp: "224999 ",
    titel: "M.R.P",
    price: "219999",
    discount: "(2% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut16.jpg",
    quantity: 1,
  },
  {
    id: 17,
    bestSeller: "+13",
    brand: "Audi",
    productName: "RS7 Sportback",
    rating: "✩✩✩✩☆  21,876",
    reviews: "Review 654",
    mrp: "129999 ",
    titel: "M.R.P",
    price: "124999",
    discount: "(4% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut17.jpg",
    quantity: 1,
  },
  {
    id: 18,
    bestSeller: "+14",
    brand: "Bentley",
    productName: "Continental GT",
    rating: "✩✩✩✩☆  24,432",
    reviews: "Review 876",
    mrp: "249999 ",
    titel: "M.R.P",
    price: "244999",
    discount: "(2% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut18.jpg",
    quantity: 1,
  },
  {
    id: 19,
    bestSeller: "+11",
    brand: "Ferrari",
    productName: "488 GTB",
    rating: "✩✩✩✩☆  17,876",
    reviews: "Review 654",
    mrp: "329999 ",
    titel: "M.R.P",
    price: "324999",
    discount: "(2% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut19.jpg",
    quantity: 1,
  },
  {
    id: 20,
    bestSeller: "+8",
    brand: "Rolls-Royce",
    productName: "Ghost",
    rating: "✩✩✩✩☆  14,567",
    reviews: "Review 432",
    mrp: "399999 ",
    titel: "M.R.P",
    price: "394999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut20.jpg",
    quantity: 1,
  },
  {
    id: 21,
    bestSeller: "+10",
    brand: "Porsche",
    productName: "Panamera",
    rating: "✩✩✩✩☆  15,876",
    reviews: "Review 543",
    mrp: "114999 ",
    titel: "M.R.P",
    price: "111999",
    discount: "(3% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut21.jpg",
    quantity: 1,
  },
  {
    id: 22,
    bestSeller: "+13",
    brand: "Mclaren",
    productName: "720S",
    rating: "✩✩✩✩☆  22,345",
    reviews: "Review 876",
    mrp: "299999 ",
    titel: "M.R.P",
    price: "294999",
    discount: "(2% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut22.jpg",
    quantity: 1,
  },
  {
    id: 23,
    bestSeller: "+14",
    brand: "Bugatti",
    productName: "Chiron",
    rating: "✩✩✩✩☆  28,765",
    reviews: "Review 987",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut23.jpg",
    quantity: 1,
  },
  {
    id: 24,
    bestSeller: "+11",
    brand: "Koenigsegg",
    productName: "Jesko",
    rating: "✩✩✩✩☆  19,543",
    reviews: "Review 876",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut24.jpg",
    quantity: 1,
  },
  {
    id: 25,
    bestSeller: "+16",
    brand: "Aston Martin",
    productName: "Valkyrie",
    rating: "✩✩✩✩☆  14,876",
    reviews: "Review 432",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut25.jpg",
    quantity: 1,
  },
  {
    id: 26,
    bestSeller: "+15",
    brand: "Ferrari",
    productName: "SF90 Stradale",
    rating: "✩✩✩✩✩  32,567",
    reviews: "Review 765",
    mrp: "699999 ",
    titel: "M.R.P",
    price: "694999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut26.jpg",
    quantity: 1,
  },
  {
    id: 27,
    bestSeller: "+12",
    brand: "Lamborghini",
    productName: "Sian FKP 37",
    rating: "✩✩✩✩☆  21,876",
    reviews: "Review 654",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut27.jpg",
    quantity: 1,
  },
  {
    id: 28,
    bestSeller: "+8",
    brand: "Pagani",
    productName: "Huayra Roadster",
    rating: "✩✩✩✩☆  14,567",
    reviews: "Review 432",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut28.jpg",
    quantity: 1,
  },
  {
    id: 29,
    bestSeller: "+10",
    brand: "Rimac",
    productName: "C_Two",
    rating: "✩✩✩✩☆  18,876",
    reviews: "Review 543",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut29.jpg",
    quantity: 1,
  },
  {
    id: 30,
    bestSeller: "+9",
    brand: "Lotus",
    productName: "Evija",
    rating: "✩✩✩✩☆  17,567",
    reviews: "Review 432",
    mrp: "2999999 ",
    titel: "M.R.P",
    price: "2989999",
    discount: "(1% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/Automobile/aut30.jpg",
    quantity: 1,
  },
];

const AutoEssentials = ({ setCartSize, cart, setCart }) => {
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
      <h2>AutoMobile Essentials</h2>
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

export default AutoEssentials;
