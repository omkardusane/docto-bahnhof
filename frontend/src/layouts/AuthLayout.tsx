import { Outlet } from "react-router";
import Header from '../components/layout/Header'

export default function AuthLayout() {
  return (

    <div className="flex">
      {/* <Header /> */}
      {/* Left side: Illustration or brand */}
      <div className="hidden md:flex h-[83vh] w-2/3 bg-gradient-to-r from-[#006980] to-[#00c3e6] text-white items-center justify-center">
        <h1 className="text-3xl font-bold">Doctobahnhof</h1>
        <hr className="my-4 border-blue-700" />

        <p> <i>Branding</i></p>
      </div>

      {/* Right side: Auth Pages */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-r to-[#006980] from-[#00c3e6]">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <Outlet />
          {/* 👆 This is where Login or Register Page renders */}
        </div>
      </div>
    </div>
  );
}
