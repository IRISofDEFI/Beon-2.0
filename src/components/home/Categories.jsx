import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const utilitiesData = [
  { 
    id: 1, 
    name: "Register Brand",
<<<<<<< HEAD
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
=======
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
>>>>>>> ai-temp/main
    link: createPageUrl('RegisterBrand'),
  },
  { 
    id: 2, 
    name: "Scan/Verify Products",
<<<<<<< HEAD
    imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
=======
    imageUrl: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
>>>>>>> ai-temp/main
    link: createPageUrl('ScanVerify'),
  },
  { 
    id: 3, 
    name: "Marketplace", 
<<<<<<< HEAD
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: createPageUrl('Shop'),
=======
    imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    link: createPageUrl('MarketPlace'),
>>>>>>> ai-temp/main
  },
  { 
    id: 4, 
    name: "Book a Talent",
<<<<<<< HEAD
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
=======
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
>>>>>>> ai-temp/main
    link: createPageUrl('BookTalent'),
  }
];

<<<<<<< HEAD
export default function Categories() {
  const brandBlue = 'rgb(73, 115, 162)';

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Utilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {utilitiesData.map(utility => (
            <Link to={utility.link} key={utility.id} className="text-center group block">
              <div className="relative overflow-hidden mb-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg h-64 border-2 border-transparent"
                   style={{'--hover-border-color': brandBlue}}
                   onMouseOver={e => e.currentTarget.style.borderColor = e.currentTarget.style.getPropertyValue('--hover-border-color')}
                   onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>
                <img src={utility.imageUrl} alt={utility.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-medium text-gray-800 transition-colors"
                  style={{'--hover-text-color': brandBlue}}
                  onMouseOver={e => e.currentTarget.style.color = e.currentTarget.style.getPropertyValue('--hover-text-color')}
=======
const Categories = React.memo(() => {
  const brandBlue = 'rgb(73, 115, 162)';

  return (
    <div className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Utilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {utilitiesData.map(utility => (
            <Link to={utility.link} key={utility.id} className="text-center group block">
              <div className="relative overflow-hidden mb-4 rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg h-48 md:h-64 border-2 border-transparent group-hover:border-opacity-50"
                   style={{'--hover-border-color': brandBlue}}
                   onMouseOver={e => e.currentTarget.style.borderColor = brandBlue}
                   onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>
                <img 
                  src={utility.imageUrl} 
                  alt={utility.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <h3 className="text-base md:text-lg font-medium text-gray-800 transition-colors px-2"
                  style={{'--hover-text-color': brandBlue}}
                  onMouseOver={e => e.currentTarget.style.color = brandBlue}
>>>>>>> ai-temp/main
                  onMouseOut={e => e.currentTarget.style.color = ''}>
                {utility.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
});

Categories.displayName = 'Categories';

export default Categories;
>>>>>>> ai-temp/main
