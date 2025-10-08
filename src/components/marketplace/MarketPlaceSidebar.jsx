import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Star, ShoppingCart, User } from 'lucide-react';

const SidebarWidget = ({ title, children, className = "" }) => (
  <div className={`bg-[#2c3440] p-4 rounded-lg mb-6 ${className}`}>
    <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{title}</h3>
    {children}
  </div>
);

export default function MarketPlaceSidebar({ categories, tags, filters, setFilters, maxPrice }) {

  const handlePriceChange = (value) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };

  const handleCategoryClick = (categoryId) => {
    setFilters(prev => ({ ...prev, category: prev.category === categoryId ? null : categoryId }));
  };

  const handleTagClick = (tag) => {
    setFilters(prev => {
      const newTags = new Set(prev.tags);
      if (newTags.has(tag)) {
        newTags.delete(tag);
      } else {
        newTags.add(tag);
      }
      return { ...prev, tags: Array.from(newTags) };
    });
  };

  return (
    <aside>
      <SidebarWidget title="Search by Products">
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Search products..." 
            className="bg-[#1e232b] border-gray-600 text-white placeholder-gray-400 text-sm"
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({...prev, searchTerm: e.target.value}))}
          />
          <Button className="bg-green-600 hover:bg-green-700 text-white px-3 text-sm">
            Search
          </Button>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Product Categories">
        <ul className="space-y-2">
          <li className="text-gray-300 text-sm">Electronics (25)</li>
          <li className="text-gray-300 text-sm">Bags (8)</li>
          <li className="text-gray-300 text-sm">Shoes (12)</li>
          <li className="text-gray-300 text-sm">Clothes (18)</li>
          <li className="text-gray-300 text-sm">Underwear (5)</li>
          <li className="text-gray-300 text-sm">T-Shirts (15)</li>
          <li className="text-blue-400 text-sm cursor-pointer">Load All</li>
        </ul>
      </SidebarWidget>

      <SidebarWidget title="Filter by Price">
        <Slider
          min={0}
          max={maxPrice}
          step={1}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mb-4"
        />
        <div className="flex justify-between text-gray-400 text-sm mb-3">
          <span>Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}</span>
        </div>
        <Button className="w-full bg-transparent border border-gray-600 text-gray-300 text-sm hover:border-green-400 hover:text-green-400">
          Filter
        </Button>
      </SidebarWidget>
      
      <SidebarWidget title="Cart">
        <div className="text-center text-gray-400 py-6">
          <ShoppingCart className="mx-auto h-12 w-12 mb-3 text-gray-600" />
          <p className="text-sm">No products in the cart.</p>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Recent Reviews">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-xs">Great product, highly recommend!</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 text-xs">Excellent quality and fast shipping.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
                <Star className="w-3 h-3 text-gray-600" />
              </div>
              <p className="text-gray-300 text-xs">Good value for money.</p>
            </div>
          </div>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Average Rating">
        <div className="text-center">
          <div className="flex justify-center items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-white ml-2 text-sm">(4)</span>
          </div>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Product Tags">
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-[#1e232b] text-gray-300 text-xs rounded">Authentic</span>
          <span className="px-3 py-1 bg-[#1e232b] text-gray-300 text-xs rounded">Designer</span>
          <span className="px-3 py-1 bg-[#1e232b] text-gray-300 text-xs rounded">Premium</span>
        </div>
      </SidebarWidget>
    </aside>
  );
}