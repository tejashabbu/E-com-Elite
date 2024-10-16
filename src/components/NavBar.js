import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/NavBar.css';

const NavBar = ({ user, cart, setUser }) => {
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
      <Link to="/user-details">{user ? user.username : 'Login'}</Link>
      {user && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default NavBar;
