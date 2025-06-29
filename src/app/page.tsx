import React from 'react';
import { MainHero } from '@/components/MainHero';
import { ServicesOverview } from '@/components/ServicesOverview';
import { GeneralServices } from '@/components/GeneralServices';
import { ServiceVideoSection } from '@/components/ServiceVideoSection';
import { HomeCaseStudies } from '@/components/HomeCaseStudies';
import { BlogSection } from '@/components/BlogSection';
import { Packages } from '@/components/Packages';
import { Testimonials } from '@/components/Testimonials';
import { GeneralContact } from '@/components/GeneralContact';
import { OptimizedImage } from '@/components/OptimizedImage';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export default function Home() {
  // Updated package data for home page
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
    }
  ];

  return (
    <div>
      <MainHero />
      
      {/* Video Section - Right after hero area as originally intended */}
      <ServiceVideoSection 
        videoType="youtube"
        youtubeVideoId="O0zX_2TYMrc"
      />
      
      <ServicesOverview />
      
      {/* Pinterest Analytics Images - Reduced top padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage 
              src="/images/pinterest marketing agency (1).jpg"
              alt="Pinterest Analytics Dashboard showing impressive growth metrics"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <OptimizedImage 
              src="/images/pinterest marketing agency (2).jpg"
              alt="Pinterest Analytics Performance showing significant audience growth"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <GeneralServices />
      <HomeCaseStudies limit={3} />
      <Packages packages={managementPackages} />
      <Testimonials testimonials={testimonials} />
      <BlogSection />
      <GeneralContact />
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest marketing services. Can you help me grow my business on Pinterest?"
      />
    </div>
  );
}