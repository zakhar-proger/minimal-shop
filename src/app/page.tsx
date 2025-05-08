"use client";

import ProductCard from "@/components/ui/ProductCard";
import { useQuery } from "@tanstack/react-query";
import ROUTES from "@/config/api";
import fetchData from "@/utils/fetchData";

export default function Home() {
  const {
    data: newProducts,
    isLoading: newProductsLoading,
    error: newProductsError,
  } = useQuery({
    queryKey: ["newProducts", `${ROUTES.PRODUCTS.NEW}?limit=4`],
    queryFn: fetchData,
  });

  const {
    data: hitProducts,
    isLoading: hitProductsLoading,
    error: hitProductsError,
  } = useQuery({
    queryKey: ["hitProducts", `${ROUTES.PRODUCTS.HITS}?limit=4`],
    queryFn: fetchData,
  });

  const {
    data: discountProducts,
    isLoading: discountProductsLoading,
    error: discountProductsError,
  } = useQuery({
    queryKey: ["products", `${ROUTES.PRODUCTS.DISCOUNTS}?limit=4`],
    queryFn: fetchData,
  });

  return (
    <main className="container mx-auto px-4 py-6">
      {/*  Home Section  */}
      <section id="home-section" className="section-content">
        {/*  Banner Slider  */}
        <div className="relative overflow-hidden rounded-xl shadow-sm mb-8 h-64 md:h-96">
          <div className="banner-slide absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white opacity-100">
            <div className="text-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Новая коллекция
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Скидки до 30% на все товары
              </p>
              <button className="bg-white text-primary-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Подробнее
              </button>
            </div>
          </div>
          <div className="banner-slide absolute inset-0 bg-gradient-to-r from-secondary-700 to-secondary-500 flex items-center justify-center text-white opacity-0">
            <div className="text-center px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Бесплатная доставка
              </h2>
              <p className="text-lg md:text-xl mb-6">
                При заказе от 5000 рублей
              </p>
              <button className="bg-white text-secondary-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Подробнее
              </button>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"></button>
            <button className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"></button>
          </div>
        </div>

        {/*  Product Collections  */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-6 bg-primary-600 mr-3"></span>
            Новинки
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {newProductsLoading ? (
              <h1>Loading...</h1>
            ) : (
              newProducts?.map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </div>
        </div>

        {/*  Bestsellers  */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-6 bg-primary-600 mr-3"></span>
            Хиты продаж
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {hitProductsLoading ? (
              <h1>Loading...</h1>
            ) : (
              hitProducts?.map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </div>
        </div>

        {/*  Discounts  */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="w-2 h-6 bg-primary-600 mr-3"></span>
            Скидки
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {discountProductsLoading ? (
              <h1>Loading...</h1>
            ) : (
              discountProducts?.map((product: any) => {
                return <ProductCard key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
