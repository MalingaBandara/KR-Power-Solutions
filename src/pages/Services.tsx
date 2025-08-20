import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { ZapIcon, CameraIcon, SunIcon, WrenchIcon, HomeIcon, BuildingIcon, PhoneIcon } from 'lucide-react';
const Services: React.FC = () => {
  const services = [{
    title: 'HT (High Tension) Installation',
    description: 'Professional installation and maintenance of high tension electrical systems for industrial and commercial applications, ensuring safety and compliance with regulations.',
    icon: ZapIcon
  }, {
    title: 'CCTV Installation & Setup',
    description: 'Complete security solutions with state-of-the-art CCTV systems, from camera placement to monitoring setup, providing peace of mind for your home or business.',
    icon: CameraIcon
  }, {
    title: 'Solar Power System Installation',
    description: 'Sustainable energy solutions with custom solar power system design and installation, helping you reduce electricity costs and your carbon footprint.',
    icon: SunIcon
  }, {
    title: 'Bakery Equipment Repair & Maintenance',
    description: 'Specialized repair and maintenance services for all types of bakery equipment, minimizing downtime and ensuring optimal performance.',
    icon: WrenchIcon
  }, {
    title: 'House Wiring',
    description: 'Complete residential electrical services, from new installations to rewiring, with a focus on safety, efficiency, and modern standards.',
    icon: HomeIcon
  }, {
    title: 'Commercial & Building Wiring',
    description: 'Comprehensive electrical solutions for commercial buildings, offices, and retail spaces, designed to meet your specific requirements and industry standards.',
    icon: BuildingIcon
  }];
  return <div className="w-full bg-gray-50">
      {/* Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional electrical and MEP solutions for residential and
            commercial needs
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
          </div>
        </div>
      </section>
      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Beyond our core services, we also offer specialized solutions in
              the following areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Telecom Infrastructure
                </h3>
                <p className="text-gray-700">
                  Cable jointing, fiber splicing, and OTDR testing for
                  telecommunications networks.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fiber Optics
                </h3>
                <p className="text-gray-700">
                  Installation, testing, and maintenance of fiber optic networks
                  for high-speed data transmission.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Electrical Troubleshooting
                </h3>
                <p className="text-gray-700">
                  Diagnostic services to identify and resolve complex electrical
                  issues efficiently.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Emergency Repairs
                </h3>
                <p className="text-gray-700">
                  Quick response for urgent electrical problems to minimize
                  downtime and risks.
                </p>
              </div>
            </div>
            <Button href="/contact" variant="primary">
              Inquire About Our Services
            </Button>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Need a Custom Solution?
              </h2>
              <p className="text-lg">
                Contact us to discuss your specific requirements and get a
                personalized quote.
              </p>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="mr-2" size={20} />
              <span className="text-xl font-semibold mr-4">+94 XXXXXXXX</span>
              <Button href="/contact" variant="outline" className="text-white border-white hover:bg-blue-800">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;