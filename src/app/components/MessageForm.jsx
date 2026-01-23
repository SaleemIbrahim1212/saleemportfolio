import React from 'react';
import ContactForm from './ContactForm';

const MessageForm = () => {
  return (
    <div id="Message_Form" className="relative flex w-full flex-col bg-black">
      <h3 className="m-4 p-4 pb-0 text-center text-3xl font-semibold text-blue-400">
        Say Hello!
      </h3>
      <span className="mt-5 text-center text-lg font-semibold text-white">
        Feel free to send me a message if you have any questions or want to connect!
      </span>
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default MessageForm;
