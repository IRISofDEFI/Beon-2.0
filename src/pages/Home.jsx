
import React, { useState, useEffect } from 'react';
import { Product, Category, Testimonial } from '@/api/entities';

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductCarousel from '../components/home/ProductCarousel';
import FlashSale from '../components/home/FlashSale';
import Categories from '../components/home/Categories';
import PremierDestination from '../components/home/PremierDestination';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [trending, popular, cats, tests] = await Promise.all([
          Product.filter({ is_trending: true }, '-created_date', 10), // Changed limit from 3 to 10
          Product.filter({ is_popular: true }, '-created_date', 3),
          Category.list('-created_date', 4),
          Testimonial.list('-created_date', 3)
        ]);
        setTrendingProducts(trending);
        setPopularProducts(popular);
        setCategories(cats);
        setTestimonials(tests);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  
  const LoadingState = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-8 w-64" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-80 w-full" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/4" />
            </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Hero />
      <Features />
      {isLoading ? <LoadingState /> : <ProductCarousel title="Marketplace" products={trendingProducts} />}
      <FlashSale />
      {isLoading ? <LoadingState /> : <Categories categories={categories} />}
      <PremierDestination />
      {isLoading ? <LoadingState /> : <ProductCarousel title="Popular Products" products={popularProducts} />}
      {isLoading ? <div className="py-12"><Skeleton className="h-64 w-full" /></div> : <Testimonials testimonials={testimonials} />}
      <FinalCTA />
    </div>
  );
}
