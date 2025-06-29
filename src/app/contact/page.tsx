import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us | PinClimb Pinterest Marketing Agency',
  description: 'Get in touch with PinClimb, the leading Pinterest marketing agency. Schedule a free consultation and Pinterest audit to grow your business.',
  keywords: 'contact PinClimb, Pinterest marketing contact, Pinterest agency consultation, free Pinterest audit',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our Pinterest marketing services? Ready to start growing your business? 
              We're here to help you achieve remarkable results on Pinterest.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
      
      <WhatsAppButton 
        phoneNumber="8801976927587"
        message="Hi! I'm interested in your Pinterest marketing services. Can you help me grow my business on Pinterest?"
      />
    </div>
  );
}