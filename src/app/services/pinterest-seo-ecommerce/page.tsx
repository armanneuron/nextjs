import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  BarChart3,
  ShoppingCart,
  MessageSquare,
  Settings,
  Eye,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  Search,
  DollarSign,
  Package
} from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest SEO for eCommerce | PinClimb',
  description: 'Drive more sales with Pinterest SEO strategies designed specifically for eCommerce. Optimize your product pins, boards, and shopping features to convert browsers into customers.',
  keywords: 'Pinterest SEO for eCommerce, Pinterest shopping, product pins, Pinterest catalog, Pinterest product marketing',
};

export default function PinterestSeoEcommerce() {
  const services = [
    {
      icon: Search,
      title: 'eCommerce Pinterest SEO Strategy & Keyword Research',
      description: 'Comprehensive keyword research and SEO strategy specifically designed for eCommerce Pinterest success.',
      features: [
        'Product-focused keyword research',
        'Shopping intent keyword targeting',
        'Competitor SEO analysis',
        'Pinterest search trend analysis'
      ],
    },
    {
      icon: Package,
      title: 'Product Pin Optimization & Rich Pins Setup',
      description: 'Optimize your product pins with Rich Pins and SEO-friendly descriptions that drive sales.',
      features: [
        'Product Rich Pins implementation',
        'SEO-optimized product descriptions',
        'Price and availability optimization',
        'Product catalog integration'
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Pinterest Shopping & Catalog Management',
      description: 'Set up and optimize Pinterest Shopping features to turn browsers into buyers.',
      features: [
        'Pinterest Shopping setup',
        'Product catalog optimization',
        'Shopping ads configuration',
        'Verified merchant status'
      ],
    },
    {
      icon: Target,
      title: 'eCommerce Board Strategy & Organization',
      description: 'Strategic board creation and organization that showcases your products and drives conversions.',
      features: [
        'Product category board optimization',
        'Seasonal collection boards',
        'Lifestyle and inspiration boards',
        'Board SEO optimization'
      ],
    },
    {
      icon: TrendingUp,
      title: 'Conversion-Focused Pin Design & Creation',
      description: 'Create product pins that not only look amazing but are optimized for Pinterest SEO and conversions.',
      features: [
        'Product lifestyle photography',
        'SEO-optimized pin graphics',
        'Seasonal product campaigns',
        'A/B testing for conversions'
      ],
    },
    {
      icon: BarChart3,
      title: 'eCommerce Pinterest Analytics & ROI Tracking',
      description: 'Track your Pinterest performance with eCommerce-specific metrics and ROI analysis.',
      features: [
        'Sales attribution tracking',
        'Pinterest conversion analytics',
        'ROI and ROAS reporting',
        'Product performance insights'
      ],
    },
  ];

  const managementPackages = [
    {
      name: 'eCommerce SEO Starter',
      price: '$350',
      duration: '/month',
      description: 'Perfect for small eCommerce businesses starting Pinterest SEO',
      features: [
        'Pinterest SEO audit and setup',
        '80 SEO-optimized product pins/month',
        'Rich Pins implementation',
        'Basic keyword research and optimization',
        'Monthly performance reporting'
      ],
      popular: false
    },
    {
      name: 'eCommerce SEO Professional',
      price: '$450',
      duration: '/month',
      description: 'Comprehensive Pinterest SEO for growing eCommerce brands',
      features: [
         'Complete Pinterest Shopping setup',
         '120 SEO-optimized product pins/month',
         'Advanced keyword research and targeting',
         'Product catalog optimization',
         'Seasonal campaign planning',
         'Bi-weekly SEO optimization',
         'Priority support and consultation'
      ],
      popular: true
    },
    {
      name: 'eCommerce SEO Enterprise',
      price: '$650',
      duration: '/month',
      description: 'Full-service Pinterest SEO for large eCommerce operations',
      features: [
         'Unlimited SEO-optimized product pins',
         'Multi-brand Pinterest management',
         'Advanced Pinterest Shopping optimization',
         'Custom product photography and styling',
         'Weekly SEO performance reviews',
         'Dedicated eCommerce SEO specialist',
         '24/7 support and optimization',
         'Quarterly strategy and ROI reviews'
      ],
      popular: false
    }
  ];

  const ecommerceSEOBenefits = [
    'Increase product visibility in Pinterest search',
    'Drive qualified traffic ready to purchase',
    'Boost eCommerce sales and conversions',
    'Improve product discoverability organically',
    'Reduce cost per acquisition vs paid ads',
    'Build long-term sustainable traffic growth'
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
              <ShoppingCart className="w-5 h-5 mr-2" />
              Pinterest SEO for eCommerce Specialists
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Pinterest SEO for{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  eCommerce
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Drive more sales with Pinterest SEO strategies designed specifically for eCommerce. 
              Optimize your product pins, boards, and shopping features to turn Pinterest browsers into loyal customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center">
                  Get Free eCommerce SEO Audit
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/testimonials"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View eCommerce Success Stories
              </Link>
            </div>

            {/* eCommerce SEO Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Pinterest SEO Works for eCommerce</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ecommerceSEOBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our eCommerce Pinterest SEO Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that drives sustainable eCommerce growth through Pinterest SEO
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'eCommerce SEO Audit',
                  description: 'Complete Pinterest and product catalog audit with competitor analysis',
                  duration: '1-2 weeks'
                },
                {
                  step: 2,
                  title: 'SEO Setup & Optimization',
                  description: 'Pinterest Shopping setup and product catalog optimization',
                  duration: '1 week'
                },
                {
                  step: 3,
                  title: 'Product Pin Creation',
                  description: 'SEO-optimized product pins and strategic content publishing',
                  duration: 'Ongoing'
                },
                {
                  step: 4,
                  title: 'Track & Scale',
                  description: 'Performance tracking and scaling successful SEO strategies',
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
              Complete Pinterest SEO Services for eCommerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From product optimization to shopping features and conversion tracking, 
              we provide everything you need for eCommerce Pinterest SEO success.
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

      {/* Monthly Pinterest SEO Management */}
      <section className="pb-5 pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full text-blue-800 font-medium mb-6">
              <Calendar className="w-5 h-5 mr-2" />
              Monthly eCommerce Pinterest SEO Management
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hands-Off eCommerce Pinterest SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our eCommerce Pinterest SEO experts handle your entire Pinterest presence while you focus on running your business. 
              Our monthly management packages deliver consistent sales growth and traffic.
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

          {/* What's Included in eCommerce SEO Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in eCommerce SEO Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Product Optimization</h4>
                <p className="text-gray-600 text-sm">SEO-optimized product pins with Rich Pins and shopping features</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Keyword Research</h4>
                <p className="text-gray-600 text-sm">Ongoing keyword research and optimization for product discovery</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Shopping Features</h4>
                <p className="text-gray-600 text-sm">Pinterest Shopping setup and catalog management</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Sales Tracking</h4>
                <p className="text-gray-600 text-sm">Conversion tracking and ROI analysis for eCommerce performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Boost Your eCommerce Sales with Pinterest SEO?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of eCommerce businesses who have increased their sales with our Pinterest SEO strategies. 
            Turn Pinterest browsers into loyal customers with our proven eCommerce optimization techniques.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Get Free eCommerce SEO Audit
            </Link>
            <Link
              href="/contact"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Schedule eCommerce Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest SEO services for my eCommerce business. Can you help me increase sales through Pinterest?"
      />
    </div>
  );
}