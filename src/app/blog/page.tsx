import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, TrendingUp, Target, Palette, BarChart3 } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Pinterest Marketing Blog | Tips, Strategies & Insights | PinClimb',
  description: 'Stay updated with the latest Pinterest marketing tips, strategies, and insights. Learn how to grow your business on Pinterest with expert advice from PinClimb.',
  keywords: 'Pinterest marketing blog, Pinterest tips, Pinterest strategy, Pinterest SEO tips, Pinterest marketing insights',
};

export default function Blog() {
  const blogPosts = [
    {
      id: 'pinterest-seo-guide-2024',
      title: 'The Complete Pinterest SEO Guide for 2024',
      excerpt: 'Master Pinterest SEO with our comprehensive guide. Learn keyword research, optimization techniques, and strategies to rank higher in Pinterest search.',
      publishDate: '2024-01-15',
      author: 'Sarah Martinez',
      category: 'Pinterest SEO',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 'pinterest-ads-strategy-2024',
      title: 'Pinterest Ads Strategy That Actually Works in 2024',
      excerpt: 'Discover proven Pinterest advertising strategies that drive results. Learn campaign setup, targeting, and optimization techniques for maximum ROI.',
      publishDate: '2024-01-10',
      author: 'Michael Chen',
      category: 'Pinterest Ads',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 'pinterest-content-creation-tips',
      title: '15 Pinterest Content Creation Tips for Higher Engagement',
      excerpt: 'Create Pinterest content that captures attention and drives engagement. Learn design principles, content strategies, and best practices.',
      publishDate: '2024-01-05',
      author: 'Emily Rodriguez',
      category: 'Content Creation',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 'pinterest-analytics-guide',
      title: 'How to Use Pinterest Analytics to Grow Your Business',
      excerpt: 'Unlock the power of Pinterest Analytics. Learn how to track performance, understand your audience, and make data-driven decisions.',
      publishDate: '2024-01-01',
      author: 'David Kim',
      category: 'Analytics',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 'pinterest-trends-2024',
      title: 'Top Pinterest Trends to Watch in 2024',
      excerpt: 'Stay ahead of the curve with the latest Pinterest trends. Discover what\'s popular and how to incorporate trends into your strategy.',
      publishDate: '2023-12-28',
      author: 'Sarah Martinez',
      category: 'Trends',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 'pinterest-business-account-setup',
      title: 'Pinterest Business Account Setup: Complete Guide',
      excerpt: 'Set up your Pinterest Business account for success. Learn about Rich Pins, verification, and essential settings for business growth.',
      publishDate: '2023-12-20',
      author: 'Michael Chen',
      category: 'Getting Started',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = [
    { name: 'Pinterest SEO', icon: TrendingUp, count: 8 },
    { name: 'Pinterest Ads', icon: Target, count: 6 },
    { name: 'Content Creation', icon: Palette, count: 12 },
    { name: 'Analytics', icon: BarChart3, count: 5 },
    { name: 'Getting Started', icon: User, count: 7 },
    { name: 'Trends', icon: Calendar, count: 4 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-800 font-medium mb-8 shadow-lg border border-blue-200">
              <Calendar className="w-5 h-5 mr-2" />
              Pinterest Marketing Insights
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
              Pinterest Marketing{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-700">
                  Blog
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-pink-200 rounded-full transform -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Stay updated with the latest Pinterest marketing strategies, tips, and insights. 
              Learn from our experts and grow your business on Pinterest.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive guides to Pinterest marketing success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {featuredPosts.map((post, index) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories & Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Categories</h3>
              <div className="space-y-4">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
                            {category.name}
                          </span>
                        </div>
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.count}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <article key={post.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                    <div className="relative">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
                        >
                          Read
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Pinterest Marketing Tips
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Get the latest Pinterest marketing strategies, tips, and insights delivered to your inbox. 
            Join thousands of marketers who trust our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              Subscribe to Newsletter
            </Link>
            <Link
              href="/services"
              className="inline-block border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I've been reading your Pinterest marketing blog and I'm interested in your services. Can you help me grow my business on Pinterest?"
      />
    </div>
  );
}