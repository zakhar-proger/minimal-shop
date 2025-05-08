export default function Sort() {
  return (
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
  );
}
