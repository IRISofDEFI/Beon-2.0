import React from 'react';
import ProductCard from '../shared/ProductCard';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
              <ProductCard product={product} />
            </div>
          ))}

          {/* "Browse More" button container */}
          <div className="flex-shrink-0 flex items-center justify-center" style={{width: '300px'}}>
            <Link to={createPageUrl('Shop')}>
              <Button 
                size="lg" 
                className="text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: purpleColor }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = purpleColorDark}
                onMouseOut={e => e.currentTarget.style.backgroundColor = purpleColor}
              >
                Browse More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}