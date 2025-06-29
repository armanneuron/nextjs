import { Metadata } from 'next';
import { Star, Quote, TrendingUp, Users, Target, Award } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Success Stories & Testimonials | PinClimb',
  description: 'Read real success stories from businesses who have grown their Pinterest presence and increased sales with PinClimb\'s expert Pinterest marketing services.',
  keywords: 'Pinterest marketing testimonials, client success stories, Pinterest growth results, Pinterest marketing case studies',
};

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Bloom & Co Boutique',
      location: 'Los Angeles, CA',
      content: 'PinClimb transformed our Pinterest presence completely. Within 3 months, our Pinterest traffic increased by 400% and we saw a 250% increase in online sales directly from Pinterest.',
      results: '400% traffic increase, 250% sales boost',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Fashion & Retail'
    },
    {
      name: 'Michael Chen',
      company: 'Artisan Kitchen Co.',
      location: 'New York, NY',
      content: 'The team at PinClimb understood our brand perfectly. Their Pinterest SEO strategies helped us reach our target audience and our monthly website visitors from Pinterest grew from 500 to 15,000.',
      results: '3000% increase in Pinterest traffic',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Home & Kitchen'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Sunset Wellness Studio',
      location: 'Miami, FL',
      content: 'Working with PinClimb was the best decision for our business. Their organic Pinterest growth strategies helped us build a community of 50K engaged followers and increased our course sales by 180%.',
      results: '50K followers, 180% sales increase',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Health & Wellness'
    },
    {
      name: 'David Kim',
      company: 'Urban Fashion Hub',
      location: 'Chicago, IL',
      content: 'PinClimb\'s Pinterest ads management is exceptional. They helped us achieve a 4.2x ROAS on our Pinterest advertising campaigns and reduced our cost per acquisition by 60%.',
      results: '4.2x ROAS, 60% lower CPA',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Fashion & Apparel'
    },
    {
      name: 'Jessica Martinez',
      company: 'Green Thumb Gardens',
      location: 'Austin, TX',
      content: 'The Pinterest pin designs from PinClimb are absolutely stunning and effective. Our engagement rates increased by 300% and we\'re now one of the top gardening accounts on Pinterest.',
      results: '300% engagement increase',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Gardening & Lifestyle'
    },
    {
      name: 'Robert Thompson',
      company: 'Tech Startup Solutions',
      location: 'Seattle, WA',
      content: 'PinClimb helped us tap into Pinterest\'s B2B potential. Their strategic approach increased our lead generation by 220% and helped us connect with decision-makers in our industry.',
      results: '220% more qualified leads',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      industry: 'Technology & SaaS'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Success Stories',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      number: '300%',
      label: 'Average Growth',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: Award,
      color: 'text-purple-600'
    },
    {
      number: '$5M+',
      label: 'Revenue Generated',
      icon: Target,
      color: 'text-red-600'
    }
  ];

  const industries = [
    'Fashion & Retail',
    'Health & Wellness', 
    'Home & Kitchen',
    'Technology & SaaS',
    'Food & Beverage',
    'Beauty & Skincare',
    'Travel & Tourism',
    'Education & Courses',
    'Real Estate',
    'Photography',
    'Fitness & Sports',
    'Arts & Crafts'
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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-800 font-medium mb-8 shadow-lg border border-green-200">
              <Award className="w-5 h-5 mr-2" />
              Real Results from Real Clients
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Client Success{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  Stories
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Discover how businesses across industries have transformed their Pinterest presence and achieved 
              remarkable growth with our proven Pinterest marketing strategies.
            </p>
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

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read real success stories from businesses who have transformed their Pinterest presence with our expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-red-600 font-medium">{testimonial.company}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-red-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6">{testimonial.content}</p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-bold text-red-700 text-sm">Results: {testimonial.results}</p>
                  <p className="text-gray-600 text-sm">Industry: {testimonial.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've helped businesses across diverse industries achieve Pinterest marketing success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
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
              Start Your Success Story
            </Link>
            <Link
              href="/services"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I saw the amazing success stories on your website. I'm interested in growing my business with Pinterest marketing. Can you help me?"
      />
    </div>
  );
}