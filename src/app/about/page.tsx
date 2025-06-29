import { Metadata } from 'next';
import { ArrowRight, Users, Target, Award, Heart, Lightbulb, Shield, Zap, MapPin, Calendar, Star, TrendingUp, Eye, DollarSign } from 'lucide-react';
import Link from 'next/link';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'About PinClimb | Pinterest Marketing Agency',
  description: 'Learn about PinClimb, the leading Pinterest marketing agency helping businesses drive traffic, increase sales, and grow their brand through strategic Pinterest marketing.',
  keywords: 'Pinterest marketing agency, about PinClimb, Pinterest experts, Pinterest marketing team',
};

export default function About() {
  const teamMembers = [
    {
      name: 'Sarah Martinez',
      role: 'Founder & CEO',
      bio: 'Pinterest marketing pioneer with 8+ years of experience. Former Pinterest employee who helped shape the platform\'s advertising ecosystem.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Pinterest Strategy', 'Business Development', 'Team Leadership'],
      achievements: '500+ successful campaigns'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Creative Strategy',
      bio: 'Award-winning designer specializing in Pinterest-optimized visual content. Creates pins that convert viewers into customers.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Visual Design', 'Brand Strategy', 'Content Creation'],
      achievements: '2M+ pins designed'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director of Analytics',
      bio: 'Data scientist turned Pinterest expert. Transforms complex analytics into actionable growth strategies for our clients.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Data Analysis', 'Performance Optimization', 'ROI Tracking'],
      achievements: '300%+ avg growth rate'
    },
    {
      name: 'David Kim',
      role: 'Pinterest Ads Specialist',
      bio: 'Certified Pinterest advertising expert who has managed over $2M in ad spend with consistently high ROAS across all industries.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      expertise: ['Paid Advertising', 'Campaign Management', 'Conversion Optimization'],
      achievements: '$2M+ ad spend managed'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-First Approach',
      description: 'Every strategy we develop is tailored to your unique business goals and audience. Your success is our success.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We stay ahead of Pinterest trends and algorithm changes, bringing cutting-edge strategies to every campaign.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'Complete transparency in our processes, pricing, and results. You\'ll always know exactly what we\'re doing and why.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Zap,
      title: 'Results-Driven Excellence',
      description: 'We don\'t just create pretty pins. Every piece of content is strategically designed to drive traffic and conversions.',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started as a boutique Pinterest marketing consultancy in New York City.',
      icon: Calendar
    },
    {
      year: '2020',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone with 100 successful client partnerships.',
      icon: Users
    },
    {
      year: '2021',
      title: 'Multi-City Expansion',
      description: 'Expanded operations to Los Angeles, Chicago, and Miami markets.',
      icon: MapPin
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Named "Top Pinterest Marketing Agency" by Digital Marketing Institute.',
      icon: Award
    },
    {
      year: '2023',
      title: 'Nationwide Presence',
      description: 'Launched operations in Austin and Seattle, serving clients coast-to-coast.',
      icon: Target
    },
    {
      year: '2024',
      title: '500+ Success Stories',
      description: 'Celebrating over 500 successful Pinterest marketing campaigns.',
      icon: Star
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Successful Campaigns',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      number: '300%',
      label: 'Average Growth Rate',
      icon: TrendingUp,
      color: 'text-blue-600'
    },
    {
      number: '50M+',
      label: 'Pinterest Impressions',
      icon: Eye,
      color: 'text-purple-600'
    },
    {
      number: '$5M+',
      label: 'Revenue Generated',
      icon: DollarSign,
      color: 'text-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-pink-100 rounded-full text-red-800 font-medium mb-8 shadow-lg border border-red-200">
              <Heart className="w-5 h-5 mr-2" />
              Our Story & Mission
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Transforming Businesses Through{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  Pinterest Marketing
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              We're not just another marketing agency. We're Pinterest specialists who live and breathe the platform, 
              helping businesses unlock the incredible potential of visual discovery marketing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/25"
              >
                <span className="flex items-center justify-center">
                  Work With Us
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              <Link
                href="/testimonials"
                className="group border-3 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Our Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These numbers represent real businesses we've helped grow through strategic Pinterest marketing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  stat.color === 'text-green-600' ? 'bg-green-100' :
                  stat.color === 'text-blue-600' ? 'bg-blue-100' :
                  stat.color === 'text-purple-600' ? 'bg-purple-100' :
                  'bg-red-100'
                }`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019 by former Pinterest employee Sarah Martinez, PinClimb was born from a simple observation: 
                  businesses were struggling to harness Pinterest's incredible potential for driving traffic and sales.
                </p>
                <p>
                  Having worked inside Pinterest during its explosive growth phase, Sarah understood the platform's unique algorithm 
                  and user behavior patterns better than anyone. She assembled a team of creative strategists, data analysts, and 
                  advertising specialists who shared her passion for visual storytelling.
                </p>
                <p>
                  Today, we're proud to be the leading Pinterest marketing agency, serving businesses across six major markets 
                  with a track record of delivering consistent, measurable results. Our success isn't measured just in followers 
                  or impressions—it's measured in the real revenue growth we deliver for our clients.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To democratize Pinterest marketing success by providing businesses of all sizes with the strategies, 
                  tools, and expertise they need to thrive on the world's largest visual discovery platform.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our team collaborating on Pinterest strategies"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">5+</div>
                  <div className="text-gray-600 text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from strategy development to client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pinterest specialists, creative strategists, and data analysts working together to grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-red-600 text-sm">{member.achievements}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small startup to the leading Pinterest marketing agency—here's how we got here.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'}`}>
                          <milestone.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                          <div className="text-2xl font-bold text-red-600">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-white border-4 border-red-500 rounded-full"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses who have transformed their Pinterest presence with our expert guidance. 
            Let's discuss how we can help you achieve remarkable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Start Your Journey Today
            </Link>
            <Link
              href="/testimonials"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in learning more about PinClimb and your Pinterest marketing services. Can you help me?"
      />
    </div>
  );
}