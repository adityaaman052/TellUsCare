import { useState } from 'react';
import {  Send, Paperclip } from 'lucide-react';

export const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState<{ id: number; name: string; phone: string; unreadCount: number } | null>(null);

  const users = [
    { id: 1, name: "jacob", phone: "(+971 50 3987156)", unreadCount: 0 },
    { id: 2, name: "Nitesh", phone: "(+971 51 2123656)", unreadCount: 242 },
    { id: 3, name: "Sangeet", phone: "(+971 51 2321565)", unreadCount: 2 },
    { id: 4, name: "sherif", phone: "(+971528652980)", unreadCount: 7 },
    { id: 5, name: "Vishnu", phone: "(0563336298)", unreadCount: 2 },
    { id: 6, name: "Pamela Garalde", phone: "(+971 54 3795505)", unreadCount: 2 },
    { id: 7, name: "Jean Ruth dsouza", phone: "(0526601501)", unreadCount: 2 },
    { id: 8, name: "shoaib", phone: "(+971 55 6579571)", unreadCount: 1 },
    { id: 9, name: "Janelle Fernandez", phone: "(+971 56 9033998)", unreadCount: 2 },
    { id: 10, name: "escalantejunizza@yahoo.com.ph", phone: "", unreadCount: 1 }
  ];

  const handleUserClick = (user: { id: number; name: string; phone: string; unreadCount: number }) => {
    setSelectedUser(user);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left sidebar - User list */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* User list */}
        <div className="flex-1 overflow-y-auto">
          {users.map(user => (
            <div 
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={`p-4 border-b border-gray-100 flex justify-between items-center hover:bg-gray-50 cursor-pointer ${
                selectedUser && selectedUser.id === user.id ? 'bg-gray-100' : ''
              }`}
            >
              <div>
                <div className="font-medium">{user.name}</div>
                <div className="text-gray-500 text-sm">{user.phone}</div>
              </div>
              {user.unreadCount > 0 && (
                <div className="bg-cyan-400 text-white rounded-md px-2 py-0.5 text-xs">
                  {user.unreadCount}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right side - Chat area */}
      <div className="flex-1 flex flex-col">
        {/* Chat header */}
        <div className="bg-blue-500 h-16 flex justify-between items-center px-4">
          <div className="flex items-center text-white">
            {selectedUser && (
              <>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-600">{selectedUser.name.charAt(0).toUpperCase()}</span>
                </div>
                <div>{selectedUser.name}</div>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
             
            </div>
            
          </div>
        </div>

        {/* Chat content area */}
        <div className="flex-1 p-4 bg-gray-50 flex flex-col justify-between">
          {selectedUser ? (
            <>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-3xl text-gray-500">Loading Conversation!@@</div>
              </div>
              <div className="mt-4 bg-white rounded-lg p-1 flex items-center border border-gray-200">
                <Paperclip className="mx-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 py-2 px-3 outline-none"
                />
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  <Send size={20} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-gray-500">Select a user to start chatting</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
