import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Commercial Building Electrical System',
    category: 'Commercial Wiring',
    description: 'Complete electrical system installation for a multi-story commercial building, including power distribution, lighting, and emergency systems.',
    imageUrl: 'https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }, {
    id: 2,
    title: 'Telecom Network Expansion',
    category: 'Telecom',
    description: 'Fiber optic cable installation and splicing for a major telecommunications network expansion project in Qatar.',
    imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
  }, {
    id: 3,
    title: 'Residential Solar Power System',
    category: 'Solar',
    description: 'Design and installation of a 10kW solar power system for a residential property, including panel mounting, inverter setup, and grid connection.',
    imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80'
  }, {
    id: 4,
    title: 'Industrial HT Installation',
    category: 'High Tension',
    description: 'High tension electrical system installation for a manufacturing facility, including transformer setup and safety systems.',
    imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.PNauOaut5Imp7x9kIhkOZgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
  }, {
    id: 5,
    title: 'Retail Space CCTV System',
    category: 'CCTV',
    description: 'Comprehensive CCTV surveillance system installation for a retail space, with 24 cameras and central monitoring station.',
    imageUrl: 'https://assets.siccode.com/i-s-b/sic-code-7382-security-systems-services.jpg'
  }, {
    id: 6,
    title: 'Luxury Home Wiring',
    category: 'Residential',
    description: 'Complete electrical wiring for a luxury residential property, including smart home integration and automated lighting systems.',
    imageUrl: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }];
  const categories = [{
    id: 'all',
    name: 'All Projects'
  }, {
    id: 'Commercial Wiring',
    name: 'Commercial'
  },
  {
    id: 'Telecom',
    name: 'Telecom'
  }, {
    id: 'Solar',
    name: 'Solar'
  }, {
    id: 'High Tension',
    name: 'High Tension'
  }, {
    id: 'CCTV',
    name: 'CCTV'
  }, {
    id: 'Residential',
    name: 'Residential'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <div className="w-full bg-gray-50">
      {/* Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Showcasing our expertise through successful projects across Sri
            Lanka, Qatar, and Dubai
          </p>
        </div>
      </section>
      {/* Project Filters */}
      <section className="pt-12 pb-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => <button key={category.id} onClick={() => setFilter(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id ? 'bg-blue-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <ProjectCard key={project.id} title={project.title} category={project.category} description={project.description} imageUrl={project.imageUrl} />)}
          </div>
          {filteredProjects.length === 0 && <div className="text-center py-12">
              <p className="text-lg text-gray-700">
                No projects found in this category.
              </p>
            </div>}
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can bring our expertise to your next
            electrical or MEP project.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>;
};
export default Portfolio;