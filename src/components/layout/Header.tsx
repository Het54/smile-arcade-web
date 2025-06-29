
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'Orthodontics', path: '/services/orthodontics' },
    { name: 'Oral Surgery', path: '/services/oral-surgery' },
    { name: 'Conservative Dentistry', path: '/services/conservative-dentistry' },
    { name: 'Prosthodontics', path: '/services/prosthodontics' },
    { name: 'Periodontics', path: '/services/periodontics' },
    { name: 'Laser Dentistry', path: '/services/laser-dentistry' },
    { name: 'Pediatric Dentistry', path: '/services/pediatric-dentistry' },
    { name: 'Root Canal Treatment', path: '/services/root-canal-treatment' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DA</span>
            </div>
            <span className="text-xl font-bold text-gray-800">The Dental Arcade</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600 font-medium' : ''}`}
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">
                    Our Story
                  </Link>
                  <Link to="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Our Team
                  </Link>
                  <Link to="/about/facility" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Our Facility
                  </Link>
                  <Link to="/about/achievements" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Achievements
                  </Link>
                  <Link to="/about/virtual-tour" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">
                    Virtual Tour
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={service.name} 
                      to={service.path}
                      className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                        index === 0 ? 'rounded-t-lg' : index === services.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/lifestyle" className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/lifestyle') ? 'text-blue-600 font-medium' : ''}`}>
              Dental Lifestyle
            </Link>
            <Link to="/wedding-smile" className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/wedding-smile') ? 'text-blue-600 font-medium' : ''}`}>
              Wedding-Ready Smile
            </Link>
            <Link to="/contact" className={`text-gray-700 hover:text-blue-600 transition-colors ${isActive('/contact') ? 'text-blue-600 font-medium' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-600">About Us</Link>
              <Link to="/services/orthodontics" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/lifestyle" className="block py-2 text-gray-700 hover:text-blue-600">Dental Lifestyle</Link>
              <Link to="/wedding-smile" className="block py-2 text-gray-700 hover:text-blue-600">Wedding-Ready Smile</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
              <div className="pt-4 pb-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
