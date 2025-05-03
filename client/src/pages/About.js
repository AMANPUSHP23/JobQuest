import React from 'react';

function About() {
  return (
    <main className="flex-1 container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300">
            At JobQuest, we’re more than just a job application platform – we’re your partners in realizing your professional aspirations. Our mission is to connect talented individuals with remarkable opportunities that elevate their careers and enrich their lives. Whether you’re a recent graduate stepping into the workforce or a seasoned professional seeking new horizons, JobQuest is here to guide you every step of the way.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">What Sets Us Apart</h2>
          <ul className="text-gray-300 list-disc list-inside">
            <li><strong>Tailored Matches:</strong> We understand that each candidate and company is unique. Our advanced matching algorithms ensure that your skills align perfectly with the roles you’re interested in, saving you time and effort.</li>
            <li><strong>Exceptional Support:</strong> Your success is our priority. Our dedicated team is always ready to assist you, from optimizing your profile to preparing for interviews.</li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-md">
          <h2 className="text-2xl font-bold mb-4">Join the JobQuest Community</h2>
          <p className="text-gray-300">
            When you join JobQuest, you’re not just signing up for a platform – you’re becoming part of a dynamic community of professionals, recruiters, and mentors. Together, we’re shaping the future of work, one opportunity at a time. Thank you for choosing JobQuest as your partner in career advancement. Here’s to unlocking a world of possibilities and achieving greatness together!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;