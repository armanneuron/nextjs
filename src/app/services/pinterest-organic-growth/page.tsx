import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  BarChart3,
  Palette,
  MessageSquare,
  Settings,
  Eye,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest Organic Growth Services | PinClimb',
  description: 'Grow your Pinterest presence organically with our expert Pinterest SEO strategies, content creation, and optimization services. Drive sustainable traffic and sales.',
  keywords: 'Pinterest organic growth, Pinterest SEO, Pinterest content strategy, Pinterest management',
};

export default function PinterestOrganicGrowth() {
  const services = [
    {
      icon: BarChart3,
      title: 'Profile Optimization for Maximum Visibility',
      description: 'Make your profile search-friendly, branded, and aligned with your business goals.',
      features: [
        'Customized bio with SEO keywords',
        'Branded profile photo and cover',
        'Optimized board titles and descriptions',
        'Strategic board organization'
      ],
    },
    {
      icon: Palette,
      title: 'SEO-Optimized Pin Creation & Scheduling',
      description: 'Design and schedule pins with strong visuals and keywords to boost discoverability and engagement.',
      features: [
        'Scroll-stopping graphics and videos',
        'Keyword-rich pin titles and descriptions',
        'Manual or tool-based scheduling',
        'Mobile-first design'
      ],
    },
    {
      icon: Settings,
      title: 'Tailored Content Strategy & Calendar Planning',
      description: 'Develop a consistent posting plan that matches your niche, audience, and brand objectives.',
      features: [
        'Weekly and monthly content themes',
        'Trend-based pin topic research',
        'Optimal posting frequency',
        'Balance of fresh and seasonal content'
      ],
    },
    {
      icon: MessageSquare,
      title: 'Pinterest Keyword & Hashtag Research',
      description: 'Find the most effective keywords and hashtags to improve reach and ranking on Pinterest search.',
      features: [
        'Niche-specific keyword list',
        'Competitor keyword benchmarking',
        'Long-tail keyword targeting',
        'Up-to-date hashtag trends'
      ],
    },
    {
      icon: TrendingUp,
      title: 'Audience Growth & Engagement Tactics',
      description: 'Use organic methods to grow followers and encourage saves, clicks, and repins.',
      features: [
        'Engage with relevant niche boards',
        'Join and contribute to group boards',
        'Encourage interaction through CTAs',
        'Analyze top-performing pins'
      ],
    },
    {
      icon: Users,
      title: 'Performance Tracking & Monthly Reporting',
      description: 'Analyze results monthly with insights on growth, reach, engagement, and actionable next steps.',
      features: [
        'Monthly analytics dashboard',
        'Growth and reach metrics',
        'Engagement and click-through rates',
        'Strategic insights and recommendations'
      ],
    },
  ];

  const managementPackages = [
    {
      name: 'Starter Growth',
      price: '$250',
      duration: '/month',
      description: 'Perfect for small businesses starting their Pinterest journey',
      features: [
        'Profile setup and optimization',
        '60 custom, SEO-optimized pins/month',
        'Foundational keyword & hashtag research',
        'Content calendar planning',
        'Monthly performance summary'
      ],
      popular: false
    },
    {
      name: 'Professional Growth',
      price: '$350',
      duration: '/month',
      description: 'Comprehensive Pinterest management for growing businesses',
      features: [
         'Full profile & board optimization',
         '100 custom pins with SEO & scheduling',
         'Strategic content calendar with seasonal topics',
         'In-depth keyword & trend research',
         'Engagement tactics for audience growth',
         'Monthly analytics and reporting',
         'Bi-weekly check-ins & priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Growth',
      price: '$500',
      duration: '/month',
      description: 'Full-service Pinterest management for established brands',
      features: [
         'Complete profile overhaul + Rich Pins setup',
         'Unlimited SEO-optimized pins (graphic/video)',
         'Weekly content strategy + calendar planning',
         'Advanced keyword, trend & competitor research',
         'Dedicated community engagement & influencer outreach',
         'Detailed weekly analytics with strategic insights',
         'Dedicated account manager + 24/7 support',
         'Quarterly strategy reviews'
      ],
      popular: false
    }
  ];

  const organicGrowthBenefits = [
    'Sustainable long-term growth without ad spend',
    'Higher engagement rates than paid content',
    'Builds authentic brand authority and trust',
    'Compounds over time for exponential results',
    'Cost-effective compared to paid advertising',
    'Creates evergreen content that drives traffic for years'
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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-800 font-medium mb-8 shadow-lg border border-green-200">
              <TrendingUp className="w-5 h-5 mr-2" />
              Pinterest Organic Growth Specialists
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Pinterest Organic Growth{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  That Converts
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Build sustainable Pinterest growth without ad spend. Our organic growth strategies create lasting results 
              that compound over time, driving consistent traffic and conversions to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center">
                  Get Free Pinterest Audit
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/testimonials"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Success Stories
              </Link>
            </div>

            {/* Organic Growth Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Organic Pinterest Growth?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {organicGrowthBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Organic Growth Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that delivers sustainable Pinterest growth
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Audit & Strategy',
                  description: 'Complete Pinterest audit and custom growth strategy development',
                  duration: '1-2 weeks'
                },
                {
                  step: 2,
                  title: 'Optimization',
                  description: 'Profile and board optimization for maximum discoverability',
                  duration: '1 week'
                },
                {
                  step: 3,
                  title: 'Content Creation',
                  description: 'Strategic content creation and publishing schedule',
                  duration: 'Ongoing'
                },
                {
                  step: 4,
                  title: 'Growth & Scale',
                  description: 'Continuous optimization and scaling of successful strategies',
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
              Complete Pinterest Organic Growth Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to content creation and community management, 
              we provide everything you need for sustainable Pinterest growth.
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

      {/* Monthly Pinterest Management */}
      <section className="pb-5 pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              Monthly Pinterest Management
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hands-Off Pinterest Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our experts handle your Pinterest presence while you focus on running your business. 
              Our monthly management packages deliver consistent growth and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {managementPackages.map((pkg, index) => (
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

          {/* What's Included in Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Monthly Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Creation</h4>
                <p className="text-gray-600 text-sm">Custom pins designed for your brand and optimized for Pinterest</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Scheduling</h4>
                <p className="text-gray-600 text-sm">Optimal posting times and frequency for maximum reach</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance Tracking</h4>
                <p className="text-gray-600 text-sm">Monthly reports with insights and optimization recommendations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Engagement</h4>
                <p className="text-gray-600 text-sm">Active engagement with your audience and Pinterest community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Pinterest Organic Growth Journey?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who have achieved sustainable Pinterest growth with our proven organic strategies. 
            No ad spend required—just smart, strategic Pinterest marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Get Free Pinterest Audit
            </Link>
            <Link
              href="/contact"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest organic growth services. Can you help me grow my business on Pinterest?"
      />
    </div>
  );
}