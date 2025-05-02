import { useState } from "react";
import { 
  Search, 
  Mail, 
  Trash2, 
  Edit3, 
  UserPlus, 
  ChevronDown, 
  AlertCircle, 
  CheckCircle 
} from "lucide-react";

const ManageNewsletter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  
  const testimonials = [
    { id: 1, name: "Shivam", email: "shivam921008santosh@gmail.com", status: "Active" },
    { id: 2, name: "Abhishek", email: "er.abhi024@gmail.com", status: "Active" },
    { id: 3, name: "John", email: "weblink.rishi@gmail.com", status: "Inactive" },
    { id: 4, name: "Max", email: "grishi111@gmail.com", status: "Active" },
    { id: 5, name: "Dinesh", email: "weblink.dinesh1@gmail.com", status: "Active" },
    { id: 6, name: "Sanjay", email: "sanjay@gmail.com", status: "Inactive" }
  ];

  const handleSelectRow = (id: number) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === testimonials.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(testimonials.map(item => item.id));
    }
  };

  const filteredTestimonials = testimonials.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Newsletter Subscriber List</h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-600 transition-colors"
            >
              <UserPlus size={18} />
              Add Newsletter Subscriber
            </button>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Records Per Page:</span>
              <div className="relative">
                <select
                  value={recordsPerPage}
                  onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                  className="bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6 flex justify-end">
            <div className="relative">
              <input
                type="text"
                placeholder="Search [name,email]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md py-2 pl-3 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Search size={18} className="text-gray-500" />
              </button>
            </div>
            <button className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-colors">
              GO
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-3 px-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedRows.length === testimonials.length}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Name</th>
                  <th className="py-3 px-4 text-left font-semibold">Email</th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                  <th className="py-3 px-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTestimonials.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(item.id)}
                        onChange={() => handleSelectRow(item.id)}
                        className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4">{item.name}</td>
                    <td className="py-3 px-4 text-gray-600">{item.email}</td>
                    <td className="py-3 px-4">
                      {item.status === "Active" ? (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <CheckCircle size={16} />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-600">
                          <AlertCircle size={16} />
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-500 hover:text-blue-700 font-medium">
                        [ <span className="inline-flex items-center gap-1">
                            <Edit3 size={14} /> Edit
                          </span> ]
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <button
              disabled={selectedRows.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                selectedRows.length > 0 
                  ? "bg-blue-500 text-white hover:bg-blue-600" 
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-colors`}
            >
              <Mail size={18} />
              Send Email
            </button>
            <button
              disabled={selectedRows.length === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                selectedRows.length > 0 
                  ? "bg-red-500 text-white hover:bg-red-600" 
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              } transition-colors`}
            >
              <Trash2 size={18} />
              Delete
            </button>
          </div>
        </div>
        <div className="py-4 px-6 text-center text-gray-500 text-sm border-t border-gray-200">
          <p>Copyright © 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ManageNewsletter;