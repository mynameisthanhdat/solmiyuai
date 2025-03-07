import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if you're using React Router
import coin from "../../assets/imgs/coin.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#111] flex flex-col justify-center items-center p-4">
      {/* 404 Image */}
      <img
        src={coin}
        alt="404 Not Found"
        className="mb-8 rounded shadow-lg"
      />

      {/* 404 Heading */}
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      
      {/* Description */}
      <p className="text-xl text-gray-600 mt-4 text-center max-w-md">
        Oops! The page you are looking for doesn't exist. It might have been removed or the URL may be incorrect.
      </p>

      {/* Link to Home */}
      <Link 
        to="/" 
        className="mt-6 px-6 py-3 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full hover:bg-cyan-600"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
