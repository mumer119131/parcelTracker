import Image from 'next/image';
import React from 'react';
import Person1 from '@/public/images/general/person-1.webp';
import Person2 from '@/public/images/general/person-2.webp';
import Person3 from '@/public/images/general/person-3.webp';
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg">
            Discover who we are, what drives us, and how we aim to make a difference.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to provide exceptional service and solutions that simplify lives. We
            strive to make a meaningful impact through innovation, dedication, and excellence in
            everything we do.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We prioritize honesty and transparency in our dealings, ensuring trust with our
              customers and partners.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              Our team embraces creativity and cutting-edge technology to deliver unique solutions.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We are committed to achieving the highest standards in every aspect of our work.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                src={Person1}
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                src={Person2}
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                src={Person3}
                alt="Team Member"
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
              <p className="text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-8 bg-indigo-600 text-white rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="mb-6">
            Be a part of our mission to create exceptional solutions and make a difference.
          </p>
          <button className="bg-white text-indigo-600 font-medium py-2 px-6 rounded-md hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
