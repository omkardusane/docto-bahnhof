import React, { useState } from 'react';

// Define the interface for the form data
export interface DoctorFormEntry {
    name: string;
    email: string;
}

// The main component for adding a new doctor
export default function AddNewDoctor(props: { onSubmit?: (entry: DoctorFormEntry) => void, onClose?: () => void, isVisible: boolean }) {
    // Use the useState hook to manage the form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Handle the form submission
    const handleSubmit = (event: React.FormEvent) => {
        // Prevent the default form submission behavior which reloads the page
        event.preventDefault();

        // Call the onSubmit prop with the current form data
        if (props.onSubmit) {
            props.onSubmit({ name, email });
        }
    };
    if (!props.isVisible) {
        return null; // If the modal is not visible, return null to render nothing
    }
    return (
        <div className='fixed inset-0 flex items-center justify-center backdrop-blur-[12px] z-5'>

            <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4 bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Doctor</h1>

                {/* The form with a submission handler */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter doctor's name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter doctor's email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-4">
                        {/* The Save button will trigger the form's onSubmit handler */}
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Save Doctor
                        </button>

                        {/* The Cancel button calls the onClose prop */}
                        <button
                            type="button"
                            className="flex-1 bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-150 ease-in-out"
                            onClick={() => props.onClose && props.onClose()}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

