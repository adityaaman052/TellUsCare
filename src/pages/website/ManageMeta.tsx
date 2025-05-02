import { useState } from "react";
import {  Tag, ChevronRight, ChevronLeft } from "lucide-react";

export default function ManageMeta() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Mock data for meta tags
  const metaTags = [
    {
      id: 1,
      url: "https://www.teluscare.com/old/car-recovery-service-dubai/EiwdrQP7",
      title: "Car recovery Service Dubai",
      keywords: "recovery, Service, Dubai",
      description: "Car recovery Service Dubai"
    },
    {
      id: 2,
      url: "https://www.teluscare.com/old/car-recovery-service-dubai",
      title: "Car recovery Service Dubai",
      keywords: "recovery, Service, Dubai",
      description: "Car recovery Service Dubai"
    },
    {
      id: 3,
      url: "https://www.teluscare.com/old/happy-home-cleaning-services-l-l-c",
      title: "HAPPY HOME CLEANING SERVICES L.L.C",
      keywords: "SERVICES, CLEANING, HOME, HAPPY",
      description: "HAPPY HOME CLEANING SERVICES L.L.C"
    },
    {
      id: 4,
      url: "https://www.teluscare.com/old/jame-alwahda-technical-services",
      title: "JAME ALWAHDA TECHNICAL SERVICES",
      keywords: "SERVICES, TECHNICAL, ALWAHDA, JAME",
      description: "JAME ALWAHDA TECHNICAL SERVICES"
    },
    {
      id: 5,
      url: "https://www.teluscare.com/old/happy-home-cleaning-services-llc",
      title: "Happy Home Cleaning Services LLC",
      keywords: "SERVICES, CLEANING, HOME, LLC",
      description: "Happy Home Cleaning Services LLC"
    },
    {
      id: 8,
      url: "https://www.teluscare.com/old/car-recovery-service-mirdif-al-warqa-al-mizhar-al-khaweenj-al-muhisnah-al-quasis-al-twar/1tKIrGAC",
      title: "car recovery service mirdif al warqa al mizhar al khaweenj al muhisnah al quasis",
      keywords: "muhisnah, quasis, twar, khaweenj, mizhar, service, mirdif, warqa, recovery",
      description: "car recovery service mirdif al warqa al mizhar al khaweenj al muhisnah al quasis al twar"
    },
    {
      id: 9,
      url: "https://www.teluscare.com/old/car-recovery-service-mirdif-al-warqa-al-mizhar-al-khaweenj-al-muhisnah-al-quasis-al-twar",
      title: "car recovery service mirdif al warqa al mizhar al khaweenj al muhisnah al quasis",
      keywords: "muhisnah, quasis, twar, khaweenj, mizhar, service, mirdif, warqa, recovery",
      description: "car recovery service mirdif al warqa al mizhar al khaweenj al muhisnah al quasis al twar"
    },
    {
      id: 10,
      url: "https://www.teluscare.com/old/noor-al-falak-technical-services/cm1ERyMY",
      title: "Noor Al Falak Technical Services",
      keywords: "Services, Technical, Falak, Noor",
      description: "Noor Al Falak Technical Services"
    }
  ];

  const handleSearch = () => {
    // In a real implementation, this would filter the data
    console.log("Searching for:", searchTerm);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEdit = (id: number) => {
    console.log("Edit item with id:", id);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Tag className="text-gray-700 h-8 w-8 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">Manage Meta Tags</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center mb-6">
            <label className="mr-3 text-gray-700">Records Per Page :</label>
            <select 
              value={recordsPerPage}
              onChange={(e) => setRecordsPerPage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>

          <div className="flex justify-end mb-6">
            <div className="flex items-center">
              <label className="mr-2 text-gray-700">Search [ URL ]</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSearch}
                className="bg-gray-800 text-white px-4 py-1 rounded-md hover:bg-gray-700"
              >
                GO
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="px-4 py-2 text-gray-700 w-12">#</th>
                  <th className="px-4 py-2 text-gray-700">URL</th>
                  <th className="px-4 py-2 text-gray-700">Meta Details</th>
                  <th className="px-4 py-2 text-gray-700 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {metaTags.map((tag) => (
                  <tr key={tag.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 align-top text-gray-700">{tag.id}</td>
                    <td className="px-4 py-3 align-top text-gray-600 max-w-sm truncate">
                      <a href={tag.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        {tag.url}
                      </a>
                    </td>
                    <td className="px-4 py-3 align-top">
                      <div className="space-y-3">
                        <div>
                          <span className="font-medium text-gray-700">Title : </span>
                          <span className="text-gray-600">{tag.title}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Keyword : </span>
                          <span className="text-gray-600">{tag.keywords}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Description : </span>
                          <span className="text-gray-600">{tag.description}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 align-top text-right">
                      <button
                        onClick={() => handleEdit(tag.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center mt-6">
            <nav className="flex items-center space-x-1">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
              </button>
              
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((page) => (
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
                <ChevronRight size={16} />
              </button>
              
              <button
                onClick={() => handlePageChange(10)}
                className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Next
              </button>
              
              <button
                onClick={() => handlePageChange(10)}
                className="px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Last
              </button>
            </nav>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-500 text-sm">
          Copyright © 2025 Teluscare.com
        </div>
      </div>
    </div>
  );
}