import React from 'react';
import { BoxIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: BoxIcon;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon
}) => {
  return <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        <Icon className="text-blue-700" size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>;
};
export default ServiceCard;