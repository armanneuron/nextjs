import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  DollarSign,
  Eye,
  Zap,
  BarChart3,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  MousePointer,
  ShoppingCart,
  Megaphone
} from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest Ads Management Services | PinClimb',
  description: 'Strategic Pinterest advertising campaigns that deliver measurable results. Our Pinterest ads experts create and manage campaigns that maximize your ROI.',
  keywords: 'Pinterest ads, Pinterest advertising, Pinterest ad management, Pinterest promoted pins, Pinterest shopping ads',
};

export default function PinterestAds() {
  const services = [
    {
      icon: Target,
      title: 'Strategic Campaign Setup & Management',
      description: 'Create and manage high-performing Pinterest ad campaigns tailored to your business goals.',
      features: [
        'Campaign objective optimization',
        'Advanced audience targeting',
        'Budget allocation and bidding strategy',
        'Ad group organization and structure'
      ],
    },
    {
      icon: Users,
      title: 'Advanced Audience Targeting',
      description: 'Reach your ideal customers with precision targeting based on interests, behaviors, and demographics.',
      features: [
        'Interest and keyword targeting',
        'Custom audience creation',
        'Lookalike audience development',
        'Demographic and geographic targeting'
      ],
    },
    {
      icon: Megaphone,
      title: 'Creative Ad Development',
      description: 'Design compelling ad creatives that capture attention and drive conversions on Pinterest.',
      features: [
        'High-converting ad creative design',
        'Video ad production',
        'Carousel ad optimization',
        'Shopping ad setup and management'
      ],
    },
    {
      icon: DollarSign,
      title: 'Budget Optimization & Bid Management',
      description: 'Maximize your return on ad spend with strategic budget allocation and smart bidding strategies.',
      features: [
        'Daily and lifetime budget optimization',
        'Automated and manual bidding',
        'Cost-per-click optimization',
        'ROAS-focused budget allocation'
      ],
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking & Analytics',
      description: 'Monitor campaign performance with detailed analytics and data-driven optimization recommendations.',
      features: [
        'Real-time performance monitoring',
        'Conversion tracking setup',
        'ROI and ROAS analysis',
        'Custom reporting dashboards'
      ],
    },
    {
      icon: Zap,
      title: 'A/B Testing & Optimization',
      description: 'Continuously test and optimize ad elements to improve performance and reduce costs.',
      features: [
        'Creative A/B testing',
        'Audience testing and refinement',
        'Landing page optimization',
        'Continuous performance improvement'
      ],
    },
  ];

  const adsPackages = [
    {
      name: 'Starter Ads',
      price: '$997',
      duration: '/month',
      description: 'Perfect for small businesses starting with Pinterest advertising',
      features: [
        'Campaign setup and optimization',
        'Basic audience targeting',
        'Up to 3 ad campaigns',
        'Monthly performance reporting',
        'Email support and consultation'
      ],
      popular: false
    },
    {
      name: 'Professional Ads',
      price: '$1,997',
      duration: '/month',
      description: 'Comprehensive Pinterest advertising for growing businesses',
      features: [
         'Advanced campaign management',
         'Custom audience creation and lookalikes',
         'Up to 6 ad campaigns with A/B testing',
         'Creative development and optimization',
         'Bi-weekly performance reviews',
         'Conversion tracking and analytics',
         'Priority support and strategy calls'
      ],
      popular: true
    },
    {
      name: 'Enterprise Ads',
      price: '$2,997',
      duration: '/month',
      description: 'Full-service Pinterest advertising for large brands and agencies',
      features: [
         'Unlimited campaigns and ad groups',
         'Advanced audience segmentation',
         'Video and carousel ad production',
         'Shopping ads and catalog management',
         'Weekly optimization and reporting',
         'Dedicated account manager',
         '24/7 support and emergency optimization',
         'Quarterly strategy and planning sessions'
      ],
      popular: false
    }
  ];

  const pinterestAdsBenefits = [
    'Reach 450+ million monthly active users',
    'Target users with high purchase intent',
    'Achieve 2-5x higher conversion rates',
    'Lower cost-per-click than other platforms',
    'Drive qualified traffic to your website',
    'Scale successful campaigns quickly'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 py-10">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 rounded-full text-red-800 font-medium mb-8 shadow-lg border border-red-200">
              <Target className="w-5 h-5 mr-2" />
              Pinterest Advertising Experts
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Pinterest Ads{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  That Convert
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Drive qualified traffic and boost sales with strategic Pinterest advertising campaigns. 
              Our certified Pinterest ads experts create and manage campaigns that deliver measurable ROI and sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center">
                  Start Pinterest Ads Campaign
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/testimonials"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Campaign Results
              </Link>
            </div>

            {/* Pinterest Ads Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Pinterest Ads Deliver Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pinterestAdsBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pinterest Ads Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that creates high-performing Pinterest advertising campaigns
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Strategy & Setup',
                  description: 'Develop campaign strategy and set up tracking systems',
                  duration: '3-5 days'
                },
                {
                  step: 2,
                  title: 'Campaign Launch',
                  description: 'Create and launch optimized ad campaigns with targeting',
                  duration: '1 week'
                },
                {
                  step: 3,
                  title: 'Monitor & Optimize',
                  description: 'Daily monitoring and optimization for better performance',
                  duration: 'Ongoing'
                },
                {
                  step: 4,
                  title: 'Scale & Expand',
                  description: 'Scale successful campaigns and expand to new audiences',
                  duration: 'Monthly'
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <span className="text-sm text-red-600 font-medium">{step.duration}</span>
                </div>
              ))}
            </div>
            
            {/* Responsive Dash Lines */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5">
              <div className="flex justify-between items-center h-full mx-auto" style={{width: 'calc(100% - 8rem)'}}>
                <div className="flex-1 border-t-2 border-dashed border-red-300 mx-8"></div>
                <div className="flex-1 border-t-2 border-dashed border-red-300 mx-8"></div>
                <div className="flex-1 border-t-2 border-dashed border-red-300 mx-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Pinterest Advertising Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From campaign strategy to creative development and performance optimization, 
              we provide everything you need for successful Pinterest advertising.
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
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
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

      {/* Monthly Pinterest Ads Management */}
      <section className="pb-5 pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full text-red-800 font-medium mb-6">
              <DollarSign className="w-5 h-5 mr-2" />
              Monthly Pinterest Ads Management
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Pinterest Ads Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our certified Pinterest ads experts manage your campaigns while you focus on your business. 
              Our monthly management packages deliver consistent results and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {adsPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-red-500 transform scale-105' : ''
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
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex items-baseline mb-6">
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

          {/* What's Included in Ads Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Every Ads Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Targeting</h4>
                <p className="text-gray-600 text-sm">Advanced audience targeting to reach your ideal customers</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Creative Development</h4>
                <p className="text-gray-600 text-sm">High-converting ad creatives designed for Pinterest</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Tracking</h4>
                <p className="text-gray-600 text-sm">Detailed analytics and ROI tracking for all campaigns</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Continuous Optimization</h4>
                <p className="text-gray-600 text-sm">Daily monitoring and optimization for better results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business with Pinterest Ads?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who have achieved remarkable growth with our Pinterest advertising expertise. 
            Let our certified ads specialists create and manage campaigns that deliver real results and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Launch Your First Campaign
            </Link>
            <Link
              href="/contact"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Schedule Ads Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest ads management services. Can you help me create campaigns that convert?"
      />
    </div>
  );
}