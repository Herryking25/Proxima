import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef] py-10 px-4">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          Write your message
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Top Inputs */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name *"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="City*"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Message */}
          <textarea
            placeholder="Type your message here......."
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#A9592C] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#8c4724] transition duration-300"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
