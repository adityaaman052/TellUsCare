import React, { useState, useEffect } from 'react';
import { 
  CheckCircle,  Key, UserPlus
} from 'lucide-react';
import * as Dialog from '../../components/ui/dialog';
import * as Alert from '../../components/ui/alert';

interface Vendor {
  id: number;
  name: string;
}

interface Plan {
  id: number;
  name: string;
  duration: string;
  usersLimit: number;
  amount: number;
  currency: string;
}

interface AssignedPlan {
  id: number;
  vendorId: number;
  vendorName: string;
  planId: number;
  planName: string;
  planDuration: string;
  planUsersLimit: number;
  planAmount: number;
  additionalUsers: number;
  section?: string;
  currency: string;
  finalAmount: number;
}

const AssignPlan: React.FC = () => {
  // State for form inputs
  const [selectedVendor, setSelectedVendor] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [additionalUsers, setAdditionalUsers] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  const [planFinalAmount, setPlanFinalAmount] = useState<number>(0);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [isLicenseDialogOpen, setIsLicenseDialogOpen] = useState(false);
  const [generatedLicenseKeys, setGeneratedLicenseKeys] = useState<string[]>([]);

  // Mock data
  const [vendors] = useState<Vendor[]>([
    { id: 1, name: 'Nitesh' },
    { id: 2, name: 'BRIGHT BEST TECHNICAL SERVICES' },
    { id: 3, name: 'ECO GUARDIANS PEST CONTROL DISINFECTION AND SANITIZATION SERVICES L.L.C' },
    { id: 4, name: 'Dubai Healthcare Services' },
    { id: 5, name: 'Al Madina Medical Center' }
  ]);

  const [plans] = useState<Plan[]>([
    { id: 1, name: 'Basic', duration: '1 MONTH', usersLimit: 10, amount: 0, currency: 'AED' },
    { id: 2, name: 'Basic+', duration: '1 MONTH', usersLimit: 10, amount: 289, currency: 'AED' },
    { id: 3, name: 'Professional', duration: '1 MONTH', usersLimit: 15, amount: 449, currency: 'AED' },
    { id: 4, name: 'Professional+', duration: '6 MONTH', usersLimit: 20, amount: 789, currency: 'AED' }
  ]);

  // State for assigned plans
  const [assignedPlans, setAssignedPlans] = useState<AssignedPlan[]>([
    { 
      id: 1, 
      vendorId: 1, 
      vendorName: 'Nitesh', 
      planId: 3, 
      planName: 'Professional', 
      planDuration: '1 MONTH', 
      planUsersLimit: 15, 
      planAmount: 449, 
      additionalUsers: 0, 
      currency: 'AED',
      finalAmount: 449
    },
    { 
      id: 2, 
      vendorId: 2, 
      vendorName: 'BRIGHT BEST TECHNICAL SERVICES', 
      planId: 2, 
      planName: 'Basic+', 
      planDuration: '1 MONTH', 
      planUsersLimit: 10, 
      planAmount: 289, 
      additionalUsers: 0, 
      currency: 'AED',
      finalAmount: 289
    },
    { 
      id: 3, 
      vendorId: 3, 
      vendorName: 'ECO GUARDIANS PEST CONTROL DISINFECTION AND SANITIZATION SERVICES L.L.C', 
      planId: 2, 
      planName: 'Basic+', 
      planDuration: '1 MONTH', 
      planUsersLimit: 10, 
      planAmount: 289, 
      additionalUsers: 0, 
      currency: 'AED',
      finalAmount: 289
    }
  ]);

  // Sections options for dropdown
  const sectionOptions = ['Basic Features', 'Advanced Features', 'Premium Features', 'Enterprise Features'];

  // Calculate final amount when plan or additional users change
  useEffect(() => {
    if (selectedPlan) {
      const plan = plans.find(p => p.id.toString() === selectedPlan);
      if (plan) {
        const additionalUserCount = parseInt(additionalUsers) || 0;
        // Assume each additional user costs 10% of the base plan price
        const additionalCost = additionalUserCount * (plan.amount * 0.1);
        setPlanFinalAmount(plan.amount + additionalCost);
      }
    } else {
      setPlanFinalAmount(0);
    }
  }, [selectedPlan, additionalUsers, plans]);

  // Handle assign plan
  const handleAssignPlan = () => {
    if (!selectedVendor || !selectedPlan) {
      alert("Please select vendor and plan");
      return;
    }

    const vendor = vendors.find(v => v.id.toString() === selectedVendor);
    const plan = plans.find(p => p.id.toString() === selectedPlan);
    
    if (vendor && plan) {
      const newAssignedPlan: AssignedPlan = {
        id: assignedPlans.length + 1,
        vendorId: vendor.id,
        vendorName: vendor.name,
        planId: plan.id,
        planName: plan.name,
        planDuration: plan.duration,
        planUsersLimit: plan.usersLimit,
        planAmount: plan.amount,
        additionalUsers: parseInt(additionalUsers) || 0,
        section: selectedSection,
        currency: plan.currency,
        finalAmount: planFinalAmount
      };

      setAssignedPlans([...assignedPlans, newAssignedPlan]);
      resetForm();
      showSuccessAlert('Plan assigned successfully!');
    }
  };

  // Generate license keys
  const handleGenerateLicenseKeys = () => {
    const additionalUserCount = parseInt(additionalUsers) || 0;
    
    if (additionalUserCount <= 0) {
      alert("Please enter at least one additional user");
      return;
    }
    
    // Generate random license keys
    const keys = Array.from({ length: additionalUserCount }, () => 
      `TLK-${Math.random().toString(36).substring(2, 8).toUpperCase()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
    );
    
    setGeneratedLicenseKeys(keys);
    setIsLicenseDialogOpen(true);
  };

  // Show success alert temporarily
  const showSuccessAlert = (message: string) => {
    setIsSuccessAlertVisible(true);
    setTimeout(() => {
      setIsSuccessAlertVisible(false);
    }, 3000);
    console.log(message); // For debugging purposes
  };

  // Reset form inputs
  const resetForm = () => {
    setSelectedVendor('');
    setSelectedPlan('');
    setAdditionalUsers('');
    setSelectedSection('');
    setPlanFinalAmount(0);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Success Alert */}
      {isSuccessAlertVisible && (
        <div className="fixed top-4 right-4 z-50">
          <Alert.Alert className="bg-green-50 border-green-400 text-green-800">
            <CheckCircle className="h-4 w-4" />
            <Alert.AlertTitle>Success</Alert.AlertTitle>
            <Alert.AlertDescription>Plan assigned successfully!</Alert.AlertDescription>
          </Alert.Alert>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Assign Vendor Plans</h1>
      
      {/* Assign Plan Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Select Vendor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SELECT VENDOR</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option value="" disabled>Select</option>
              {vendors.map((vendor) => (
                <option key={vendor.id} value={vendor.id}>{vendor.name}</option>
              ))}
            </select>
          </div>
          
          {/* Select Plan */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SELECT PLAN</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
            >
              <option value="" disabled>Select</option>
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>{plan.name}</option>
              ))}
            </select>
          </div>
          
          {/* Enter Additional User */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ENTER ADDITIONAL USER</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={additionalUsers}
              onChange={(e) => setAdditionalUsers(e.target.value)}
              placeholder="Enter number of users"
            />
          </div>
          
          {/* Generate License Keys */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ADDITIONAL USERS</label>
            <button
              onClick={handleGenerateLicenseKeys}
              className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 flex items-center justify-center"
              disabled={!additionalUsers || parseInt(additionalUsers) <= 0}
            >
              <Key className="w-4 h-4 mr-2" />
              GENERATE LICENSE KEYS
            </button>
          </div>
          
          {/* Plan Final Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN FINAL AMOUNT</label>
            <div className="w-full bg-gray-200 rounded-md p-2 text-gray-700 h-10 flex items-center">
              {planFinalAmount > 0 ? `${planFinalAmount} ${selectedPlan ? plans.find(p => p.id.toString() === selectedPlan)?.currency : ''}` : ''}
            </div>
          </div>
        </div>
        
        {/* Select Additional Section */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">SELECT ASSIGN ADDITIONAL SECTION</label>
          <select
            className="w-full md:w-1/2 lg:w-1/3 border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
          >
            <option value="" disabled>SELECT</option>
            {sectionOptions.map((section, index) => (
              <option key={index} value={section}>{section}</option>
            ))}
          </select>
        </div>
        
        {/* Assign Now Button */}
        <button
          onClick={handleAssignPlan}
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
          disabled={!selectedVendor || !selectedPlan}
        >
          <UserPlus className="w-5 h-5 mr-2" />
          ASSIGN NOW
        </button>
      </div>
      
      {/* Assigned Plans Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Assigned Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Users Limit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assignedPlans.map((assignment) => (
                <tr key={assignment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{assignment.vendorName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.planName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.planDuration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.planUsersLimit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{assignment.finalAmount} {assignment.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* License Keys Dialog */}
      <Dialog.Dialog open={isLicenseDialogOpen} onOpenChange={setIsLicenseDialogOpen}>
        <Dialog.DialogContent className="sm:max-w-md">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle className="flex items-center">
              <Key className="mr-2 h-5 w-5 text-blue-500" />
              Generated License Keys
            </Dialog.DialogTitle>
          </Dialog.DialogHeader>
          
          <div className="max-h-80 overflow-y-auto py-4">
            <div className="border rounded-md divide-y">
              {generatedLicenseKeys.map((key, index) => (
                <div key={index} className="p-3 flex justify-between items-center">
                  <span className="font-mono text-sm">{key}</span>
                  <button 
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      navigator.clipboard.writeText(key);
                      showSuccessAlert('License key copied to clipboard!');
                    }}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <Dialog.DialogFooter className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
              onClick={() => {
                const allKeys = generatedLicenseKeys.join('\n');
                navigator.clipboard.writeText(allKeys);
                showSuccessAlert('All license keys copied to clipboard!');
              }}
            >
              Copy All
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setIsLicenseDialogOpen(false)}
            >
              Close
            </button>
          </Dialog.DialogFooter>
        </Dialog.DialogContent>
      </Dialog.Dialog>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Copyright © 2025 Talkcare.com
      </div>
    </div>
  );
};

export default AssignPlan;