import  { useState, useEffect } from "react";
import { Search, Plus, Calendar, Mail, Phone, Tag,  X, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight } from "lucide-react";

// Define the type for our health records
type HealthRecord = {
  id: number;
  referenceNo: string;
  name: string;
  company: string;
  email: string;
  mobile: string;
};

// Sample data based on the images
const initialRecords: HealthRecord[] = [
  { id: 52976, referenceNo: "10082304HI032223", name: "dildar shah", company: "dildar shah", email: "dildar.shah98@gmail.com", mobile: "+971 50438130" },
  { id: 52909, referenceNo: "10081504HI032156", name: "Hanna Shiferaw", company: "Hanna Shiferaw", email: "speaktohanna@gmail.com", mobile: "911154996" },
  { id: 52860, referenceNo: "10080804HI032107", name: "smailly", company: "smailly", email: "smailly.marar4@gmail.com", mobile: "+971 54485806" },
  { id: 52801, referenceNo: "10080204HI032048", name: "Dubai", company: "Dubai", email: "ysmovedubai@gmail.com", mobile: "553036719" },
  { id: 52786, referenceNo: "10080104HI032033", name: "Rashidov", company: "Rashidov", email: "rashood86@gmail.com", mobile: "112917174" },
  { id: 52686, referenceNo: "10081903HI031933", name: "Hasna Ruzain", company: "Hasna Ruzain", email: "Hassruzain@gmail.com", mobile: "568021298" },
  { id: 52434, referenceNo: "10080902HI031681", name: "Muhammad Sikandar", company: "", email: "maliksikandar506@gmail.com", mobile: "+971 50 781295" },
  { id: 52410, referenceNo: "10080402HI031657", name: "Ahmed Mohammed", company: "", email: "4igt2022@gmail.com", mobile: "+971 55 243059" },
  { id: 52295, referenceNo: "10083001HI031542", name: "Dionisio Del Rosario Malilay", company: "", email: "mpbmalilay@gmail.com", mobile: "0555517332" },
];

export default function CarRepair() {
  const [records, setRecords] = useState<HealthRecord[]>(initialRecords);
  const [filteredRecords, setFilteredRecords] = useState<HealthRecord[]>(initialRecords);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  
  // Search states
  const [nameSearch, setNameSearch] = useState("");
  const [emailSearch, setEmailSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState("");
  const [refNoSearch, setRefNoSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [selectedMedium, setSelectedMedium] = useState("Medium");
  const [selectedContactType, setSelectedContactType] = useState("Call");
  
  // New record form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newRecord, setNewRecord] = useState<Partial<HealthRecord>>({
    name: "",
    company: "",
    email: "",
    mobile: "",
  });

  // Handle search
  useEffect(() => {
    let results = records;
    
    if (nameSearch) {
      results = results.filter(record => 
        record.name.toLowerCase().includes(nameSearch.toLowerCase())
      );
    }
    
    if (emailSearch) {
      results = results.filter(record => 
        record.email.toLowerCase().includes(emailSearch.toLowerCase())
      );
    }
    
    if (mobileSearch) {
      results = results.filter(record => 
        record.mobile.includes(mobileSearch)
      );
    }
    
    if (refNoSearch) {
      results = results.filter(record => 
        record.referenceNo.includes(refNoSearch)
      );
    }
    
    setFilteredRecords(results);
    setCurrentPage(1); // Reset to first page when search filters change
  }, [nameSearch, emailSearch, mobileSearch, refNoSearch, records]);

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredRecords.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredRecords.length / recordsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Handle adding new record
  const handleAddRecord = () => {
    if (newRecord.name && newRecord.email && newRecord.mobile) {
      const newId = Math.max(...records.map(r => r.id)) + 1;
      const today = new Date();
      const dateStr = today.getFullYear().toString().substring(2) + 
                     (today.getMonth() + 1).toString().padStart(2, '0') + 
                     today.getDate().toString().padStart(2, '0');
      const refNo = `1008${dateStr}HI0${newId.toString().substring(0, 4)}`;
      
      const recordToAdd: HealthRecord = {
        id: newId,
        referenceNo: refNo,
        name: newRecord.name,
        company: newRecord.company || "",
        email: newRecord.email,
        mobile: newRecord.mobile,
      };
      
      setRecords([recordToAdd, ...records]);
      setShowAddForm(false);
      setNewRecord({
        name: "",
        company: "",
        email: "",
        mobile: "",
      });
    }
  };

  // Handle clear search
  const clearSearch = () => {
    setNameSearch("");
    setEmailSearch("");
    setMobileSearch("");
    setRefNoSearch("");
    setFromDate("");
    setToDate("");
    setSelectedFrequency("");
    setSelectedMedium("Medium");
    setSelectedContactType("Call");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Health Records Management</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            <Plus size={18} className="mr-2" />
            Add New Record
          </button>
        </div>

        {/* Search filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name"
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by email"
              value={emailSearch}
              onChange={(e) => setEmailSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by mobile"
              value={mobileSearch}
              onChange={(e) => setMobileSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <Tag size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Ref No"
              value={refNoSearch}
              onChange={(e) => setRefNoSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="date"
              placeholder="From date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="relative">
            <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="date"
              placeholder="To date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <select
              value={selectedFrequency}
              onChange={(e) => setSelectedFrequency(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>
          
          <div>
            <select
              value={selectedContactType}
              onChange={(e) => setSelectedContactType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Call">Call</option>
              <option value="Email">Email</option>
              <option value="Visit">Visit</option>
            </select>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => {/* Implement search function */}}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md flex-grow"
            >
              GO
            </button>
            <button
              onClick={clearSearch}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            >
              CLEAR
            </button>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto mb-6">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sr.No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reference No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mobile No
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.referenceNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {record.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {record.mobile}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-700">
            Showing <span className="font-medium">{indexOfFirstRecord + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastRecord, filteredRecords.length)}
            </span>{" "}
            of <span className="font-medium">{filteredRecords.length}</span> results
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronsLeft size={18} />
            </button>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 border rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronLeft size={18} />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 border rounded-md ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white text-blue-500 hover:bg-blue-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronRight size={18} />
            </button>
            <button
              onClick={() => paginate(totalPages)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 border rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }`}
            >
              <ChevronsRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Add New Record Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Health Record</h2>
              <button onClick={() => setShowAddForm(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newRecord.name}
                  onChange={(e) => setNewRecord({...newRecord, name: e.target.value})}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={newRecord.company}
                  onChange={(e) => setNewRecord({...newRecord, company: e.target.value})}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={newRecord.email}
                  onChange={(e) => setNewRecord({...newRecord, email: e.target.value})}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="text"
                  value={newRecord.mobile}
                  onChange={(e) => setNewRecord({...newRecord, mobile: e.target.value})}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter mobile number"
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddRecord}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save Record
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}