"use client";

import { useState, useEffect, useRef } from "react";
import Sort from "./Sort";
import ROUTES from "@/config/api";
import ProductCard from "@/components/ui/ProductCard";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("popular"); // 👈 сортировка

  const loaderRef = useRef(null);

  // Загрузка товаров
  async function loadProducts(reset = false) {
    if (loading || (!hasMore && !reset)) return;

    setLoading(true);
    const res = await fetch(
      `${ROUTES.PRODUCTS.BASE}?page=${reset ? 1 : page}&limit=9&sort=${sort}`
    );
    const data = await res.json();

    setProducts((prev) => (reset ? data : [...prev, ...data]));
    setHasMore(data.length === 6);
    setPage((prev) => (reset ? 2 : prev + 1));
    setLoading(false);
  }

  // Загрузка при монтировании и смене сортировки
  useEffect(() => {
    loadProducts(true); // reset=true при смене сортировки
  }, [sort]);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        loadProducts();
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

  return (
    <div className="flex-1">
      <Sort onChange={setSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Loader блок */}
      <div ref={loaderRef} className="text-center py-6">
        {loading
          ? "Загрузка товаров..."
          : hasMore
          ? "Прокрутите вниз для загрузки ещё"
          : "Все товары загружены!"}
      </div>
    </div>
  );
}
