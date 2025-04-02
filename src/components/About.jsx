import React from "react";
import { FaTicketAlt, FaMoneyBillWave, FaLock, FaSmile } from "react-icons/fa";

const About = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center "
    >
      <div className=" bg-white p-8 shadow-lg rounded-2xl border-2 border-white">
        <h1 className="text-3xl font-bold text-center text-violet-600">About TicketBazzar</h1>
        <p className="mt-4 text-gray-700 text-lg text-center">
          Welcome to <span className="font-semibold">TicketBazzar</span> – your ultimate destination for hassle-free ticket booking.
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="flex items-center">
            <FaTicketAlt className="text-blue-500 text-2xl mr-3" />
            <p className="text-gray-600">
              <span className="font-semibold">Easy Ticket Booking:</span> Book your favorite events in just a few clicks.
            </p>
          </div>

          <div className="flex items-center">
            <FaMoneyBillWave className="text-green-500 text-2xl mr-3" />
            <p className="text-gray-600">
              <span className="font-semibold">Low Platform Fees:</span> Enjoy affordable ticket booking with no hidden charges.
            </p>
          </div>

          <div className="flex items-center">
            <FaLock className="text-red-500 text-2xl mr-3" />
            <p className="text-gray-600">
              <span className="font-semibold">Secure Payments:</span> We ensure a safe and secure transaction process.
            </p>
          </div>

          <div className="flex items-center">
            <FaSmile className="text-yellow-500 text-2xl mr-3" />
            <p className="text-gray-600">
              <span className="font-semibold">Customer Satisfaction:</span> We prioritize a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;