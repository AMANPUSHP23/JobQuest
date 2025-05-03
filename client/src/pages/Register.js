import React from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        profilePic: e.target.profilePic.files[0]?.name || '',
        resume: e.target.resume.files[0]?.name || '',
        skills: e.target.skills.value
      };
      await axios.post('http://localhost:5000/api/auth/register', formData);
      history.push('/login');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="bg-gray-800 p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Full name"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <p className="text-gray-400 text-sm">Please select image file...</p>
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="resume"
              accept=".pdf"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
            />
            <p className="text-gray-400 text-sm">Please select PDF file...</p>
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              className="w-full p-3 border rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-yellow-500 hover:underline">Login here.</Link>
        </p>
      </div>
    </main>
  );
}

export default Register;