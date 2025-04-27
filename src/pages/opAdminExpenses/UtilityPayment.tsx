import React, { useState } from "react";
import {  File, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";

export default function UtilityPayment() {
  // State for form data
  const [formData, setFormData] = useState<{
    date: string;
    particular: string;
    invoiceNo: string;
    purchaserName: string;
    amountSign: string;
    amount: string;
    taxAmount: string;
    totalAmount: string;
    transType: string;
    chequeNo: string;
    trnNo: string;
    file: File | null;
  }>({
    date: "",
    particular: "",
    invoiceNo: "",
    purchaserName: "",
    amountSign: "+",
    amount: "",
    taxAmount: "5",
    totalAmount: "",
    transType: "Cheque",
    chequeNo: "",
    trnNo: "",
    file: null
  });

  // State for filter data
  const [filterData, setFilterData] = useState({
    particular: "",
    fromDate: "",
    toDate: "",
    paymentStatus: ""
  });

  // State for petty cash entries
  const [pettyCashEntries, setpettyCashEntries] = useState([
    {
      date: "2020-09-15",
      particular: "DEWA payment",
      invoiceNo: "100099985688",
      chequeNo: "EPAY00000000170074114",
      purchaserName: "DEWA",
      netAmount: "537"
    },
    {
      date: "2021-04-20",
      particular: "Mumbai Office Electricity payment",
      invoiceNo: "00000114927210",
      chequeNo: "B059480190992",
      purchaserName: "iPost Network",
      netAmount: "5353"
    }
  ]);
  
  // State for file dialog
  const [isFileDialogOpen, setIsFileDialogOpen] = useState(false);
  
  // State for add dialog
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  // State for selected file name
  const [selectedFileName, setSelectedFileName] = useState("");

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle filter input changes
  const handleFilterInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilterData({
      ...filterData,
      [name]: value
    });
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        file: file
      });
      setSelectedFileName(file.name);
      setIsFileDialogOpen(false);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    // Create new entry from form data
    const newEntry = {
      date: formData.date,
      particular: formData.particular,
      invoiceNo: formData.invoiceNo,
      chequeNo: formData.chequeNo,
      purchaserName: formData.purchaserName,
      netAmount: formData.amount
    };
    
    // Add new entry to petty cash entries
    setpettyCashEntries([...pettyCashEntries, newEntry]);
    
    // Reset form
    setFormData({
      date: "",
      particular: "",
      invoiceNo: "",
      purchaserName: "",
      amountSign: "+",
      amount: "",
      taxAmount: "5",
      totalAmount: "",
      transType: "Cheque",
      chequeNo: "",
      trnNo: "",
      file: null
    });
    
    setIsAddDialogOpen(false);
  };

  // Handle filter submission
  const handleFilter = () => {
    // Implementation would filter the pettyCashEntries based on filterData
    console.log("Filtering with:", filterData);
    // For demonstration purposes, we're just logging the filter data
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-8">Utility Payment</h1>
      
      {/* Filter Section */}
      <div className="bg-blue-50 p-4 rounded-md mb-6">
        <h2 className="text-lg font-medium mb-4">Filter By</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PARTICULAR</label>
            <input
              type="text"
              name="particular"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filterData.particular}
              onChange={handleFilterInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">FROM DATE</label>
            <input
              type="date"
              name="fromDate"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filterData.fromDate}
              onChange={handleFilterInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TO DATE</label>
            <input
              type="date"
              name="toDate"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filterData.toDate}
              onChange={handleFilterInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PAYMENT STATUS</label>
            <select
              name="paymentStatus"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={filterData.paymentStatus}
              onChange={handleFilterInputChange}
            >
              <option value="">Select</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-md flex items-center justify-center"
              onClick={handleFilter}
            >
              <Filter className="w-4 h-4 mr-2" /> FILTER
            </button>
          </div>
        </div>
      </div>
      
      {/* Form Section */}
      <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">DATE</label>
            <input
              type="date"
              name="date"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PARTICULAR</label>
            <input
              type="text"
              name="particular"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.particular}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">INVOICE NO/REFERANCE NO</label>
            <input
              type="text"
              name="invoiceNo"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.invoiceNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PURCHASER NAME</label>
            <input
              type="text"
              name="purchaserName"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.purchaserName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">AMOUNT SIGN</label>
            <select
              name="amountSign"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.amountSign}
              onChange={handleInputChange}
            >
              <option value="+">+(Plus)</option>
              <option value="-">-(Minus)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">AMOUNT</label>
            <input
              type="number"
              name="amount"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TAX AMOUNT (IN %)</label>
            <input
              type="number"
              name="taxAmount"
              className="w-full p-2 bg-gray-400 border border-gray-300 rounded-md"
              value={formData.taxAmount}
              onChange={handleInputChange}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TOTAL AMOUNT</label>
            <input
              type="number"
              name="totalAmount"
              className="w-full p-2 bg-gray-400 border border-gray-300 rounded-md"
              value={formData.amount ? (parseFloat(formData.amount) * (1 + parseFloat(formData.taxAmount) / 100)).toFixed(2) : ""}
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TRANS TYPE</label>
            <select
              name="transType"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.transType}
              onChange={handleInputChange}
            >
              <option value="Cheque">Cheque</option>
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CHEQUE NO / TRANSACTION ID</label>
            <input
              type="text"
              name="chequeNo"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.chequeNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">TRN NO</label>
            <input
              type="text"
              name="trnNo"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.trnNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ATTACH FILE</label>
            <button
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-2 rounded-md flex items-center justify-center"
              onClick={() => setIsFileDialogOpen(true)}
            >
              ATTACH FILE
            </button>
          </div>
        </div>
        
        <button
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md flex items-center justify-center"
          onClick={() => setIsAddDialogOpen(true)}
        >
          ADD
        </button>
      </div>
      
      {/* Petty Cash Details */}
      <div className="bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-xl font-bold mb-4">Petty Cash Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">DATE</th>
                <th className="text-left py-3 px-4">PARTICULAR</th>
                <th className="text-left py-3 px-4">INVOICE NO/REF NO</th>
                <th className="text-left py-3 px-4">CHEQUE NO/TRANS ID</th>
                <th className="text-left py-3 px-4">PURCHASER NAME</th>
                <th className="text-left py-3 px-4">NET AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {pettyCashEntries.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{entry.date}</td>
                  <td className="py-3 px-4">{entry.particular}</td>
                  <td className="py-3 px-4">{entry.invoiceNo}</td>
                  <td className="py-3 px-4">{entry.chequeNo}</td>
                  <td className="py-3 px-4">{entry.purchaserName}</td>
                  <td className="py-3 px-4">{entry.netAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* File Attachment Dialog */}
      <Dialog open={isFileDialogOpen} onOpenChange={setIsFileDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Attach File</DialogTitle>
            <DialogDescription>
              Select a file to attach to this utility payment record.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <File className="h-10 w-10 text-gray-500" />
              <div className="flex-1">
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="fileInput" 
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  {selectedFileName || "Click to select a file"}
                </label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsFileDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setIsFileDialogOpen(false)} disabled={!selectedFileName}>Attach</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Confirmation Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Addition</DialogTitle>
            <DialogDescription>
              Are you sure you want to add this utility payment record?
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Particular:</p>
                <p>{formData.particular || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Amount:</p>
                <p>{formData.amount ? `${formData.amountSign}${formData.amount}` : "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Purchaser:</p>
                <p>{formData.purchaserName || "Not specified"}</p>
              </div>
              <div>
                <p className="font-medium">Date:</p>
                <p>{formData.date || "Not specified"}</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}