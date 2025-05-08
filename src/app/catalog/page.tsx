"use client";

import Filters from "./Filters";
import Sort from "./Sort";
import { useQuery } from "@tanstack/react-query";
import fetchData from "@/utils/fetchData";
import ROUTES from "@/config/api";
import ProductCard from "@/components/ui/ProductCard";

export default function Catalog() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", `${ROUTES.PRODUCTS.BASE}`],
    queryFn: fetchData,
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <section id="catalog-section" className="section-content">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Каталог товаров</h1>
          <p className="text-gray-600">Все товары в нашем магазине</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Filters />
          <div className="flex-1">
            <Sort />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
