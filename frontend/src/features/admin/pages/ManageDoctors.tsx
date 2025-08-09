import { useEffect, useState } from "react";
import AddNewDoctor , {type DoctorFormEntry }from "../components/AddNewDoctor";
import { Link } from "react-router"; 
import { getAllDoctors, addDoctor } from "../services/doctorManagementApi";
import type { Doctor } from "../../../types/doctors";
import { useGetCall } from "../../../hooks/useGetCall";

export default function ManageDoctors() {
  // State to control the visibility of the AddNewDoctor modal
  const [addingDoctor, setAddingDoctor] = useState(false);
  // State to trigger a re-fetch of the doctors list after a new doctor is added
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Custom hook to fetch the list of doctors
  const {
    response: doctorsList,
    loading,
    error
  } = useGetCall({
    url: '/api/doctors', 
    params: {
      status: 'unapproved', 
    }, 
    mockData: getAllDoctors({ status: 'unapproved' }), // Fallback to mock data
    dependencies: [refreshTrigger] // Re-fetch data when this state changes
  });

  // This useEffect is now empty and can be removed, but is left here for context
  useEffect(() => {
  }, [refreshTrigger]);

  // Async function to handle the form submission for a new doctor
  const handleAddNewDoctor = async (entry: DoctorFormEntry) => {
    try {
      // Call the API to add the new doctor
      const newDoctor = await addDoctor(entry);
      // After a successful submission, close the modal
      setAddingDoctor(false);
      // Trigger a re-fetch of the doctor list
      setRefreshTrigger(prev => prev + 1);
      console.log('Doctor added successfully:', newDoctor);
    } catch (err) {
      console.error('Failed to add doctor:', err);
      // Here you could add more robust error handling, like showing an error message to the user
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Admin Doctors Management</h1>

      {loading && <div className="text-center text-gray-500">Loading doctors...</div>}
      {error && <div className="text-red-500 bg-red-100 p-4 rounded-md">Error: {error}</div>}
      
      <div className="mb-6">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-150"
          onClick={() => setAddingDoctor(true)}
        >
          Add Doctor
        </button>
        {/* Pass the isVisible prop to control the modal's display */}
        <AddNewDoctor 
          isVisible={addingDoctor}
          onSubmit={handleAddNewDoctor} 
          onClose={() => setAddingDoctor(false)} 
        />
      </div>

      {!loading && !error && doctorsList && (
        <div className="space-y-4">
          {doctorsList.map(doctor => (
            <div key={doctor.id} className="p-4 border rounded-lg shadow-sm bg-white">
              <h2 className="text-lg text-blue-900 font-semibold">{doctor.name}</h2>
              <p className="text-blue-900">
                {doctor.status} , {doctor.email}
              </p>
              <p className="text-gray-600">{doctor.specialities.map(String).join(', ')}</p>
              <Link to={`/admin/one-doctor/${doctor.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
