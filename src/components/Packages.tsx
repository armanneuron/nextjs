import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star } from 'lucide-react';

interface Package {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface PackagesProps {
  packages: Package[];
}

export const Packages: React.FC<PackagesProps> = ({ packages }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pinterest Marketing Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect Pinterest marketing package for your business. 
            All packages include our proven strategies and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                pkg.popular ? 'border-red-500 transform scale-105' : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  <span className="text-gray-600 ml-1">{pkg.duration}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 block text-center ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg' 
                      : 'border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? We create tailored Pinterest marketing strategies for enterprise clients.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
          >
            Contact us for custom pricing
          </Link>
        </div>
      </div>
    </section>
  );
};