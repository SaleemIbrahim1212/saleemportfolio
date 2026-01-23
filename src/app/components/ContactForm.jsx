'use client';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    subject_name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_q3wcyzw',
      'template_dztmpxn', 
      form.current, 
      'VDtnfaY3PId6ZvJta', 

    ).then(() => {
      //TODO: Change the alert so we get a good notificiation bubble
      alert('Thank you, I will get back to you shortly');
      setFormData({
        from_name: '',
        email: '',
        subject_name: '',
        message: '',
      });
      
    }).catch((error) => {
      console.log(error);
      alert('Failure in sending');
    });
  };

  const labelClass =
    'block text-blue-400 text-sm font-bold mb-2';
  const inputClass =
    'shadow bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline';
  const textareaClass =
    'shadow h-80 bg-black appearance-none border border-transparent border-b-gray-600 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline';

  return (
    <div className="relative mx-auto w-full max-w-md">
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="rounded bg-black px-8 pb-8 pt-6 shadow-md"
      >
        <div className="mb-4">
          <label className={labelClass} htmlFor="from_name">
            Name
          </label>
          <input
            className={inputClass}
            id="from_name"
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            className={inputClass}
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className={labelClass} htmlFor="subject_name">
            Subject
          </label>
          <input
            className={inputClass}
            id="subject_name"
            type="text"
            name="subject_name"
            value={formData.subject_name}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
        <div className="mb-6">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            className={textareaClass}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
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
