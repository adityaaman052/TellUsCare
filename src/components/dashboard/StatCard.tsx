
interface StatCardProps {
    title: string;
    value: string | number;
    icon?: React.ReactNode;
  }
  
  export const StatCard = ({ title, value, icon }: StatCardProps) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-semibold mt-1">{value}</p>
          </div>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
      </div>
    );
  };