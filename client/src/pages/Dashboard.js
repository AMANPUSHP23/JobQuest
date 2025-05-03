import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from '../components/JobList';

function Dashboard({ token }) {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [salary, setSalary] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const categories = ['Technology', 'Marketing', 'Finance', 'Sales', 'Legal'];
  const companies = ['Google', 'Apple', 'Paypal', 'Samsung', 'Amazon', 'Oracle'];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/jobs', {
          params: { search, category, company }
        });
        setJobs(res.data);
      } catch (err) {
        console.error('Error fetching jobs:', err);
      }
    };
    fetchJobs();
  }, [search, category, company]);

  const filteredJobs = jobs.filter(job => {
    const salaryMatch = parseInt(job.description.match(/\d+/) || 0) >= salary;
    return salaryMatch;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleDelete = async (jobId) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${jobId}`, {
        headers: { 'x-auth-token': token },
      });
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (err) {
      console.error('Error deleting job:', err);
    }
  };

  return (
    <main className="flex-1 container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Find your dream job now</h2>
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md p-3 border rounded-l-md bg-gray-800 text-white focus:outline-none"
        />
        <button className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700">Search</button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters */}
        <div className="md:w-1/4">
          <div className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            {categories.map((cat, index) => (
              <div key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold mb-4">Salary</h3>
            <input
              type="range"
              min="0"
              max="100000"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full"
            />
            <p>${salary}</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-4">Companies</h3>
            {companies.map((comp, index) => (
              <div key={index} className="mb-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="company"
                    value={comp}
                    checked={company === comp}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mr-2"
                  />
                  {comp}
                </label>
              </div>
            ))}
            <button
              onClick={() => {
                setCategory('');
                setCompany('');
                setSalary(0);
              }}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 mt-4 w-full"
            >
              Remove Filter
            </button>
          </div>
        </div>
        {/* Job Listings */}
        <div className="md:w-3/4">
          <JobList jobs={currentJobs} token={token} onDelete={handleDelete} />
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-700 text-white px-4 py-2 rounded-l-md disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                onClick={() => setCurrentPage(page + 1)}
                className={`px-4 py-2 ${currentPage === page + 1 ? 'bg-blue-600' : 'bg-gray-700'} text-white`}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-700 text-white px-4 py-2 rounded-r-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;