import React from "react";

function About(){
  return (<div className="min-h-screen bg-white flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

      <p className="text-gray-600 text-center max-w-2xl leading-relaxed">
        This About page introduces our purpose. We build simple and clean React apps
        using TailwindCSS. Our goal is to help developers learn modern UI building faster
        and more efficiently.
      </p>

      <div className="mt-10 w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide developers with the resources they need to build fast, beautiful UI.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a trusted platform for frontend learning and UI components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
