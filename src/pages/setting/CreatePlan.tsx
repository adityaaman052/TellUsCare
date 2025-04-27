import React, { useState } from 'react';
import { 
  Edit, Trash2, Eye, Plus, CheckCircle, AlertCircle, 
  DollarSign, Users, Calendar, Tag, FileText
} from 'lucide-react';
import * as Dialog from '../../components/ui/dialog';
import * as Alert from '../../components/ui/alert';

interface Plan {
  id: number;
  type: string;
  name: string;
  description: string;
  usersLimit: number;
  amount: number;
  duration: string;
  serviceFee: number;
  section?: string;
}

const CreatePlan: React.FC = () => {
  // State for form inputs
  const [planType, setPlanType] = useState<string>('Online');
  const [planName, setPlanName] = useState<string>('');
  const [planDescription, setPlanDescription] = useState<string>('');
  const [usersCount, setUsersCount] = useState<string>('');
  const [planDuration, setPlanDuration] = useState<string>('1 Month');
  const [planPrice, setPlanPrice] = useState<string>('');
  const [serviceFee, setServiceFee] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('');
  
  // State for plan data
  const [plans, setPlans] = useState<Plan[]>([
    { id: 1, type: 'online', name: 'Basic', description: 'Test', usersLimit: 10, amount: 0, duration: '1 Month', serviceFee: 0 },
    { id: 2, type: 'online', name: 'Basic+', description: 'Test', usersLimit: 10, amount: 289, duration: '1 Month', serviceFee: 50 },
    { id: 3, type: 'online', name: 'Professional', description: 'Test', usersLimit: 15, amount: 449, duration: '3 Month', serviceFee: 75 },
    { id: 4, type: 'online', name: 'Professional+', description: 'Test', usersLimit: 20, amount: 789, duration: '6 Month', serviceFee: 100 }
  ]);

  // State for dialogs
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Sections options for dropdown
  const sectionOptions = ['Basic Features', 'Advanced Features', 'Premium Features', 'Enterprise Features'];

  // Handle create plan
  const handleCreatePlan = () => {
    const newPlan: Plan = {
      id: plans.length + 1,
      type: planType.toLowerCase(),
      name: planName,
      description: planDescription,
      usersLimit: parseInt(usersCount) || 0,
      amount: parseInt(planPrice) || 0,
      duration: planDuration,
      serviceFee: parseInt(serviceFee) || 0,
      section: selectedSection
    };

    setPlans([...plans, newPlan]);
    resetForm();
    showSuccessAlert('Plan created successfully!');
  };

  // Handle delete plan
  const handleDeletePlan = () => {
    if (selectedPlan) {
      setPlans(plans.filter(plan => plan.id !== selectedPlan.id));
      setIsDeleteDialogOpen(false);
      showSuccessAlert('Plan deleted successfully!');
    }
  };

  // Handle edit plan
  const handleEditPlan = () => {
    if (selectedPlan) {
      setPlans(plans.map(plan => 
        plan.id === selectedPlan.id ? selectedPlan : plan
      ));
      setIsEditDialogOpen(false);
      showSuccessAlert('Plan updated successfully!');
    }
  };

  // Show success alert temporarily
  const showSuccessAlert = (message: string) => {
    setIsSuccessAlertVisible(true);
    setTimeout(() => {
      setIsSuccessAlertVisible(false);
    }, 3000);
    console.log(message); // Log the message or use it as needed
  };

  // Reset form inputs
  const resetForm = () => {
    setPlanName('');
    setPlanDescription('');
    setUsersCount('');
    setPlanPrice('');
    setServiceFee('');
    setSelectedSection('');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Success Alert */}
      {isSuccessAlertVisible && (
        <div className="fixed top-4 right-4 z-50">
          <Alert.Alert className="bg-green-50 border-green-400 text-green-800">
            <CheckCircle className="h-4 w-4" />
            <Alert.AlertTitle>Success</Alert.AlertTitle>
            <Alert.AlertDescription>Operation completed successfully!</Alert.AlertDescription>
          </Alert.Alert>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Create Online - Offline Plans</h1>
      
      {/* Create Plan Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Plan Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN TYPE</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={planType}
              onChange={(e) => setPlanType(e.target.value)}
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          
          {/* Plan Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN NAME</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              placeholder="Enter plan name"
            />
          </div>
          
          {/* Plan Description */}
          <div className="md:col-span-2 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN DESCRIPTION</label>
            <textarea
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={planDescription}
              onChange={(e) => setPlanDescription(e.target.value)}
              placeholder="Enter plan description"
              rows={3}
            />
          </div>
          
          {/* Number of Users */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">NO OF USERS</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={usersCount}
              onChange={(e) => setUsersCount(e.target.value)}
              placeholder="Enter number of users"
            />
          </div>
          
          {/* Plan Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN DURATION</label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={planDuration}
              onChange={(e) => setPlanDuration(e.target.value)}
            >
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="1 Year">1 Year</option>
            </select>
          </div>
          
          {/* Plan Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PLAN PRICE</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={planPrice}
              onChange={(e) => setPlanPrice(e.target.value)}
              placeholder="Enter plan price"
            />
          </div>
          
          {/* Business Service Fee */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">BUSINESS SERVICE FEE</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              value={serviceFee}
              onChange={(e) => setServiceFee(e.target.value)}
              placeholder="Enter service fee"
            />
          </div>
        </div>
        
        {/* Select Section */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">SELECT SECTION AS PER PLAN</label>
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
        
        {/* Create Plan Button */}
        <button
          onClick={handleCreatePlan}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
          disabled={!planName}
        >
          <Plus className="w-4 h-4 mr-2" />
          CREATE PLAN
        </button>
      </div>
      
      {/* Existing Plans Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Existing Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Users Limit</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">View Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {plans.map((plan) => (
                <tr key={plan.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{plan.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.usersLimit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{plan.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-cyan-500 hover:bg-cyan-600 text-white py-1 px-4 rounded-md flex items-center justify-center"
                      onClick={() => {
                        setSelectedPlan(plan);
                        setIsViewDialogOpen(true);
                      }}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      VIEW
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => {
                          setSelectedPlan({...plan});
                          setIsEditDialogOpen(true);
                        }}
                      >
                        Edit
                      </button>
                      <span>/</span>
                      <button
                        className="text-blue-500 hover:text-blue-700"
                        onClick={() => {
                          setSelectedPlan(plan);
                          setIsDeleteDialogOpen(true);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Plan Dialog */}
      <Dialog.Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <Dialog.DialogContent className="sm:max-w-md">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle className="flex items-center">
              <Eye className="mr-2 h-5 w-5 text-blue-500" />
              View Plan Details
            </Dialog.DialogTitle>
          </Dialog.DialogHeader>
          
          {selectedPlan && (
            <div className="space-y-4 py-4">
              <div className="flex items-start">
                <Tag className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Plan Type</div>
                  <div className="text-gray-700">{selectedPlan.type}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Plan Name</div>
                  <div className="text-gray-700">{selectedPlan.name}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <FileText className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Description</div>
                  <div className="text-gray-700">{selectedPlan.description}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Users Limit</div>
                  <div className="text-gray-700">{selectedPlan.usersLimit}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Plan Amount</div>
                  <div className="text-gray-700">{selectedPlan.amount}</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="mr-2 h-5 w-5 text-gray-500" />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-gray-700">{selectedPlan.duration}</div>
                </div>
              </div>
              
              {selectedPlan.section && (
                <div className="flex items-start">
                  <FileText className="mr-2 h-5 w-5 text-gray-500" />
                  <div>
                    <div className="font-medium">Section</div>
                    <div className="text-gray-700">{selectedPlan.section}</div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <Dialog.DialogFooter>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setIsViewDialogOpen(false)}
            >
              Close
            </button>
          </Dialog.DialogFooter>
        </Dialog.DialogContent>
      </Dialog.Dialog>
      
      {/* Edit Plan Dialog */}
      <Dialog.Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <Dialog.DialogContent className="sm:max-w-md">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle className="flex items-center">
              <Edit className="mr-2 h-5 w-5 text-blue-500" />
              Edit Plan
            </Dialog.DialogTitle>
          </Dialog.DialogHeader>
          
          {selectedPlan && (
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Type</label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.type}
                  onChange={(e) => setSelectedPlan({...selectedPlan, type: e.target.value})}
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.name}
                  onChange={(e) => setSelectedPlan({...selectedPlan, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.description}
                  onChange={(e) => setSelectedPlan({...selectedPlan, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Users Limit</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.usersLimit}
                  onChange={(e) => setSelectedPlan({...selectedPlan, usersLimit: parseInt(e.target.value) || 0})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Amount</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.amount}
                  onChange={(e) => setSelectedPlan({...selectedPlan, amount: parseInt(e.target.value) || 0})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.duration}
                  onChange={(e) => setSelectedPlan({...selectedPlan, duration: e.target.value})}
                >
                  <option value="1 Month">1 Month</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2"
                  value={selectedPlan.section || ''}
                  onChange={(e) => setSelectedPlan({...selectedPlan, section: e.target.value})}
                >
                  <option value="" disabled>SELECT</option>
                  {sectionOptions.map((section, index) => (
                    <option key={index} value={section}>{section}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          <Dialog.DialogFooter className="flex space-x-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setIsEditDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
              onClick={handleEditPlan}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </Dialog.DialogFooter>
        </Dialog.DialogContent>
      </Dialog.Dialog>
      
      {/* Delete Plan Dialog */}
      <Dialog.Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <Dialog.DialogContent className="sm:max-w-md">
          <Dialog.DialogHeader>
            <Dialog.DialogTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-500" />
              Confirm Deletion
            </Dialog.DialogTitle>
          </Dialog.DialogHeader>
          
          <div className="py-4">
            <p className="text-gray-700">
              Are you sure you want to delete the plan "{selectedPlan?.name}"? This action cannot be undone.
            </p>
          </div>
          
          <Dialog.DialogFooter className="flex space-x-2">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center"
              onClick={handleDeletePlan}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Plan
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

export default CreatePlan;