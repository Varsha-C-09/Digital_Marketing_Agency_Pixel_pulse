import React from 'react';
import { Search, BarChart3, Share2, Globe } from 'lucide-react';
import { Link } from './ui/Link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'Boost your website visibility and drive organic traffic through our comprehensive SEO solutions.',
    icon: <Search size={48} className="text-purple-700" />,
    features: [
      'Keyword Research & Strategy',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Link Building & Outreach',
      'Local SEO for Businesses'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience and build brand awareness with strategic social media campaigns.',
    icon: <Share2 size={48} className="text-purple-700" />,
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Paid Social Campaigns',
      'Social Analytics & Reporting'
    ]
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Create compelling content that resonates with your audience and drives conversions.',
    icon: <Globe size={48} className="text-purple-700" />,
    features: [
      'Content Strategy Development',
      'Blog Writing & Management',
      'Ebooks & White Papers',
      'Video Content Production',
      'Content Distribution'
    ]
  },
  {
    id: 'ppc',
    title: 'Pay-Per-Click Advertising',
    description: 'Maximize your ROI with targeted PPC campaigns across multiple platforms.',
    icon: <BarChart3 size={48} className="text-purple-700" />,
    features: [
      'Google Ads Management',
      'Bing Ads Campaigns',
      'Display & Remarketing',
      'Shopping Ads Optimization',
      'PPC Audit & Strategy'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Digital Marketing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing solutions tailored to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              id={service.id}
              key={service.id} 
              className="bg-white rounded-lg p-8 shadow-lg transform transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="#contact" 
                className="inline-block text-purple-700 font-medium hover:text-purple-800 transition-colors duration-300"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="#contact" 
            className="px-8 py-3.5 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-300 inline-block"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;