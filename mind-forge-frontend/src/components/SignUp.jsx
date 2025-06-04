import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { fullName, email, password });
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg mt-8 space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-600 mt-2">
        Already have an account?{' '}
        <Link to="/signin" className="text-purple-600 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
