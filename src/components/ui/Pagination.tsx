export default function Pagination({ productCount, countOnPage }: any) {
  return (
    <div className="flex justify-center mt-8">
      <nav className="flex items-center space-x-1">
        <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
          <i className="fas fa-chevron-left"></i>
        </button>
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            className={`px-3 py-1 rounded border ${
              p === 1
                ? "bg-primary-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}
        <span className="px-2">...</span>
        <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
          8
        </button>
        <button className="px-3 py-1 rounded border text-gray-600 hover:bg-gray-100">
          <i className="fas fa-chevron-right"></i>
        </button>
      </nav>
    </div>
  );
}
