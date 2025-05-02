import  { useState } from 'react';
import { CheckCircle, XCircle, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const ViewRoleAccess = () => {
  // Sample data from the image
  const initialUsers = [
    { id: 1, userType: 'Internal', email: 'niteshj.007@gmail.com', username: 'nitesh', password: '123456', regDate: '13 Jun, 2018, 00:00:AM', serviceAccess: 'carwash - 3', status: 'Inactive' },
    { id: 2, userType: 'Internal', email: 'insurancemgmt@teluscare.com', username: 'Insurance', password: 'TelusCare@2018', regDate: '01 Mar, 2020, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 3, userType: 'Internal', email: 'support@teluscare.com', username: 'fmsupport', password: 'fm@123', regDate: '18 Nov, 2020, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 4, userType: 'Internal', email: 'rm@teluscare.com', username: 'rm', password: 'rm@123', regDate: '29 Aug, 2019, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 5, userType: 'Internal', email: 'sbprm@teluscare.com', username: 'sbprm', password: 'sbprm@123', regDate: '29 Aug, 2019, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 6, userType: 'Internal', email: 'ac@teluscare.com', username: 'accounts', password: 'ac@123', regDate: '01 Mar, 2020, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 7, userType: 'Internal', email: 'facilitymgmt@teluscare.com', username: 'Facility MGMT', password: 'fm@123', regDate: '18 Nov, 2020, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 8, userType: 'Internal', email: 'support.ext@assurance-solutions.com', username: 'SMO-telus', password: '1234567', regDate: '24 Dec, 2022, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 9, userType: 'Internal', email: 'prosp1@teluscare.com', username: 'prosp1', password: 'Teluscareprosp@123', regDate: '21 Mar, 2022, 00:00:AM', serviceAccess: '-', status: 'Active' },
    { id: 10, userType: 'Internal', email: 'prosp2@teluscare.com', username: 'prosp2', password: 'Teluscareprosp2@123', regDate: '21 Mar, 2022, 00:00:AM', serviceAccess: '-', status: 'Active' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  // Handle checkbox selection
  const handleSelectUser = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Handle select all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedUsers(users.map(user => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  // Handle activation
  const handleActivate = () => {
    const updatedUsers = users.map(user => 
      selectedUsers.includes(user.id) ? { ...user, status: 'Active' } : user
    );
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  // Handle deactivation
  const handleDeactivate = () => {
    const updatedUsers = users.map(user => 
      selectedUsers.includes(user.id) ? { ...user, status: 'Inactive' } : user
    );
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  // Handle deletion
  const handleDelete = () => {
    const updatedUsers = users.filter(user => !selectedUsers.includes(user.id));
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left">
                    <input 
                      type="checkbox" 
                      onChange={handleSelectAll}
                      checked={selectedUsers.length === users.length && users.length > 0}
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Password
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reg. Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service Access
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr 
                    key={user.id} 
                    className={selectedUsers.includes(user.id) ? "bg-blue-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input 
                        type="checkbox" 
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.userType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.password}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.regDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.serviceAccess}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{users.length}</span> of{" "}
                  <span className="font-medium">{users.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </a>
                  <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleActivate}
            disabled={selectedUsers.length === 0}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-green-300"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Activate
          </button>
          <button
            onClick={handleDeactivate}
            disabled={selectedUsers.length === 0}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:bg-yellow-300"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Deactivate
          </button>
          <button
            onClick={handleDelete}
            disabled={selectedUsers.length === 0}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-300"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRoleAccess;