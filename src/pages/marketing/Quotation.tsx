import { useState, useEffect } from "react";
import { 
  Clipboard, 
  Search, 
  Plus, 
  CheckCircle, 
  Clock, 
  MessageCircle, 
  ChevronRight,
  ChevronLeft,
  Eye,
  X
} from "lucide-react";

// Define the type for our quotation records
type QuotationRecord = {
  id: number;
  referenceNo: string;
  date: string;
  kindOfRequest: string;
  kindOfProductService: string;
  requestFrom: string;
  stateOfQuote: string;
  provider?: string;
  price?: string;
};

// Sample data based on the images
const initialQuotations: QuotationRecord[] = [
  { 
    id: 1, 
    referenceNo: "1008CSQ1", 
    date: "23 Feb, 2021 09:28 AM", 
    kindOfRequest: "Service", 
    kindOfProductService: "", 
    requestFrom: "Sangeet", 
    stateOfQuote: "Confirm",
    provider: "Teluscare",
    price: "AED 5"
  },
  { 
    id: 2, 
    referenceNo: "1008CSQ2", 
    date: "24 Feb, 2021 05:09 PM", 
    kindOfRequest: "Service", 
    kindOfProductService: "", 
    requestFrom: "Sangeet", 
    stateOfQuote: "Negotitiation" 
  },
  { 
    id: 4, 
    referenceNo: "1008CSQ3", 
    date: "01 Mar, 2021 10:00 AM", 
    kindOfRequest: "Product", 
    kindOfProductService: "Cleaning Service", 
    requestFrom: "Sangeet", 
    stateOfQuote: "Pending" 
  },
  { 
    id: 6, 
    referenceNo: "1008CSQ4", 
    date: "17 Aug, 2022 05:17 PM", 
    kindOfRequest: "Service", 
    kindOfProductService: "", 
    requestFrom: "ahmad al amin bin marzuki", 
    stateOfQuote: "Pending" 
  }
];

