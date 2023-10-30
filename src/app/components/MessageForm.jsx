import React from 'react';
import ContactForm from './ContactForm';

const MessageForm = () => {
  return (
    <div className='flex flex-col bg-black w-full'>
      <h3 className='text-3xl text-blue-400 p-4 pb-0 text-center font-semibold m-4'>
        Say Hello!
      </h3>
      <span className='text-white text-center text-lg font-semibold mt-5'>
        Feel free to send me a message if you have any questions or want to connect!
      </span>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full lg:w-1/2 px-4'>
          <ContactForm />
        </div>
        <div className='w-full lg:w-1/2 px-4 flex mt-10'>
          <div className='text-blue-300'>
            <h1>Email address</h1>
            <p className='text-white'>saleemibramza[at]gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
