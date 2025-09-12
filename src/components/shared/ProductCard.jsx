
import React from 'react';
import { Star } from 'lucide-react';

export default function ProductCard({ product }) {
  const brandBlue = 'rgb(73, 115, 162)';

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
