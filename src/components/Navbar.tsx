import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';

interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { 
    label: 'Services', 
    href: '#services',
    dropdown: [
      { label: 'SEO', href: '#seo' },
      { label: 'Social Media', href: '#social-media' },
      { label: 'Content Marketing', href: '#content-marketing' },
      { label: 'PPC', href: '#ppc' },
    ]
  },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="#home" className="text-2xl font-bold text-blue-900">
              <span className="text-purple-700">Pixel</span>Pulse
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => item.dropdown && toggleDropdown(item.label)}
                >
                  <Link 
                    href={item.href}
                    className={`text-base font-medium ${
                      scrolled ? 'text-gray-800 hover:text-purple-700' : 'text-gray-800 hover:text-purple-700'
                    } transition-colors duration-300`}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown size={16} className="ml-1 transform group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </div>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="px-5 py-2.5 bg-purple-700 text-white rounded-full hover:bg-purple-800 transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'
          } origin-top`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md shadow-lg mt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <div 
                  className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-purple-50"
                  onClick={() => item.dropdown && toggleDropdown(item.label)}
                >
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </div>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="pl-4 pr-2 py-1 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-purple-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-3 py-2">
              <Link
                href="#contact"
                className="block w-full px-5 py-2.5 text-center bg-purple-700 text-white rounded-full hover:bg-purple-800"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;