import React from 'react';
import Button from '../components/Button';
import { CheckCircleIcon, BriefcaseIcon, GlobeIcon, AwardIcon } from 'lucide-react';
const About: React.FC = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Kanchana Rangajeeva
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A journey of 28+ years in electrical and MEP excellence
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1581092921461-39b21c63f12b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Professional electrician at work" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Professional Background
              </h2>
              <p className="text-gray-700 mb-6">
                Kanchana Rangajeeva is a highly experienced MEP and electrical
                specialist with over 28 years of hands-on experience in various
                aspects of electrical engineering, telecom systems, high-tension
                installations, fiber optics, and solar power solutions.
              </p>
              <p className="text-gray-700 mb-6">
                His expertise spans across residential, commercial, and
                industrial projects, with a proven track record of delivering
                high-quality solutions that meet international standards and
                client expectations.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircleIcon className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Certified Professional</span>{' '}
                  with multiple technical qualifications
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircleIcon className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Experienced Leader</span> who
                  has managed technical teams
                </p>
              </div>
              <div className="flex items-start space-x-3 mb-6">
                <CheckCircleIcon className="text-blue-700 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-700">
                  <span className="font-semibold">Problem Solver</span> with a
                  reputation for finding efficient solutions
                </p>
              </div>
              <Button href="/contact" variant="primary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Professional Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-blue-700 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-blue-700 rounded-full -left-[9px] top-0"></div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <GlobeIcon className="text-blue-700 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">
                    International Experience - Qatar
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Worked with Qatar Telecom on critical infrastructure projects,
                  including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Cable jointing for telecommunications networks</li>
                  <li>Fiber optic splicing and installation</li>
                  <li>OTDR testing and network certification</li>
                  <li>Technical supervision of installation teams</li>
                </ul>
              </div>
              <div className="absolute w-4 h-4 bg-blue-700 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <GlobeIcon className="text-blue-700 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">
                    International Experience - Dubai
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Completed several high-profile projects in Dubai, focusing on:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Commercial electrical installations</li>
                  <li>Building management systems</li>
                  <li>Technical consultancy for large-scale projects</li>
                </ul>
              </div>
              <div className="absolute w-4 h-4 bg-blue-700 rounded-full -left-[9px]"></div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <BriefcaseIcon className="text-blue-700 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">
                    Sri Lanka - Technical Roles
                  </h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Held various technical positions in reputed Sri Lankan
                  companies:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Technical specialist at Sri Lanka Telecom</li>
                  <li>Senior technician for major electrical contractors</li>
                  <li>Project manager for commercial installations</li>
                </ul>
              </div>
              <div className="absolute w-4 h-4 bg-blue-700 rounded-full -left-[9px]"></div>
              <div>
                <div className="flex items-center mb-2">
                  <AwardIcon className="text-blue-700 mr-2" size={20} />
                  <h3 className="text-xl font-bold text-gray-900">
                    Founding KR Power Solutions
                  </h3>
                </div>
                <p className="text-gray-700">
                  Established KR Power Solutions to provide comprehensive
                  electrical and MEP services to residential and commercial
                  clients across Sri Lanka, leveraging decades of international
                  and local experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Work with an Experienced Professional?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact Kanchana Rangajeeva today to discuss your electrical or MEP
            project needs.
          </p>
          <Button href="/contact" variant="outline" size="lg" className="text-white border-white hover:bg-blue-800">
            Contact Now
          </Button>
        </div>
      </section>
    </div>;
};
export default About;