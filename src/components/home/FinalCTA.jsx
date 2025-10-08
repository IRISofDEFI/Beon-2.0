import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const FinalCTA = React.memo(() => {
  const purpleColor = 'rgb(147, 51, 234)';
  const purpleColorDark = 'rgb(126, 34, 206)';

  return (
    <div className="relative py-16 md:py-24 bg-cover bg-center text-white" 
         style={{ 
           backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/c5f50898f_Beonchainecommersstore.png')",
           backgroundAttachment: 'fixed'
         }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
          Ready to Find Your Perfect Plant?
        </h2>
        <p className="max-w-xl mx-auto mb-6 md:mb-8 text-sm md:text-base px-4" 
           style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
          Browse our extensive collection and find the perfect green addition to your life.
        </p>
        <Link to={createPageUrl('MarketPlace')}>
          <Button 
            size="lg" 
            className="text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95 hover:rotate-1 touch-manipulation"
            style={{ backgroundColor: purpleColor, minHeight: '48px' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
            onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
});

FinalCTA.displayName = 'FinalCTA';

export default FinalCTA;