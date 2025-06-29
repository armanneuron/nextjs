import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';

interface HomeCaseStudiesProps {
  limit?: number;
}

export const HomeCaseStudies: React.FC<HomeCaseStudiesProps> = ({ limit = 3 }) => {
  const caseStudies = [
    {
      id: 'bloom-co',
      title: 'Bloom & Co Boutique',
      industry: 'Fashion & Retail',
      challenge: 'Low Pinterest visibility and minimal traffic from the platform',
      solution: 'Comprehensive Pinterest SEO strategy with custom pin designs and targeted content',
      results: {
        traffic: '400% increase',
        sales: '250% boost',
        followers: '25K new followers',
        timeframe: '3 months'
      },
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      clientQuote: "PinClimb transformed our Pinterest presence completely. The results exceeded our expectations.",
      clientName: 'Sarah Johnson, Founder'
    },
    {
      id: 'artisan-kitchen',
      title: 'Artisan Kitchen Co.',
      industry: 'Home & Kitchen',
      challenge: 'Struggling to reach target audience and generate qualified leads',
      solution: 'Pinterest ads strategy combined with organic growth tactics and Rich Pins setup',
      results: {
        traffic: '3000% increase',
        leads: '180% more qualified leads',
        revenue: '$50K additional revenue',
        timeframe: '4 months'
      },
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      clientQuote: "Our monthly website visitors from Pinterest grew from 500 to 15,000. Incredible results!",
      clientName: 'Michael Chen, CEO'
    },
    {
      id: 'sunset-wellness',
      title: 'Sunset Wellness Studio',
      industry: 'Health & Wellness',
      challenge: 'Building brand awareness and promoting online courses effectively',
      solution: 'Content strategy focused on wellness trends with Pinterest SEO optimization',
      results: {
        followers: '50K engaged followers',
        sales: '180% course sales increase',
        engagement: '300% higher engagement',
        timeframe: '6 months'
      },
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      clientQuote: "Working with PinClimb was the best decision for our business growth.",
      clientName: 'Emily Rodriguez, Owner'
    }
  ];

  const displayedCaseStudies = caseStudies.slice(0, limit);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how businesses across industries have transformed their Pinterest presence 
            and achieved remarkable growth with our proven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedCaseStudies.map((study, index) => (
            <div key={study.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-4">Results in {study.results.timeframe}:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.results).filter(([key]) => key !== 'timeframe').map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-red-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-red-500 pl-4 mb-6">
                  <p className="text-gray-700 italic">"{study.clientQuote}"</p>
                  <cite className="text-sm text-gray-500 not-italic">— {study.clientName}</cite>
                </blockquote>
                
                <Link 
                  href={`/case-study/${study.id}`}
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/testimonials"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
          >
            View All Success Stories
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};