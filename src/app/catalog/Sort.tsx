"use client";

import { useState } from "react";

interface SortProps {
  onChange: (sort: string) => void;
}

export default function Sort({ onChange }: SortProps) {
  const [sort, setSort] = useState("popular");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    onChange(value); // сообщаем родителю о смене сортировки
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center">
        <span className="mr-2">Сортировка:</span>
        <select
          value={sort}
          onChange={handleChange}
          className="border rounded px-3 py-1"
        >
          <option value="popular">По популярности</option>
          <option value="price_asc">По цене (сначала дешевые)</option>
          <option value="price_desc">По цене (сначала дорогие)</option>
          <option value="newest">По новизне</option>
          {/* <option value="rating">По рейтингу</option> */}
        </select>
      </div>
    </div>
  );
}
