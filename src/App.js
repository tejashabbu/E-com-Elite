import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CategoryPage from './components/CategoryPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import UserDetailsPage from './components/UserDetailsPage';
import NavBar from './components/NavBar';
import './styles/GlobalStyles.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <NavBar user={user} cart={cart} setUser={setUser} />
      <Routes>
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="/user-details" element={<UserDetailsPage user={user} />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
