import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Login({ setToken }) {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      });
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-yellow-500 hover:underline">Register here.</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;