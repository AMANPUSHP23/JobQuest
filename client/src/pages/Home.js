import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import JobList from '../components/JobList';

function Home({ token }) {
  const [jobs, setJobs] = useState([]);
  const companies = [
    'Adobe', 'Airbnb', 'Amazon', 'Apple', 'Cisco', 'Dropbox', 'Google', 'IBM',
    'Intel', 'LinkedIn', 'Microsoft', 'Netflix', 'Oracle', 'Paypal', 'Salesforce',
    'Samsung', 'Spotify', 'Tesla', 'Uber'
  ];
  const testimonials = [
    { name: 'John Doe', role: 'Software Engineer, TechCorp', quote: 'JobQuest helped me find my dream job quickly and easily. The platform is user-friendly and has a great selection of job listings.' },
    { name: 'Jane Smith', role: 'Product Manager, InnovateX', quote: 'I love how JobQuest connects job seekers with top companies. It made my job search stress-free and successful!' },
    { name: 'Michael Johnson', role: 'Data Analyst, TechNet', quote: 'JobQuest provided me with valuable insights into job trends. Highly recommend!' }
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs');
        setJobs(res.data.slice(0, 3)); // Limit to 3 for featured jobs
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">JobQuest</h1>
        <p className="text-xl mb-8">Your gateway to job opportunities.</p>
        <Link to="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Browse Jobs
        </Link>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Jobs</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <JobList jobs={jobs} token={token} />
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Companies on our site</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {companies.map((company, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-md text-center">
                <p className="text-white">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">What Our Users Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-md">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;