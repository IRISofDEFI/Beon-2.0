import React from 'react';
import ProductCard from '../shared/ProductCard';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProductCarousel = React.memo(({ title, products }) => {
  if (!products || products.length === 0) return null;

  const purpleColor = 'rgb(147, 51, 234)';
  const purpleColorDark = 'rgb(126, 34, 206)';

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          {title === "Marketplace" && (
            <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto px-4">
              Easily shop already verified products here....
            </p>
          )}
        </div>
        
        {/* Mobile: Single column scroll, Desktop: Multi-column scroll */}
        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-4 -mx-4 px-4 scrollbar-hide">
          {products.map(product => (
            <div key={product.id} className="flex-shrink-0 w-72 md:w-80">
              <ProductCard product={product} />
            </div>
          ))}

          {/* Browse More Button */}
          <div className="flex-shrink-0 w-72 md:w-80 flex items-center justify-center">
            <Link to={createPageUrl('MarketPlace')}>
              <Button 
                size="lg" 
                className="text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: purpleColor }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
                onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
              >
                Browse More
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
});

ProductCarousel.displayName = 'ProductCarousel';

export default ProductCarousel;