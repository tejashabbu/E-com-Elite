import React from 'react';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    // Logic to add product to cart
  };

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
