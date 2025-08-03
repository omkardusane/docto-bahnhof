// Auth Page
import React from 'react';

export default function Register() {
  return (
    <div>
      <form
        style={{ color: '#07446d' }}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get('email') as string;
          const name = formData.get('name') as string;
          const role = formData.get('role') as string;

          console.log('Email:', email);
          console.log('Name:', name);

        }}
      >
        <label>
          Email:
          <input className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="email" name="email" />
        </label>
        <br />
        <label>
          Name:
          <input className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" name="name" />
        </label>
        <br />
        <label>
          Role:
          <select
            className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            name="role"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </label>
        <br />
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          We will send you an email with instructions on how to confirm and verify your account.
        </p>
      </form>
    </div>
  );
}
