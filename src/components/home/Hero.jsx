
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const Hero = React.memo(() => {
  const purpleColor = 'rgb(147, 51, 234)';
  const purpleColorDark = 'rgb(126, 34, 206)';

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Optimized background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/d4a5d1bd8_vecteezy_abstract-minimal-design-for-cosmetic-or-product-podium-3d_9560945.jpg')",
          animation: 'gentleSway 8s ease-in-out infinite',
          willChange: 'transform'
        }}
      ></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <p className="text-sm md:text-lg tracking-widest mb-2 uppercase text-white" 
           style={{textShadow: '1px 1px 2px rgba(0,0,0,0.3)'}}>
          Welcome to Urban Jungle Co.
        </p>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl text-white mb-8" 
            style={{textShadow: '2px 2px 4px rgba(0,0,0,0.4)'}}>
          Discover the Beauty of Nature at Your Fingertips
        </h1>
        <Link to={createPageUrl('Shop')}>
          <Button 
            size="lg" 
            className="text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl active:scale-95 animate-pulse hover:animate-none touch-manipulation"
            style={{ backgroundColor: purpleColor, minHeight: '48px' }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
            onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
          >
            Shop Now
          </Button>
        </Link>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes gentleSway {
            0%, 100% {
              transform: translateX(0px) scale(1);
            }
            25% {
              transform: translateX(2px) scale(1.005);
            }
            50% {
              transform: translateX(-1px) scale(1.002);
            }
            75% {
              transform: translateX(1px) scale(1.003);
            }
          }
          
          .touch-manipulation {
            touch-action: manipulation;
          }
        `
      }} />
    </div>
  );
});

Hero.displayName = 'Hero';

export default Hero;
