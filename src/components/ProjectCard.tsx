import React from 'react';
interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  imageUrl
}) => {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm font-medium text-blue-700 mb-2">{category}</div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>;
};
export default ProjectCard;