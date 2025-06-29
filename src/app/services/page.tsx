import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Palette, Target, MessageSquare, Settings, TrendingUp } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest Marketing Services | PinClimb',
  description: 'Comprehensive Pinterest marketing services including Pinterest SEO, pin design, ads management, and organic growth strategies to drive traffic and sales.',
  keywords: 'Pinterest marketing services, Pinterest SEO, Pinterest ads, Pinterest pin design, Pinterest management',
};

const featuredServices = [
  {
    icon: BarChart3,
    title: 'Pinterest organic growth',
    description: 'Grow your Pinterest organically with smart SEO strategies, keyword-optimized content, and clear insights that boost long-term results.',
    href: '/services/pinterest-organic-growth'
  },
  {
    icon: Palette,
    title: 'SEO-Optimized Pinterest Pin Design',
    description: 'Custom-designed pins that grab attention and rank higher with keyword-rich titles and descriptions.',
    href: '/services/pinterest-pin-design'
  },
  {
    icon: Target,
    title: 'Pinterest Ads Management',
    description: 'Strategic advertising campaigns that deliver measurable results and maximize your ROI.',
    href: '/services/pinterest-ads'
  },
  {
    icon: MessageSquare,
    title: 'Pinterest SEO for eCommerce',
    description: 'Get more clicks and conversions with eCommerce-focused Pinterest SEO—optimized pins, boards, and product descriptions.',
    href: '/services/pinterest-seo-ecommerce'
  },
  {
    icon: Settings,
    title: 'Pinterest Account Optimization',
    description: 'Complete Pinterest profile and board optimization to improve discoverability and performance in search results.',
    href: '/services/pinterest-organic-growth'
  },
  {
    icon: TrendingUp,
    title: 'Performance Reporting',
    description: 'Detailed monthly reports showing growth metrics, ROI, and actionable insights for continued success and optimization.',
    href: '/services/pinterest-organic-growth'
  }
];

const generalServices = [
  {
    icon: BarChart3,
    title: 'Pinterest Analytics & Strategy',
    description: 'Comprehensive analysis of your Pinterest performance with data-driven strategies to maximize reach and engagement across all markets.',
    features: ['Performance audits', 'Competitor analysis', 'Growth strategy', 'KPI tracking']
  },
  {
    icon: Palette,
    title: 'Creative Content Creation',
    description: 'Eye-catching pins and boards designed to capture attention and drive clicks to your website, optimized for maximum engagement.',
    features: ['Custom pin designs', 'Board optimization', 'Seasonal campaigns', 'Brand consistency']
  },
  {
    icon: Target,
    title: 'Pinterest Ads Management',
    description: 'Strategic advertising campaigns that deliver measurable results and maximize your return on investment across multiple markets.',
    features: ['Campaign setup', 'Advanced audience targeting', 'Budget optimization', 'A/B testing']
  },
  {
    icon: MessageSquare,
    title: 'Community Management',
    description: 'Engage with your audience and build a loyal following through strategic community interaction and brand building.',
    features: ['Response management', 'User engagement', 'Community building', 'Brand advocacy']
  },
  {
    icon: Settings,
    title: 'Account Optimization',
    description: 'Complete Pinterest profile and board optimization to improve discoverability and performance in search results.',
    features: ['Profile setup', 'Rich Pins', 'SEO optimization', 'Board strategy']
  },
  {
    icon: TrendingUp,
    title: 'Performance Reporting',
    description: 'Detailed monthly reports showing growth metrics, ROI, and actionable insights for continued success and optimization.',
    features: ['Monthly reports', 'ROI tracking', 'Growth metrics', 'Strategic insights']
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Our Pinterest Marketing Services */}
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Pinterest Marketing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Pinterest marketing solutions designed to grow your business and drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
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

      {/* General Pinterest Marketing Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pinterest Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to content creation and advertising management, we provide everything you need to succeed on Pinterest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {generalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Pinterest Presence?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Pinterest marketing services can help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest marketing services. Can you tell me more about your offerings?"
      />
    </div>
  );
}