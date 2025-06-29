import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';

export const GeneralContact: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Pinterest Presence?
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of businesses who have transformed their Pinterest marketing with our expert strategies. 
            Get your free Pinterest audit and discover how we can help you achieve remarkable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              href="/contact"
              className="group bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Get Free Pinterest Audit
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Link>
            <Link
              href="/services"
              className="group border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-red-100 mb-3">Speak with our Pinterest experts</p>
              <a 
                href="tel:+8801976927587"
                className="text-white font-medium hover:text-red-200 transition-colors duration-200"
              >
                +8801976927587
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-red-100 mb-3">Get a detailed proposal</p>
              <a 
                href="mailto:contact@hello.pinclimb.com"
                className="text-white font-medium hover:text-red-200 transition-colors duration-200"
              >
                contact@hello.pinclimb.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-red-100 mb-3">Quick questions & support</p>
              <a 
                href="https://wa.me/8801976927587"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-red-200 transition-colors duration-200"
              >
                Chat with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};