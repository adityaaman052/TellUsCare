import { Users, Building, Car, UserCheck, ShoppingCart, XCircle, Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { StatCard } from '../../components/dashboard/StatCard';

export const DashboardPage = () => {
  // Sample data for customer reviews
  const customerReviews = [
    {
      id: 1,
      name: "Cleaning Service",
      date: "25 Aug, 2022 - 06:03 pm",
      review: "nice work",
      rating: 5,
    },
    {
      id: 2,
      name: "Sabiha Cleaning Service",
      date: "5 Dec, 2021 - 09:19 am",
      review: "Very slow and no knowledge of how to use cleaning materials and how to clean house.",
      rating: 3,
    },
    {
      id: 3,
      name: "Sabiha Cleaning Service",
      date: "4 Dec, 2021 - 02:10 pm",
      review: "",
      rating: 3,
    },
    {
      id: 4,
      name: "Pest Control",
      date: "30 Oct, 2021 - 03:19 pm",
      review: "pest control review",
      rating: 3,
    },
    {
      id: 5,
      name: "Cleaning Service",
      date: "30 Oct, 2021 - 03:12 pm",
      review: "testse",
      rating: 4,
    },
  ];

  // Updated sample data for recent call backs with additional columns
  const recentCallBacks = [
    { 
      email: "sou.sou.salah@hotmail", 
      phone: "+971 50 2682096", 
      refNo: "10081104CS0521",
      service: "Cleaning Service",
      date: "23 Apr, 2025",
      status: "Pending"
    },
    { 
      email: "glowielly@yahoo.com", 
      phone: "+971 56 6854711", 
      refNo: "10082404PC0521",
      service: "Pest Control",
      date: "24 Apr, 2025",
      status: "Completed"
    },
    { 
      email: "vinodcnair@live.com", 
      phone: "+971 55 7906442", 
      refNo: "10082404PC0521",
      service: "Pest Control",
      date: "24 Apr, 2025",
      status: "In Progress"
    },
    { 
      email: "nano.grini@gmail.com", 
      phone: "+971 54 4074599", 
      refNo: "10082404CS0521",
      service: "Cleaning Service",
      date: "24 Apr, 2025",
      status: "Scheduled"
    },
    { 
      email: "chetrgorospe@gmail.com", 
      phone: "+971 50 3415873", 
      refNo: "10082304HI0521",
      service: "Home Inspection",
      date: "23 Apr, 2025",
      status: "Cancelled"
    },
    { 
      email: "pranaevijayan@gmail.com", 
      phone: "+971 50 9127157", 
      refNo: "10081804CS0521",
      service: "Cleaning Service",
      date: "18 Apr, 2025",
      status: "Completed"
    },
  ];

  // Sample data for recent orders
  const recentOrders = [
    { 
      service: "Cleaning Service", 
      vendor: "Teluscare", 
      orderId: "100823045736", 
      amount: "AED 107.1", 
      date: "23 Apr, 2025", 
      status: "Pending" 
    },
  ];

  // Function to render star ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">SBP:- Strategic Business Partner Summary</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total SBP" value="206" icon={<Users className="w-6 h-6" />} />
        <StatCard title="Total SBP in Facility" value="183" icon={<Building className="w-6 h-6" />} />
        <StatCard title="Total SBP in Insurance" value="7" icon={<Car className="w-6 h-6" />} />
        <StatCard title="Active SBP" value="71" icon={<UserCheck className="w-6 h-6" />} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Order Completed" value="721" icon={<ShoppingCart className="w-6 h-6" />} />
        <StatCard title="Total Order Cancelled" value="1041" icon={<XCircle className="w-6 h-6" />} />
        <StatCard title="Total Order Pending" value="3589" icon={<Clock className="w-6 h-6" />} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Total Sales in Facility (Today)</h2>
          <div className="text-3xl font-bold mb-4">AED 0.00</div>
          <div className="h-32 flex items-end">
            <div className="w-full flex items-end justify-between space-x-1">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-300 w-4" style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-4">Total Sales in Facility (Months)</h2>
          <div className="text-3xl font-bold mb-4">AED 27704.78</div>
          <div className="h-32 flex items-end">
            <div className="w-full flex items-end justify-between space-x-1">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-300 w-4" style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Total Sales in Insurance (Today)</h2>
          <div className="text-3xl font-bold mb-4">AED 0.00</div>
          <div className="h-32 flex items-end">
            <div className="w-full flex items-end justify-between space-x-1">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-300 w-4" style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-6 mb-4">Total Sales in Insurance (Month)</h2>
          <div className="text-3xl font-bold mb-4">AED 0.00</div>
          <div className="h-32 flex items-end">
            <div className="w-full flex items-end justify-between space-x-1">
              {Array(12).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-300 w-4" style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Review</h2>
          <div className="space-y-4">
            {customerReviews.map((review) => (
              <div key={review.id} className="flex items-start border-b border-gray-200 pb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Users className="w-full h-full text-gray-500 p-2" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">{review.name}</h3>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <div>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  {review.review && <p className="text-sm mt-1">{review.review}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Call Back</h2>
        <div className="relative">
          {/* Container with fixed height for vertical scrolling and overflow-x-auto for horizontal scrolling */}
          <div className="h-64 overflow-y-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      EMAIL
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PHONE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      REF NO
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SERVICE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DATE
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentCallBacks.map((callback, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {callback.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {callback.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                        {callback.refNo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {callback.service}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {callback.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          callback.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          callback.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          callback.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {callback.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end items-center mt-2 text-gray-500">
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="w-32 h-2 mx-2 bg-gray-200 rounded">
              <div className="w-1/3 h-full bg-gray-400 rounded"></div>
            </div>
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Order Tables</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  SERVICE
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  VENDOR
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ORDER ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AMOUNT
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  DATE
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.vendor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.orderId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.status}
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