import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
const Footer: React.FC = () => {
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Portfolio',
    path: '/portfolio'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KR Power Solutions</h3>
            <p className="text-gray-300 mb-4">
              Professional electrical and MEP services with 28+ years of trusted
              experience in Sri Lanka, Qatar, and Dubai.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} className="text-gray-300 hover:text-white transition-colors">
                  {link.name}
                </Link>)}
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <PhoneIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>+94 XXXXXXXX</span>
              </div>
              <div className="flex items-start">
                <MailIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>contact@krpowersolutions.com</span>
              </div>
              <div className="flex items-start">
                <MapPinIcon size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-sm text-center text-gray-400">
          <p>© 2025 KR Power Solutions – Built by Kanchana Rangajeeva</p>
        </div>
      </div>
    </footer>;
};
export default Footer;