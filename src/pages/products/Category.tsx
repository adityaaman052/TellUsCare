import  { useState } from 'react';
import { 
  Search, ChevronDown, Package, Edit2, Trash2, 
  ToggleRight, ToggleLeft, Plus
} from 'lucide-react';

export default function Category() {
  // Sample category data based on the screenshots
  const [categories] = useState([
    { id: 1, name: 'Accounts and Audit', subcategories: 0, products: 0, status: 'inactive', order: 0 },
    { id: 2, name: 'Stationary Support', subcategories: 0, products: 0, status: 'inactive', order: 0 },
    { id: 3, name: 'Interior and Property', subcategories: 0, products: 0, status: 'inactive', order: 0 },
    { id: 4, name: 'Insurance', subcategories: 0, products: 0, status: 'inactive', order: 0 },
    { id: 5, name: 'Banking and Finance Facilities', subcategories: 2, products: 0, status: 'active', order: 0 },
    { id: 6, name: 'IT Supports Services', subcategories: 2, products: 0, status: 'active', order: 0 },
    { id: 7, name: 'Vehicle Garage Services', subcategories: 0, products: 0, status: 'active', order: 0 },
    { id: 8, name: 'Rent A Car', subcategories: 0, products: 0, status: 'active', order: 0 },
    { id: 9, name: 'Consultations and Recruitment', subcategories: 0, products: 0, status: 'active', order: 0 },
    { id: 10, name: 'health_insurance', subcategories: 0, products: 0, status: 'active', order: 0 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const recordsPerPage = 10;
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  // Handle checkbox selection
  const handleSelectCategory = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  // Handle select all
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedCategories(categories.map(cat => cat.id));
    } else {
      setSelectedCategories([]);
    }
  };

  // Filter categories based on search term
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredCategories.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCategories.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex flex-col">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Category Management</h1>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                <Plus size={18} className="mr-1" /> Add Category
              </button>
              <div className="ml-6 text-gray-600 flex items-center">
                <span className="mr-2">Records Per Page:</span>
                <div className="relative">
                  <select className="border rounded-md py-2 pl-3 pr-8 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-3 text-gray-500" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name"
                  className="border rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <select className="ml-2 border rounded-md py-2 pl-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button className="ml-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium">
                GO
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-12 px-4 py-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300"
                    onChange={handleSelectAll}
                    checked={selectedCategories.length === categories.length}
                  />
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Image</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Display Order</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {currentRecords.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleSelectCategory(category.id)}
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">{category.name}</span>
                      {category.name !== 'health_insurance' && (
                        <div className="text-sm text-blue-500 mt-1">
                          <span>Subcategory [{category.subcategories}]</span>
                          {category.products > 0 && <span> | Products [{category.products}]</span>}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <div className="flex justify-center">
                      <Package size={20} className="text-gray-400" />
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <input
                      type="text"
                      value={category.order}
                      className="border rounded w-16 py-1 px-2 text-center"
                    />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      category.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.status === 'active' ? (
                        <ToggleRight size={16} className="mr-1 text-green-600" />
                      ) : (
                        <ToggleLeft size={16} className="mr-1 text-gray-500" />
                      )}
                      {category.status === 'active' ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right">
                    <button className="text-blue-500 hover:text-blue-700 p-1">
                      <Edit2 size={16} />
                    </button>
                    {category.name !== 'Banking and Finance Facilities' && (
                      <button className="text-red-500 hover:text-red-700 p-1 ml-2">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination and Actions */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md">
              Activate
            </button>
            <button className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-md">
              Deactivate
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-md">
              Delete
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md">
              Update Order
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-700 mr-4">
              Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, filteredCategories.length)} of {filteredCategories.length} items
            </span>
            <div className="flex rounded-md shadow-sm">
              <button 
                className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              
              <button 
                className="px-3 py-1 border border-gray-300 bg-blue-50 text-blue-700 font-medium"
              >
                {currentPage}
              </button>
              
              {currentPage < totalPages && (
                <button 
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  {currentPage + 1}
                </button>
              )}
              
              {currentPage < totalPages - 1 && (
                <button 
                  className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  onClick={() => setCurrentPage(currentPage + 2)}
                >
                  {currentPage + 2}
                </button>
              )}
              
              <button 
                className={`px-3 py-1 border border-gray-300 bg-white text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}