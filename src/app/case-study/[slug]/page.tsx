import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, DollarSign, Calendar, Target } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

interface CaseStudyProps {
  params: {
    slug: string;
  };
}

// This would typically come from a CMS or database
const caseStudies = {
  'bloom-co': {
    title: 'Bloom & Co Boutique',
    subtitle: 'Fashion Retailer Achieves 400% Pinterest Traffic Growth',
    industry: 'Fashion & Retail',
    location: 'Los Angeles, CA',
    timeframe: '3 months',
    challenge: 'Bloom & Co Boutique was struggling with low Pinterest visibility and minimal traffic from the platform despite having beautiful products that were perfect for Pinterest\'s visual nature.',
    solution: 'We implemented a comprehensive Pinterest SEO strategy with custom pin designs, strategic keyword optimization, and targeted content creation focused on fashion trends and styling tips.',
    results: {
      traffic: '400% increase in Pinterest traffic',
      sales: '250% boost in online sales',
      followers: '25K new engaged followers',
      engagement: '180% higher engagement rate'
    },
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    clientQuote: "PinClimb transformed our Pinterest presence completely. The results exceeded our expectations and Pinterest is now our top traffic source.",
    clientName: 'Sarah Johnson',
    clientTitle: 'Founder & CEO',
    clientAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    strategy: [
      'Complete Pinterest profile optimization with fashion-focused keywords',
      'Created 150+ custom pin designs showcasing products in lifestyle settings',
      'Developed seasonal content calendar aligned with fashion trends',
      'Implemented Rich Pins for product catalog integration',
      'Strategic board organization by style, occasion, and season'
    ],
    metrics: [
      { label: 'Monthly Pinterest Traffic', before: '2,500', after: '12,500', change: '+400%' },
      { label: 'Monthly Sales from Pinterest', before: '$8,000', after: '$28,000', change: '+250%' },
      { label: 'Pinterest Followers', before: '5,000', after: '30,000', change: '+500%' },
      { label: 'Average Engagement Rate', before: '2.1%', after: '5.9%', change: '+180%' }
    ]
  },
  'artisan-kitchen': {
    title: 'Artisan Kitchen Co.',
    subtitle: 'Home & Kitchen Brand Scales to 15K Monthly Visitors',
    industry: 'Home & Kitchen',
    location: 'New York, NY',
    timeframe: '4 months',
    challenge: 'Artisan Kitchen Co. was struggling to reach their target audience of home cooking enthusiasts and generate qualified leads for their premium kitchen products.',
    solution: 'We developed a Pinterest ads strategy combined with organic growth tactics, Rich Pins setup, and content focused on cooking inspiration and kitchen organization.',
    results: {
      traffic: '3000% increase in Pinterest traffic',
      leads: '180% more qualified leads',
      revenue: '$50K additional monthly revenue',
      conversion: '85% higher conversion rate'
    },
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    clientQuote: "Our monthly website visitors from Pinterest grew from 500 to 15,000. The quality of traffic is incredible - these visitors actually convert into customers.",
    clientName: 'Michael Chen',
    clientTitle: 'CEO',
    clientAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    strategy: [
      'Pinterest Shopping ads setup with product catalog integration',
      'Created recipe and cooking inspiration content featuring products',
      'Developed kitchen organization and design boards',
      'Implemented seasonal cooking and entertaining themes',
      'Strategic influencer partnerships with food bloggers'
    ],
    metrics: [
      { label: 'Monthly Pinterest Traffic', before: '500', after: '15,500', change: '+3000%' },
      { label: 'Monthly Revenue from Pinterest', before: '$5,000', after: '$55,000', change: '+1000%' },
      { label: 'Lead Generation', before: '50', after: '140', change: '+180%' },
      { label: 'Conversion Rate', before: '1.2%', after: '2.2%', change: '+85%' }
    ]
  },
  'sunset-wellness': {
    title: 'Sunset Wellness Studio',
    subtitle: 'Wellness Brand Builds 50K Engaged Community',
    industry: 'Health & Wellness',
    location: 'Miami, FL',
    timeframe: '6 months',
    challenge: 'Sunset Wellness Studio needed to build brand awareness and effectively promote their online wellness courses to a broader audience interested in health and mindfulness.',
    solution: 'We created a content strategy focused on wellness trends, mindfulness tips, and healthy lifestyle inspiration, combined with Pinterest SEO optimization for maximum reach.',
    results: {
      followers: '50K engaged followers',
      sales: '180% increase in course sales',
      engagement: '300% higher engagement rate',
      reach: '2M monthly impressions'
    },
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    clientQuote: "Working with PinClimb was the best decision for our business growth. Pinterest has become our primary source of new students and community members.",
    clientName: 'Emily Rodriguez',
    clientTitle: 'Founder',
    clientAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    strategy: [
      'Wellness-focused content calendar with mindfulness and fitness themes',
      'Created inspirational quote pins and wellness tip graphics',
      'Developed course promotion strategy with value-first approach',
      'Built community through wellness challenges and user-generated content',
      'Strategic hashtag research for wellness and mindfulness niches'
    ],
    metrics: [
      { label: 'Pinterest Followers', before: '2,000', after: '52,000', change: '+2500%' },
      { label: 'Monthly Course Sales', before: '$12,000', after: '$33,600', change: '+180%' },
      { label: 'Engagement Rate', before: '1.8%', after: '7.2%', change: '+300%' },
      { label: 'Monthly Impressions', before: '100K', after: '2.1M', change: '+2000%' }
    ]
  }
};

