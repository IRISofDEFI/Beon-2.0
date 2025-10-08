import React from 'react';

<<<<<<< HEAD
export default function PremierDestination() {
  const brandBlue = 'rgb(73, 115, 162)';
  return (
    <div className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/c5f50898f_Beonchainecommersstore.png" alt="Assortment of plants" className="rounded-lg shadow-lg" />
          </div>
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold mb-6">Your Premier Destination for All Green.</h2>
            <p className="mb-8 text-lg">
              At Urban Jungle Co., we believe in the transformative power of plants. We offer a curated selection of beautiful and healthy plants to bring nature into your home and enhance your living space.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="text-4xl font-bold" style={{ color: brandBlue }}>98%</p>
                <p className="text-gray-500">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold" style={{ color: brandBlue }}>103K</p>
                <p className="text-gray-500">Plants Sold</p>
=======
const PremierDestination = React.memo(() => {
  const brandBlue = 'rgb(73, 115, 162)';
  
  return (
    <div className="bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68c36d1f7b5c72e28f3e8d6e/c5f50898f_Beonchainecommersstore.png" 
              alt="Assortment of plants" 
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="text-gray-700 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Your Premier Destination for All Green.
            </h2>
            <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              At Urban Jungle Co., we believe in the transformative power of plants. We offer a curated selection of beautiful and healthy plants to bring nature into your home and enhance your living space.
            </p>
            <div className="flex gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: brandBlue }}>98%</p>
                <p className="text-gray-500 text-sm md:text-base">Customer Satisfaction</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold" style={{ color: brandBlue }}>103K</p>
                <p className="text-gray-500 text-sm md:text-base">Plants Sold</p>
>>>>>>> ai-temp/main
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
});

PremierDestination.displayName = 'PremierDestination';

export default PremierDestination;
>>>>>>> ai-temp/main
