import React, { useState } from 'react';
import axios from 'axios';

function JobList({ jobs, token }) {
  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/jobs', newJob, {
        headers: { 'x-auth-token': token },
      });
      window.location.reload();
    } catch (err) {
      console.error('Error posting job:', err);
    }
  };

  return (
    <>
      {token && (
        <div className="max-w-2xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Post a Job</h2>
            <input
              type="text"
              placeholder="Job Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Company"
              value={newJob.company}
              onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
              className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Location"
              value={newJob.location}
              onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
              className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Description"
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
              className="w-full p-3 mb-4 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700">
              Post Job
            </button>
          </form>
        </div>
      )}
      <div className="space-y-4">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job._id} className="bg-gray-800 p-4 rounded-md flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-700 rounded-md mr-4"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                  <p className="text-gray-300">{job.company}</p>
                  <p className="text-gray-400 text-sm">{job.description}</p>
                  <p className="text-gray-500 text-sm">{job.location}</p>
                  <p className="text-gray-500 text-sm">Posted on: {new Date(job.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Apply</button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">No jobs available</p>
        )}
      </div>
    </>
  );
}

export default JobList;