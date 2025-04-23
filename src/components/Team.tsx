import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    position: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Digital marketing veteran with 15+ years of experience helping brands transform their online presence.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@pixelpulse.com'
    }
  },
  {
    id: 2,
    name: 'Samantha Lee',
    position: 'Head of SEO',
    image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'SEO expert specializing in technical optimization and content strategy that drives organic growth.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'samantha@pixelpulse.com'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    position: 'Creative Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Award-winning creative with a passion for designing digital experiences that convert.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'marcus@pixelpulse.com'
    }
  },
  {
    id: 4,
    name: 'Priya Patel',
    position: 'PPC Specialist',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Data-driven marketer focused on maximizing ROI across Google Ads, Facebook, and emerging platforms.',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'priya@pixelpulse.com'
    }
  }
];

const Team: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of digital marketing experts passionate about helping businesses grow. Get to know the people behind your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <div className="flex space-x-3 mb-2">
                      {member.socials.linkedin && (
                        <a 
                          href={member.socials.linkedin} 
                          className="text-white hover:text-purple-300 transition-colors"
                          aria-label={`${member.name}'s LinkedIn Profile`}
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a 
                          href={member.socials.twitter} 
                          className="text-white hover:text-purple-300 transition-colors"
                          aria-label={`${member.name}'s Twitter Profile`}
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                      {member.socials.email && (
                        <a 
                          href={`mailto:${member.socials.email}`} 
                          className="text-white hover:text-purple-300 transition-colors"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-purple-700 text-sm mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 md:p-12 shadow-inner">
          <div className="md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Join Our Talented Team</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for passionate digital marketers to join our growing team. If you're creative, data-driven, and passionate about helping businesses grow, we'd love to hear from you.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-300"
              >
                View Open Positions
              </a>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-blue-900 mb-4">Current Openings</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Social Media Manager</span>
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">SEO Specialist</span>
                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">Full-time</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Content Writer</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Freelance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;