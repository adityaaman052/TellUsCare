import { Users, Building, Car, UserCheck, ShoppingCart, XCircle, Clock } from 'lucide-react';
import { StatCard } from '../../components/dashboard/StatCard';

export const DashboardPage = () => {
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
        <StatCard title="Total Order Pending" value="3571" icon={<Clock className="w-6 h-6" />} />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Customer Review</h2>
        {/* Add customer review components here */}
      </div>
    </div>
  );
};