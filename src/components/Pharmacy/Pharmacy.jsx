import React from "react";

const products = [
  {
    id: 1,
    bestSeller: "+15",
    brand: "Pfizer",
    productName: "COVID-19 Vaccine - BNT162b2",
    rating: "✩✩✩✩✩  500,000",
    reviews: "Review 10,000",
    mrp: "9999 ",
    titel: "M.R.P",
    price: "8999",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    bestSeller: "+12",
    brand: "Johnson & Johnson",
    productName: "Pain Relief Tablets - Acetaminophen",
    rating: "✩✩✩✩☆  25,345",
    reviews: "Review 789",
    mrp: "499 ",
    titel: "M.R.P",
    price: "399",
    discount: "(20% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    bestSeller: "+10",
    brand: "Novartis",
    productName: "Blood Pressure Monitor",
    rating: "✩✩✩✩☆  12,876",
    reviews: "Review 432",
    mrp: "1299 ",
    titel: "M.R.P",
    price: "999",
    discount: "(23% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    bestSeller: "+14",
    brand: "Bayer",
    productName: "Aspirin - 81mg",
    rating: "✩✩✩✩☆  18,543",
    reviews: "Review 876",
    mrp: "299 ",
    titel: "M.R.P",
    price: "249",
    discount: "(17% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med4.jpg",
    quantity: 1,
  },
  {
    id: 5,
    bestSeller: "+8",
    brand: "Abbott",
    productName: "Rapid COVID-19 Test Kit",
    rating: "✩✩✩✩☆  15,678",
    reviews: "Review 432",
    mrp: "799 ",
    titel: "M.R.P",
    price: "599",
    discount: "(25% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med5.jpg",
    quantity: 1,
  },
  {
    id: 6,
    bestSeller: "+11",
    brand: "Roche",
    productName: "Digital Thermometer",
    rating: "✩✩✩✩✩  32,567",
    reviews: "Review 987",
    mrp: "999 ",
    titel: "M.R.P",
    price: "899",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med6.jpg",
    quantity: 1,
  },
  {
    id: 7,
    bestSeller: "+9",
    brand: "Sanofi",
    productName: "Cough Syrup - Dextromethorphan",
    rating: "✩✩✩✩☆  21,876",
    reviews: "Review 654",
    mrp: "199 ",
    titel: "M.R.P",
    price: "149",
    discount: "(25% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med7.jpg",
    quantity: 1,
  },
  {
    id: 8,
    bestSeller: "+13",
    brand: "Medtronic",
    productName: "Insulin Pen - NovoLog",
    rating: "✩✩✩✩☆  26,432",
    reviews: "Review 876",
    mrp: "7999 ",
    titel: "M.R.P",
    price: "6999",
    discount: "(13% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med8.jpg",
    quantity: 1,
  },
  // New entries for Tablets
  {
    id: 9,
    bestSeller: "+16",
    brand: "Apple",
    productName: "iPad Pro - 12.9 inch, 128GB",
    rating: "✩✩✩✩☆  30,876",
    reviews: "Review 876",
    mrp: "99999 ",
    titel: "M.R.P",
    price: "89999",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med9.jpg",
    quantity: 1,
  },
  {
    id: 10,
    bestSeller: "+14",
    brand: "Samsung",
    productName: "Galaxy Tab S7 - 256GB",
    rating: "✩✩✩✩☆  25,543",
    reviews: "Review 789",
    mrp: "79999 ",
    titel: "M.R.P",
    price: "69999",
    discount: "(13% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med10.jpg",
    quantity: 1,
  },
  {
    id: 11,
    bestSeller: "+11",
    brand: "Sony",
    productName: "Digital Blood Glucose Monitor",
    rating: "✩✩✩✩☆  18,567",
    reviews: "Review 432",
    mrp: "1299 ",
    titel: "M.R.P",
    price: "999",
    discount: "(23% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med11.jpg",
    quantity: 1,
  },
  {
    id: 12,
    bestSeller: "+9",
    brand: "LG",
    productName: "Portable Nebulizer",
    rating: "✩✩✩✩☆  15,876",
    reviews: "Review 543",
    mrp: "1999 ",
    titel: "M.R.P",
    price: "1499",
    discount: "(25% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med12.jpg",
    quantity: 1,
  },
  {
    id: 13,
    bestSeller: "+14",
    brand: "Fitbit",
    productName: "Fitness Tracker - Charge 5",
    rating: "✩✩✩✩✩  28,765",
    reviews: "Review 987",
    mrp: "4999 ",
    titel: "M.R.P",
    price: "4499",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med13.jpg",
    quantity: 1,
  },
  {
    id: 14,
    bestSeller: "+12",
    brand: "Omron",
    productName: "Automatic Blood Pressure Monitor",
    rating: "✩✩✩✩☆  22,543",
    reviews: "Review 876",
    mrp: "1599 ",
    titel: "M.R.P",
    price: "1399",
    discount: "(12% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med14.jpg",
    quantity: 1,
  },
  {
    id: 15,
    bestSeller: "+10",
    brand: "Acer",
    productName: "Chromebook Tab 10 - 32GB",
    rating: "✩✩✩✩☆  16,876",
    reviews: "Review 432",
    mrp: "19999 ",
    titel: "M.R.P",
    price: "17999",
    discount: "(10% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med15.jpg",
    quantity: 1,
  },
  {
    id: 16,
    bestSeller: "+15",
    brand: "Philips",
    productName: "Electric Toothbrush - Sonicare",
    rating: "✩✩✩✩✩  26,567",
    reviews: "Review 765",
    mrp: "2499 ",
    titel: "M.R.P",
    price: "2299",
    discount: "(8% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med16.jpg",
    quantity: 1,
  },
  {
    id: 17,
    bestSeller: "+13",
    brand: "3M",
    productName: "N95 Respirator Masks - Pack of 20",
    rating: "✩✩✩✩☆  19,876",
    reviews: "Review 543",
    mrp: "599 ",
    titel: "M.R.P",
    price: "499",
    discount: "(17% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med17.jpg",
    quantity: 1,
  },
  {
    id: 18,
    bestSeller: "+14",
    brand: "Garmin",
    productName: "Smartwatch - Forerunner 945",
    rating: "✩✩✩✩☆  24,432",
    reviews: "Review 876",
    mrp: "39999 ",
    titel: "M.R.P",
    price: "34999",
    discount: "(13% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med18.jpg",
    quantity: 1,
  },
  {
    id: 19,
    bestSeller: "+11",
    brand: "SurgiVet",
    productName: "Pet First Aid Kit",
    rating: "✩✩✩✩☆  17,876",
    reviews: "Review 654",
    mrp: "999 ",
    titel: "M.R.P",
    price: "799",
    discount: "(20% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med19.jpg",
    quantity: 1,
  },
  {
    id: 20,
    bestSeller: "+8",
    brand: "Xiaomi",
    productName: "Air Purifier - Mi Air 3",
    rating: "✩✩✩✩☆  14,567",
    reviews: "Review 432",
    mrp: "7999 ",
    titel: "M.R.P",
    price: "6999",
    discount: "(12% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med20.jpg",
    quantity: 1,
  },
  {
    id: 21,
    bestSeller: "+10",
    brand: "Fitbit",
    productName: "Smart Scale - Aria 2",
    rating: "✩✩✩✩☆  15,876",
    reviews: "Review 543",
    mrp: "1299 ",
    titel: "M.R.P",
    price: "999",
    discount: "(23% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med21.jpg",
    quantity: 1,
  },
  {
    id: 22,
    bestSeller: "+13",
    brand: "Nestlé",
    productName: "Nutritional Drink - Boost",
    rating: "✩✩✩✩✩  22,345",
    reviews: "Review 876",
    mrp: "699 ",
    titel: "M.R.P",
    price: "599",
    discount: "(14% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med22.jpg",
    quantity: 1,
  },
  {
    id: 23,
    bestSeller: "+14",
    brand: "Oculus",
    productName: "VR Headset - Quest 2",
    rating: "✩✩✩✩☆  28,765",
    reviews: "Review 987",
    mrp: "39999 ",
    titel: "M.R.P",
    price: "34999",
    discount: "(13% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med23.jpg",
    quantity: 1,
  },
  {
    id: 24,
    bestSeller: "+11",
    brand: "Colgate",
    productName: "Electric Toothbrush - ProClinical 250+",
    rating: "✩✩✩✩☆  19,543",
    reviews: "Review 876",
    mrp: "899 ",
    titel: "M.R.P",
    price: "699",
    discount: "(22% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med24.jpg",
    quantity: 1,
  },
  {
    id: 25,
    bestSeller: "+16",
    brand: "Cipla",
    productName: "Allergy Relief Tablets - Loratadine",
    rating: "✩✩✩✩☆  14,876",
    reviews: "Review 432",
    mrp: "299 ",
    titel: "M.R.P",
    price: "249",
    discount: "(17% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med25.jpg",
    quantity: 1,
  },
  {
    id: 26,
    bestSeller: "+15",
    brand: "Bose",
    productName: "Noise-Canceling Earbuds - QuietComfort",
    rating: "✩✩✩✩✩  32,567",
    reviews: "Review 765",
    mrp: "24999 ",
    titel: "M.R.P",
    price: "21999",
    discount: "(12% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med26.jpg",
    quantity: 1,
  },
  {
    id: 27,
    bestSeller: "+12",
    brand: "Merck",
    productName: "Vitamin D3 Supplement - 1000 IU",
    rating: "✩✩✩✩☆  21,876",
    reviews: "Review 654",
    mrp: "499 ",
    titel: "M.R.P",
    price: "399",
    discount: "(20% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med27.jpg",
    quantity: 1,
  },
  {
    id: 28,
    bestSeller: "+8",
    brand: "Sony",
    productName: "Wireless Blood Pressure Monitor",
    rating: "✩✩✩✩☆  14,567",
    reviews: "Review 432",
    mrp: "1799 ",
    titel: "M.R.P",
    price: "1499",
    discount: "(17% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med28.jpg",
    quantity: 1,
  },
  {
    id: 29,
    bestSeller: "+10",
    brand: "Durex",
    productName: "Condoms - Ultra Thin, Pack of 12",
    rating: "✩✩✩✩☆  18,876",
    reviews: "Review 543",
    mrp: "299 ",
    titel: "M.R.P",
    price: "249",
    discount: "(17% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med29.jpg",
    quantity: 1,
  },
  {
    id: 30,
    bestSeller: "+9",
    brand: "Dyson",
    productName: "Air Purifier - Pure Cool",
    rating: "✩✩✩✩✩  26,876",
    reviews: "Review 876",
    mrp: "34999 ",
    titel: "M.R.P",
    price: "31999",
    discount: "(8% off)",
    prime: "✓ Prime",
    delivery: "FREE Delivery by Amazon",
    image: "./src/assets/phramacy/med30.jpg",
    quantity: 1,
  },
];

const Pharmacy = ({ setCartSize, cart, setCart }) => {
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
      <h2>Medicines</h2>
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

export default Pharmacy;
