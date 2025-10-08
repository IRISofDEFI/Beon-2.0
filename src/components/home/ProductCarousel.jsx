import React from 'react';
import ProductCard from '../shared/ProductCard';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function ProductCarousel({ title, products }) {
  if (!products || products.length === 0) return null;

  const purpleColor = 'rgb(147, 51, 234)'; // purple-600
  const purpleColorDark = 'rgb(126, 34, 206)'; // purple-700

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
        {title === "Marketplace" && (
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Easily shop already verified products here....
          </p>
        )}
        {title !== "Marketplace" && <div className="mb-12"></div>}
        <div className="flex overflow-x-auto space-x-8 pb-4 -mx-4 px-4">
          {products.map(product => (
            <div key={product.id} className="flex-shrink-0" style={{width: '300px'}}>
=======
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
>>>>>>> ai-temp/main
              <ProductCard product={product} />
            </div>
          ))}

<<<<<<< HEAD
          {/* "Browse More" button container */}
          <div className="flex-shrink-0 flex items-center justify-center" style={{width: '300px'}}>
            <Link to={createPageUrl('Shop')}>
              <Button 
                size="lg" 
                className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
=======
          {/* Browse More Button */}
          <div className="flex-shrink-0 w-72 md:w-80 flex items-center justify-center">
            <Link to={createPageUrl('MarketPlace')}>
              <Button 
                size="lg" 
                className="text-white font-bold py-3 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
>>>>>>> ai-temp/main
                style={{ backgroundColor: purpleColor }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
                onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
              >
                Browse More
<<<<<<< HEAD
                <ArrowRight className="ml-2 h-5 w-5" />
=======
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
>>>>>>> ai-temp/main
              </Button>
            </Link>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======
      
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
>>>>>>> ai-temp/main
