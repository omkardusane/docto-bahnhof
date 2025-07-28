import { useState } from 'react';

interface DoctorSearchProps {
  onSearch: (term: string) => void;
}

export const DoctorSearch = ({ onSearch }: DoctorSearchProps) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4 mb-8">
      <input
        type="text"
        placeholder="Search by doctor name, specialty, or location..."
        className="flex-grow p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
};
