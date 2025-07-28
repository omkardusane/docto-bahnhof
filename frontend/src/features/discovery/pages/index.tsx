import { useState } from 'react';
import { DoctorSearch } from '../components/DoctorSearch.tsx';

export const Discovery = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    // In a real application, you would trigger an API call here
    console.log('Searching for:', term);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Find Your Doctor</h1>
      <DoctorSearch onSearch={handleSearch} />
      {searchTerm && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Search Results for "{searchTerm}"</h2>
          {/* This is where you would display the actual search results */}
          <p className="text-gray-600">
            (Results for "{searchTerm}" would appear here. This is a placeholder.)
          </p>
          {/* Example of potential results structure */}
          {/* <ul>
            <li>Doctor A - Specialty - Location</li>
            <li>Doctor B - Specialty - Location</li>
          </ul> */}
        </div>
      )}
    </div>
  );
};
