import React from 'react';
import { Star } from 'lucide-react';

export default function MarketPlaceProductCard({ product }) {
  const optimizedImageUrl = product.image_url.includes('unsplash.com') 
    ? `${product.image_url}&w=300&h=300&fit=crop&auto=format&q=80`
    : product.image_url;

  return (
    <div className="bg-[#2c3440] rounded-lg p-4 group transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img 
          src={optimizedImageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-white font-medium text-sm mb-2 truncate">{product.name}</h3>
        
        <div className="flex justify-center items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
          ))}
        </div>
        
        <p className="text-white font-bold text-lg mb-3">${product.price.toFixed(2)}</p>
        
        <button className="w-full bg-transparent border border-gray-600 text-gray-300 py-2 px-4 rounded text-sm hover:border-green-400 hover:text-green-400 transition-colors">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}