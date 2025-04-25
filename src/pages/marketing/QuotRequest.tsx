import { useState, useEffect } from "react";
import { 
  Grid, 
  MapPin, 
  Calendar, 
  Paperclip, 
  Info,
  UserRound,
  Mail,
  Phone,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define types for our data
type CustomerDetails = {
  name: string;
  email: string;
  mobile: string;
};

type LocationDetails = {
  emirate: string;
  subcity: string;
};

type QuotationRequest = {
  id: number;
  referenceNo: string;
  customerDetails: CustomerDetails;
  subject: string;
  lookingFor: string;
  location: string;
  locationDetails: LocationDetails;
  productService: string;
  date: string;
};

// Sample data based on the images
const initialQuotations: QuotationRequest[] = [
  {
    id: 1,
    referenceNo: "REF001",
    customerDetails: {
      name: "Sangeet",
      email: "sangeet2@gmail.com",
      mobile: "+971 53 3333333"
    },
    subject: "Request place from sitepanel enquiry",
    lookingFor: "Request place from sitepanel",
    location: "sitepanel enquiry",
    locationDetails: {
      emirate: "Dubai",
      subcity: "Academic City"
    },
    productService: "Service",
    date: "12 Mar, 2021"
  },
  {
    id: 2,
    referenceNo: "REF002",
    customerDetails: {
      name: "Adel Samer",
      email: "adel@ahoy.ae",
      mobile: "+971 55 8874215"
    },
    subject: "Request place from sitepanel enquiry",
    lookingFor: "Request place from sitepanel",
    location: "sitepanel enquiry",
    locationDetails: {
      emirate: "Ajman",
      subcity: "Al Nuaimia 1"
    },
    productService: "Service",
    date: "15 Mar, 2021"
  },
  {
    id: 3,
    referenceNo: "REF003",
    customerDetails: {
      name: "Mr. Tanvir Abbas",
      email: "info@panlink.com",
      mobile: "+971 50 4245839"
    },
    subject: "Request place from sitepanel enquiry",
    lookingFor: "Request place from sitepanel",
    location: "sitepanel enquiry",
    locationDetails: {
      emirate: "Dubai",
      subcity: "Al Awir First"
    },
    productService: "Service",
    date: "23 Mar, 2021"
  },
  {
    id: 4,
    referenceNo: "REF004",
    customerDetails: {
      name: "Mr. arshad",
      email: "afnangarden@gmail.com",
      mobile: "+971553424726"
    },
    subject: "Request place from sitepanel enquiry",
    lookingFor: "Request place from sitepanel",
    location: "sitepanel enquiry",
    locationDetails: {
      emirate: "Dubai",
      subcity: "International City Phase two"
    },
    productService: "Service",
    date: "25 Mar, 2021"
  },
  {
    id: 5,
    referenceNo: "REF005",
    customerDetails: {
      name: "Sabita",
      email: "sabita@gmail.com",
      mobile: "+971 52 1234567"
    },
    subject: "Request place from sitepanel enquiry",
    lookingFor: "Request place from sitepanel",
    location: "sitepanel enquiry",
    locationDetails: {
      emirate: "Dubai",
      subcity: ""
    },
    productService: "Service",
    date: "19 May, 2021"
  }
];

// View types for our tabs
type ViewType = "customer" | "location";

export default function QuotRequest() {
  const [quotations, setQuotations] = useState<QuotationRequest[]>(initialQuotations);
  const [filteredQuotations, setFilteredQuotations] = useState<QuotationRequest[]>(initialQuotations);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState<ViewType>("customer");
  
  const navigate = useNavigate();

  // Filter quotations based on search term
  useEffect(() => {
    const results = quotations.filter(quote => 
      quote.customerDetails.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.customerDetails.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.referenceNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotations(results);
  }, [searchTerm, quotations]);

  // Handle assign providers
  const handleAssignProviders = (quote: QuotationRequest) => {
    // Navigate to the assign providers page with the quote data
    navigate(`/marketing/request/assignProvider`, { state: { quotation: quote } });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Grid size={24} className="text-blue-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">Quotations</h1>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search quotations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-4 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-md ${activeView === "customer" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                onClick={() => setActiveView("customer")}
              >
                Customer View
              </button>
              <button
                className={`px-4 py-2 rounded-md ${activeView === "location" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
                onClick={() => setActiveView("location")}
              >
                Location View
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-x-auto mb-6">
          <div className="max-h-96 overflow-y-auto">
            {activeView === "customer" ? (
              // Customer View Table
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SR NO.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      REFRENCE NO.
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CUSTOMER DETAILS
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SUBJECT
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      LOOKING FOR
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuotations.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {quote.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {quote.referenceNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <UserRound size={14} className="text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Name:</span>
                            <span className="text-sm text-gray-700 ml-1">{quote.customerDetails.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Mail size={14} className="text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Email:</span>
                            <span className="text-sm text-gray-700 ml-1">{quote.customerDetails.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone size={14} className="text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Mobile:</span>
                            <span className="text-sm text-gray-700 ml-1">{quote.customerDetails.mobile}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {quote.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {quote.lookingFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              // Location View Table
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      LOCATION
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      LOCATION DETAILS
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PRODUCT/SERVICE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ATTACHMENTS
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DATE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      INFO
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredQuotations.map((quote) => (
                    <tr key={quote.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                        {quote.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <MapPin size={14} className="text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Emirate:</span>
                            <span className="text-sm text-gray-700 ml-1">{quote.locationDetails.emirate}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="text-gray-500 mr-2" />
                            <span className="text-sm font-medium text-gray-900">Subcity:</span>
                            <span className="text-sm text-gray-700 ml-1">{quote.locationDetails.subcity || "—"}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {quote.productService}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Paperclip size={18} className="text-gray-400" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-700">
                          <Calendar size={14} className="text-gray-500 mr-2" />
                          {quote.date}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleAssignProviders(quote)}
                          className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          <Info size={16} className="mr-1" />
                          Assign Providers
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
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
      </div>
    </div>
  );
}