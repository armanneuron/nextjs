import React from 'react';
import Link from 'next/link';
import { MapPin, Zap } from 'lucide-react';
import { Location } from '../types/location';

interface LocationHeroProps {
  location: Location;
}

export const LocationHero: React.FC<LocationHeroProps> = ({ location }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 min-h-screen flex items-center">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient background */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/20 to-red-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-200/15 to-pink-200/15 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,0,0,0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full text-red-800 font-medium mb-8 shadow-xl border border-red-200/50">
            <MapPin className="w-6 h-6 mr-3 text-red-600" />
            <span className="text-lg">Serving {location.name}, {location.state}</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Top Pinterest Marketing Agency in{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                {location.name}
              </span>
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-gradient-to-r from-red-200 via-pink-200 to-red-200 rounded-full transform -rotate-1"></div>
            </span>
          </h1>
          
          {/* Enhanced Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Boost your brand visibility, drive targeted traffic, and increase conversions with Los Angeles Pinterest marketing expert. We specialize in Pinterest SEO, Pinterest advertising, and organic Pinterest growth strategies tailored for businesses in {location.name}. Let us help you turn pins into profit.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
            >
              <span className="flex items-center justify-center">
                Get Free Pinterest Audit
                <Zap className="w-6 h-6 ml-2 group-hover:rotate-12 transition-transform duration-200" />
              </span>
            </Link>
            <Link
              href="/testimonials"
              className="group border-3 border-white bg-white/80 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};