import React, { useState } from 'react';
import { Search, X, Filter, Plus, Edit, Trash2, Eye, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [searchValues, setSearchValues] = useState({
    questionNo: '',
    question: '',
    emirate: '',
    subCity: ''
  });
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Sample FAQ data
  const faqs = [
    {
      id: 1,
      questionNo: 'FAQ-001',
      question: 'How do I register for the service?',
      answer: 'To register for our service, visit our homepage and click on the "Sign Up" button in the top right corner. Follow the prompts to create your account using your email address or social media profiles.',
      emirate: 'Dubai',
      subCity: 'Downtown Dubai',
      category: 'Registration',
      subCategory: 'Online Services'
    },
    {
      id: 2,
      questionNo: 'FAQ-002',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including Visa, Mastercard, American Express, Apple Pay, Google Pay, and bank transfers. All payment transactions are secured with industry-standard encryption.',
      emirate: 'Abu Dhabi',
      subCity: 'Al Reem Island',
      category: 'Payments',
      subCategory: 'Payment Methods'
    },
    {
      id: 3,
      questionNo: 'FAQ-003',
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and navigating to the "My Orders" section. There you will find real-time updates on your order status, including processing, shipping, and delivery information.',
      emirate: 'Sharjah',
      subCity: 'Al Khan',
      category: 'Orders',
      subCategory: 'Order Tracking'
    },
    {
      id: 4,
      questionNo: 'FAQ-004',
      question: 'What is your refund policy?',
      answer: 'Our refund policy allows for returns within 30 days of purchase. Items must be in their original condition with all packaging and tags intact. Once we receive and inspect the returned item, we will process your refund within 5-7 business days.',
      emirate: 'Dubai',
      subCity: 'Dubai Marina',
      category: 'Refunds',
      subCategory: 'Return Process'
    },
    {
      id: 5,
      questionNo: 'FAQ-005',
      question: 'How do I change my password?',
      answer: 'To change your password, log into your account and go to "Account Settings." Under the "Security" tab, you will find an option to change your password. You will need to enter your current password first, followed by your new password.',
      emirate: 'Abu Dhabi',
      subCity: 'Yas Island',
      category: 'Account',
      subCategory: 'Security'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchValues({
      ...searchValues,
      [name]: value
    });
  };

  const clearSearch = () => {
    setSearchValues({
      questionNo: '',
      question: '',
      emirate: '',
      subCity: ''
    });
  };

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Header with Title */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <HelpCircle className="mr-2 text-blue-500" size={28} />
          FAQ Management
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          <Plus size={18} className="mr-1" /> Add New FAQ
        </button>
      </div>

      {/* Search Panel */}
      <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">Search FAQs</h2>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="text-blue-500 hover:text-blue-700 flex items-center text-sm"
          >
            <Filter size={16} className="mr-1" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <input
              type="text"
              name="questionNo"
              value={searchValues.questionNo}
              onChange={handleInputChange}
              placeholder="Search by Quest. No."
              className="w-full p-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute left-2 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="question"
              value={searchValues.question}
              onChange={handleInputChange}
              placeholder="Search by Question"
              className="w-full p-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search size={18} className="absolute left-2 top-3 text-gray-400" />
          </div>
          
          {showFilters && (
            <>
              <div className="relative">
                <input
                  type="text"
                  name="emirate"
                  value={searchValues.emirate}
                  onChange={handleInputChange}
                  placeholder="Search by Emirate"
                  className="w-full p-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search size={18} className="absolute left-2 top-3 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subCity"
                  value={searchValues.subCity}
                  onChange={handleInputChange}
                  placeholder="Search by Sub City"
                  className="w-full p-2 pl-9 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search size={18} className="absolute left-2 top-3 text-gray-400" />
              </div>
            </>
          )}
        </div>

        <div className="flex mt-4 justify-end space-x-3">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md flex items-center" onClick={clearSearch}>
            <X size={16} className="mr-1" /> Clear
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            GO
          </button>
        </div>
      </div>

      {/* FAQ List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Table View for Larger Screens */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quest.No
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Question
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Answer
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Emirate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sub City
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sub Category
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {faqs.map((faq) => (
                <tr key={faq.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {faq.questionNo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-sm truncate">
                    {faq.question}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">
                    {faq.answer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {faq.emirate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {faq.subCity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-xs">
                      {faq.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs">
                      {faq.subCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card View for Mobile Screens */}
        <div className="md:hidden divide-y divide-gray-200">
          {faqs.map((faq) => (
            <div key={faq.id} className="p-4">
              <div className="flex justify-between items-center">
                <div className="font-medium text-gray-900 flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2">
                    {faq.questionNo}
                  </span>
                  <span className="truncate">{faq.question}</span>
                </div>
                <button 
                  onClick={() => toggleFaq(faq.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {expandedFaq === faq.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
              </div>
              
              {expandedFaq === faq.id && (
                <div className="mt-3 ml-2 text-sm text-gray-600">
                  <div className="mb-2">
                    <span className="font-semibold">Answer:</span> {faq.answer}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <span className="font-semibold">Emirate:</span> {faq.emirate}
                    </div>
                    <div>
                      <span className="font-semibold">Sub City:</span> {faq.subCity}
                    </div>
                    <div>
                      <span className="font-semibold">Category:</span> {faq.category}
                    </div>
                    <div>
                      <span className="font-semibold">Sub Category:</span> {faq.subCategory}
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-3">
                    <button className="text-blue-600 hover:text-blue-900 p-1">
                      <Eye size={16} />
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 p-1">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-900 p-1">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">25</span> results
        </div>
        <div className="flex space-x-1">
          <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-l-md">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-blue-50 text-blue-700 font-medium">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 rounded-r-md">
            Next
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2025 FaqSearch.com - All rights reserved
      </div>
    </div>
  );
};

export default FAQ;