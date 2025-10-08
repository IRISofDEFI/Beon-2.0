import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = React.memo(({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto px-4">
            Discover the experiences of our valued customers who transformed their spaces with our plants.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <Quote className="w-8 h-8 md:w-10 md:h-10 text-slate-200 mb-4" />
              <p className="text-gray-600 italic mb-4 md:mb-6 text-sm md:text-base leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar_url || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format'} 
                  alt={testimonial.customer_name} 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">
                    {testimonial.customer_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;