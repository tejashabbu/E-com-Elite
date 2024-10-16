import React from 'react';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/UserDetailsPage.css';

const UserDetailsPage = ({ user }) => {
  return (
    <div className="user-details-page">
      <h1>User Details</h1>
      <p>Name: {user.username}</p>
      <p>Email: {user.email}</p>
      <h2>Saved Addresses</h2>
      {/* Display saved addresses */}
      <h2>Past Orders</h2>
      {/* Display past orders */}
    </div>
  );
};

export default UserDetailsPage;
