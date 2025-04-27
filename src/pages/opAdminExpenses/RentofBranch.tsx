import React, { useState } from "react";
import { Search, Filter, Calendar, FileUp, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';

interface RentEntry {
  id: number;
  date: string;
  particular: string;
  invoiceNo: string;
  chequeNo: string;
  purchaserName: string;
  netAmount: number;
  taxAmount: number;
  taxPercentage: number;
  totalAmount: number;
  installments: string;
}

const RentOfBranch: React.FC = () => {
  // States for form inputs
  const [particular, setParticular] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [transType, setTransType] = useState("Che");
  const [amountSign, setAmountSign] = useState("+");
  const [showAddFileDialog, setShowAddFileDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [taxPercentage, setTaxPercentage] = useState("5");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [purchaserName, setPurchaserName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [trnNo, setTrnNo] = useState("");
  const [date, setDate] = useState("");
  const [installments, setInstallments] = useState("1 Month");

  // Sample data
  const [entries, setEntries] = useState<RentEntry[]>([
    {
      id: 1,
      date: "2020-01-15",
      particular: "tps",
      invoiceNo: "23151516",
      chequeNo: "423424234",
      purchaserName: "sumit adv duavd",
      netAmount: 1561,
      taxAmount: 78.05,
      taxPercentage: 5,
      totalAmount: 1639.05,
      installments: "1 Month"
    },
    {
      id: 2,
      date: "2020-01-08",
      particular: "Office Rent - Dubai",
      invoiceNo: "117501994",
      chequeNo: "117501994",
      purchaserName: "Manoj Lalwani",
      netAmount: 7143,
      taxAmount: 357.15,
      taxPercentage: 5,
      totalAmount: 7500.15,
      installments: "3 Months"
    },
    {
      id: 3,
      date: "2020-06-09",
      particular: "Office Rent - Dubai",
      invoiceNo: "121046401",
      chequeNo: "121046401",
      purchaserName: "Manoj Lalwani",
      netAmount: 7143,
      taxAmount: 357.15,
      taxPercentage: 5,
      totalAmount: 7500.15,
      installments: "3 Months"
    }
  ]);

  // Handle form submission for filters
  const handleFilter = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement filter functionality here
    console.log("Filtering with:", { particular, fromDate, toDate, paymentStatus });
    // In a real app, you would filter the entries based on these criteria
  };

  // Handle form submission for adding a new entry
  const handleAddEntry = () => {
    const netAmountNum = parseFloat(amount);
    const taxAmountNum = netAmountNum * (parseFloat(taxPercentage) / 100);
    const totalAmountNum = netAmountNum + taxAmountNum;

    const newEntry: RentEntry = {
      id: entries.length + 1,
      date,
      particular,
      invoiceNo,
      chequeNo,
      purchaserName,
      netAmount: netAmountNum,
      taxAmount: taxAmountNum,
      taxPercentage: parseFloat(taxPercentage),
      totalAmount: totalAmountNum,
      installments
    };

    setEntries([...entries, newEntry]);
    resetForm();
  };

  // Reset form fields
  const resetForm = () => {
    setParticular("");
    setDate("");
    setInvoiceNo("");
    setChequeNo("");
    setPurchaserName("");
    setAmount("");
    setTaxPercentage("5");
    setTrnNo("");
    setTransType("Che");
    setInstallments("1 Month");
  };

  // Calculate total amount when net amount or tax percentage changes
  React.useEffect(() => {
    if (amount) {
      const netAmount = parseFloat(amount);
      const taxAmount = netAmount * (parseFloat(taxPercentage) / 100);
      setTotalAmount((netAmount + taxAmount).toString());
    } else {
      setTotalAmount("");
    }
  }, [amount, taxPercentage]);

  // Handle file attachment
  const handleFileAttachment = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      console.log("File attached:", e.target.files[0].name);
      // In a real app, you would upload the file to a server
    }
  };

  // Function to handle the attach file button click
  const handleAttachFileClick = () => {
    setShowAddFileDialog(true);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Rent Of Branch</h1>
        
        {/* Filter Section */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Filter By</h2>
          <form onSubmit={handleFilter} className="flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-44">
              <label className="block text-sm font-medium text-gray-700 mb-1">PARTICULAR</label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 pl-8"
                  value={particular}
                  onChange={(e) => setParticular(e.target.value)}
                />
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1 min-w-44">
              <label className="block text-sm font-medium text-gray-700 mb-1">FROM DATE</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2 pl-8"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1 min-w-44">
              <label className="block text-sm font-medium text-gray-700 mb-1">TO DATE</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2 pl-8"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="flex-1 min-w-44">
              <label className="block text-sm font-medium text-gray-700 mb-1">PAYMENT STATUS</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
              >
                <option value="">Select</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            
            <div className="flex-none">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded flex items-center"
              >
                <Filter className="h-4 w-4 mr-2" />
                FILTER
              </button>
            </div>
          </form>
        </div>
        
        {/* Add New Entry Form */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add New Rent Entry</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">DATE</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded p-2 pl-8"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PARTICULAR</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={particular}
                onChange={(e) => setParticular(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">INVOICE NO/REFERANCE NO</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={invoiceNo}
                onChange={(e) => setInvoiceNo(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PURCHASER NAME</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={purchaserName}
                onChange={(e) => setPurchaserName(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AMOUNT SIGN</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={amountSign}
                onChange={(e) => setAmountSign(e.target.value)}
              >
                <option value="+">+(Plus)</option>
                <option value="-">-(Minus)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AMOUNT</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TAX AMOUNT (IN %)</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded p-2"
                value={taxPercentage}
                onChange={(e) => setTaxPercentage(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TOTAL AMOUNT</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2 bg-gray-50"
                value={totalAmount}
                readOnly
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TRANS TYPE</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={transType}
                onChange={(e) => setTransType(e.target.value)}
              >
                <option value="Che">Cheque</option>
                <option value="Cash">Cash</option>
                <option value="Bank">Bank Transfer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CHEQUE NO / TRANSACTION ID</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={chequeNo}
                onChange={(e) => setChequeNo(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">TRN NO</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
                value={trnNo}
                onChange={(e) => setTrnNo(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">INSTALLMENTS</label>
              <select
                className="w-full border border-gray-300 rounded p-2"
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
              >
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="12 Months">12 Months</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ATTACH FILE</label>
              <button
                type="button"
                onClick={handleAttachFileClick}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded flex items-center"
              >
                <FileUp className="h-4 w-4 mr-2" />
                ATTACH FILE
              </button>
            </div>
            
            <div className="flex-1 flex items-end">
              <button
                type="button"
                onClick={handleAddEntry}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                ADD
              </button>
            </div>
          </div>
          
          {/* File Attachment Dialog */}
          <Dialog open={showAddFileDialog} onOpenChange={setShowAddFileDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Attach File</DialogTitle>
                <DialogDescription>
                  Select a file to attach to this rent transaction.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded">
                <FileUp className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-4">
                  Drag and drop your file here, or click to browse
                </p>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileAttachment}
                />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded cursor-pointer"
                >
                  Browse Files
                </label>
                {selectedFile && (
                  <div className="mt-4 text-sm text-green-600">
                    Selected: {selectedFile.name}
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddFileDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setShowAddFileDialog(false)}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Rent Details Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-4 border-b">Petty Cash Details</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DATE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PARTICULAR
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    INVOICE NO/REF NO
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    CHEQUE NO/TRANS ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PURCHASER NAME
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    NET AMOUNT
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TAX (IN %)
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TOTAL AMOUNT
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.particular}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.invoiceNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {entry.chequeNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {entry.purchaserName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                      {entry.netAmount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500">
                      {typeof entry.taxPercentage === 'number' ? entry.taxPercentage : 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                      {entry.totalAmount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination Controls */}
          <div className="px-4 py-3 flex items-center justify-between border-t">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">{entries.length}</span> of{" "}
                  <span className="font-medium">{entries.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </button>
                  <button
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Attribution */}
      <div className="mt-8 text-center text-xs text-gray-500">
        Copyright © 2025 TalitaCare.com
      </div>
    </div>
  );
};

export default RentOfBranch;