export default function Quotation() {
  const [quotations, setQuotations] = useState<QuotationRecord[]>(initialQuotations);
  const [filteredQuotations, setFilteredQuotations] = useState<QuotationRecord[]>(initialQuotations);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuotation, setSelectedQuotation] = useState<QuotationRecord | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newQuotation, setNewQuotation] = useState<Partial<QuotationRecord>>({
    kindOfRequest: "Service",
    stateOfQuote: "Pending"
  });
  const [filters, setFilters] = useState({
    kindOfRequest: "",
    stateOfQuote: ""
  });
  

  // Filter quotations based on search term and filters
  useEffect(() => {
    let results = quotations.filter(quote => 
      (quote.referenceNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.requestFrom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.kindOfRequest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (quote.kindOfProductService && quote.kindOfProductService.toLowerCase().includes(searchTerm.toLowerCase())))
    );
    
    // Apply additional filters
    if (filters.kindOfRequest) {
      results = results.filter(quote => quote.kindOfRequest === filters.kindOfRequest);
    }
    
    if (filters.stateOfQuote) {
      results = results.filter(quote => quote.stateOfQuote === filters.stateOfQuote);
    }
    
    setFilteredQuotations(results);
  }, [searchTerm, quotations, filters]);

  // Handle view details
  const handleViewDetails = (quote: QuotationRecord) => {
    setSelectedQuotation(quote);
    setShowDetailView(true);
    // In a real application, you would navigate to a new route
    // navigate(`/quotations/${quote.referenceNo}`);
  };
  
  // Handle add new quotation
  const handleAddQuotation = () => {
    // Generate a new ID (would be handled by backend in real app)
    const newId = Math.max(...quotations.map(q => q.id)) + 1;
    
    // Generate a reference number
    const refNo = `1008CSQ${quotations.length + 1}`;
    
    // Current date and time
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    });
    const timeStr = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
    const dateTimeStr = `${dateStr} ${timeStr}`;
    
    // Create the new quotation object
    const quotationToAdd: QuotationRecord = {
      id: newId,
      referenceNo: refNo,
      date: dateTimeStr,
      kindOfRequest: newQuotation.kindOfRequest || "Service",
      kindOfProductService: newQuotation.kindOfProductService || "",
      requestFrom: newQuotation.requestFrom || "Guest User",
      stateOfQuote: newQuotation.stateOfQuote || "Pending",
      provider: newQuotation.provider,
      price: newQuotation.price
    };
    
    // Add to quotations array
    setQuotations([...quotations, quotationToAdd]);
    
    // Reset form and close modal
    setNewQuotation({
      kindOfRequest: "Service",
      stateOfQuote: "Pending"
    });
    setShowAddModal(false);
  };

  // Handle input change for new quotation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewQuotation({
      ...newQuotation,
      [name]: value
    });
  };

  // Render state badge with appropriate color
  const renderStateBadge = (state: string) => {
    switch(state.toLowerCase()) {
      case 'confirm':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" />
            {state}
          </span>
        );
      case 'negotitiation':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <MessageCircle size={12} className="mr-1" />
            {state}
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={12} className="mr-1" />
            {state}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {state}
          </span>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        {!showDetailView ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Clipboard size={24} className="text-blue-600 mr-2" />
                <h1 className="text-2xl font-bold text-gray-800">Quotations</h1>
              </div>
              <div className="flex space-x-3">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search quotations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
                  onClick={() => setShowAddModal(true)}
                >
                  <Plus size={18} className="mr-2" />
                  Add New
                </button>
              </div>
            </div>

            {/* Filter Section */}
            <div className="mb-6 flex flex-wrap gap-4">
              <div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.kindOfRequest}
                  onChange={(e) => setFilters({...filters, kindOfRequest: e.target.value})}
                >
                  <option value="">All Request Types</option>
                  <option value="Service">Service</option>
                  <option value="Product">Product</option>
                </select>
              </div>
              <div>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={filters.stateOfQuote}
                  onChange={(e) => setFilters({...filters, stateOfQuote: e.target.value})}
                >
                  <option value="">All States</option>
                  <option value="Pending">Pending</option>
                  <option value="Negotitiation">Negotitiation</option>
                  <option value="Confirm">Confirm</option>
                </select>
              </div>
              {(filters.kindOfRequest || filters.stateOfQuote) && (
                <button
                  onClick={() => setFilters({ kindOfRequest: "", stateOfQuote: "" })}
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <X size={16} className="mr-1" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Scrollable Table */}
            <div className="overflow-x-auto mb-6">
              <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        SR NO.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REFERENCE NO.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        DATE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        KIND OF REQUEST
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        KIND OF PRODUCT/SERVICE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        REQUEST FROM
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        STATE OF QUOTE
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        INFO
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredQuotations.length > 0 ? (
                      filteredQuotations.map((quote) => (
                        <tr key={quote.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {quote.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-medium">
                            {quote.referenceNo}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quote.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quote.kindOfRequest}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {quote.kindOfProductService}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {quote.requestFrom}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {renderStateBadge(quote.stateOfQuote)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                            <button 
                              onClick={() => handleViewDetails(quote)}
                              className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              <Eye size={16} className="mr-1" />
                              View
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={8} className="px-6 py-4 whitespace-nowrap text-center text-gray-500">
                          No quotations found matching your search criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
              <div className="flex flex-1 justify-between sm:hidden">
                <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </div>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredQuotations.length}</span> of{" "}
                    <span className="font-medium">{filteredQuotations.length}</span> results
                  </p>
                </div>
                <div>
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                      <span className="sr-only">Previous</span>
                      <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                      1
                    </button>
                    <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                      <span className="sr-only">Next</span>
                      <ChevronRight className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </>
        ) : (
          // Detail View
          <div>
            <div className="flex items-center mb-6">
              <button 
                onClick={() => setShowDetailView(false)}
                className="text-blue-600 hover:underline flex items-center"
              >
                <ChevronLeft size={20} />
                Back to Quotations
              </button>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Quotations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-500 mb-1">Service Name</p>
                  <p className="font-medium">{selectedQuotation?.kindOfProductService || selectedQuotation?.kindOfRequest}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Date & Time</p>
                  <p className="font-medium text-xl">{selectedQuotation?.date.split(' ').slice(0, 3).join(' ')}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Reference Number</p>
                  <p className="font-medium text-xl text-blue-600">{selectedQuotation?.referenceNo}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-gray-500 mb-1">Provider:</p>
                  <p className="font-medium">{selectedQuotation?.provider || 'Not specified'}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div>
                    <p className="text-gray-500 mb-1">Status</p>
                    <p className="font-medium text-amber-500">{selectedQuotation?.stateOfQuote}</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-500 mb-1">Action</p>
                    <div className="flex items-center">
                      <span className="font-medium text-blue-600 mr-4">Quote</span>
                      <CheckCircle size={20} className="text-green-500" />
                    </div>
                    <p className="font-medium mt-2">{selectedQuotation?.price || 'Price not set'}</p>
                    <button className="text-blue-600 hover:underline mt-2">View details</button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between">
                <button className="border border-gray-300 bg-white px-4 py-2 rounded-md">
                  Compare
                </button>
                <button className="text-blue-600 hover:underline flex items-center">
                  <MessageCircle size={16} className="mr-2" />
                  View Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add New Quotation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Add New Quotation</h2>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Request From
                </label>
                <input
                  type="text"
                  name="requestFrom"
                  value={newQuotation.requestFrom || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter requester name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kind of Request
                </label>
                <select
                  name="kindOfRequest"
                  value={newQuotation.kindOfRequest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Service">Service</option>
                  <option value="Product">Product</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kind of Product/Service
                </label>
                <input
                  type="text"
                  name="kindOfProductService"
                  value={newQuotation.kindOfProductService || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E.g., Cleaning Service"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State of Quote
                </label>
                <select
                  name="stateOfQuote"
                  value={newQuotation.stateOfQuote}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Pending">Pending</option>
                  <option value="Negotitiation">Negotitiation</option>
                  <option value="Confirm">Confirm</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Provider (Optional)
                </label>
                <input
                  type="text"
                  name="provider"
                  value={newQuotation.provider || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter provider name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price (Optional)
                </label>
                <input
                  type="text"
                  name="price"
                  value={newQuotation.price || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="E.g., AED 100"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddQuotation}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Add Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}