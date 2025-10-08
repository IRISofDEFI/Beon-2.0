import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const FlashSale = React.memo(() => {
  const purpleColor = 'rgb(147, 51, 234)';
  const purpleColorDark = 'rgb(126, 34, 206)';

  return (
    <div 
      className="py-16 md:py-24 bg-cover bg-center relative text-white" 
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')",
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Flash Sale: Up to 50% Off On Select Items!
        </h2>
        <p className="max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base text-gray-100 px-4" 
           style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Don't miss our flash sale event! Find your favorite green companions at a price you'll love. Limited time only.
        </p>
        <Link to={createPageUrl('MarketPlace')}>
          <Button 
            size="lg" 
            className="text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 touch-manipulation"
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

FlashSale.displayName = 'FlashSale';

export default FlashSale;