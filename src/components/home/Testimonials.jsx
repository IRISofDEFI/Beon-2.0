import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials({ testimonials }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Discover the experiences of our valued customers who transformed their spaces with our plants.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
              <Quote className="w-10 h-10 text-slate-200 mb-4" />
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar_url} alt={testimonial.customer_name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.customer_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}