export async function generateMetadata({ params }: CaseStudyProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies];
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | PinClimb',
      description: 'The requested case study could not be found.'
    };
  }
  
  return {
    title: `${caseStudy.title} Case Study | PinClimb`,
    description: `${caseStudy.subtitle} - Learn how ${caseStudy.title} achieved remarkable Pinterest growth with PinClimb's expert strategies.`,
    keywords: `${caseStudy.title}, Pinterest marketing case study, ${caseStudy.industry}, Pinterest growth`,
    openGraph: {
      title: `${caseStudy.title} Case Study`,
      description: caseStudy.subtitle,
      images: [{ url: caseStudy.image }],
      type: 'article',
    }
  };
}

export default function CaseStudy({ params }: CaseStudyProps) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies];
  
  if (!caseStudy) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/testimonials"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Success Stories
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 font-medium mb-6">
                {caseStudy.industry}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {caseStudy.subtitle}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-semibold text-gray-900">{caseStudy.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Timeframe</div>
                  <div className="font-semibold text-gray-900">{caseStudy.timeframe}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Approach</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's how we developed and executed the Pinterest marketing strategy for {caseStudy.title}.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ul className="space-y-4">
              {caseStudy.strategy.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The numbers speak for themselves. Here are the key metrics that improved during our {caseStudy.timeframe} partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{metric.label}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Before</div>
                    <div className="text-2xl font-bold text-gray-900">{metric.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">After</div>
                    <div className="text-2xl font-bold text-red-600">{metric.after}</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
            <img 
              src={caseStudy.clientAvatar}
              alt={caseStudy.clientName}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
            />
            <blockquote className="text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "{caseStudy.clientQuote}"
            </blockquote>
            <div>
              <div className="font-bold text-gray-900 text-lg">{caseStudy.clientName}</div>
              <div className="text-red-600 font-medium">{caseStudy.clientTitle}</div>
              <div className="text-gray-500">{caseStudy.title}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let our Pinterest marketing experts create a custom strategy for your business and help you achieve remarkable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message={`Hi! I just read the ${caseStudy.title} case study and I'm impressed with the results. Can you help me achieve similar growth for my business?`}
      />
    </div>
  );
}