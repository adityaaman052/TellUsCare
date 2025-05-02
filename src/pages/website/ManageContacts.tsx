import { useState } from 'react';
import { Plus, Edit } from 'lucide-react';

export default function ManageContacts() {
  // State for the records per page dropdown
  const [recordsPerPage, setRecordsPerPage] = useState('10');
  
  // State for the search input
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for the addresses data
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      country: 'India',
      address: 'B3-K2 wing, MIDC Ambernath, Thane, Maharastra',
      status: 'Active',
      selected: false
    }
  ]);
  
  // State for tracking if "select all" is checked
  const [selectAll, setSelectAll] = useState(false);
  
  // Handle select all checkbox
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    
    const updatedAddresses = addresses.map(address => ({
      ...address,
      selected: newSelectAll
    }));
    
    setAddresses(updatedAddresses);
  };
  
  // Handle individual checkbox selection
  const handleSelectAddress = (id: number) => {
    const updatedAddresses = addresses.map(address => 
      address.id === id ? { ...address, selected: !address.selected } : address
    );
    
    setAddresses(updatedAddresses);
    
    // Update selectAll based on if all addresses are selected
    const allSelected = updatedAddresses.every(address => address.selected);
    setSelectAll(allSelected);
  };
  
  // Handle activate button
  const handleActivate = () => {
    const updatedAddresses = addresses.map(address => 
      address.selected ? { ...address, status: 'Active' } : address
    );
    setAddresses(updatedAddresses);
  };
  
  // Handle deactivate button
  const handleDeactivate = () => {
    const updatedAddresses = addresses.map(address => 
      address.selected ? { ...address, status: 'Inactive' } : address
    );
    setAddresses(updatedAddresses);
  };
  
  // Handle delete button
  const handleDelete = () => {
    const remainingAddresses = addresses.filter(address => !address.selected);
    setAddresses(remainingAddresses);
    setSelectAll(false);
  };
  
  // Handle search
  const handleSearch = () => {
    // In a real application, this would perform filtering or API call
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Manage Contact Address</h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <a href="#" className="text-blue-500 hover:text-blue-700 flex items-center">
              <Plus size={18} className="mr-1" />
              <span>Add Address</span>
            </a>
            
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Records Per Page :</span>
              <select 
                value={recordsPerPage}
                onChange={(e) => setRecordsPerPage(e.target.value)}
                className="border border-gray-300 rounded p-2 bg-white"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <div className="flex items-center">
              <button 
                onClick={handleActivate}
                className="mr-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50"
              >
                Activate
              </button>
              <button 
                onClick={handleDeactivate}
                className="mr-2 px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50"
              >
                Deactivate
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-2 border border-gray-300 rounded bg-white hover:bg-gray-50"
              >
                Delete
              </button>
            </div>
            
            <div className="flex items-center w-full sm:w-auto">
              <div className="mr-2 text-gray-700">Search [ address,country ]</div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 mr-2"
                placeholder="Search..."
              />
              <button 
                onClick={handleSearch}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                GO
              </button>
            </div>
          </div>
        </div>
        
        {/* Address Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Country
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {addresses.map((address) => (
                <tr key={address.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={address.selected}
                      onChange={() => handleSelectAddress(address.id)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {address.country}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {address.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
                      address.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {address.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700">
                    <a href="#" className="flex items-center">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination could be added here */}
        
        {/* Footer */}
        <div className="mt-10 pt-6 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} Teluscare.com
        </div>
      </div>
    </div>
  );
}