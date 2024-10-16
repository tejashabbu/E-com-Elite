import React, { useState } from 'react';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/LoginPage.css';

const LoginPage = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate user login
    setUser({ username });
    // Redirect to home page or perform navigation logic
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
