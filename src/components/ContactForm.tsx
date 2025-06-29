'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  location?: {
    name: string;
    state: string;
    phone: string;
    email: string;
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ location }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          honeypot: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Grow Your Pinterest Presence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our {location ? `${location.name} ` : ''}team for a free consultation and Pinterest audit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 2 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <Input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleInputChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message <span className="text-red-600">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your Pinterest marketing needs..."
                      className="w-full min-h-[150px]"
                    />
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-md flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-green-700">
                      Your message has been sent successfully! We'll get back to you within 2 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <a 
                      href="https://wa.me/8801976927587"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-500 transition-colors duration-200"
                    >
                      +8801976927587
                    </a>
                    <div className="text-sm text-gray-500">Available 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a 
                      href="mailto:contact@hello.pinclimb.com"
                      className="text-gray-600 hover:text-red-600 transition-colors duration-200"
                    >
                      contact@hello.pinclimb.com
                    </a>
                    <div className="text-sm text-gray-500">We respond within 2 hours</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a 
                      href="tel:+8801976927587"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      +8801976927587
                    </a>
                    <div className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Free Pinterest Audit</h3>
              <p className="mb-6">
                Get a comprehensive analysis of your current Pinterest performance and actionable recommendations for improvement.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Profile and board optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Content strategy assessment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Keyword and SEO analysis</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                  <span>Competitor benchmarking</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-red-600 hover:bg-gray-100 py-3 px-6 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                Request Free Audit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};