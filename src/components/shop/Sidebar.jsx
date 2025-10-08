import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Star, ShoppingCart } from 'lucide-react';

const SidebarWidget = ({ title, children }) => (
  <div className="bg-[#2c3440] p-6 rounded-lg mb-8">
    <h3 className="text-white font-bold text-lg mb-4">{title}</h3>
    {children}
  </div>
);

export default function Sidebar({ categories, tags, filters, setFilters, maxPrice }) {

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
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input 
            type="text" 
            placeholder="Search..." 
            className="bg-[#222831] border-gray-600 text-white"
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({...prev, searchTerm: e.target.value}))}
          />
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Search</Button>
        </div>
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
        <div className="flex justify-between text-gray-400">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </SidebarWidget>
      
      <SidebarWidget title="Cart">
        <div className="text-center text-gray-400 py-4">
          <ShoppingCart className="mx-auto h-8 w-8 mb-2" />
          <p>No products in the cart.</p>
        </div>
      </SidebarWidget>

      <SidebarWidget title="Product Categories">
        <ul className="space-y-2">
          {categories.map(cat => (
            <li 
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`cursor-pointer text-gray-300 hover:text-purple-400 transition-colors ${filters.category === cat.id ? 'text-purple-400 font-bold' : ''}`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </SidebarWidget>
      
      <SidebarWidget title="Product Tags">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${filters.tags.includes(tag) ? 'bg-purple-600 text-white' : 'bg-[#222831] text-gray-300 hover:bg-purple-500'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </SidebarWidget>
    </aside>
  );
}