import React from 'react';
// import './CartPage.css';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/CartPage.css';

const CartPage = ({ cart, setCart }) => {
  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => removeFromCart(product)}>Remove</button>
        </div>
      ))}
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
// ugv