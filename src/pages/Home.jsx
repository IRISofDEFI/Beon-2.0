
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Product, Category, Testimonial } from '@/api/entities';
=======
import React, { useState, useEffect, useCallback } from 'react';
import { Product, Testimonial } from '@/api/entities';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
>>>>>>> ai-temp/main

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ProductCarousel from '../components/home/ProductCarousel';
import FlashSale from '../components/home/FlashSale';
import Categories from '../components/home/Categories';
import PremierDestination from '../components/home/PremierDestination';
import Testimonials from '../components/home/Testimonials';
import FinalCTA from '../components/home/FinalCTA';
import { Skeleton } from "@/components/ui/skeleton";

<<<<<<< HEAD
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
=======
const LoadingState = React.memo(() => (
  <div className="container mx-auto px-4 py-8 md:py-12">
    <div className="flex justify-between items-center mb-6 md:mb-8">
      <Skeleton className="h-6 md:h-8 w-48 md:w-64" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 md:h-80 w-full" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-6 w-1/4" />
        </div>
      ))}
    </div>
  </div>
));

LoadingState.displayName = 'LoadingState';

export default function HomePage() {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [trending, popular, tests] = await Promise.all([
        Product.filter({ is_trending: true }, '-created_date', 10),
        Product.filter({ is_popular: true }, '-created_date', 3),
        Testimonial.list('-created_date', 3)
      ]);
      
      setTrendingProducts(trending);
      setPopularProducts(popular);
      setTestimonials(tests);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600">Error loading data: {error}</p>
        <button 
          onClick={fetchData}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Categories />
      <FlashSale />
      {isLoading ? <LoadingState /> : <ProductCarousel title="Marketplace" products={trendingProducts} />}
      <PremierDestination />
      {isLoading ? <LoadingState /> : <ProductCarousel title="Popular Products" products={popularProducts} />}
      {isLoading ? (
        <div className="py-8 md:py-12">
          <Skeleton className="h-32 md:h-64 w-full" />
        </div>
      ) : (
        <Testimonials testimonials={testimonials} />
      )}
>>>>>>> ai-temp/main
      <FinalCTA />
    </div>
  );
}
