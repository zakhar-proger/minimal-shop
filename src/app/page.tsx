"use client";

import ProductCard from "@/components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import ROUTES from "@/config/api";

async function fetchData({ queryKey }: { queryKey: [string, string] }) {
  const [, url] = queryKey;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}

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

      {/*  Catalog Section  */}
      <section id="catalog-section" className="section-content hidden">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Каталог товаров</h1>
          <p className="text-gray-600">Все товары в нашем магазине</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/*  Filters  */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h3 className="font-medium text-lg mb-4">Фильтры</h3>

              {/*  Categories  */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Категории</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Электроника</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Аксессуары</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Компьютеры</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Гаджеты</span>
                  </label>
                </div>
              </div>

              {/*  Price Range  */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Цена</h4>
                <div className="flex items-center justify-between mb-2">
                  <input
                    type="number"
                    placeholder="От"
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <span className="mx-2">—</span>
                  <input
                    type="number"
                    placeholder="До"
                    className="w-20 px-2 py-1 border rounded"
                  />
                </div>
                <button className="w-full bg-primary-600 text-white py-1 rounded hover:bg-primary-700">
                  Применить
                </button>
              </div>

              {/*  Brands  */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Бренды</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Apple</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Samsung</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Xiaomi</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <span className="ml-2">Huawei</span>
                  </label>
                </div>
              </div>

              {/*  Rating  */}
              <div className="mb-6">
                <h4 className="font-medium mb-2">Рейтинг</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <div className="flex ml-2">
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <div className="flex ml-2">
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="far fa-star text-yellow-400"></i>
                    </div>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-primary-600"
                    />
                    <div className="flex ml-2">
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="fas fa-star text-yellow-400"></i>
                      <i className="far fa-star text-yellow-400"></i>
                      <i className="far fa-star text-yellow-400"></i>
                    </div>
                  </label>
                </div>
              </div>

              <button className="w-full text-primary-600 underline">
                Сбросить фильтры
              </button>
            </div>
          </div>

          {/*  Products Grid  */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <span className="mr-2">Сортировка:</span>
                <select className="border rounded px-3 py-1">
                  <option>По популярности</option>
                  <option>По цене (сначала дешевые)</option>
                  <option>По цене (сначала дорогие)</option>
                  <option>По новизне</option>
                  <option>По рейтингу</option>
                </select>
              </div>
              <div>
                <span className="text-gray-600">Найдено 48 товаров</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/*  Repeat product cards from home section  */}
              {/*  Product Card 1  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">Умные часы</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(24)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">12 990 ₽</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/*  Product Card 2  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    Беспроводные наушники
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(42)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">8 490 ₽</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/*  Product Card 3  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    -15%
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">Смартфон</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(87)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 line-through">
                        34 990 ₽
                      </span>
                      <span className="font-bold text-gray-800 ml-2">
                        29 990 ₽
                      </span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/*  Product Card 4  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    Электронная книга
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(31)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">9 990 ₽</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/*  Product Card 5  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    TOP
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">Ноутбук</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(112)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">64 990 ₽</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/*  Product Card 6  */}
              <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-1">
                    Фитнес-браслет
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(56)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">3 990 ₽</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <i className="fas fa-shopping-cart"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/*  Pagination  */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-1">
                <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="px-3 py-1 rounded border bg-primary-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                  3
                </button>
                <span className="px-2">...</span>
                <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                  8
                </button>
                <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/*  Product Detail Section  */}
      <section id="product-section" className="section-content hidden">
        <div className="mb-4">
          <a href="#" className="text-primary-600 hover:underline">
            ← Назад к каталогу
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/*  Product Images  */}
            <div className="md:w-1/2 p-6">
              <div className="relative mb-4 h-96 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  id="main-product-image"
                  src="https://via.placeholder.com/600x600"
                  alt="Product"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  <button className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"></button>
                  <button className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"></button>
                  <button className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"></button>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="w-20 h-20 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x600"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button className="w-20 h-20 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x600/333"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
                <button className="w-20 h-20 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/600x600/666"
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>

            {/*  Product Info  */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Умные часы Premium
              </h1>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <span className="text-sm text-gray-600">4.5 (24 отзыва)</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-sm text-green-600">В наличии</span>
              </div>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-800">
                  12 990 ₽
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  14 990 ₽
                </span>
                <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded">
                  -13%
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-2">Цвет</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 rounded-full border-2 border-gray-300 focus:border-primary-600 bg-black"></button>
                  <button className="w-8 h-8 rounded-full border-2 border-gray-300 focus:border-primary-600 bg-gray-400"></button>
                  <button className="w-8 h-8 rounded-full border-2 border-gray-300 focus:border-primary-600 bg-blue-600"></button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-2">Память</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded hover:bg-primary-600 hover:text-white">
                    8GB
                  </button>
                  <button className="px-3 py-1 border rounded bg-primary-600 text-white">
                    16GB
                  </button>
                  <button className="px-3 py-1 border rounded hover:bg-primary-600 hover:text-white">
                    32GB
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                      -
                    </button>
                    <span className="px-3 py-1 border-x">1</span>
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                      +
                    </button>
                  </div>
                  <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded">
                    <i className="fas fa-shopping-cart mr-2"></i> В корзину
                  </button>
                </div>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  Характеристики
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <span className="font-medium">Бренд:</span> PremiumTech
                  </li>
                  <li>
                    <span className="font-medium">Модель:</span> SmartWatch X200
                  </li>
                  <li>
                    <span className="font-medium">Экран:</span> 1.5" AMOLED,
                    450x450
                  </li>
                  <li>
                    <span className="font-medium">Процессор:</span> Quad-core
                    1.2GHz
                  </li>
                  <li>
                    <span className="font-medium">Память:</span> 16GB встроенной
                  </li>
                  <li>
                    <span className="font-medium">Батарея:</span> 450mAh, до 7
                    дней
                  </li>
                  <li>
                    <span className="font-medium">Защита:</span> IP68,
                    водостойкость
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/*  Tabs  */}
          <div className="border-t">
            <div className="flex border-b">
              <button className="tab-btn px-6 py-3 font-medium text-primary-600 border-b-2 border-primary-600">
                Описание
              </button>
              <button className="tab-btn px-6 py-3 font-medium text-gray-600 hover:text-primary-600">
                Характеристики
              </button>
              <button className="tab-btn px-6 py-3 font-medium text-gray-600 hover:text-primary-600">
                Отзывы (24)
              </button>
            </div>

            <div className="p-6">
              {/*  Description Tab  */}
              <div id="description" className="tab-content active">
                <h3 className="font-medium text-lg mb-3">Описание товара</h3>
                <p className="text-gray-600 mb-4">
                  Умные часы PremiumTech SmartWatch X200 - это стильный и
                  функциональный гаджет, который станет вашим надежным спутником
                  в повседневной жизни. С помощью этих часов вы сможете
                  отслеживать свою активность, получать уведомления со
                  смартфона, контролировать пульс и даже совершать бесконтактные
                  платежи.
                </p>
                <p className="text-gray-600 mb-4">
                  Яркий AMOLED-экран с высоким разрешением обеспечивает четкое
                  изображение даже на солнце, а мощный процессор гарантирует
                  плавную работу интерфейса. Часы поддерживают более 20
                  спортивных режимов, включая бег, плавание, велоспорт и йогу.
                </p>
                <p className="text-gray-600">
                  Благодаря защите IP68 часы можно использовать в бассейне и под
                  дождем. Встроенный GPS точно отслеживает ваши маршруты, а
                  функция бесконтактной оплаты NFC позволяет расплачиваться, не
                  доставая телефон.
                </p>
              </div>

              {/*  Specifications Tab  */}
              <div id="specs" className="tab-content">
                <h3 className="font-medium text-lg mb-3">
                  Технические характеристики
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Основные</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        <span className="font-medium">Бренд:</span> PremiumTech
                      </li>
                      <li>
                        <span className="font-medium">Модель:</span> SmartWatch
                        X200
                      </li>
                      <li>
                        <span className="font-medium">Цвет:</span> Черный
                      </li>
                      <li>
                        <span className="font-medium">Материал корпуса:</span>
                        Алюминий
                      </li>
                      <li>
                        <span className="font-medium">Материал ремешка:</span>
                        Силикон
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Экран</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        <span className="font-medium">Тип:</span> AMOLED
                      </li>
                      <li>
                        <span className="font-medium">Диагональ:</span> 1.5
                        дюйма
                      </li>
                      <li>
                        <span className="font-medium">Разрешение:</span> 450x450
                        пикселей
                      </li>
                      <li>
                        <span className="font-medium">Сенсорный:</span> Да
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Производительность</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        <span className="font-medium">Процессор:</span>{" "}
                        Quad-core 1.2GHz
                      </li>
                      <li>
                        <span className="font-medium">Оперативная память:</span>
                        512MB
                      </li>
                      <li>
                        <span className="font-medium">Встроенная память:</span>{" "}
                        16GB
                      </li>
                      <li>
                        <span className="font-medium">
                          Операционная система:
                        </span>
                        Wear OS
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Функции</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>
                        <span className="font-medium">GPS:</span> Да
                      </li>
                      <li>
                        <span className="font-medium">NFC:</span> Да
                      </li>
                      <li>
                        <span className="font-medium">Сенсор пульса:</span> Да
                      </li>
                      <li>
                        <span className="font-medium">Шагомер:</span> Да
                      </li>
                      <li>
                        <span className="font-medium">
                          Водонепроницаемость:
                        </span>
                        IP68
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/*  Reviews Tab  */}
              <div id="reviews" className="tab-content">
                <h3 className="font-medium text-lg mb-3">Отзывы покупателей</h3>

                <div className="mb-8">
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400 mr-2">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                    <span className="text-sm text-gray-600">
                      4.5 на основе 24 отзывов
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <span className="w-16 text-sm text-gray-600">
                        5 звезд
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="w-[70%] bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="w-8 text-sm text-gray-600">70%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm text-gray-600">
                        4 звезды
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="w-[20%] bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="w-8 text-sm text-gray-600">20%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm text-gray-600">
                        3 звезды
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="w-[5%] bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="w-8 text-sm text-gray-600">5%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm text-gray-600">
                        2 звезды
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="w-[3%] bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="w-8 text-sm text-gray-600">3%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-16 text-sm text-gray-600">
                        1 звезда
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="w-[2%] bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="w-8 text-sm text-gray-600">2%</span>
                    </div>
                  </div>

                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded">
                    Написать отзыв
                  </button>
                </div>

                <div className="space-y-6">
                  {/*  Review 1  */}
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span className="font-medium">Александр</span>
                      <span className="text-sm text-gray-500 ml-2">
                        2 недели назад
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">
                      Отличные часы за свои деньги
                    </h4>
                    <p className="text-gray-600">
                      Пользуюсь уже месяц, очень доволен. Экран яркий, сенсор
                      отзывчивый. Батареи хватает на 5-6 дней при умеренном
                      использовании. Очень удобно получать уведомления и
                      отвечать на звонки. Рекомендую!
                    </p>
                  </div>

                  {/*  Review 2  */}
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                      <span className="font-medium">Елена</span>
                      <span className="text-sm text-gray-500 ml-2">
                        3 недели назад
                      </span>
                    </div>
                    <h4 className="font-medium mb-1">
                      Хорошие, но есть нюансы
                    </h4>
                    <p className="text-gray-600">
                      В целом часы хорошие, но иногда бывают небольшие лаги при
                      переключении экранов. Дизайн стильный, ремешок удобный.
                      GPS работает точно, что важно для бега. Жаль, что нет
                      возможности установить дополнительные приложения из
                      магазина.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Recommended Products  */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Рекомендуем также</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/*  Product Card 13  */}
            <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Чехол для часов
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(12)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">1 290 ₽</span>
                  <button className="text-primary-600 hover:text-primary-800">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>

            {/*  Product Card 14  */}
            <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Зарядное устройство
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(18)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">2 490 ₽</span>
                  <button className="text-primary-600 hover:text-primary-800">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>

            {/*  Product Card 15  */}
            <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  -10%
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Ремешок спортивный
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(27)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500 line-through">
                      1 990 ₽
                    </span>
                    <span className="font-bold text-gray-800 ml-2">
                      1 790 ₽
                    </span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-800">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>

            {/*  Product Card 16  */}
            <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Защитное стекло
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(9)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">890 ₽</span>
                  <button className="text-primary-600 hover:text-primary-800">
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Cart Section  */}
      <section id="cart-section" className="section-content hidden">
        <div className="mb-4">
          <a href="#" className="text-primary-600 hover:underline">
            ← Продолжить покупки
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="md:flex">
            {/*  Cart Items  */}
            <div className="md:w-2/3 p-6">
              <h2 className="text-xl font-bold mb-6">Корзина (3 товара)</h2>

              {/*  Cart Item 1  */}
              <div className="flex border-b pb-6 mb-6">
                <div className="w-24 h-24 flex-shrink-0 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Умные часы</h3>
                      <p className="text-sm text-gray-600">Цвет: черный</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        -
                      </button>
                      <span className="px-3 py-1 border-x">1</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                    <span className="font-bold text-gray-800">12 990 ₽</span>
                  </div>
                </div>
              </div>

              {/*  Cart Item 2  */}
              <div className="flex border-b pb-6 mb-6">
                <div className="w-24 h-24 flex-shrink-0 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Беспроводные наушники
                      </h3>
                      <p className="text-sm text-gray-600">Цвет: белый</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        -
                      </button>
                      <span className="px-3 py-1 border-x">2</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                    <span className="font-bold text-gray-800">16 980 ₽</span>
                  </div>
                </div>
              </div>

              {/*  Cart Item 3  */}
              <div className="flex pb-6">
                <div className="w-24 h-24 flex-shrink-0 border rounded overflow-hidden">
                  <img
                    src="https://via.placeholder.com/300x300"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Фитнес-браслет
                      </h3>
                      <p className="text-sm text-gray-600">Цвет: синий</p>
                    </div>
                    <button className="text-gray-400 hover:text-red-500">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        -
                      </button>
                      <span className="px-3 py-1 border-x">1</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                        +
                      </button>
                    </div>
                    <span className="font-bold text-gray-800">3 990 ₽</span>
                  </div>
                </div>
              </div>
            </div>

            {/*  Order Summary  */}
            <div className="md:w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Сводка заказа</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Промежуточный итог</span>
                  <span className="font-medium">33&nbsp;960&nbsp;₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span className="font-medium">350&nbsp;₽</span>
                </div>
                <div className="flex justify-between">
                  <span>Налог (10%)</span>
                  <span className="font-medium">3&nbsp;431&nbsp;₽</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold">
                  <span>Итоговая сумма</span>
                  <span>37&nbsp;741&nbsp;₽</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded">
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*  Checkout Section  */}
      <section id="checkout-section" className="section-content hidden">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Оформление заказа</h1>
          <form className="space-y-8">
            {/*  Контакт  */}
            <div id="step-contact" className="checkout-step active">
              <h2 className="text-xl font-semibold mb-4">
                1. Контактные данные
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <button
                type="button"
                className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded"
              >
                Далее
              </button>
            </div>
            {/*  Доставка  */}
            <div id="step-delivery" className="checkout-step">
              <h2 className="text-xl font-semibold mb-4">2. Доставка</h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Адрес"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Город"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Почтовый индекс"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded"
                >
                  Назад
                </button>
                <button
                  type="button"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded"
                >
                  Далее
                </button>
              </div>
            </div>
            {/*  Оплата  */}
            <div id="step-payment" className="checkout-step">
              <h2 className="text-xl font-semibold mb-4">3. Оплата</h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Номер карты"
                  className="w-full px-4 py-2 border rounded"
                  required
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 px-4 py-2 border rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 px-4 py-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded"
                >
                  Назад
                </button>
                <button
                  type="button"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded"
                >
                  Далее
                </button>
              </div>
            </div>
            {/*  Подтверждение  */}
            <div id="step-confirmation" className="checkout-step">
              <h2 className="text-xl font-semibold mb-4">4. Подтверждение</h2>
              <p className="mb-6">
                Спасибо за ваш заказ! Наш менеджер свяжется с вами в ближайшее
                время.
              </p>
              <button
                type="button"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded"
              >
                Вернуться на главную
              </button>
            </div>
          </form>
        </div>
      </section>

      {/*  Profile Section  */}
      <section id="profile-section" className="section-content hidden">
        <div className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6">Профиль пользователя</h1>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Имя</label>
              <input
                type="text"
                value="Иван Иванов"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value="ivan@example.com"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Телефон</label>
              <input
                type="tel"
                value="+7 900 123-45-67"
                className="w-full px-4 py-2 border rounded"
              />
            </div>
            <button className="self-end bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded mt-4">
              Сохранить профиль
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
