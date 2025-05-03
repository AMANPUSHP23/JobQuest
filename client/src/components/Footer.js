import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold text-white">JobQuest</h1>
          <p className="text-sm">Giving you the best opportunities</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/dashboard" className="hover:text-white">Jobs</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Email</a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        <p>Designed and Developed by JobQuest Team. © 2025, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;