import React from 'react';
import Button from '../components/Button';
import { ArrowRightIcon, BoltIcon, BuildingIcon, AwardIcon } from 'lucide-react';
const Home: React.FC = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kanchana Rangajeeva
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              28+ Years of Trusted Electrical & MEP Experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Now
              </Button>
              <Button href="/services" variant="outline" size="lg" className="text-white border-white hover:bg-blue-800">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to KR Power Solutions
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Kanchana Rangajeeva is a seasoned MEP and electrical expert with
              hands-on experience in telecom, high-tension systems, fiber
              optics, solar, and more. He has worked with top companies in Sri
              Lanka and completed overseas projects in Qatar and Dubai.
            </p>
            <Button href="/about" variant="secondary">
              Learn More About Me <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Services Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BoltIcon className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Electrical Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                From high-tension installations to house wiring, we provide
                comprehensive electrical services for residential and commercial
                properties.
              </p>
              <Button href="/services" variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BuildingIcon className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Commercial Projects
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized in commercial & building wiring, CCTV installation,
                and bakery equipment maintenance for businesses of all sizes.
              </p>
              <Button href="/services" variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <AwardIcon className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Expert Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                With international experience in Qatar and Dubai, we offer
                expert consultation on complex electrical and MEP projects.
              </p>
              <Button href="/services" variant="secondary" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your electrical or MEP requirements and
            get a professional consultation.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-blue-800">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;