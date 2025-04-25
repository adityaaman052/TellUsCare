import { useState } from 'react';
import { Briefcase, Building, Search, Edit2, Trash2, Power, Plus } from 'lucide-react';

export const LookingFor = () => {
  const [records] = useState([
    { id: 1, type: 'Off Shore', status: 'Active' },
    { id: 2, type: 'Trading Finance', status: 'Active' },
    { id: 3, type: 'SME Loan', status: 'Active' },
  ]);
  
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm min-h-screen">
      {/* Navigation Tabs */}
      <div className="flex mb-8 gap-2">
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
          <Briefcase size={16} className="mr-2" />
          MANAGE DEPARTMENT/ SUB DEPARTMENT
        </button>
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-md text-sm">
          <Building size={16} className="mr-2" />
          MANAGE COMPANY TYPE
        </button>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
          <Search size={16} className="mr-2" />
          MANAGE LOOKING FOR(SUB TYPE OF COMPANY)
        </button>
      </div>
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">Manage Looking For</h1>
        <div className="flex items-center justify-between">
          <button className="text-blue-500 hover:text-blue-700 flex items-center">
            <Plus size={18} className="mr-1" />
            Add Looking For
          </button>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Records Per Page:</span>
            <select 
              value={recordsPerPage} 
              onChange={(e) => setRecordsPerPage(Number(e.target.value))}
              className="border rounded px-3 py-1"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Search Controls */}
      <div className="flex items-center justify-end mb-4 gap-2">
        <span className="text-gray-600">Search (Type)</span>
        <input type="text" className="border rounded px-3 py-1 w-64" placeholder="Search..." />
        <select className="border rounded px-3 py-1">
          <option value="">Select</option>
          <option value="Off Shore">Off Shore</option>
          <option value="Trading Finance">Trading Finance</option>
          <option value="SME Loan">SME Loan</option>
        </select>
        <select className="border rounded px-3 py-1">
          <option value="">Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700">
          GO
        </button>
      </div>
      
      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-10 px-4 py-3"></th>
              <th className="px-4 py-3 text-left text-gray-700">Category</th>
              <th className="px-4 py-3 text-left text-gray-700">Type</th>
              <th className="px-4 py-3 text-left text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-4 py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-4 py-3">-</td>
                <td className="px-4 py-3 font-medium">{record.type}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-500 hover:text-blue-700 flex items-center">
                    <Edit2 size={16} className="mr-1" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex items-center border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded">
          <Power size={16} className="mr-2 text-green-600" />
          Activate
        </button>
        <button className="flex items-center border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded">
          <Power size={16} className="mr-2 text-yellow-600" />
          Deactivate
        </button>
        <button className="flex items-center border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded">
          <Trash2 size={16} className="mr-2 text-red-600" />
          Delete
        </button>
      </div>
      
      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        Copyright © 2025 Success Systems
      </div>
    </div>
  );
};

export default LookingFor;