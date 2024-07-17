// src/components/SignIn.js

import React, { useState } from 'react';

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Simulate sign-in validation
    if (email === 'user@example.com' && password === 'password') {
      onClose(true); // Sign in successful
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={handleSignIn}>Sign In</button>
          <button className="bg-red-600 text-white py-2 px-4 rounded" onClick={() => onClose(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;