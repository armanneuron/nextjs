import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  MessageSquare,
  Eye,
  Zap,
  BarChart3,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  Smartphone,
  Monitor,
  Share2,
  Heart,
  ThumbsUp,
  Video
} from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Social Media Marketing Services | PinClimb',
  description: 'Comprehensive social media marketing services across all major platforms. Build your brand, engage your audience, and drive results with our expert social media management.',
  keywords: 'social media marketing, Facebook marketing, Instagram marketing, Pinterest marketing, Twitter marketing, TikTok marketing, social media management',
};

export default function SocialMediaMarketing() {
  const services = [
    {
      icon: ThumbsUp,
      title: 'Facebook Marketing & Management',
      description: 'Comprehensive Facebook marketing strategies to build brand awareness, engage audiences, and drive conversions.',
      features: [
        'Facebook page optimization and setup',
        'Content creation and scheduling',
        'Facebook Ads campaign management',
        'Community management and engagement',
        'Facebook Analytics and reporting',
        'Facebook Shop setup and management'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Eye,
      title: 'Instagram Marketing & Growth',
      description: 'Visual storytelling and Instagram growth strategies that build authentic connections with your audience.',
      features: [
        'Instagram profile optimization',
        'Feed and Stories content creation',
        'Instagram Reels and IGTV production',
        'Influencer collaboration management',
        'Instagram Shopping integration',
        'Hashtag strategy and optimization'
      ],
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Pinterest Marketing & Advertising',
      description: 'Drive traffic and sales through strategic Pinterest marketing and high-converting pin designs.',
      features: [
        'Pinterest profile and board optimization',
        'Custom pin design and creation',
        'Pinterest SEO and keyword optimization',
        'Pinterest Ads campaign management',
        'Rich Pins setup and management',
        'Pinterest Analytics and reporting'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Twitter Marketing & Engagement',
      description: 'Build thought leadership and engage in real-time conversations that matter to your audience.',
      features: [
        'Twitter profile optimization',
        'Tweet scheduling and content creation',
        'Twitter Ads campaign management',
        'Community engagement and monitoring',
        'Twitter Spaces and live engagement',
        'Trend monitoring and participation'
      ],
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: Video,
      title: 'TikTok Marketing & Content Creation',
      description: 'Create viral TikTok content and build a strong presence on the fastest-growing social platform.',
      features: [
        'TikTok profile setup and optimization',
        'Viral content creation and editing',
        'TikTok Ads campaign management',
        'Trend analysis and participation',
        'Influencer partnership coordination',
        'TikTok Analytics and growth tracking'
      ],
      color: 'from-black to-gray-800'
    },
    {
      icon: Users,
      title: 'Reddit Marketing & Community Building',
      description: 'Build authentic communities and engage with niche audiences through strategic Reddit marketing.',
      features: [
        'Subreddit research and strategy',
        'Community engagement and moderation',
        'Reddit Ads campaign management',
        'Content creation for Reddit communities',
        'AMA (Ask Me Anything) coordination',
        'Reddit Analytics and monitoring'
      ],
      color: 'from-orange-500 to-red-500'
    },
  ];

  const managementPackages = [
    {
      name: 'Social Starter',
      price: '$200',
      duration: '/month',
      description: 'Perfect for small businesses starting their social media journey',
      features: [
        'Management of 2 social media platforms',
        '30 custom posts per month (30 per platform)',
        'Basic content calendar planning',
        'Community management and engagement',
        'Monthly performance reporting',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Social Professional',
      price: '$300',
      duration: '/month',
      description: 'Comprehensive social media management for growing businesses',
      features: [
         'Management of 4 social media platforms',
         '60 custom posts per month (20 per platform)',
         'Advanced content strategy and planning',
         'Paid advertising campaign management',
         'Influencer outreach and partnerships',
         'Bi-weekly strategy calls and reporting',
         'Priority support and consultation'
      ],
      popular: true
    },
    {
      name: 'Social Enterprise',
      price: '$500',
      duration: '/month',
      description: 'Full-service social media management for established brands',
      features: [
         'Management of all 6 social media platforms',
         '80 custom content creation',
         'Video content production and editing',
         'Advanced paid advertising across all platforms',
         'Dedicated social media manager',
         'Weekly strategy sessions and reporting',
         '24/7 support and crisis management',
         'Quarterly social media audits and strategy reviews'
      ],
      popular: false
    }
  ];

  const socialMediaBenefits = [
    'Increase brand awareness across multiple platforms',
    'Build authentic relationships with your audience',
    'Drive qualified traffic to your website',
    'Generate leads and boost sales conversions',
    'Establish thought leadership in your industry',
    'Create viral content that expands your reach'
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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 font-medium mb-8 shadow-lg border border-blue-200">
              <Share2 className="w-5 h-5 mr-2" />
              Social Media Marketing Experts
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Social Media Marketing{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  That Converts
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Build your brand, engage your audience, and drive results across all major social media platforms. 
              Our expert team manages Facebook, Instagram, Pinterest, Twitter, TikTok, and Reddit to maximize your social presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center">
                  Get Social Media Audit
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

            {/* Social Media Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Social Media Marketing Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {socialMediaBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Social Media Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that builds engaging social media presence across all platforms
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Strategy & Audit',
                  description: 'Comprehensive social media audit and multi-platform strategy development',
                  duration: '1-2 weeks'
                },
                {
                  step: 2,
                  title: 'Setup & Optimization',
                  description: 'Profile optimization and content calendar creation across platforms',
                  duration: '1 week'
                },
                {
                  step: 3,
                  title: 'Content & Engagement',
                  description: 'Daily content creation, posting, and community management',
                  duration: 'Ongoing'
                },
                {
                  step: 4,
                  title: 'Analyze & Scale',
                  description: 'Performance analysis and strategy scaling for maximum growth',
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

      {/* Services Grid - Platform-Specific */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Social Media Platform Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert management and marketing across all major social media platforms. 
              Each platform requires unique strategies and content approaches for maximum effectiveness.
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

      {/* Monthly Social Media Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              Monthly Social Media Management
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hands-Off Social Media Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our social media experts handle your entire social presence while you focus on running your business. 
              Our monthly management packages deliver consistent growth across all platforms.
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Social Media Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Creation</h4>
                <p className="text-gray-600 text-sm">Custom content designed for each platform's unique audience</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategic Scheduling</h4>
                <p className="text-gray-600 text-sm">Optimal posting times and frequency for each platform</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Community Management</h4>
                <p className="text-gray-600 text-sm">Active engagement and response management across platforms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Analytics & Reporting</h4>
                <p className="text-gray-600 text-sm">Comprehensive performance tracking and monthly reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform-Specific Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each social media platform requires unique strategies. Our experts understand the nuances of every platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Facebook', icon: ThumbsUp, color: 'from-blue-500 to-blue-600', users: '2.9B users' },
              { name: 'Instagram', icon: Eye, color: 'from-pink-500 to-purple-600', users: '2B users' },
              { name: 'Pinterest', icon: Target, color: 'from-red-500 to-red-600', users: '450M users' },
              { name: 'Twitter', icon: MessageSquare, color: 'from-blue-400 to-blue-500', users: '450M users' },
              { name: 'TikTok', icon: Video, color: 'from-black to-gray-800', users: '1B users' },
              { name: 'Reddit', icon: Users, color: 'from-orange-500 to-red-500', users: '430M users' }
            ].map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-gray-600 text-sm">{platform.users}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who have built thriving social media communities with our expert management. 
            Let us handle your social presence while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Get Free Social Media Audit
            </Link>
            <Link
              href="/contact"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your social media marketing services. Can you help me grow my business across multiple platforms?"
      />
    </div>
  );
}