export default function AdminLogin() {
  return (
    <div>

      <div> Admin Login </div>
      <form className="max-w-md mx-auto mt-8 space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <div className="mt-1">
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full px-5 py-3 text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="admin"
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
          <label htmlFor="certFile" className="block text-sm font-medium text-gray-700">Certificate File</label>
          <div className="mt-1">
            <input
              type="file"
              name="certFile"
              id="certFile"
              className="block w-full text-base text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              accept=".crt,.pem"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex justify-center w-full px-4 py-2 text-base font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
      </form>


    </div>
  )
}