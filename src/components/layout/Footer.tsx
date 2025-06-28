
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DA</span>
              </div>
              <span className="text-xl font-bold">The Dental Arcade</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for comprehensive dental care with state-of-the-art technology and compassionate service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/lifestyle" className="text-gray-400 hover:text-white transition-colors">Dental Lifestyle</Link></li>
              <li><Link to="/wedding-smile" className="text-gray-400 hover:text-white transition-colors">Wedding-Ready Smile</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/orthodontics" className="text-gray-400 hover:text-white transition-colors">Orthodontics</Link></li>
              <li><Link to="/services/dental-implants" className="text-gray-400 hover:text-white transition-colors">Dental Implants</Link></li>
              <li><Link to="/services/teeth-whitening" className="text-gray-400 hover:text-white transition-colors">Teeth Whitening</Link></li>
              <li><Link to="/services/root-canal-treatment" className="text-gray-400 hover:text-white transition-colors">Root Canal</Link></li>
              <li><Link to="/services/pediatric-dentistry" className="text-gray-400 hover:text-white transition-colors">Pediatric Dentistry</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Dental Street<br />
                  Healthcare Plaza<br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 The Dental Arcade. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};
