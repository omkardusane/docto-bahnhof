import { useEffect, useState } from "react";
import { getAllDoctors } from "../services/doctorManagementApi";
import type { Doctor } from "../../../types/doctors";
import { useGetCall } from "../../../hooks/useGetCall";

export default function AdminDoctors() {
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
    /*   const fetchDoctors = async () => {
        try {
          setLoading(true);
          // In a real app, you would call your API service here
          const data = await getAllDoctors();
          setDoctors(data);
          setError(null);
        } catch (err) {
          setError('Failed to fetch doctors.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      }; */

    // fetchDoctors();
  }, []); // Empty dependency array means this effect runs once on mount

 
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Doctors Management</h1>

      {loading && <div className="text-center">Loading doctors...</div>}
      {error && <div className="text-red-500 bg-red-100 p-4 rounded-md">{error}</div>}

      {!loading && !error && (
        <div className="space-y-4">
          {doctorsList.map(doctor => (
            <div key={doctor.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-lg  text-blue-900 font-semibold">{doctor.name}</h2>
              <p className="text-blue-900">
                {doctor.status} , {doctor.email}
              </p>
              <p className="text-gray-600">{doctor.specialities.map(String).join(', ')}</p>
              {/* 
                A link to a single doctor view can be added here.
                You'll need to have react-router-dom installed and set up.
                Example:
                import { Link } from 'react-router-dom';
                <Link to={`/admin/doctors/${doctor.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                  View Details
                </Link> 
              */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}