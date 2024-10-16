import React, { useState } from 'react';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/CheckoutPage.css';

const CheckoutPage = ({ cart }) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = () => {
    // Handle checkout logic
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <input 
        type="text" 
        placeholder="Address" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Payment Method" 
        value={paymentMethod} 
        onChange={(e) => setPaymentMethod(e.target.value)} 
      />
      <button onClick={handleCheckout}>Confirm Order</button>
    </div>
  );
};

export default CheckoutPage;
