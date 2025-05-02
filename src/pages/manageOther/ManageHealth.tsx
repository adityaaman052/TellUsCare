import { useState } from 'react';
import { Search,  Download, Printer, Calendar, AlertCircle, FileText, ChevronLeft, ChevronRight, ExternalLink, Clock, RefreshCw } from 'lucide-react';

export default function ManageHealth() {
  const [orders] = useState([
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
    { id: '53', vendorName: 'Company:- (No Name)', username: 'Policy Holder :-', orderDate: '01 Jan, 1970, 04:00:AM', status: 'Pending' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const ordersPerPage = 5;

  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Function to handle status filter
  const handleStatusFilter = (status: string) => {
    setSelectedStatus(status);
    setCurrentPage(1); // Reset to first page on new filter
  };

  // Function to handle check details click
  const handleCheckDetails = (id: string) => {
    console.log(`Checking details for order ${id}`);
    // Would navigate to details page or open a modal in a real application
  };

  // Filter orders based on search term and status
  const filteredOrders = orders.filter(order => 
    (order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.username.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedStatus === 'All' || order.status === selectedStatus)
  );

  // Calculate pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">Manage Health Orders</h1>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center hover:bg-blue-100">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </button>
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center hover:bg-blue-100">
                <Download className="h-4 w-4 mr-2" />
                Export
              </button>
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center hover:bg-blue-100">
                <Printer className="h-4 w-4 mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-6 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              <button 
                className={`px-4 py-2 rounded-md ${selectedStatus === 'All' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                onClick={() => handleStatusFilter('All')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${selectedStatus === 'Pending' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                onClick={() => handleStatusFilter('Pending')}
              >
                Pending
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${selectedStatus === 'Completed' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                onClick={() => handleStatusFilter('Completed')}
              >
                Completed
              </button>
              <button 
                className={`px-4 py-2 rounded-md ${selectedStatus === 'Cancelled' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
                onClick={() => handleStatusFilter('Cancelled')}
              >
                Cancelled
              </button>
            </div>
            <div className="w-full md:w-64 relative">
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full px-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vendor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.vendorName}</div>
                    <button 
                      className="text-sm text-blue-500 hover:text-blue-700 mt-1 flex items-center"
                      onClick={() => handleCheckDetails(order.id)}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Check Details
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-700">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      {order.orderDate}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                        order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {order.status === 'Pending' && <Clock className="h-3 w-3 mr-1" />}
                      {order.status === 'Completed' && <AlertCircle className="h-3 w-3 mr-1" />}
                      {order.status === 'Cancelled' && <AlertCircle className="h-3 w-3 mr-1" />}
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstOrder + 1}</span> to <span className="font-medium">
              {indexOfLastOrder > filteredOrders.length ? filteredOrders.length : indexOfLastOrder}
            </span> of <span className="font-medium">{filteredOrders.length}</span> results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-200 rounded-md">
              {currentPage}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className={`px-3 py-1 border rounded-md ${currentPage === totalPages || totalPages === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          Copyright © 2025 HealthManagement.com
        </div>
      </div>
    </div>
  );
}