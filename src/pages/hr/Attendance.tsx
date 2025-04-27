// Attendance.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Search, Filter, Download, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

interface AttendanceRecord {
  id: number;
  employeeId: string;
  name: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: 'Present' | 'Absent' | 'Late' | 'Half Day';
  workHours: string;
  notes: string;
}

const Attendance: React.FC = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  
  // Mock attendance data
  const [attendanceRecords] = useState<AttendanceRecord[]>([
    {
      id: 1,
      employeeId: 'EMP001',
      name: 'Sumit ll tt',
      date: '2025-04-27',
      checkIn: '09:00 AM',
      checkOut: '06:00 PM',
      status: 'Present',
      workHours: '9h 0m',
      notes: ''
    },
    {
      id: 2,
      employeeId: 'EMP002',
      name: 'Rahul Sharma',
      date: '2025-04-27',
      checkIn: '09:30 AM',
      checkOut: '05:45 PM',
      status: 'Present',
      workHours: '8h 15m',
      notes: ''
    },
    {
      id: 3,
      employeeId: 'EMP003',
      name: 'Priya Patel',
      date: '2025-04-27',
      checkIn: '10:15 AM',
      checkOut: '06:30 PM',
      status: 'Late',
      workHours: '8h 15m',
      notes: 'Traffic delay'
    }
  ]);

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Get days in current month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for days before first of month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Check if a date is selected
  const isSelectedDate = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Check if a date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Navigation */}
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="flex flex-wrap justify-center gap-2">
          <button 
            onClick={() => navigate('/interview')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            INTERVIEW
          </button>
          
          <button 
            onClick={() => navigate('/add-employee')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            ADD EMPLOYEE
          </button>
          
          <button 
            onClick={() => navigate('/add-in-bulk')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            ADD IN BULK
          </button>
          
          <button 
            onClick={() => navigate('/listing')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            LISTING
          </button>
          
          <button 
            onClick={() => navigate('/attendance')}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            ATTENDANCE
          </button>
          
          <button 
            onClick={() => navigate('/work-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            WORK STATUS
          </button>
          
          <button 
            onClick={() => navigate('/reward')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            REWARD
          </button>
          
          <button 
            onClick={() => navigate('/application-status')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            STATUS OF APPLICATION
          </button>
          
          <button 
            onClick={() => navigate('/performance')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >



            PERFORMANCE
          </button>
          
          <button 
            onClick={() => navigate('/salary')}
            className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            SALARY
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8">Attendance Management</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <Calendar size={20} className="mr-2" />
                  {formatDate(currentMonth)}
                </h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={index} className="text-center py-2 text-sm font-medium text-gray-500">
                    {day}
                  </div>
                ))}
                
                {getDaysInMonth(currentMonth).map((day, index) => (
                  <div 
                    key={index} 
                    className={`text-center py-2 rounded-full cursor-pointer ${
                      !day ? 'text-gray-300' : 
                      isSelectedDate(day) ? 'bg-blue-500 text-white' : 
                      isToday(day) ? 'border border-blue-500 text-blue-500' : 
                      'hover:bg-gray-100'
                    }`}
                    onClick={() => day && setSelectedDate(day)}
                  >
                    {day ? day.getDate() : ''}
                  </div>
                ))}
              </div>

              {/* Attendance Summary */}
              <div className="mt-6 space-y-3">
                <h3 className="font-medium text-gray-700">Attendance Summary</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center bg-green-50 p-3 rounded">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                    <div>
                      <p className="text-sm text-gray-500">Present</p>
                      <p className="font-medium">18 days</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-red-50 p-3 rounded">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div>
                      <p className="text-sm text-gray-500">Absent</p>
                      <p className="font-medium">2 days</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-yellow-50 p-3 rounded">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div>
                      <p className="text-sm text-gray-500">Late</p>
                      <p className="font-medium">5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 p-3 rounded">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <div>
                      <p className="text-sm text-gray-500">Half Day</p>
                      <p className="font-medium">2 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Records */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold flex items-center">
                    <Clock size={20} className="mr-2" />
                    Daily Attendance
                    {selectedDate && (
                      <span className="ml-2 text-gray-500">
                        ({selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })})
                      </span>
                    )}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search employee..."
                        className="pl-9 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Filter size={18} />
                      Filter
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                      <Download size={18} />
                      Export
                    </button>
                  </div>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Employee ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check In
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Check Out
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Work Hours
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {attendanceRecords.map((record) => (
                      <tr key={record.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.employeeId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{record.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.checkIn}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.checkOut}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            record.status === 'Present' ? 'bg-green-100 text-green-800' : 
                            record.status === 'Absent' ? 'bg-red-100 text-red-800' : 
                            record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {record.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.workHours}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mark Attendance Controls */}
              <div className="p-6 border-t">
                <h3 className="font-medium mb-4">Mark Attendance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    <Check size={18} />
                    Mark Present
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                    <X size={18} />
                    Mark Absent
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white py-4 text-center text-gray-500 text-sm mt-12">
        Copyright © 2025 HR-Learn.com
      </div>
    </div>
  );
};

export default Attendance;