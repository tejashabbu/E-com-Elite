import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our E-Commerce Store</h1>
      <h2>Categories</h2>
      <ul>
        <li><Link to="/categories/groceries">Groceries</Link></li>
        <li><Link to="/categories/kitchenware">Kitchenware</Link></li>
        <li><Link to="/categories/dairy">Dairy</Link></li>
        <li><Link to="/categories/toiletries">Toiletries</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
