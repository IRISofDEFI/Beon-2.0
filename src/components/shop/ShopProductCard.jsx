import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShopProductCard({ product }) {
  const optimizedImageUrl = product.image_url.includes('unsplash.com') 
    ? `${product.image_url}&w=400&h=400&fit=crop&auto=format&q=75`
    : product.image_url;

  return (
    <div className="bg-[#2c3440] rounded-lg overflow-hidden group text-center p-4 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50">
      <div className="relative mb-4">
        <img 
          src={optimizedImageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-56 object-cover rounded-md"
        />
      </div>
      <h3 className="text-white font-semibold text-md mb-2 truncate">{product.name}</h3>
      <div className="flex justify-center items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
        ))}
      </div>
      <p className="text-gray-300 font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
      <Button variant="outline" className="w-full border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors">
        <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
      </Button>
    </div>
  );
}