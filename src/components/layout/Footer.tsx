import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">College Pe Charcha</h3>
            <p className="text-gray-300 mb-4">
              Maharashtra's only student-led initiative connecting aspiring students with seniors 
              from top colleges and professionals from dream companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/predictor" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">College Predictor</Link></li>
              <li><Link to="/colleges" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Colleges</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Resources</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Events</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-orange-400 transition-colors duration-200">Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300">hello@collegepecharcha.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 College Pe Charcha. All rights reserved. Made with ❤️ by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;