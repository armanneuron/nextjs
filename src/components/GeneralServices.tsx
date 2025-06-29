import React from 'react';
import { CheckCircle, TrendingUp, Users, Target, Award } from 'lucide-react';

export const GeneralServices: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Growth Strategies',
      description: 'Our data-driven approach has helped 500+ businesses achieve an average of 300% growth on Pinterest.',
      stats: '300% Average Growth'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified Pinterest marketing specialists who understand the platform inside and out.',
      stats: '5+ Years Experience'
    },
    {
      icon: Target,
      title: 'Targeted Results',
      description: 'We focus on driving qualified traffic that converts into actual customers and revenue for your business.',
      stats: '98% Client Satisfaction'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Named "Top Pinterest Marketing Agency" by Digital Marketing Institute for three consecutive years.',
      stats: '#1 Rated Agency'
    }
  ];

  const features = [
    'Complete Pinterest profile optimization',
    'Custom pin design and creation',
    'Strategic keyword research and SEO',
    'Pinterest advertising campaign management',
    'Analytics tracking and reporting',
    'Community management and engagement',
    'Rich Pins setup and optimization',
    'Competitor analysis and insights'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose PinClimb for Pinterest Marketing?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another marketing agency. We're Pinterest specialists who deliver measurable results 
            and help businesses achieve sustainable growth on the platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-red-600 font-bold text-lg">{benefit.stats}</div>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Everything You Need for Pinterest Success
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our comprehensive Pinterest marketing services cover every aspect of the platform, 
                from strategy development to execution and optimization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Pinterest marketing team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Successful Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};