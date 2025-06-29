import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Palette, Target, ShoppingCart, Users, BarChart3 } from 'lucide-react';

export const ServicesOverview: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Pinterest Organic Growth',
      description: 'Grow your Pinterest organically with smart SEO strategies, keyword-optimized content, and clear insights that boost long-term results.',
      href: '/services/pinterest-organic-growth',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Palette,
      title: 'Pinterest Pin Design',
      description: 'Custom-designed pins that grab attention and rank higher with keyword-rich titles and descriptions.',
      href: '/services/pinterest-pin-design',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Pinterest Ads Management',
      description: 'Strategic advertising campaigns that deliver measurable results and maximize your ROI.',
      href: '/services/pinterest-ads',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: ShoppingCart,
      title: 'Pinterest SEO for eCommerce',
      description: 'Get more clicks and conversions with eCommerce-focused Pinterest SEO—optimized pins, boards, and product descriptions.',
      href: '/services/pinterest-seo-ecommerce',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Comprehensive social media management across all platforms to build your brand and engage your audience.',
      href: '/services/social-media-marketing',
      color: 'from-orange-500 to-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Pinterest Analytics & Strategy',
      description: 'Data-driven insights and strategic planning to optimize your Pinterest performance and maximize growth.',
      href: '/services',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Pinterest Marketing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Pinterest marketing solutions designed to grow your business and drive results across all aspects of the platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200 group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};