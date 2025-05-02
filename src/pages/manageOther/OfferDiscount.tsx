import { useState } from 'react';
import { Calendar, Tag, Plus, Search,  Percent, Filter, Download, Printer } from 'lucide-react';

export default function OfferDiscount() {
  const [coupons] = useState([
    { id: 1, name: 'Launch Offer 2', code: 'LAUNCH_15', type: 1, discount: 15, total: 100, service: 'Pest Control Service', startDate: '2018-07-30', endDate: '2018-10-31' },
    { id: 2, name: 'Launch Offer 3', code: 'LAUNCH_20', type: 1, discount: 20, total: 100, service: 'Pest Control Service', startDate: '2018-07-30', endDate: '2018-10-31' },
    { id: 3, name: 'Launch Offer', code: 'CLEAN_10', type: 1, discount: 10, total: 100, service: 'Cleaning Service', startDate: '2018-08-16', endDate: '2018-10-31' },
    { id: 4, name: 'Launch Offer Cleaning', code: 'CLEAN_15', type: 1, discount: 15, total: 100, service: 'Cleaning Service', startDate: '2018-08-16', endDate: '2018-10-31' },
    { id: 5, name: 'Launch Offer Cleaning 2', code: 'CLEAN_20', type: 1, discount: 20, total: 100, service: 'Cleaning Service', startDate: '2018-08-16', endDate: '2018-10-31' },
    { id: 6, name: 'Heath insurance offer', code: 'HEALTH_5', type: 1, discount: 5, total: 100, service: 'Health Insurance', startDate: '2018-08-16', endDate: '2018-10-31' },
    { id: 7, name: 'Motor insurance offer', code: 'MOTOR_10', type: 1, discount: 10, total: 100, service: 'Motor Insurance', startDate: '2018-08-16', endDate: '2018-10-31' },
    { id: 8, name: 'Car Tow Discount', code: 'CARTOW_10', type: 1, discount: 10, total: 100, service: 'Cartoe Service', startDate: '2018-09-01', endDate: '2018-10-31' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Function to format date from YYYY-MM-DD to DD/MM/YYYY for display
  const formatDate = (dateString: string) => {
    const parts = dateString.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtered coupons based on search term
  const filteredCoupons = coupons.filter(coupon => 
    coupon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coupon.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coupon.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Tag className="h-6 w-6 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">Offers & Discounts</h1>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md flex items-center hover:bg-blue-100">
                <Filter className="h-4 w-4 mr-2" />
                Filter
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Coupon
              </button>
            </div>
            <div className="w-full sm:w-64 relative">
              <input
                type="text"
                placeholder="Search coupons..."
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
                  Coupon name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coupon code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coupon for service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCoupons.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {coupon.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                      {coupon.code}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className="flex items-center">
                      <Percent className="h-4 w-4 mr-1 text-gray-500" />
                      {coupon.type === 1 ? 'Percentage' : 'Fixed'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {coupon.discount}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ${coupon.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {coupon.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      {formatDate(coupon.startDate)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      {formatDate(coupon.endDate)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500">
          Copyright © 2025 TakeRate.com
        </div>
      </div>
    </div>
  );
}