import React from 'react';

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}