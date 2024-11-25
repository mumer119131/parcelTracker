import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Contact Form Section */}
          <div className="p-6 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              Have any questions or concerns? Fill out the form below, and we’ll get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="p-6 md:p-12 bg-indigo-600 text-white">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-6">
              We’re here to help! Reach out to us through the following channels, or visit us at our location.
            </p>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Address</h4>
              <p>123 Street Name, City, Country</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Email</h4>
              <p>contact@example.com</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4 mt-2">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-indigo-600 rounded-full shadow-md hover:bg-indigo-100"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-indigo-600 rounded-full shadow-md hover:bg-indigo-100"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white text-indigo-600 rounded-full shadow-md hover:bg-indigo-100"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
