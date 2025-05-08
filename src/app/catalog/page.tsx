"use client";

import Filters from "./Filters";
import Products from "./Products";

export default function Catalog() {
  return (
    <main className="container mx-auto px-4 py-6">
      <section id="catalog-section" className="section-content">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Каталог товаров</h1>
          <p className="text-gray-600">Все товары в нашем магазине</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Filters />
          <Products />
        </div>
      </section>
    </main>
  );
}
