import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_wc7sjc9',    // Your Service ID
      'template_n16vni3',   // Your Template ID
      form.current,
      'O2hGDivbYsaqcoaaj'   // Your User ID (Public Key)
    )
    .then((result) => {
      console.log('Message sent:', result.text);
      alert('Your message has been sent successfully! 🎉');
    }, (error) => {
      console.error('Failed to send message:', error.text);
      alert('Failed to send message. Please try again.');
    });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div id="Contact" className="flex flex-col justify-center items-center py-8 bg-[#1a2036] w-full">
      {/* Header Section */}
      <div className="flex flex-col text-white space-y-2 justify-center mx-auto pb-9">
        <h1 className="font-bold text-3xl sm:text-5xl text-center">Contact me</h1>
        <p className="md:text-lg text-white w-[90%] md:w-[50%] text-center mx-auto">
          Feel free to reach out anytime! Whether you have a question, feedback, or just want to say hello, I’d be thrilled to hear from you. Drop a message, and I’ll get back to you as soon as I can!
        </p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center items-center w-[90%] sm:w-[40%] bg-[#171721] rounded-xl shadow-md shadow-indigo-400 mb-8">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 w-[90%]">
          <h1 className="text-2xl text-white font-bold text-center py-2">Email Me 🚀</h1>

          <label className="text-xl font-bold text-white">Name:</label>
          <input
            className="mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200"
            type="text"
            name="from_name"  // Matches the template variable
            placeholder="Your Name..."
            required
          />

          <label className="text-xl font-bold text-white">Email:</label>
          <input
            className="mb-6 py-1 rounded-sm px-2 text-lg font-semibold bg-gray-200"
            type="email"
            name="user_email"  // Matches the template variable
            placeholder="Your Email..."
            required
          />

          <label className="text-xl font-bold text-white">Message:</label>
          <textarea
            className="mb-6 py-1 h-[100px] rounded-sm px-2 text-lg font-semibold bg-gray-200"
            name="message"  // Matches the template variable
            placeholder="Message..."
            required
          ></textarea>

          <div className="flex items-center w-full justify-center">
            <input
              className="w-[50%] sm:w-[30%] my-6 py-2 rounded-md px-5 bg-orange-500 hover:bg-orange-400 text-xl font-semibold transform hover:scale-75 transition duration-200 ease-in-out"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>

      {/* Toast Notification Placeholder */}
      <div className="Toastify"></div>
    </div>
  );
};

export default Contact;
