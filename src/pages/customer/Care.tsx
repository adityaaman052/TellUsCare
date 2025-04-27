import { useState } from 'react';
import { Search, AlertCircle, MessageSquare, CheckCircle, RefreshCw, X, FilePlus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';

interface Complaint {
  id: number;
  date: string;
  against: string;
  kind: string;
  orderId: string;
  description: string;
}

export default function Care() {
  const [searchParams, setSearchParams] = useState({
    service: '',
    orderId: '',
    invoiceNo: '',
    policyNo: ''
  });

  const [complaints, setComplaints] = useState([
    { id: 1, date: '05-05-2021 08:25 AM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100805050058', description: 'Test purpose not real complain' },
    { id: 2, date: '16-05-2021 01:16 PM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100816050101', description: 'reply from customer' },
    { id: 3, date: '26-12-2021 12:28 PM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100826121404', description: 'Test purpose not real complain' },
    { id: 4, date: '20-04-2022 10:23 AM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100820042088', description: 'reply from customer' },
    { id: 5, date: '07-05-2022 12:33 PM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100807052173', description: 'service cleaner was rude so i do not need' },
    { id: 6, date: '17-05-2022 02:06 PM', against: 'Cleaning Service', kind: 'Complaint', orderId: '100817052214', description: 'hi not good technician job not done properly' }
  ]);

  const [selectedComplaint, setSelectedComplaint] = useState<Complaint | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearch = () => {
    console.log('Search button clicked with params:', searchParams);
    // Add your search logic here
  };
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  // Removed duplicate handleAction function

  const handleAction = (complaint: Complaint, action: 'respond' | 'resolve' | 'update' | 'delete') => {
    setSelectedComplaint(complaint);
    setDialogType(action);
    
    switch(action) {
      case 'respond':
        setDialogMessage(`Respond to complaint #${complaint.id} regarding ${complaint.against}`);
        break;
      case 'resolve':
        setDialogMessage(`Mark complaint #${complaint.id} as resolved?`);
        break;
      case 'update':
        setDialogMessage(`Update status for complaint #${complaint.id}`);
        break;
      case 'delete':
        setDialogMessage(`Are you sure you want to delete complaint #${complaint.id}?`);
        break;
      default:
        setDialogMessage('');
    }
    
    setDialogOpen(true);
  };

  const handleDialogAction = () => {
    // In a real app, this would perform the actual operation
    let message = '';
    
    switch(dialogType) {
      case 'respond':
        message = selectedComplaint ? `Response sent to complaint #${selectedComplaint.id}` : 'No complaint selected';
        break;
      case 'resolve':
        message = selectedComplaint ? `Complaint #${selectedComplaint.id} marked as resolved` : 'No complaint selected';
        break;
      case 'update':
        message = selectedComplaint ? `Status updated for complaint #${selectedComplaint.id}` : 'No complaint selected';
        break;
      case 'delete':
        if (selectedComplaint) {
          setComplaints(complaints.filter(c => c.id !== selectedComplaint.id));
        }
        message = selectedComplaint ? `Complaint #${selectedComplaint.id} deleted successfully` : 'No complaint selected';
        break;
      default:
        message = 'Action completed successfully';
    }
    
    setDialogType('success');
    setDialogMessage(message);
  };

  const getDialogContent = () => {
    switch(dialogType) {
      case 'respond':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Respond to Complaint</DialogTitle>
              <DialogDescription>
                Order ID: {selectedComplaint?.orderId}<br />
                Description: {selectedComplaint?.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md" 
                rows={4} 
                placeholder="Type your response here..."
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleDialogAction}>Send Response</Button>
            </DialogFooter>
          </>
        );
      case 'resolve':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Resolve Complaint</DialogTitle>
              <DialogDescription>
                Are you sure you want to mark this complaint as resolved?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleDialogAction}>Confirm</Button>
            </DialogFooter>
          </>
        );
      case 'update':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Update Status</DialogTitle>
              <DialogDescription>
                Select the new status for this complaint
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Open</option>
                <option>In Progress</option>
                <option>Pending Customer Response</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleDialogAction}>Update Status</Button>
            </DialogFooter>
          </>
        );
      case 'delete':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Delete Complaint</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this complaint? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDialogAction}>Delete</Button>
            </DialogFooter>
          </>
        );
      case 'success':
        return (
          <>
            <DialogHeader>
              <DialogTitle>Success</DialogTitle>
              <DialogDescription>{dialogMessage}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setDialogOpen(false)}>OK</Button>
            </DialogFooter>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-semibold mb-6">Complaints</h1>
      
      {/* Search filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SERVICE</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded-md"
            value={searchParams.service}
            onChange={(e) => setSearchParams({...searchParams, service: e.target.value})}
          >
            <option value="">Select</option>
            <option value="cleaning">Cleaning Service</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ORDER ID</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search by order id"
            value={searchParams.orderId}
            onChange={(e) => setSearchParams({...searchParams, orderId: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">INVOICE NO</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search by invoice No"
            value={searchParams.invoiceNo}
            onChange={(e) => setSearchParams({...searchParams, invoiceNo: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">POLICY NO</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search by Policy No"
          value={searchParams.policyNo}
          onChange={(e) => setSearchParams({...searchParams, policyNo: e.target.value})}
        />
      </div>
      <div className="flex justify-end mb-6">
        <Button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2"
          onClick={handleSearch}
        >
          <Search className="w-4 h-4 mr-2" />
          SEARCH
        </Button>
      </div>
      </div>
      
      {/* Empty state table header */}
      <div className="border rounded-md mb-8">
        <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b">
          <div className="font-medium">SR. NO</div>
          <div className="font-medium">SERVICE</div>
          <div className="font-medium">SUB SERVICE</div>
          <div className="font-medium">ORDER ID</div>
          <div className="font-medium">INVOICE</div>
          <div className="font-medium">ACTION</div>
        </div>
        {/* Empty state */}
      </div>
      
      {/* Complaints data table */}
      <div className="border rounded-md">
        <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 border-b">
          <div className="font-medium">SR. NO.</div>
          <div className="font-medium">DATE OF COMPLAINT</div>
          <div className="font-medium">COMPLAINTS AGAINST</div>
          <div className="font-medium">KIND OF REQUEST</div>
          <div className="font-medium">ORDER ID</div>
          <div className="font-medium">DESCRIPTION</div>
        </div>
        
        {complaints.map((complaint, index) => (
          <div 
            key={complaint.id} 
            className={`grid grid-cols-6 gap-4 p-4 border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div>{complaint.id}</div>
            <div>{complaint.date}</div>
            <div>{complaint.against}</div>
            <div className="flex items-center">
              <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
              {complaint.kind}
            </div>
            <div>{complaint.orderId}</div>
            <div className="flex justify-between items-center">
              <span className="truncate">{complaint.description}</span>
              <div className="flex space-x-2">
                <button 
                  className="p-1 text-blue-500 hover:text-blue-700"
                  onClick={() => handleAction(complaint, 'respond')}
                  title="Respond"
                >
                  <MessageSquare className="w-5 h-5" />
                </button>
                <button 
                  className="p-1 text-green-500 hover:text-green-700"
                  onClick={() => handleAction(complaint, 'resolve')}
                  title="Resolve"
                >
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button 
                  className="p-1 text-orange-500 hover:text-orange-700"
                  onClick={() => handleAction(complaint, 'update')}
                  title="Update Status"
                >
                  <RefreshCw className="w-5 h-5" />
                </button>
                <button 
                  className="p-1 text-red-500 hover:text-red-700"
                  onClick={() => handleAction(complaint, 'delete')}
                  title="Delete"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add new complaint button */}
      <div className="mt-6 flex justify-end">
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          <FilePlus className="w-4 h-4 mr-2" />
          New Complaint
        </Button>
      </div>
      
      {/* Dialog for actions */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          {getDialogContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}