<<<<<<< HEAD

=======
>>>>>>> ai-temp/main
import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const brandBlue = 'rgb(73, 115, 162)';

<<<<<<< HEAD
  return (
    <div className="text-center group">
      <div className="relative overflow-hidden mb-4 rounded-lg">
        <img src={product.image_url} alt={product.name} className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <h3 className="text-lg font-medium text-gray-800 transition-colors"
          style={{'--hover-text-color': brandBlue}}
          onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
          onMouseOut={e => e.currentTarget.style.color = ''}>
        {product.name}
      </h3>
      <p className="text-gray-500 font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
}
=======
  // Optimize image URL for better performance
  const optimizedImageUrl = product.image_url.includes('unsplash.com') 
    ? `${product.image_url}&w=400&h=400&fit=crop&auto=format&q=80`
    : product.image_url;

  return (
    <div className="text-center group w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden mb-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg">
        <div className="aspect-square bg-gray-100">
          <img 
            src={optimizedImageUrl} 
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&auto=format&q=80';
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
      </div>
      <h3 className="text-lg font-medium text-gray-800 transition-colors mb-1 px-2"
          style={{'--hover-text-color': brandBlue}}
          onMouseOver={e => e.currentTarget.style.color = brandBlue}
          onMouseOut={e => e.currentTarget.style.color = ''}>
        {product.name}
      </h3>
      <p className="text-gray-500 font-semibold text-lg">${product.price.toFixed(2)}</p>
    </div>
  );
}
>>>>>>> ai-temp/main
