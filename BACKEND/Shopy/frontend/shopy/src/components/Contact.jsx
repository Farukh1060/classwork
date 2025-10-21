import React, { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {

  const contactSectionRef = useRef(null);

  useEffect(() => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);


  return (
    <div ref={contactSectionRef} className="container mx-auto py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold border-b-2 inline-block border-blue-500 px-4">
          Contact For Any Queries
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  id="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h5 className="text-xl font-semibold mb-3">Get In Touch</h5>
            <p className="text-gray-600">
              Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et.
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-3">Store 1</h5>
            <p className="mb-2 text-gray-700 flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 text-gray-700 flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" />
              info@example.com
            </p>
            <p className="mb-2 text-gray-700 flex items-center">
              <FaPhone className="text-blue-600 mr-2" />
              +012 345 67890
            </p>
          </div>

          <div>
            <h5 className="text-xl font-semibold mb-3">Store 2</h5>
            <p className="mb-2 text-gray-700 flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-2" />
              123 Street, New York, USA
            </p>
            <p className="mb-2 text-gray-700 flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" />
              info@example.com
            </p>
            <p className="mb-0 text-gray-700 flex items-center">
              <FaPhone className="text-blue-600 mr-2" />
              +012 345 67890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
