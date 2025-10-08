<<<<<<< HEAD
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Users, Award, Leaf, Heart } from 'lucide-react';
=======

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, Users, Award, Leaf, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
>>>>>>> ai-temp/main

export default function AboutPage() {
  const brandBlue = 'rgb(73, 115, 162)';
  const brandBlueDark = 'rgb(58, 92, 130)';
  const purpleColor = 'rgb(147, 51, 234)'; // purple-600
  const purpleColorDark = 'rgb(126, 34, 206)'; // purple-700

  const coreValues = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural and Healthy",
      description: "We source only the finest, healthiest plants to ensure your green companions thrive in your space."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Product Authenticity",
      description: "Every plant comes with verification to guarantee authenticity and quality you can trust."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sustainable Solutions",
      description: "Our commitment to environmental sustainability guides every decision we make."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Products",
      description: "Premium quality plants and products that exceed expectations every time."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Satisfaction",
      description: "Industry-leading satisfaction rates with certified quality processes."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Specialty Services",
      description: "Personalized care recommendations and ongoing support for plant parents."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
            We are Passionate
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
            About Our Work
          </h2>
        </div>
      </div>

      {/* Quality Promise Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Quality plants in pots" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                We strive to provide our customers with the highest quality
              </h2>
              <p className="text-gray-600 leading-relaxed">
                At Urban Jungle Co., quality isn't just a promise—it's our commitment. Every plant we offer has been carefully selected, nurtured, and verified to ensure it meets our exacting standards. We believe that bringing nature into your home should be a joyful, worry-free experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated team works tirelessly to source the healthiest plants, provide expert care guidance, and deliver exceptional service that exceeds your expectations. From selection to delivery, we're with you every step of the way.
              </p>
              <div className="flex items-start space-x-4 pt-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format" 
                  alt="Team member" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Head of Quality Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20" style={{ backgroundColor: '#f8fdf8' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values that Drive Everything We Do
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white"
                  style={{ backgroundColor: brandBlue }}
                >
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To make the beauty and benefits of nature accessible to everyone by providing premium plants, expert guidance, and innovative solutions that transform spaces and enrich lives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where every home and workplace is enhanced by the presence of thriving plants, creating healthier, more beautiful environments for all.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">Expert Care</p>
                    <p className="text-sm text-gray-600">Professional guidance and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-800">Premium Quality</p>
                    <p className="text-sm text-gray-600">Only the finest plants and products</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1463320726281-696a485928c7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Beautiful plant in modern setting" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div 
        className="relative py-24 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
            Ready to Find your Perfect Plant?
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-gray-100" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
            Discover our curated collection of premium plants and start your green journey today.
          </p>
<<<<<<< HEAD
          <Button 
            size="lg" 
            className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95"
            style={{ backgroundColor: purpleColor }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
            onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
          >
            Shop Now
          </Button>
=======
          <Link to={createPageUrl('MarketPlace')}>
            <Button 
              size="lg" 
              className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95"
              style={{ backgroundColor: purpleColor }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
              onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
            >
              Shop Now
            </Button>
          </Link>
>>>>>>> ai-temp/main
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> ai-temp/main
