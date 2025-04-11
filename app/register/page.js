"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Log to confirm values of email and password
    console.log('Email:', email);
    console.log('Password:', password);
    setUser('');
    setPassword('');
    setSuccess(true);

    try {
      const res = await axios.post('http://localhost:3000/register', {
        email,
        password,
      });

      console.log('Response from server:', res.data);
      setMessage(res.data.message);

      // Clear form inputs after successful registration
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error('Error in registration:', err);
      setMessage(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl mb-6 text-center text-gray-800 font-semibold">Create Account</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email} // Ensure input reflects the state
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
          value={password} // Ensure input reflects the state
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
      </form>
    </div>
  );
}
