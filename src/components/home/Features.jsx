
import React from 'react';
import { CreditCard, Truck, Package, Heart } from 'lucide-react';

const featuresData = [
  { icon: <CreditCard className="w-8 h-8 text-white" />, title: "Secure Payment", description: "Elementum feugiat diam" },
  { icon: <Truck className="w-8 h-8 text-white" />, title: "Free Shipping", description: "For $50 order" },
  { icon: <Package className="w-8 h-8 text-white" />, title: "Delivered with Care", description: "Lacinia pellentesque leo" },
  { icon: <Heart className="w-8 h-8 text-white" />, title: "Excellent Service", description: "Blandit gravida viverra" }
];

export default function Features() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgb(73, 115, 162)' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
