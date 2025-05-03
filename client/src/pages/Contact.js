import React, { useState } from 'react';

function Contact() {
  const [expanded, setExpanded] = useState({});

  const faqs = [
    {
      question: "How do I create an account on your job application platform?",
      answer: "Click on the 'Register' link in the navigation bar, fill in your details, and submit the form to create an account."
    },
    {
      question: "What should I include in my job application?",
      answer: "Ensure your application includes your resume, a cover letter tailored to the job, and any relevant skills or certifications."
    },
    {
      question: "How can I check the status of my job application?",
      answer: "Log in to your account and visit the dashboard to view the status of your applications."
    }
  ];

  const toggleFAQ = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main className="flex-1 container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-300 mb-8">
        We're excited to hear from you! If you have any questions, inquiries, or feedback, feel free to reach out to us using the contact information provided below. Your satisfaction and engagement with our platform are our top priorities, and we're here to assist you in any way we can.
      </p>
      <div className="bg-gray-800 p-6 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <p className="mb-4"><strong>Address:</strong> JobQuest, Wall Street, New York, 123, United States</p>
        <p className="mb-4">
          <strong>Email:</strong><br />
          General Inquiries: info@jobquest.com<br />
          Support: support@jobquest.com<br />
          Job Applications: jobs@jobquest.com
        </p>
        <p className="mb-4">
          <strong>Phone:</strong><br />
          Customer Support: +123-456-7890<br />
          HR & Job Inquiries: +123-456-7891
        </p>
        <p className="mb-4">
          <strong>Social Media:</strong><br />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Email</a>
          </div>
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-md mt-8">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions (FAQs):</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-3 bg-gray-700 rounded-md flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{expanded[index] ? '−' : '+'}</span>
            </button>
            {expanded[index] && (
              <div className="p-3 bg-gray-600 rounded-b-md">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Contact;