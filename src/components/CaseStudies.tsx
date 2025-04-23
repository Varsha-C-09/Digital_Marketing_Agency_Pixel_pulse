import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-seo',
    title: 'Boosting Online Sales Through SEO',
    client: 'Fashion Retailer',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/6169/woman-hand-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    challenge: 'An established fashion retailer was struggling to compete with larger online stores and saw a decline in organic traffic and sales.',
    solution: 'We implemented a comprehensive SEO strategy focusing on product page optimization, technical SEO improvements, and content marketing to target high-intent keywords.',
    results: [
      '152% increase in organic traffic within 6 months',
      '94% increase in online sales year-over-year',
      'Improved search rankings for 200+ key product terms',
      'Enhanced user engagement metrics with 23% lower bounce rate'
    ]
  },
  {
    id: 'local-business',
    title: 'Local Business Expansion Strategy',
    client: 'Restaurant Chain',
    category: 'Local SEO',
    image: 'https://images.pexels.com/photos/7937574/pexels-photo-7937574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    challenge: 'A growing restaurant chain wanted to increase foot traffic and awareness for their new locations but had limited marketing budget.',
    solution: 'We developed a localized digital marketing strategy combining Google Business Profile optimization, local SEO, targeted social media campaigns, and review management.',
    results: [
      'Doubled foot traffic to new locations within 3 months',
      '300% increase in positive online reviews',
      '45% growth in social media followers and engagement',
      'Established local search dominance in target neighborhoods'
    ]
  },
  {
    id: 'b2b-lead-gen',
    title: 'B2B Lead Generation Campaign',
    client: 'Software Company',
    category: 'Lead Generation',
    image: 'https://images.pexels.com/photos/8636595/pexels-photo-8636595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    challenge: 'A B2B software company was struggling to generate quality leads despite having an excellent product and strong market fit.',
    solution: 'We created an integrated content marketing and PPC strategy with targeted landing pages, gated content, and automated lead nurturing workflows.',
    results: [
      '215% increase in qualified lead generation',
      '40% reduction in cost-per-acquisition',
      '35% improvement in lead-to-customer conversion rate',
      'Established thought leadership with 10x content engagement'
    ]
  }
];

const CaseStudies: React.FC = () => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  const openCaseStudy = (caseStudy: CaseStudy) => {
    setActiveCase(caseStudy);
  };

  return (
    <section id="case-studies" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through our data-driven digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl group cursor-pointer"
              onClick={() => openCaseStudy(caseStudy)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 bg-purple-700 text-white text-xs rounded-full mb-2">
                      {caseStudy.category}
                    </span>
                    <h3 className="text-white font-bold">View Case Study</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-blue-900">{caseStudy.title}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-4">{caseStudy.client}</p>
                <p className="text-gray-600 line-clamp-3">{caseStudy.challenge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={activeCase.image} 
                alt={activeCase.title} 
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setActiveCase(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-2">
                    {activeCase.category}
                  </span>
                  <h3 className="text-2xl font-bold text-blue-900">{activeCase.title}</h3>
                  <p className="text-gray-600">{activeCase.client}</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">The Challenge</h4>
                  <p className="text-gray-700">{activeCase.challenge}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Our Solution</h4>
                  <p className="text-gray-700">{activeCase.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">The Results</h4>
                  <ul className="space-y-2">
                    {activeCase.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  className="flex items-center px-5 py-2 text-blue-900 hover:text-purple-700 transition-colors duration-300"
                  onClick={() => setActiveCase(null)}
                >
                  Close
                </button>
                <a
                  href="#contact"
                  className="flex items-center px-5 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-300 ml-4"
                  onClick={() => setActiveCase(null)}
                >
                  Get Similar Results <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;