export default function Filters() {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
        <h3 className="font-medium text-lg mb-4">Фильтры</h3>

        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Категории</h4>
          <div className="space-y-2">
            {["Электроника", "Аксессуары", "Компьютеры", "Гаджеты"].map(
              (cat) => (
                <label key={cat} className="flex items-center">
                  <input type="checkbox" className="rounded text-primary-600" />
                  <span className="ml-2">{cat}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Price Range */}
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

        {/* Brands */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Бренды</h4>
          <div className="space-y-2">
            {["Apple", "Samsung", "Xiaomi", "Huawei"].map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="rounded text-primary-600" />
                <span className="ml-2">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <h4 className="font-medium mb-2">Рейтинг</h4>
          <div className="space-y-2">
            {[5, 4, 3].map((stars) => (
              <label key={stars} className="flex items-center">
                <input type="checkbox" className="rounded text-primary-600" />
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`${
                        i < stars ? "fas" : "far"
                      } fa-star text-yellow-400`}
                    ></i>
                  ))}
                </div>
              </label>
            ))}
          </div>
        </div>

        <button className="w-full text-primary-600 underline">
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
}
