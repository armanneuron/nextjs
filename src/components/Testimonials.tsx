import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  location: string;
  content: string;
  results: string;
  avatar: string;
  rating: number;
  industry: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real clients say about their experience 
            working with PinClimb and the results they've achieved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  );
};