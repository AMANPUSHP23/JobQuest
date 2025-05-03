import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ token, setToken }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <header className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <Link to="/">JobQuest</Link>
        </h1>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/dashboard" className="text-white hover:text-gray-300">Jobs</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          {token ? (
            <button onClick={handleLogout} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Login</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;