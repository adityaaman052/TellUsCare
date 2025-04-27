import { useState } from 'react';
import { Send, ChevronLeft, ChevronRight, Eye, Edit, Trash } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';

export default function Message() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      name: 'Sangeet', 
      date: '07-12-2020 05:34 PM', 
      customerType: 'Online', 
      messageAgainst: 'Against all schedule', 
      history: '', 
      cause: 'Due to Driver/Supervisor Staff' 
    },
    { 
      id: 2, 
      name: 'Sangeet', 
      date: '07-12-2020 05:40 PM', 
      customerType: 'Online', 
      messageAgainst: 'Against all schedule', 
      history: '', 
      cause: 'Due to Driver/Supervisor Staff' 
    },
    { 
      id: 3, 
      name: 'Sabita Dahal', 
      date: '02-04-2021 05:18 PM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Accident' 
    },
    { 
      id: 4, 
      name: 'Sangeet', 
      date: '17-05-2021 10:37 AM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Accident' 
    },
    { 
      id: 5, 
      name: 'Sangeet', 
      date: '17-05-2021 10:41 AM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Sudden unavailability of Staff/Supervisor/Technician/Cleaner/' 
    },
    { 
      id: 6, 
      name: 'Sangeet', 
      date: '17-05-2021 10:43 AM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Natural Calamity like, Snowfall/Heavy Rain/Water Pounding/Road Block' 
    },
    { 
      id: 7, 
      name: 'Sangeet', 
      date: '17-05-2021 10:47 AM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Public Holiday' 
    },
    { 
      id: 8, 
      name: 'Raghdan', 
      date: '15-11-2021 12:36 PM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Sudden unavailability of Staff/Supervisor/Technician/Cleaner/' 
    },
    { 
      id: 9, 
      name: 'Marwa El Kordy', 
      date: '24-11-2021 05:48 PM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Sudden BreakDown of vehicle' 
    },
    { 
      id: 10, 
      name: 'Marwa El Kordy', 
      date: '24-11-2021 05:50 PM', 
      customerType: '', 
      messageAgainst: '', 
      history: '', 
      cause: 'Due to Sudden BreakDown of vehicle' 
    }
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<{
    id: number;
    name: string;
    date: string;
    customerType: string;
    messageAgainst: string;
    history: string;
    cause: string;
  } | null>(null);
  const [newMessage, setNewMessage] = useState({
    messageAgainst: '',
    cause: ''
  });

  const handleDialogOpen = (type: 'new' | 'view' | 'edit' | 'delete', message = null) => {
    setDialogType(type);
    setSelectedMessage(message);
    setDialogOpen(true);
  };

  const handleSendMessage = () => {
    // Logic to send message
    const currentDate = new Date();
    const dateString = currentDate.toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).replace(',', '');

    const newMessageObj = {
      id: messages.length + 1,
      name: 'New User', // This would come from the authenticated user
      date: dateString,
      customerType: 'Online',
      messageAgainst: newMessage.messageAgainst,
      history: '',
      cause: newMessage.cause
    };

    setMessages([newMessageObj, ...messages]);
    setDialogOpen(false);
    setNewMessage({ messageAgainst: '', cause: '' });
  };

  const handleViewMessage = (message: { id: number; name: string; date: string; customerType: string; messageAgainst: string; history: string; cause: string }) => {
    setSelectedMessage(message);
    setDialogType('view');
    setDialogOpen(true);
  };

  const handleEditMessage = (message: { id: number; name: string; date: string; customerType: string; messageAgainst: string; history: string; cause: string }) => {
    setSelectedMessage(message);
    setNewMessage({
      messageAgainst: message.messageAgainst,
      cause: message.cause
    });
    setDialogType('edit');
    setDialogOpen(true);
  };

  const handleDeleteMessage = (message: { id: number; name: string; date: string; customerType: string; messageAgainst: string; history: string; cause: string }) => {
    setSelectedMessage(message);
    setDialogType('delete');
    setDialogOpen(true);
  };

  const confirmDeleteMessage = () => {
    if (selectedMessage) {
      setMessages(messages.filter(msg => msg.id !== selectedMessage.id));
    }
    setDialogOpen(false);
  };

  const handleUpdateMessage = () => {
    setMessages(messages.map(msg => {
      if (selectedMessage && msg.id === selectedMessage.id) {
        return { 
          ...msg, 
          messageAgainst: newMessage.messageAgainst,
          cause: newMessage.cause
        };
      }
      return msg;
    }));
    setDialogOpen(false);
  };

  const getDialogContent = () => {
    switch(dialogType) {
      case 'new':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Send New Message</DialogTitle>
              <DialogDescription>
                Enter the message details below
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message Against
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMessage.messageAgainst}
                  onChange={(e) => setNewMessage({...newMessage, messageAgainst: e.target.value})}
                >
                  <option value="">Select Reason</option>
                  <option value="Against all schedule">Against all schedule</option>
                  <option value="Service delay">Service delay</option>
                  <option value="Quality issue">Quality issue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notification Cause
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMessage.cause}
                  onChange={(e) => setNewMessage({...newMessage, cause: e.target.value})}
                >
                  <option value="">Select Cause</option>
                  <option value="Due to Driver/Supervisor Staff">Due to Driver/Supervisor Staff</option>
                  <option value="Due to Accident">Due to Accident</option>
                  <option value="Due to Sudden unavailability of Staff/Supervisor/Technician/Cleaner/">Due to Sudden unavailability of Staff</option>
                  <option value="Due to Natural Calamity like, Snowfall/Heavy Rain/Water Pounding/Road Block">Due to Natural Calamity</option>
                  <option value="Due to Public Holiday">Due to Public Holiday</option>
                  <option value="Due to Sudden BreakDown of vehicle">Due to Sudden BreakDown of vehicle</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message Content
                </label>
                <textarea 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  rows={4}
                  placeholder="Enter your message"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSendMessage}>Send Message</Button>
            </DialogFooter>
          </>
        );
      case 'view':
        return (
          <>
            <DialogHeader>
              <DialogTitle>View Message</DialogTitle>
              <DialogDescription>
                Message details
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Name of CM</h3>
                  <p className="mt-1">{selectedMessage?.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Date</h3>
                  <p className="mt-1">{selectedMessage?.date}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Customer Type</h3>
                  <p className="mt-1">{selectedMessage?.customerType || 'N/A'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Message Against</h3>
                  <p className="mt-1">{selectedMessage?.messageAgainst || 'N/A'}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Notification Cause</h3>
                  <p className="mt-1">{selectedMessage?.cause}</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </>
        );
      case 'edit':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Edit Message</DialogTitle>
              <DialogDescription>
                Update the message details
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message Against
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMessage.messageAgainst}
                  onChange={(e) => setNewMessage({...newMessage, messageAgainst: e.target.value})}
                >
                  <option value="">Select Reason</option>
                  <option value="Against all schedule">Against all schedule</option>
                  <option value="Service delay">Service delay</option>
                  <option value="Quality issue">Quality issue</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notification Cause
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newMessage.cause}
                  onChange={(e) => setNewMessage({...newMessage, cause: e.target.value})}
                >
                  <option value="">Select Cause</option>
                  <option value="Due to Driver/Supervisor Staff">Due to Driver/Supervisor Staff</option>
                  <option value="Due to Accident">Due to Accident</option>
                  <option value="Due to Sudden unavailability of Staff/Supervisor/Technician/Cleaner/">Due to Sudden unavailability of Staff</option>
                  <option value="Due to Natural Calamity like, Snowfall/Heavy Rain/Water Pounding/Road Block">Due to Natural Calamity</option>
                  <option value="Due to Public Holiday">Due to Public Holiday</option>
                  <option value="Due to Sudden BreakDown of vehicle">Due to Sudden BreakDown of vehicle</option>
                </select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleUpdateMessage}>Update Message</Button>
            </DialogFooter>
          </>
        );
      case 'delete':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Delete Message</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this message? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={confirmDeleteMessage}>Delete</Button>
            </DialogFooter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Send Message</h1>
        <Button onClick={() => handleDialogOpen('new')}>
          <Send className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>
      
      {/* Message table with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-36">NAME OF ALL CM</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-40">DATE OF MESSAGE/NOTIFICATION</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-36">KIND OF CUSTOMER</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-36">MESSAGE AGAINST</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-24">HISTORY</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-64">NOTIFICATION CAUSE AGAINST SUB</th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 min-w-24">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={message.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="py-3 px-4 border-b border-gray-200">{message.name}</td>
                <td className="py-3 px-4 border-b border-gray-200">{message.date}</td>
                <td className="py-3 px-4 border-b border-gray-200">{message.customerType}</td>
                <td className="py-3 px-4 border-b border-gray-200">{message.messageAgainst}</td>
                <td className="py-3 px-4 border-b border-gray-200">{message.history}</td>
                <td className="py-3 px-4 border-b border-gray-200">{message.cause}</td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleViewMessage(message)}
                      className="p-1 text-blue-500 hover:text-blue-700"
                      title="View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleEditMessage(message)}
                      className="p-1 text-orange-500 hover:text-orange-700"
                      title="Edit"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleDeleteMessage(message)}
                      className="p-1 text-red-500 hover:text-red-700"
                      title="Delete"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="mt-4 flex items-center justify-center">
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mx-2">
          <div className="bg-gray-400 h-2.5 rounded-full w-1/3"></div>
        </div>
        <button className="p-1 rounded-md hover:bg-gray-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Dialogs */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          {getDialogContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}