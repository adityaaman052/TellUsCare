import  { useState } from 'react';
import { 
  Users, 
  UserPlus, 
  List, 
  Calendar, 
  Briefcase, 
  Award, 
  FileCheck, 
  BarChart3, 
  DollarSign,
  Monitor,
  Building,
  Mail,
  MapPin,
  UserCircle
} from 'lucide-react';

const CreateRoleAccess = () => {
  const [formData, setFormData] = useState({
    userType: 'External',
    username: '',
    password: '',
    email: '',
    country: 'UAE',
    city: '',
    subCity: '',
    device: '',
    mainRole: '',
    subRole: '',
    identityOfCustomer: '',
    department: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // Add your form submission logic here
  };

  // Navigation buttons with routes
  const navButtons = [
    { name: "INTERVIEW", icon: <Users size={18} />, route: "/interview" },
    { name: "ADD EMPLOYEE", icon: <UserPlus size={18} />, route: "/add-employee" },
    { name: "ADD IN BULK", icon: <List size={18} />, route: "/add-bulk" },
    { name: "LISTING", icon: <List size={18} />, route: "/listing" },
    { name: "ATTENDANCE", icon: <Calendar size={18} />, route: "/attendance" },
    { name: "WORK STATUS", icon: <Briefcase size={18} />, route: "/work-status" },
    { name: "REWARD", icon: <Award size={18} />, route: "/reward" },
    { name: "STATUS OF APPLICATION", icon: <FileCheck size={18} />, route: "/application-status" },
    { name: "PERFORMANCE", icon: <BarChart3 size={18} />, route: "/performance" },
    { name: "SALARY", icon: <DollarSign size={18} />, route: "/salary" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {navButtons.map((button) => (
            <a 
              key={button.name}
              href={button.route}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              {button.icon}
              {button.name}
            </a>
          ))}

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
          </form>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Type */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">USER TYPE</label>
                <select 
                  name="userType" 
                  value={formData.userType}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="External">External</option>
                  <option value="Internal">Internal</option>
                </select>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">USERNAME</label>
                <input 
                  type="text" 
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">PASSWORD</label>
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">EMAIL</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <Mail size={18} />
                  </span>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">COUNTRY</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <MapPin size={18} />
                  </span>
                  <select 
                    name="country" 
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  >
                    <option value="UAE">UAE</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">CITY</label>
                <select 
                  name="city" 
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Abu Dhabi">Abu Dhabi</option>
                  <option value="Sharjah">Sharjah</option>
                </select>
              </div>

              {/* Sub-City */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SUB-CITY</label>
                <select 
                  name="subCity" 
                  value={formData.subCity}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select</option>
                  <option value="Area 1">Area 1</option>
                  <option value="Area 2">Area 2</option>
                </select>
              </div>

              {/* Device */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">DEVICE</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <Monitor size={18} />
                  </span>
                  <select 
                    name="device" 
                    value={formData.device}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  >
                    <option value="">Select Device</option>
                    <option value="Desktop">Desktop</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </div>
              </div>

              {/* Main Role */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">MAIN ROLE</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <Briefcase size={18} />
                  </span>
                  <select 
                    name="mainRole" 
                    value={formData.mainRole}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>

              {/* Sub Role */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SUB ROLE</label>
                <select 
                  name="subRole" 
                  value={formData.subRole}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Sub Role</option>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Associate">Associate</option>
                </select>
              </div>

              {/* Identity of Customer */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">IDENTITY OF CUSTOMER</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <UserCircle size={18} />
                  </span>
                  <select 
                    name="identityOfCustomer" 
                    value={formData.identityOfCustomer}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  >
                    <option value="">SELECT</option>
                    <option value="VIP">VIP</option>
                    <option value="Regular">Regular</option>
                    <option value="Corporate">Corporate</option>
                  </select>
                </div>
              </div>

              {/* Select Department */}
              <div className="space-y-2 col-span-1 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700">SELECT DEPARTMENT</label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                  <span className="pl-3 text-gray-500">
                    <Building size={18} />
                  </span>
                  <select 
                    name="department" 
                    value={formData.department}
                    onChange={handleInputChange}
                    className="w-full p-2 rounded-md border-0 focus:ring-0"
                  >
                    <option value="">SELECT</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Create Role Button */}
            <div className="mt-8">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center gap-2"
              >
                <UserPlus size={18} />
                CREATE ROLE
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          Copyright © 2023 Plusaraow
        </div>
      </div>
    </div>
  );
};

export default CreateRoleAccess;