// Interview.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  Users, 
  Clipboard, 
  Clock, 
  Briefcase, 
  Award, 
  FileText, 
  BarChart2, 
  DollarSign, 
  Edit, 
  Plus
} from 'lucide-react';

interface Candidate {
  id: number;
  name: string;
  dob: string;
  gender: string;
  mobile: string;
  email: string;
  address: {
    line: string;
    landmark: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
  };
  status: string;
  joiningDate: string;
}

const Interview: React.FC = () => {
  const navigate = useNavigate();
  const [candidates] = useState<Candidate[]>([
    {
      id: 1,
      name: "Sumit ll tt",
      dob: "15-10-1990",
      gender: "Male",
      mobile: "15648",
      email: "admin@gmail.com",
      address: {
        line: "146498",
        landmark: "Hanuman Mandir",
        city: "mumbai",
        pincode: "400001",
        state: "Maharashtra",
        country: "India"
      },
      status: "Offered",
      joiningDate: "2023-11-16"
    }
  ]);

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const addCandidate = () => {
    navigateTo('/hr/add-candidate');
  };

  const updateCandidate = (id: number) => {
    navigateTo(`/hr/update-candidate/${id}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Menu */}
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="flex flex-wrap justify-center gap-2">
          <button 
            onClick={() => navigateTo('/hr/interview')}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            <FileText size={16} />
            INTERVIEW
          </button>
          
          <button 
            onClick={() => navigateTo('/hr/addEmployees')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <UserPlus size={16} />
            ADD EMPLOYEE
          </button>
          
          <button 
            onClick={() => navigateTo('/add-in-bulk')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Users size={16} />
            ADD IN BULK
          </button>
          
          <button 
            onClick={() => navigateTo('/listing')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Clipboard size={16} />
            LISTING
          </button>
          
          <button 
            onClick={() => navigateTo('/attendance')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Clock size={16} />
            ATTENDANCE
          </button>
          
          <button 
            onClick={() => navigateTo('/work-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Briefcase size={16} />
            WORK STATUS
          </button>
          
          <button 
            onClick={() => navigateTo('/reward')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Award size={16} />
            REWARD
          </button>
          
          <button 
            onClick={() => navigateTo('/application-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <FileText size={16} />
            STATUS OF APPLICATION
          </button>
          
          <button 
            onClick={() => navigateTo('/performance')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <BarChart2 size={16} />
            PERFORMANCE
          </button>
          
          <button 
            onClick={() => navigateTo('/salary')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <DollarSign size={16} />
            SALARY
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center w-full">Candidate Interview</h1>
        </div>

        <div className="flex justify-end mb-6">
          <button 
            onClick={addCandidate}
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 transition"
          >
            <Plus size={18} />
            ADD CANDIDATE
          </button>
        </div>

        {/* Candidates Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SR NO.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DOB
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GENDER
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  MOBILE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  EMAIL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ADDRESS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  JOINING DATE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  UPDATE STATUS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {candidate.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.dob}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.gender}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.mobile}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div>
                      <p><strong>Address:</strong> {candidate.address.line}</p>
                      <p><strong>Landmark:</strong> {candidate.address.landmark}</p>
                      <p><strong>City:</strong> {candidate.address.city}</p>
                      <p><strong>Pincode:</strong> {candidate.address.pincode}</p>
                      <p><strong>State:</strong> {candidate.address.state}</p>
                      <p><strong>Country:</strong> {candidate.address.country}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      candidate.status === 'Offered' ? 'bg-green-100 text-green-800' : 
                      candidate.status === 'Rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.joiningDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => updateCandidate(candidate.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition flex items-center gap-1"
                    >
                      <Edit size={16} />
                      UPDATE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-4 text-center text-gray-500 text-sm mt-12">
        Copyright © 2025 HR-Learn.com
      </div>
    </div>
  );
};

export default Interview;