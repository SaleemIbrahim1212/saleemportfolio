'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData); // You can replace this with your submission logic
  };

  return (
    <div className=" relative max-w-md mx-auto w-full">
      <form onSubmit={handleSubmit} className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-blue-400 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-400 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlinee"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-400 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
        <div className="mb-6">
          <label className="block text-blue-400 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow h-80 bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline leading-tight"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
