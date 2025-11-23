import React from "react";

const Login = () => {
  return (<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
