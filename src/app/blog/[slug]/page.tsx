import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';
import { WhatsAppButton } from '@/components/WhatsAppButton';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

// This would typically come from a CMS or database
const blogPosts = {
  'pinterest-seo-guide-2024': {
    title: 'The Complete Pinterest SEO Guide for 2024',
    excerpt: 'Master Pinterest SEO with our comprehensive guide. Learn keyword research, optimization techniques, and strategies to rank higher in Pinterest search.',
    content: `
      <h2>Introduction to Pinterest SEO</h2>
      <p>Pinterest SEO is crucial for businesses looking to increase their visibility and drive organic traffic. Unlike traditional search engines, Pinterest functions as a visual discovery platform where users search for inspiration and ideas.</p>
      
      <h2>Understanding Pinterest's Algorithm</h2>
      <p>Pinterest's algorithm considers several factors when ranking pins:</p>
      <ul>
        <li>Pin quality and relevance</li>
        <li>Pinner quality and engagement</li>
        <li>Topic relevance</li>
        <li>Pin freshness</li>
      </ul>
      
      <h2>Keyword Research for Pinterest</h2>
      <p>Effective keyword research is the foundation of Pinterest SEO success. Here's how to find the right keywords:</p>
      
      <h3>1. Use Pinterest's Search Bar</h3>
      <p>Start typing your main keyword and Pinterest will suggest related terms. These suggestions are based on actual user searches.</p>
      
      <h3>2. Analyze Trending Pins</h3>
      <p>Look at what's trending in your niche and identify common keywords and phrases used in successful pins.</p>
      
      <h2>Optimizing Your Pinterest Profile</h2>
      <p>Your Pinterest profile is the foundation of your SEO strategy:</p>
      <ul>
        <li>Use a keyword-rich business name</li>
        <li>Write a compelling bio with relevant keywords</li>
        <li>Verify your website</li>
        <li>Enable Rich Pins</li>
      </ul>
      
      <h2>Creating SEO-Optimized Pins</h2>
      <p>Every pin should be optimized for search:</p>
      
      <h3>Pin Titles</h3>
      <p>Include your primary keyword in the pin title, preferably at the beginning.</p>
      
      <h3>Pin Descriptions</h3>
      <p>Write detailed descriptions (up to 500 characters) that include relevant keywords naturally.</p>
      
      <h3>Alt Text</h3>
      <p>Add descriptive alt text to your images for better accessibility and SEO.</p>
      
      <h2>Board Optimization</h2>
      <p>Optimize your boards for better discoverability:</p>
      <ul>
        <li>Use keyword-rich board titles</li>
        <li>Write detailed board descriptions</li>
        <li>Organize boards by topic</li>
        <li>Keep boards active with fresh content</li>
      </ul>
      
      <h2>Measuring Pinterest SEO Success</h2>
      <p>Track these metrics to measure your Pinterest SEO performance:</p>
      <ul>
        <li>Impressions and reach</li>
        <li>Engagement rate</li>
        <li>Click-through rate</li>
        <li>Website traffic from Pinterest</li>
        <li>Conversions and sales</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Pinterest SEO is an ongoing process that requires consistent effort and optimization. By following these strategies, you can improve your visibility on Pinterest and drive more traffic to your website.</p>
    `,
    publishDate: '2024-01-15',
    author: 'Sarah Martinez',
    category: 'Pinterest SEO',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  },
  'pinterest-ads-strategy-2024': {
    title: 'Pinterest Ads Strategy That Actually Works in 2024',
    excerpt: 'Discover proven Pinterest advertising strategies that drive results. Learn campaign setup, targeting, and optimization techniques for maximum ROI.',
    content: `
      <h2>Why Pinterest Ads Work</h2>
      <p>Pinterest ads are highly effective because they blend seamlessly with organic content and reach users when they're actively planning and shopping.</p>
      
      <h2>Types of Pinterest Ads</h2>
      <p>Understanding different ad formats is crucial for success:</p>
      
      <h3>Standard Pins</h3>
      <p>Promoted versions of your regular pins that appear in search results and feeds.</p>
      
      <h3>Video Pins</h3>
      <p>Engaging video content that auto-plays in feeds and can drive higher engagement.</p>
      
      <h3>Shopping Ads</h3>
      <p>Product-focused ads that include pricing and direct purchase options.</p>
      
      <h3>Carousel Ads</h3>
      <p>Multi-image ads that allow users to swipe through different products or ideas.</p>
      
      <h2>Setting Up Your First Campaign</h2>
      <p>Follow these steps for campaign setup:</p>
      <ol>
        <li>Define your campaign objective</li>
        <li>Set your target audience</li>
        <li>Choose your ad format</li>
        <li>Set your budget and bidding</li>
        <li>Create compelling ad creative</li>
      </ol>
      
      <h2>Targeting Strategies</h2>
      <p>Effective targeting is key to Pinterest ads success:</p>
      
      <h3>Interest Targeting</h3>
      <p>Target users based on their Pinterest interests and behaviors.</p>
      
      <h3>Keyword Targeting</h3>
      <p>Reach users searching for specific terms related to your products.</p>
      
      <h3>Custom Audiences</h3>
      <p>Retarget website visitors or upload customer lists.</p>
      
      <h3>Lookalike Audiences</h3>
      <p>Find new customers similar to your existing ones.</p>
      
      <h2>Creative Best Practices</h2>
      <p>Create ads that perform:</p>
      <ul>
        <li>Use high-quality, vertical images</li>
        <li>Include clear, readable text overlays</li>
        <li>Show your product in use</li>
        <li>Use bright, eye-catching colors</li>
        <li>Include a clear call-to-action</li>
      </ul>
      
      <h2>Optimization and Scaling</h2>
      <p>Continuously improve your campaigns:</p>
      <ul>
        <li>Monitor performance metrics daily</li>
        <li>A/B test different creative variations</li>
        <li>Adjust targeting based on performance</li>
        <li>Scale successful campaigns gradually</li>
      </ul>
    `,
    publishDate: '2024-01-10',
    author: 'Michael Chen',
    category: 'Pinterest Ads',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
  }
};

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | PinClimb',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | PinClimb Blog`,
    description: post.excerpt,
    keywords: `${post.category}, Pinterest marketing, ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author],
    }
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 font-medium mb-6">
              {post.category}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center text-gray-600 mb-8 space-x-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-red max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
                <p className="text-gray-600">Help others discover this valuable content</p>
              </div>
              <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let our Pinterest marketing experts help you implement these strategies and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Expert Help
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
        message={`Hi! I just read your article "${post.title}" and I'm interested in your Pinterest marketing services. Can you help me?`}
      />
    </div>
  );
}