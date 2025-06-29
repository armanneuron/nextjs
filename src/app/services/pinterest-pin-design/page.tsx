import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  Award,
  Palette,
  Eye,
  Zap,
  Layers,
  Calendar,
  CheckCircle,
  Star,
  Quote,
  Smartphone,
  Monitor,
  Image
} from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest Pin Design Services | PinClimb',
  description: 'Professional Pinterest pin design services that capture attention and drive clicks. Custom, SEO-optimized pins that convert viewers into customers.',
  keywords: 'Pinterest pin design, Pinterest graphics, custom pin design, Pinterest templates, Pinterest visual content',
};

export default function PinterestPinDesign() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Pin Design & Branding',
      description: 'Create stunning, on-brand pins that capture attention and drive clicks to your website.',
      features: [
        'Custom branded pin templates',
        'Consistent visual identity',
        'High-quality graphics and typography',
        'Brand color palette integration'
      ],
    },
    {
      icon: Eye,
      title: 'Pinterest-Optimized Visual Strategy',
      description: 'Design pins specifically for Pinterest\'s unique visual requirements and user behavior.',
      features: [
        'Vertical 2:3 aspect ratio optimization',
        'Mobile-first design approach',
        'Scroll-stopping visual elements',
        'Pinterest algorithm-friendly layouts'
      ],
    },
    {
      icon: Layers,
      title: 'Multi-Format Pin Creation',
      description: 'Create diverse pin formats to maximize engagement and reach across different audiences.',
      features: [
        'Static image pins',
        'Carousel pin designs',
        'Video pin graphics',
        'Story pin templates'
      ],
    },
    {
      icon: Zap,
      title: 'High-Converting Pin Copy & CTAs',
      description: 'Craft compelling pin descriptions and calls-to-action that drive traffic and conversions.',
      features: [
        'SEO-optimized pin titles',
        'Persuasive pin descriptions',
        'Clear call-to-action overlays',
        'Keyword-rich text integration'
      ],
    },
    {
      icon: Target,
      title: 'Seasonal & Trending Pin Designs',
      description: 'Stay ahead of trends with seasonal content and trending design styles that resonate with users.',
      features: [
        'Holiday and seasonal themes',
        'Trending color palettes',
        'Current design style adoption',
        'Timely content creation'
      ],
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing & Performance Optimization',
      description: 'Test different pin designs to identify what works best for your audience and optimize accordingly.',
      features: [
        'Multiple design variations',
        'Performance comparison analysis',
        'Design element testing',
        'Continuous optimization recommendations'
      ],
    },
  ];

  const designPackages = [
    {
      name: 'Pin Design Starter',
      price: '$199',
      duration: '/month',
      description: 'Essential pin designs for small businesses and bloggers',
      features: [
        '60 custom pin designs per month',
        'Brand-consistent templates',
        'Pinterest-optimized dimensions',
        'Basic text overlay and CTAs',
        'High-resolution PNG/JPG files'
      ],
      popular: false
    },
    {
      name: 'Professional Pin Design',
      price: '$399',
      duration: '/month',
      description: 'Comprehensive pin design solution for growing businesses',
      features: [
         '100 custom pin designs per month',
         'Multiple format variations (static, carousel)',
         'Advanced typography and visual effects',
         'Seasonal and trending design themes',
         'A/B testing variations',
         'Source files included',
         'Priority design turnaround'
      ],
      popular: true
    },
    {
      name: 'Enterprise Pin Design',
      price: '$499',
      duration: '/month',
      description: 'Unlimited pin designs for large brands and agencies',
      features: [
         '150 custom pin designs',
         'Video pin design and animation',
         'Complete brand style guide creation',
         'Multi-brand design management',
         'Dedicated design team',
         'Same-day rush delivery available',
         '24/7 design support',
         'Quarterly design strategy reviews'
      ],
      popular: false
    }
  ];

  const pinDesignBenefits = [
    'Increase click-through rates by up to 300%',
    'Build strong brand recognition on Pinterest',
    'Stand out in crowded Pinterest feeds',
    'Drive more qualified traffic to your website',
    'Improve Pinterest SEO and discoverability',
    'Create evergreen content that performs long-term'
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
              <Palette className="w-5 h-5 mr-2" />
              Pinterest Pin Design Experts
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Pinterest Pin Designs{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  That Convert
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Create scroll-stopping Pinterest pins that capture attention, drive clicks, and convert viewers into customers. 
              Our expert designers craft visually stunning pins optimized for Pinterest's unique platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/contact" className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25">
                <span className="flex items-center justify-center">
                  Get Custom Pin Designs
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/testimonials"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View Design Portfolio
              </Link>
            </div>

            {/* Pin Design Benefits */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Professional Pin Design Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pinDesignBenefits.map((benefit, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pin Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven 4-step process that creates high-converting Pinterest pin designs
            </p>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Brand Discovery',
                  description: 'Understand your brand, audience, and Pinterest goals',
                  duration: '1-2 days'
                },
                {
                  step: 2,
                  title: 'Design Strategy',
                  description: 'Develop visual strategy and create design templates',
                  duration: '3-5 days'
                },
                {
                  step: 3,
                  title: 'Pin Creation',
                  description: 'Design custom pins optimized for Pinterest performance',
                  duration: 'Ongoing'
                },
                {
                  step: 4,
                  title: 'Optimize & Scale',
                  description: 'Test performance and optimize designs for better results',
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
              Complete Pinterest Pin Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From custom brand templates to trending seasonal designs, 
              we create Pinterest pins that capture attention and drive results.
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

      {/* Monthly Pin Design Packages */}
      <section className="pb-5 pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-red-100 rounded-full text-red-800 font-medium mb-6">
              <Image className="w-5 h-5 mr-2" />
              Monthly Pin Design Packages
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Pin Designs Delivered Monthly
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a steady stream of high-quality, Pinterest-optimized pin designs that keep your content fresh 
              and engaging. All designs are custom-created for your brand and optimized for maximum performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {designPackages.map((pkg, index) => (
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

          {/* What's Included in Design Packages */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Every Design Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Brand Consistency</h4>
                <p className="text-gray-600 text-sm">All designs match your brand colors, fonts, and style guidelines</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Optimized</h4>
                <p className="text-gray-600 text-sm">Designs optimized for mobile viewing and Pinterest's mobile app</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">High Converting</h4>
                <p className="text-gray-600 text-sm">Designs proven to increase click-through rates and engagement</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Multiple Formats</h4>
                <p className="text-gray-600 text-sm">Various pin formats and sizes for different Pinterest features</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Pinterest Pins That Convert?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Transform your Pinterest presence with professionally designed pins that capture attention, 
            drive clicks, and convert viewers into customers. Let our design experts create stunning pins for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Start Your Pin Design Project
            </Link>
            <Link
              href="/contact"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Schedule Design Consultation
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest pin design services. Can you help me create pins that convert?"
      />
    </div>
  );
}