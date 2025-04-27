import React, { useState } from "react";
import { Search, Filter, Calendar, FileUp, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';

interface PettyCashEntry {
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
}

const PettyCash: React.FC = () => {
  // States for form inputs
  const [particular, setParticular] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [transType, setTransType] = useState("Che");
  const [amountSign, setAmountSign] = useState("+");
  const [showAddFileDialog, setShowAddFileDialog] = useState(false);
  const [showAddEntryDialog, setShowAddEntryDialog] = useState(false);
  const [taxPercentage, setTaxPercentage] = useState("5");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [purchaserName, setPurchaserName] = useState("");
  const [invoiceNo, setInvoiceNo] = useState("");
  const [chequeNo, setChequeNo] = useState("");
  const [trnNo, setTrnNo] = useState("");
  const [date, setDate] = useState("");

  // Sample data
  const [entries, setEntries] = useState<PettyCashEntry[]>([
    {
      id: 1,
      date: "2021-07-08",
      particular: "sf",
      invoiceNo: "sf",
      chequeNo: "32323",
      purchaserName: "sfs",
      netAmount: 424,
      taxAmount: 23,
      taxPercentage: 5,
      totalAmount: 323
    },
    {
      id: 2,
      date: "2020-01-13",
      particular: "vdyadawd",
      invoiceNo: "dawd",
      chequeNo: "dadad",
      purchaserName: "ada",
      netAmount: 4245555,
      taxAmount: 2,
      taxPercentage: 0.05,
      totalAmount: 426
    },
    {
      id: 3,
      date: "2020-01-13",
      particular: "vdyadawd",
      invoiceNo: "dawd",
      chequeNo: "dadad",
      purchaserName: "adadadd",
      netAmount: 424,
      taxAmount: 0,
      taxPercentage: 0,
      totalAmount: 424
    },
    {
      id: 4,
      date: "2020-01-13",
      particular: "vdyadawd",
      invoiceNo: "dawd",
      chequeNo: "dadad",
      purchaserName: "adadadd",
      netAmount: 424,
      taxAmount: 0,
      taxPercentage: 0,
      totalAmount: 424
    },
    {
      id: 5,
      date: "2020-01-13",
      particular: "vdyadawd",
      invoiceNo: "dawd",
      chequeNo: "dadad",
      purchaserName: "adadadd",
      netAmount: 424,
      taxAmount: 0,
      taxPercentage: 0,
      totalAmount: 424
    },
    {
      id: 6,
      date: "2021-07-08",
      particular: "tpss",
      invoiceNo: "23151516",
      chequeNo: "1564661561",
      purchaserName: "sumit adv duavd",
      netAmount: 200,
      taxAmount: 5,
      taxPercentage: 2.5,
      totalAmount: 210
    },
    {
      id: 7,
      date: "2016-02-02",
      particular: "test",
      invoiceNo: "43242424",
      chequeNo: "12356156",
      purchaserName: "Tt",
      netAmount: 100,
      taxAmount: 5,
      taxPercentage: 5,
      totalAmount: 105
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

    const newEntry: PettyCashEntry = {
      id: entries.length + 1,
      date,
      particular,
      invoiceNo,
      chequeNo,
      purchaserName,
      netAmount: netAmountNum,
      taxAmount: taxAmountNum,
      taxPercentage: parseFloat(taxPercentage),
      totalAmount: totalAmountNum
    };

    setEntries([...entries, newEntry]);
    setShowAddEntryDialog(false);
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
      console.log("File attached:", e.target.files[0].name);
      // Implement file upload logic here
      setShowAddFileDialog(false);
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Petty Cash</h1>
        
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
          <Dialog open={showAddEntryDialog} onOpenChange={setShowAddEntryDialog}>
            <DialogTrigger asChild>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded flex items-center"
                onClick={() => setShowAddEntryDialog(true)}
              >
                <Plus className="h-4 w-4 mr-2" />
                ADD ENTRY
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Petty Cash Entry</DialogTitle>
                <DialogDescription>
                  Enter the details for the new petty cash transaction.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded p-2"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-1">Particular</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={particular}
                    onChange={(e) => setParticular(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Invoice No</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Purchaser Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={purchaserName}
                    onChange={(e) => setPurchaserName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Amount</label>
                  <div className="flex">
                    <select
                      className="border-y border-l border-gray-300 rounded-l p-2 bg-gray-50"
                      value={amountSign}
                      onChange={(e) => setAmountSign(e.target.value)}
                    >
                      <option value="+">+</option>
                      <option value="-">-</option>
                    </select>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-r p-2"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tax Amount (%)</label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded p-2"
                    value={taxPercentage}
                    onChange={(e) => setTaxPercentage(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Total Amount</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2 bg-gray-50"
                    value={totalAmount}
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Transaction Type</label>
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
                  <label className="block text-sm font-medium mb-1">Cheque No / Transaction ID</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={chequeNo}
                    onChange={(e) => setChequeNo(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">TRN No</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={trnNo}
                    onChange={(e) => setTrnNo(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddEntryDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddEntry}>Save Entry</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          {/* File Attachment Dialog */}
          <Dialog open={showAddFileDialog} onOpenChange={setShowAddFileDialog}>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Attach File</DialogTitle>
                <DialogDescription>
                  Select a file to attach to this transaction.
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
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddFileDialog(false)}>
                  Cancel
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        
        {/* Petty Cash Details Table */}
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

export default PettyCash;