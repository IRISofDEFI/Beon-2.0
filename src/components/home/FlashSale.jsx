import React from 'react';
import { Button } from '@/components/ui/button';

export default function FlashSale() {
  const purpleColor = 'rgb(147, 51, 234)'; // purple-600
  const purpleColorDark = 'rgb(126, 34, 206)'; // purple-700

  return (
    <div 
      className="py-24 bg-cover bg-center relative text-white" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Flash Sale: Up to 50% Off On Select Items!
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-100" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Don't miss our flash sale event! Find your favorite green companions at a price you'll love. Limited time only.
        </p>
        <Button 
          size="lg" 
          className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
          style={{ backgroundColor: purpleColor }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
          onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
}