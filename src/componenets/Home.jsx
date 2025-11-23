import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Website</h1>
      
      <p className="text-lg text-gray-600 max-w-xl text-center">
        This is the Home Page. Explore our amazing features, navigate using the navbar,
        and learn more about us!
      </p>

      <NavLink to="/login" className='text-white'>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Get Started
      </button>
      </NavLink>
    </div>
  );
};

export default Home;
