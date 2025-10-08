import React from 'react';
import { CreditCard, Truck, Package, Heart } from 'lucide-react';

const featuresData = [
  { 
    icon: CreditCard, 
    title: "Secure Payment", 
    description: "Safe & secure transactions" 
  },
  { 
    icon: Truck, 
    title: "Free Shipping", 
    description: "For orders over $50" 
  },
  { 
    icon: Package, 
    title: "Delivered with Care", 
    description: "Plants arrive healthy & happy" 
  },
  { 
    icon: Heart, 
    title: "Excellent Service", 
    description: "24/7 customer support" 
  }
];

const Features = React.memo(() => {
  const brandBlue = 'rgb(73, 115, 162)';

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105"
                  style={{ backgroundColor: brandBlue }}
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

Features.displayName = 'Features';

export default Features;