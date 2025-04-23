import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0"></div>
      
      {/* Animated shapes */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-purple-800 bg-purple-100 rounded-full">
              Elevate Your Digital Presence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-900 mb-6 tracking-tight">
              Drive Growth with <span className="text-purple-700">Strategic</span> Digital Marketing
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              We help businesses like yours achieve exceptional growth through data-driven marketing strategies and cutting-edge digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="px-8 py-3.5 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-300 text-center md:text-left"
              >
                Get Started
              </Link>
              <Link
                href="#services"
                className="px-8 py-3.5 border border-gray-300 rounded-full hover:border-purple-700 hover:text-purple-700 transition-colors duration-300 flex items-center justify-center sm:justify-start"
              >
                Our Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative bg-white p-2 rounded-lg shadow-xl transform transition-transform hover:scale-105 duration-500">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Digital Marketing Team"
                className="w-full h-auto rounded"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                      >
                        <img
                          src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=75`}
                          alt="Team member"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-800">+200</p>
                    <p className="text-xs text-gray-500">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats badge */}
            <div className="absolute -top-5 -right-5 bg-white p-4 rounded-lg shadow-lg transform rotate-3 md:flex items-center hidden">
              <div className="mr-3 text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h5" />
                  <path d="M17 12h5" />
                  <path d="M12 2v5" />
                  <path d="M12 17v5" />
                  <path d="M4.93 4.93l3.54 3.54" />
                  <path d="M15.54 15.54l3.54 3.54" />
                  <path d="M4.93 19.07l3.54-3.54" />
                  <path d="M15.54 8.46l3.54-3.54" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">96% Growth</p>
                <p className="text-xs text-gray-500">Avg. Client Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;