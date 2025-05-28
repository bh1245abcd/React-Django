import React from "react";

const Contact = () => {
  return (
    <div className="py-26">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 lg:px-0">
        {/* Form */}
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Fullname"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Enter Phonenumber"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Enter Message"
            className="w-full border border-gray-300 rounded px-4 py-2 h-36 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </div>

        {/* Map */}
        <div className="w-full max-w-2xl">
          <iframe
            title="Google Map"
            className="w-full h-80 rounded-md shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.001222588953!2d-104.99025128464887!3d39.73923597944888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d79a6f4a71%3A0xbeb03d3a3c3a1bc4!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sin!4v1612345678910"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
