import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const brandBlue = 'rgb(73, 115, 162)';
  const brandBlueDark = 'rgb(58, 92, 130)';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
            Contact Us
          </h1>
          <p className="mt-4 text-lg max-w-2xl" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
            We'd love to hear from you. Reach out with any questions or comments.
          </p>
        </div>
      </div>

      {/* Contact Form and Details Section */}
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" className="h-40" />
                <Button 
                  size="lg" 
                  className="w-full text-white font-bold py-3 px-8 rounded-full text-lg"
                  style={{ backgroundColor: brandBlue }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = brandBlueDark}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = brandBlue}
                >
                  Submit
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: brandBlue }}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Our Address</h3>
                  <p className="text-gray-600">123 Greenery Lane, Plantville, PV 45678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: brandBlue }}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="text-gray-600">contact@urbanjungle.co</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: brandBlue }}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}