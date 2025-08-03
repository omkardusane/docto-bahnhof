// Auth Page
import React from 'react';

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form className="max-w-md mx-auto mt-8 space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="*************"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-550 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
