import React, { useState } from 'react';
import { Search, X, ChevronRight } from 'lucide-react';

const Prospects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    identifyProspect: '',
    employerName: '',
    jobNature: '',
    landline: '',
    primaryEmail: '',
    contactedPersonFullName: '',
    mobileNo: '+971',
    alternateMobileNo: '+971',
    dateOfBirth: '',
    familyMembers: '',
    noOfVehicles: '',
    emirates: '',
    subCity: '',
    action: '',
    subAction: '',
    subActionDetails: '',
    services: '',
    details: '',
    status: '',
    priority: '',
    remarkByExecutive: '',
    remarkBySupervisor: '',
    comments: ''
  });

  // Sample data for the prospects table
  const prospects = [
    { id: 20682, name: 'Arslan', type: 'Individual', employerName: 'Arslan', jobNature: 'Chief executives', landline: '547749943', email: 'arslan@example.com', mobileNo: '+971 547749943', alternateMobileNo: '+971' },
    { id: 20681, name: 'Jacquelyn', type: 'Individual', employerName: 'Jacquelyn', jobNature: 'Chief executives', landline: '380855141', email: 'Jacquelyn@spurling.com', mobileNo: '380855141', alternateMobileNo: '+971' },
    { id: 20680, name: 'Erica', type: 'Individual', employerName: 'Erica', jobNature: 'General and operations managers', landline: '589046138', email: 'erica.caluracan@albanna-raed.com', mobileNo: '+971 589046138', alternateMobileNo: '+971' },
    { id: 20679, name: 'Dr. Basil', type: 'Individual', employerName: 'Dr. Basil', jobNature: 'General and operations managers', landline: '506312301', email: 'drbasil.saffarini@gmail.com', mobileNo: '+971 506312301', alternateMobileNo: '+971' },
    { id: 20678, name: 'S~S', type: 'Individual', employerName: 'S~S', jobNature: 'Chief executives', landline: '502812219', email: 'saman.as696@gmail.com', mobileNo: '502812219', alternateMobileNo: '+971' },
    { id: 20677, name: 'Caio Nascimento', type: 'Individual', employerName: 'Caio Nascimento', jobNature: 'Chief executives', landline: '564095484', email: 'caiopetroengineer@gmail.com', mobileNo: '564095484', alternateMobileNo: '+971' },
    { id: 20676, name: 'Ian', type: 'Individual', employerName: 'Ian', jobNature: 'Chief executives', landline: '501792475', email: 'Ipugh@alainacademy.sch.ae', mobileNo: '501792475', alternateMobileNo: '+971' },
    { id: 20675, name: 'Darshak', type: 'Individual', employerName: 'Darshak', jobNature: 'Chief executives', landline: '507076452', email: 'darshak_khantu@yahoo.in', mobileNo: '507076452', alternateMobileNo: '+971' },
    { id: 20674, name: 'dildar shah', type: 'Individual', employerName: 'dildar shah', jobNature: 'General and operations managers', landline: '504381304', email: 'dildar.shah98@gmail.com', mobileNo: '+971 504381304', alternateMobileNo: '+971' },
    { id: 20673, name: 'Bash siraj', type: 'Individual', employerName: 'Bash siraj', jobNature: 'General and operations managers', landline: '556086685', email: 'Bash_siraj@yahoo.com', mobileNo: '+971 556086685', alternateMobileNo: '+971' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleSearch = () => {
    // Handle search functionality
    console.log('Searching...');
  };

  const handleClear = () => {
    // Clear search fields
    setFormData({
      ...formData,
      mobileNo: '+971',
      primaryEmail: '',
      employerName: '',
      identifyProspect: '',
      jobNature: ''
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="bg-gray-100 p-4">
      {/* Basic Information Section */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NAME <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">IDENTIFY PROSPECT <span className="text-red-500">*</span></label>
              <select
                name="identifyProspect"
                value={formData.identifyProspect}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EMPLOYER NAME</label>
              <input
                type="text"
                name="employerName"
                value={formData.employerName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TYPE OF JOB NATURE <span className="text-red-500">*</span></label>
              <select
                name="jobNature"
                value={formData.jobNature}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="Chief executives">Chief executives</option>
                <option value="General and operations managers">General and operations managers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LANDLINE</label>
              <input
                type="text"
                name="landline"
                value={formData.landline}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PRIMARY EMAIL</label>
              <input
                type="email"
                name="primaryEmail"
                value={formData.primaryEmail}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CONTACTED PERSON FULL NAME</label>
              <input
                type="text"
                name="contactedPersonFullName"
                value={formData.contactedPersonFullName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">MOBILE NO</label>
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ALTERNATE MOBILE NO</label>
              <input
                type="text"
                name="alternateMobileNo"
                value={formData.alternateMobileNo}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Other Base Information Section */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Other Base Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DATE OF BIRTH</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">FAMILY MEMBERS</label>
              <input
                type="text"
                name="familyMembers"
                value={formData.familyMembers}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">NO OF VEHICLES</label>
              <input
                type="text"
                name="noOfVehicles"
                value={formData.noOfVehicles}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EMIRATES <span className="text-red-500">*</span></label>
              <select
                name="emirates"
                value={formData.emirates}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="dubai">Dubai</option>
                <option value="abudhabi">Abu Dhabi</option>
                <option value="sharjah">Sharjah</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SUB CITY <span className="text-red-500">*</span></label>
              <select
                name="subCity"
                value={formData.subCity}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Actions Section */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Actions</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ACTION <span className="text-red-500">*</span></label>
              <select
                name="action"
                value={formData.action}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="action1">Action 1</option>
                <option value="action2">Action 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SUB ACTION <span className="text-red-500">*</span></label>
              <select
                name="subAction"
                value={formData.subAction}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="subAction1">Sub Action 1</option>
                <option value="subAction2">Sub Action 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SUB ACTION DETAILS <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="subActionDetails"
                value={formData.subActionDetails}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SERVICES</label>
              <select
                name="services"
                value={formData.services}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                <option value="service1">Service 1</option>
                <option value="service2">Service 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DETAILS</label>
              <select
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                <option value="detail1">Detail 1</option>
                <option value="detail2">Detail 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ACTION DATE</label>
              <input
                type="date"
                name="actionDate"
                className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">STATUS <span className="text-red-500">*</span></label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PRIORITY <span className="text-red-500">*</span></label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">REMARK BY EXECUTIVE <span className="text-red-500">*</span> (120 words max)</label>
              <textarea
                name="remarkByExecutive"
                value={formData.remarkByExecutive}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md h-24"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">REMARK BY SUPERVISOR (60 words max)</label>
              <textarea
                name="remarkBySupervisor"
                value={formData.remarkBySupervisor}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-200 border border-gray-300 rounded-md h-24"
                disabled
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">COMMENTS (60 words max)</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md h-24"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
          >
            SAVE
          </button>
        </form>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">MOBILE / LANDLINE</label>
            <input
              type="text"
              name="mobileSearchQuery"
              value={formData.mobileNo}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="+971"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL</label>
            <input
              type="email"
              name="emailSearchQuery"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">COMPANY NAME / EMPOYEE NAME</label>
            <input
              type="text"
              name="companySearchQuery"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Company Name / Employee Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">IDENTIFY PROSPECT</label>
            <select
              name="prospectSearchQuery"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">JOB NATURE</label>
            <select
              name="jobNatureSearchQuery"
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select</option>
              <option value="Chief executives">Chief executives</option>
              <option value="General and operations managers">General and operations managers</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center"
            >
              <Search size={16} className="mr-1" /> SEARCH
            </button>
            <button
              onClick={handleClear}
              className="bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors flex items-center"
            >
              <X size={16} className="mr-1" /> CLEAR
            </button>
          </div>
        </div>

        {/* Prospects Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2 text-left">Sr.No</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Type</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Person Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Mobile No</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Alternate Mobile</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Employer/Company Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Type of Job Nature/Company</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Landline</th>
              </tr>
            </thead>
            <tbody>
              {prospects.map((prospect) => (
                <tr key={prospect.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{prospect.id}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.type}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.mobileNo}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.alternateMobileNo}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.employerName}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.jobNature}</td>
                  <td className="border border-gray-200 px-4 py-2">{prospect.landline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-start mt-4">
          <button 
            className={`px-3 py-1 border border-gray-300 ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white"
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white"
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white"
            onClick={() => handlePageChange(4)}
          >
            4
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white"
            onClick={() => handlePageChange(5)}
          >
            5
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white"
            onClick={() => handlePageChange(6)}
          >
            6
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white flex items-center"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next <ChevronRight size={16} />
          </button>
          <button 
            className="px-3 py-1 border border-gray-300 bg-white flex items-center"
            onClick={() => handlePageChange(10)} // Assuming last page is 10
          >
            Last <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prospects;