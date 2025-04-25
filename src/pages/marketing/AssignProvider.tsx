import { useState, useEffect } from "react";
import { Grid, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type QuotationRequest = {
  id: number;
  referenceNo: string;
  customerDetails: {
    name: string;
    email: string;
    mobile: string;
  };
  subject: string;
  lookingFor: string;
  location: string;
  locationDetails: {
    emirate: string;
    subcity: string;
  };
  productService: string;
  date: string;
};

// Available emirates for dropdown
const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"];

// Available subcities for Dubai
const subcities = {
  "Dubai": ["Abu Hail", "Academic City", "Al Awir First", "Al Barsha", "Bur Dubai", "Downtown", "Dubai Marina", "International City Phase two", "JBR", "JLT"],
  "Abu Dhabi": ["Al Reem Island", "Yas Island", "Saadiyat Island", "Al Raha Beach", "Khalifa City"],
  "Sharjah": ["Al Nahda", "Al Taawun", "Al Khan", "Al Majaz", "Al Qasimia"],
  "Ajman": ["Al Nuaimia 1", "Al Rashidiya", "Al Jurf", "Al Rawda"],
  "Fujairah": ["Al Faseel", "Al Gurfa", "City Centre", "Dibba"],
  "Ras Al Khaimah": ["Al Hamra", "Al Nakheel", "Al Qusaidat", "Khuzam"],
  "Umm Al Quwain": ["Al Aahad", "Al Raas", "Dream Land", "Umm Al Quwain Marina"]
};

// Available services
const services = ["Select", "Cleaning", "Maintenance", "Landscaping", "Security", "IT Support"];

// Available sub-services based on service selection
const subServices = {
  "Cleaning": ["Regular Cleaning", "Deep Cleaning", "Window Cleaning", "Carpet Cleaning"],
  "Maintenance": ["AC Repair", "Plumbing", "Electrical", "Carpentry"],
  "Landscaping": ["Garden Design", "Irrigation", "Lawn Maintenance", "Tree Services"],
  "Security": ["CCTV Installation", "Guard Services", "Access Control", "Alarm Systems"],
  "IT Support": ["Hardware Support", "Software Support", "Network Setup", "Cybersecurity"]
};

export default function AssignProviders() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string>("Select");
  const [selectedEmirateSubcities, setSelectedEmirateSubcities] = useState<string[]>([]);
  
  // Get the quotation data from location state
  const quotation = location.state?.quotation as QuotationRequest;
  
  // If no quotation is provided, use default values
  const customerName = quotation?.customerDetails.name || "";
  const customerEmail = quotation?.customerDetails.email || "";
  const selectedEmirate = quotation?.locationDetails.emirate || "Dubai";
  const selectedSubcity = quotation?.locationDetails.subcity || "";
  
  useEffect(() => {
    // Set the subcities based on the selected emirate
    if (selectedEmirate && subcities[selectedEmirate as keyof typeof subcities]) {
      setSelectedEmirateSubcities(subcities[selectedEmirate as keyof typeof subcities]);
    } else {
      setSelectedEmirateSubcities([]);
    }
  }, [selectedEmirate]);
  
  const handleSendRequest = () => {
    // In a real app, this would send the request to the backend
    alert("Request sent successfully!");
    // Navigate back to the quotations page
    navigate("/quotations");
  };
  
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <Grid size={24} className="text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Assign Providers</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CUSTOMER NAME</label>
              <input
                type="text"
                value={customerName}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EMAIL</label>
              <input
                type="email"
                value={customerEmail}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SERVICE</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">EMIRATE</label>
              <select
                value={selectedEmirate}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {emirates.map((emirate) => (
                  <option key={emirate} value={emirate}>{emirate}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SUB CITY</label>
              <select
                value={selectedSubcity}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {selectedEmirateSubcities.map((subcity) => (
                  <option key={subcity} value={subcity}>{subcity}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SUB SERVICE</label>
              <select
                disabled={selectedService === "Select"}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {selectedService !== "Select" && subServices[selectedService as keyof typeof subServices] ? 
                  subServices[selectedService as keyof typeof subServices].map((subService) => (
                    <option key={subService} value={subService}>{subService}</option>
                  )) : 
                  <option value="">Select a service first</option>
                }
              </select>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">SELECT PROVIDERS</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search providers..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/quotations")}
              className="px-4 py-2 border border-gray-300 bg-white rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            
            <button
              onClick={handleSendRequest}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
            >
              <Check size={18} className="mr-2" />
              SEND REQUEST
            </button>
          </div>
        </div>
        
        <div className="mt-16 text-center text-gray-400 text-sm">
          Copyright © 2025 Teluscare.com
        </div>
      </div>
    </div>
  );
}