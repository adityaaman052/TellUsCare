
import { Search, Bell, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="h-16 bg-blue-600 flex items-center justify-between px-4">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter keywords"
            className="w-full px-4 py-2 pl-10 pr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-white hover:bg-blue-700 rounded-full">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-5 w-5 text-xs bg-red-500 rounded-full flex items-center justify-center">3</span>
        </button>
        <button className="p-2 text-white hover:bg-blue-700 rounded-full">
          <User className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};