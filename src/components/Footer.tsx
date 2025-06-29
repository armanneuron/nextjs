import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PinClimb</h3>
                <p className="text-gray-400 text-sm">Climb with Pinterest</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              We help businesses grow their online presence and drive sales through strategic Pinterest marketing.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/services/pinterest-organic-growth" className="hover:text-white transition-colors duration-200">Pinterest Organic Growth</Link></li>
              <li><Link href="/services/pinterest-pin-design" className="hover:text-white transition-colors duration-200">Pinterest Pin Design</Link></li>
              <li><Link href="/services/pinterest-ads" className="hover:text-white transition-colors duration-200">Pinterest Ads</Link></li>
              <li><Link href="/services/pinterest-seo-ecommerce" className="hover:text-white transition-colors duration-200">Pinterest SEO for eCommerce</Link></li>
              <li><Link href="/services/social-media-marketing" className="hover:text-white transition-colors duration-200">Social Media Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors duration-200">Success Stories</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="text-gray-400">
                <div className="font-medium text-white">Phone</div>
                <div className="text-sm flex items-center mt-1">
                  <Phone className="w-3 h-3 mr-2" />
                  <a 
                    href="tel:+8801976927587"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +8801976927587
                  </a>
                </div>
              </div>
              <div className="text-gray-400">
                <div className="font-medium text-white">Email</div>
                <div className="text-sm flex items-center mt-1">
                  <Mail className="w-3 h-3 mr-2" />
                  <a 
                    href="mailto:contact@hello.pinclimb.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    contact@hello.pinclimb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 PinClimb. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};