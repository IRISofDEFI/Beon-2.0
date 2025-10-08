import React, { useState, useEffect, useMemo } from 'react';
import { Product, Category } from '@/api/entities';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import MarketPlaceSidebar from '../components/marketplace/MarketPlaceSidebar';
import MarketPlaceProductCard from '../components/marketplace/MarketPlaceProductCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

const ITEMS_PER_PAGE = 12;

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(9)].map((_, i) => (
      <div key={i} className="bg-[#2c3440] p-4 rounded-lg">
        <Skeleton className="h-56 w-full mb-4" />
        <Skeleton className="h-4 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    ))}
  </div>
);

export default function MarketPlacePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    searchTerm: '',
    category: null,
    priceRange: [0, 1000],
    tags: [],
  });

  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  
  const allTags = useMemo(() => {
    const tags = new Set();
    products.forEach(p => {
      if(p.tags) {
        p.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags);
  }, [products]);

  const maxPrice = useMemo(() => {
    if (products.length === 0) return 1000;
    return Math.ceil(Math.max(...products.map(p => p.price)));
  }, [products]);

  useEffect(() => {
    setFilters(prev => ({...prev, priceRange: [0, maxPrice]}));
  }, [maxPrice]);
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        const [productsData, categoriesData] = await Promise.all([
          Product.list('-created_date', 100),
          Category.list()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error("Error fetching marketplace data:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products
      .filter(p => p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
      .filter(p => filters.category ? p.category_id === filters.category : true)
      .filter(p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])
      .filter(p => filters.tags.length > 0 ? filters.tags.every(tag => p.tags?.includes(tag)) : true);

    switch(sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating_desc':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default: 
        result.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
        break;
    }
    return result;
  }, [products, filters, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedProducts, currentPage]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  
  if (error) {
    return <div className="bg-[#1e232b] text-white text-center py-40">{error}</div>;
  }
  
  return (
    <div className="bg-[#1e232b] min-h-screen">
      {/* Header section */}
      <div className="py-16 text-center text-white bg-[#222831]">
        <h1 className="text-4xl font-bold">MarketPlace</h1>
        <p className="text-sm text-gray-400 mt-2">
          <Link to={createPageUrl("Home")} className="hover:text-purple-400">TOKA</Link>
          <span className="mx-2">&gt;</span>
          <span>MARKETPLACE</span>
        </p>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3 order-2 lg:order-1">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 text-gray-300">
              <p className="text-sm">
                <span className="text-green-400">●</span> Showing 1-{paginatedProducts.length} of {filteredAndSortedProducts.length} results
              </p>
              <Select onValueChange={setSortBy} defaultValue="default">
                <SelectTrigger className="w-[180px] bg-[#2c3440] border-gray-600 text-white mt-4 md:mt-0">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent className="bg-[#2c3440] border-gray-600 text-white">
                  <SelectItem value="default">Default sorting</SelectItem>
                  <SelectItem value="rating_desc">Sort by average rating</SelectItem>
                  <SelectItem value="price_asc">Sort by price: low to high</SelectItem>
                  <SelectItem value="price_desc">Sort by price: high to low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {isLoading ? <LoadingSkeleton /> : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {paginatedProducts.map(product => (
                  <MarketPlaceProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            
            {/* Pagination */}
            {!isLoading && totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded text-sm transition-colors ${
                        currentPage === page 
                          ? 'bg-white text-black' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  {totalPages > 4 && (
                    <span className="text-gray-400 px-2">...</span>
                  )}
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <MarketPlaceSidebar 
              categories={categories}
              tags={allTags}
              filters={filters}
              setFilters={setFilters}
              maxPrice={maxPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}