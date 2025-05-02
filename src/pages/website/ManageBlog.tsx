import { useState } from "react";
import { FileText, PlusCircle, ChevronRight, ChevronLeft } from "lucide-react";

export default function ManageBlog() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Tips to hire professional cleaning services in Dubai",
      category: "Cleaning Service",
      subCategory: "General Cleaning",
      date: "",
      content: "Cleaning"
    },
    {
      id: 2,
      title: "Advantages of hiring cleaning services in Dubai and UAE",
      category: "Cleaning Service",
      subCategory: "General Cleaning",
      date: "",
      content: "The best"
    },
    {
      id: 3,
      title: "Pest control service in Dubai: Teluscare Solutions",
      category: "Pest Control",
      subCategory: "Cockroach Control",
      date: "",
      content: "Find out"
    },
    {
      id: 4,
      title: "Car Towing: Things you need to know",
      category: "Car Tow",
      subCategory: "On Road",
      date: "",
      content: "Things"
    },
    {
      id: 5,
      title: "Why you must have insurance mandatorily.",
      category: "Health Insurance",
      subCategory: "Individual Health Insurance",
      date: "",
      content: "Why you"
    },
    {
      id: 6,
      title: "Top 10 things you must know before buying a Health Insurance Policy",
      category: "Health Insurance",
      subCategory: "Individual Health Insurance",
      date: "",
      content: "Life is"
    },
    {
      id: 7,
      title: "Are Service Providers Happy with what they get...?",
      category: "Cleaning Service",
      subCategory: "General Cleaning",
      date: "2021-12-04 00:00:00",
      content: "Health"
    },
    {
      id: 8,
      title: "IS FACILITY MANAGEMENT KEY TO THE FUTURE GROWTH..?",
      category: "Cleaning Service",
      subCategory: "General Cleaning",
      date: "",
      content: "The key"
    },
    {
      id: 9,
      title: "Comprehensive vs Third party car insurance policy.",
      category: "Motor Insurance",
      subCategory: "Comprehensive Car Insurance",
      date: "",
      content: "According"
    },
    {
      id: 10,
      title: "Why professional are best for Pest Control Service..?",
      category: "Pest Control",
      subCategory: "Cockroach Control",
      date: "",
      content: "As experts"
    }
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAddBlog = () => {
    console.log("Add blog clicked");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <FileText className="text-gray-700 h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">View Blog Details</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <button 
              onClick={handleAddBlog}
              className="text-blue-500 hover:text-blue-700 flex items-center"
            >
              <PlusCircle size={16} className="mr-1" />
              Add blog
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-2 text-gray-700">Title</th>
                  <th className="px-4 py-2 text-gray-700">Category</th>
                  <th className="px-4 py-2 text-gray-700">Sub Category</th>
                  <th className="px-4 py-2 text-gray-700">date</th>
                  <th className="px-4 py-2 text-gray-700">content</th>
                </tr>
              </thead>
              <tbody>
                {blogPosts.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{post.title}</td>
                    <td className="px-4 py-3 text-gray-700">{post.category}</td>
                    <td className="px-4 py-3 text-gray-700">{post.subCategory}</td>
                    <td className="px-4 py-3 text-gray-700">{post.date}</td>
                    <td className="px-4 py-3 text-gray-700">{post.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Copyright © 2025 Teluscare.com
            </div>
            
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>
              
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === page 
                      ? "bg-blue-500 text-white border-blue-500" 
                      : "border-gray-300 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Next
              </button>
              
              <button
                className="flex items-center px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Last <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}