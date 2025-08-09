import { useEffect, useState } from "react";
import AddNewDoctor from "../components/AddNewDoctor";
import { Link } from "react-router";
import { getAllDoctors, addDoctor } from "../services/doctorManagementApi";
import type { Doctor } from "../../../types/doctors";
import { useGetCall } from "../../../hooks/useGetCall";

export default function ManageDoctors() {
  const [addingDoctor, setAddingDoctor] = useState(false);
  const {
    response: doctorsList,
    loading,
    error
  } = useGetCall({
    url: '/api/doctors', // Example URL, adjust as needed
    params: {
      status: 'unapproved', // Example filter, adjust as needed
    }, // Add any parameters if needed
    mockData: getAllDoctors({ status: 'unapproved' }) // Fallback to mock data
  });

  useEffect(() => {
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Doctors Management</h1>

      {loading && <div className="text-center">Loading doctors...</div>}
      {error && <div className="text-red-500 bg-red-100 p-4 rounded-md">{error}</div>}
      <div className="mb-6">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
         onClick={() => setAddingDoctor(true)}
        >Add Doctor</button>
        {addingDoctor &&
          <AddNewDoctor onSubmit={() => { }} onClose={() => setAddingDoctor(false)}>

          </AddNewDoctor>
        }</div>

      {!loading && !error && (
        <div className="space-y-4">
          {doctorsList.map(doctor => (
            <div key={doctor.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-lg  text-blue-900 font-semibold">{doctor.name}</h2>
              <p className="text-blue-900">
                {doctor.status} , {doctor.email}
              </p>
              <p className="text-gray-600">{doctor.specialities.map(String).join(', ')}</p>
              {
                <Link to={`/admin/one-doctor/${doctor.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                  View Details
                </Link>
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
}