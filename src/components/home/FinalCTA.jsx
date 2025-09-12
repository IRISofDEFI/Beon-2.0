import React from 'react';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  const purpleColor = 'rgb(147, 51, 234)'; // purple-600
  const purpleColorDark = 'rgb(126, 34, 206)'; // purple-700

  return (
    <div className="relative py-24 bg-cover bg-center text-white" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/c5f50898f_Beonchainecommersstore.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>Ready to Find Your Perfect Plant?</h2>
        <p className="max-w-xl mx-auto mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
          Browse our extensive collection and find the perfect green addition to your life.
        </p>
        <Button 
          size="lg" 
          className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95 hover:rotate-1"
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