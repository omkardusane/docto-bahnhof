import { Outlet } from "react-router";
import Header from '../components/layout/Header'

export default function AuthLayout() {
  return (

    <div className="flex min-h-screen">
      {/* <Header /> */}
      {/* Left side: Illustration or brand */}
      <div className="hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center">
        <h1 className="text-3xl font-bold">Doctobahnhof</h1>
      </div>

      {/* Right side: Auth Pages */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <Outlet />
          {/* 👆 This is where Login or Register Page renders */}
        </div>
      </div>
    </div>
  );
}
