

import { Heart, Bell } from "lucide-react";

interface StorePrice {
  store: string;
  price: string;
  iconColor: string;
}

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  isBestPrice?: boolean;
  prices: StorePrice[];
}

export default function ProductCard({
  image,
  title,
  brand,
  isBestPrice,
  prices,
}: ProductCardProps) {
  return (
    <div
      className="bg-white dark:bg-[#111a2c]
                    border border-gray-200 dark:border-gray-800
                    rounded-2xl p-4 flex gap-4
                    hover:border-teal-500 dark:hover:border-gray-600
                    transition-colors"
    >
      {/* Product Image */}
      <div className="w-1/3 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-xl p-2">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
      </div>

      {/* Product Details */}
      <div className="w-2/3 flex flex-col">
        <div className="flex justify-between ">
          <h3 className="text-gray-900 dark:text-white font-semibold text-sm leading-tight line-clamp-1">
            {title}
          </h3>

          <div className="flex justify-end gap-3 text-gray-400 mb-1">
            <Heart className="w-4 h-4 cursor-pointer hover:text-red-500" />
            <Bell className="w-4 h-4 cursor-pointer hover:text-yellow-500" />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{brand}</p>

        {isBestPrice && (
          <span
            className="bg-teal-100 dark:bg-teal-900/50
                           text-teal-700 dark:text-teal-400
                           text-[10px] font-medium px-2 py-0.5 rounded-full w-fit mb-3"
          >
            Best Price
          </span>
        )}

        <div className="grid grid-cols-3 gap-2 mb-3">
          {prices.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-[#1a2436]
                         rounded-lg p-1 flex flex-col items-center
                         border border-gray-200 dark:border-gray-700/50"
            >
              <div className="flex items-center gap-1 mb-1">
                <div className={`w-3 h-3 rounded-full ${item.iconColor}`}></div>
                <span className="text-[10px] text-gray-600 dark:text-gray-300 capitalize">
                  {item.store}
                </span>
              </div>
              <span className="text-xs font-bold text-gray-900 dark:text-white">
                ${item.price}
              </span>
            </div>
          ))}
        </div>

        <button
          className="mt-auto w-full bg-teal-400 hover:bg-teal-500
                           text-teal-950 text-xs font-bold py-2 rounded-lg
                           transition-colors flex items-center justify-center gap-1"
        >
          Go to Store
        </button>
      </div>
    </div>
  );
}
