import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from './ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="#home" className="text-2xl font-bold mb-6 inline-block">
              <span className="text-purple-400">Pixel</span>Pulse
            </Link>
            <p className="text-blue-200 mb-6 pr-4">
              We're a full-service digital marketing agency helping businesses grow through innovative strategies and data-driven campaigns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#seo" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link href="#social-media" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="#content-marketing" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Content Marketing
                </Link>
              </li>
              <li>
                <Link href="#ppc" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Pay-Per-Click Advertising
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#home" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#case-studies" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <span className="text-blue-200">
                  123 Marketing Street<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-purple-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@pixelpulse.com" className="text-blue-200 hover:text-purple-400 transition-colors duration-300">
                  info@pixelpulse.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © {currentYear} PixelPulse Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-blue-200 text-sm hover:text-purple-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-blue-200 text-sm hover:text-purple-400 transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-blue-200 text-sm hover:text-purple-400 transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;