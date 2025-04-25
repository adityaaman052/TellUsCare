import React, { useState } from 'react';
import { Info, CheckCircle, AlertCircle, Eye, Edit, Trash2 } from 'lucide-react';

interface SubProductProps {
  className?: string;
}

interface Product {
  id: number;
  providerName: string;
  productType: string;
  productFor: string;
  productTitle: string;
  productSubType: string;
  date: string;
  status: 'active' | 'inactive';
  info: string;
}

const SubProduct: React.FC<SubProductProps> = ({ className }) => {
  // Sample data based on the image
  const [products] = useState<Product[]>([
    {
      id: 1,
      providerName: 'Ni tesh',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Deep clean service',
      productSubType: 'Cleaning Service',
      date: '2020-01',
      status: 'active',
      info: 'Premium cleaning service for residential and commercial clients',
    },
    {
      id: 2,
      providerName: 'StarBuckss Lite',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Best sofa cleaning',
      productSubType: 'Cleaning Service',
      date: '2020-01',
      status: 'active',
      info: 'Specialized sofa and upholstery cleaning',
    },
    {
      id: 3,
      providerName: 'StarBuckss Lite',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'General Cleaning service',
      productSubType: 'Cleaning Service',
      date: '2020-01',
      status: 'inactive',
      info: 'Regular maintenance cleaning for all spaces',
    },
    {
      id: 4,
      providerName: 'SARADCO FACILITIES MNGT . SOLE PROP. LLC',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Saradco General Cleaning Service',
      productSubType: 'Cleaning Service',
      date: '2021-01',
      status: 'active',
      info: 'Full-service cleaning solutions for businesses',
    },
    {
      id: 5,
      providerName: 'City Help Cleaning Services LLC',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Cleaning Services',
      productSubType: 'Cleaning Service',
      date: '2021-01',
      status: 'active',
      info: 'Urban cleaning services for residential properties',
    },
    {
      id: 6,
      providerName: 'Fast Trend Technical Services LLC',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Cleaning Services',
      productSubType: 'Cleaning Service',
      date: '2021-01',
      status: 'inactive',
      info: 'Technical cleaning solutions for industrial facilities',
    },
    {
      id: 7,
      providerName: 'Sohel Rana Cleaning Service L.L.C.',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'General Cleaning Services',
      productSubType: 'Cleaning Service',
      date: '2021-01',
      status: 'active',
      info: 'Complete cleaning package for homes and offices',
    },
    {
      id: 8,
      providerName: 'CleanTech Solutions',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Eco-Friendly Deep Clean',
      productSubType: 'Eco Service',
      date: '2022-05',
      status: 'active',
      info: 'Eco-certified cleaning with biodegradable products',
    },
    {
      id: 9,
      providerName: 'Maid Pro Experts',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Kitchen Deep Cleaning',
      productSubType: 'Kitchen Services',
      date: '2022-08',
      status: 'inactive',
      info: 'Intensive kitchen cleaning with grease removal',
    },
    {
      id: 10,
      providerName: 'Shine Bright Services',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Bathroom Sanitation',
      productSubType: 'Sanitary Services',
      date: '2023-02',
      status: 'active',
      info: 'Advanced sanitation for hygiene-critical areas',
    },
    {
      id: 11,
      providerName: 'Hygiene Crew LLC',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Weekly Cleaning Subscription',
      productSubType: 'Recurring Service',
      date: '2023-03',
      status: 'active',
      info: 'Weekly scheduled home cleaning packages',
    },
    {
      id: 12,
      providerName: 'ClearSpace Services',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Office Cleaning',
      productSubType: 'Commercial Services',
      date: '2023-05',
      status: 'active',
      info: 'Comprehensive office cleaning with air purification',
    },
    {
      id: 13,
      providerName: 'Deep Clean Masters',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Move-in/Move-out Cleaning',
      productSubType: 'One-time Service',
      date: '2023-07',
      status: 'inactive',
      info: 'Specialized cleaning for tenants and landlords',
    },
    {
      id: 14,
      providerName: 'Sparkle Force',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Window Cleaning Service',
      productSubType: 'Glass Services',
      date: '2023-09',
      status: 'active',
      info: 'Streak-free window and glass facade services',
    },
    {
      id: 15,
      providerName: 'Sanitize Pro',
      productType: 'Product',
      productFor: 'Both',
      productTitle: 'Disinfection Services',
      productSubType: 'Health Services',
      date: '2024-01',
      status: 'active',
      info: 'Hospital-grade disinfection for any environment',
    },
  ]);
  

  return (
    <div className={`w-full ${className}`}>
      <div className="shadow-sm border rounded-lg overflow-hidden">
        {/* Table wrapper with both horizontal and vertical scroll */}
        <div className="overflow-auto max-h-[600px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap sticky left-0 bg-gray-50 shadow-sm">
                  SR NO.
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  PROVIDER NAME
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  PRODUCT TYPE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  PRODUCT FOR
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  PRODUCT TITLE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  PRODUCT SUB TYPE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  DATE
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  INFO
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.providerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.productType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.productFor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {product.productTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.productSubType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      product.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status === 'active' ? (
                        <CheckCircle size={14} className="mr-1 text-green-600" />
                      ) : (
                        <AlertCircle size={14} className="mr-1 text-red-600" />
                      )}
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center">
                      <Info size={16} className="text-blue-500 mr-1" />
                      <span className="truncate max-w-xs">{product.info}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye size={16} />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <Edit size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubProduct;