import React from 'react';
import { Award, Users, BarChart, Globe } from 'lucide-react';

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    id: 'clients',
    value: '200+',
    label: 'Happy Clients',
    icon: <Users size={36} className="text-purple-700" />
  },
  {
    id: 'projects',
    value: '500+',
    label: 'Projects Completed',
    icon: <Award size={36} className="text-purple-700" />
  },
  {
    id: 'revenue',
    value: '$50M+',
    label: 'Client Revenue Generated',
    icon: <BarChart size={36} className="text-purple-700" />
  },
  {
    id: 'countries',
    value: '15+',
    label: 'Countries Served',
    icon: <Globe size={36} className="text-purple-700" />
  }
];

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Impact by the Numbers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across industries achieve remarkable results through our data-driven approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(stat => (
            <div 
              key={stat.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-700 to-blue-900 rounded-lg p-10 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Ready to Grow Your Business?</h3>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Partner with us to transform your digital presence and achieve measurable results.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3.5 bg-white text-purple-700 font-bold rounded-full hover:bg-purple-50 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;