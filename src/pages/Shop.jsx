
import React from 'react';

export default function ShopPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-12 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800">Our Products</h1>
        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Welcome to our shop! Browse our full collection of beautiful and healthy plants to bring nature into your home. More products coming soon!
        </p>
        
        {/* Placeholder for product grid */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400">Product listing will appear here.</p>
        </div>
      </div>
    </div>
  );
}
