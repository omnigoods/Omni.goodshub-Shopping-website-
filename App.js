
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [product, setProduct] = useState({ name: "Mobizac Hammer Torch", price: 799, salePrice: 385 });
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    alert("Product added to cart!");
  };

  return (
    <div className="container">
      <h1>OmniGoods</h1>
      <div className="product-card">
        <img src="https://via.placeholder.com/150" alt="Product" />
        <h2>{product.name}</h2>
        <p><s>₹{product.price}</s> ₹{product.salePrice}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default App;
