import Image from "next/image";

interface ProductCardPorps {
  product: {
    id: number;
    name: string;
    description?: string;
    price: number;
    discountPercent?: number;
    inHit?: boolean;
    createdAt: Date;
    images: any[];
  };
}

export default function ProductCard({ product }: ProductCardPorps) {
  return (
    <div className="product-card bg-white rounded-lg shadow-sm overflow-hidden transition duration-300">
      <div className="p-5 relative h-48 w-auto">
        <Image
          src={product.images[0].url}
          alt={product.name}
          width={192} // Оставляем значение 0, чтобы использовать auto width
          height={192} // Оставляем значение 0, чтобы использовать auto height
          className="object-contain w-full h-full"
        />
        {/* <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          NEW
        </span> */}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
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
          <span className="font-bold text-gray-800">{product.price} бун</span>
          <button className="text-primary-600 hover:text-primary-800">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
