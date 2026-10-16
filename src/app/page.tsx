
import ProductCard from "./_components/ProductCard/ProductCard";
import Footer from "./_components/Footer/Footer";
import { ChevronRight, History } from "lucide-react";
import Link from "next/link";



interface ApiProduct {
  id: number;
  title: string;
  brand?: string;
  price: number;
  thumbnail: string;
}

interface DummyJsonResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}


async function getProducts(): Promise<ApiProduct[]> {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=6", {
      next: { revalidate: 60 }, 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data: DummyJsonResponse = await res.json();
    return data.products; 
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; 
  }
}

export default async function Home() {
  const products = await getProducts();

  
  const mappedProducts = products.map((p) => ({
    id: p.id,
    image: p.thumbnail,
    title: p.title,
    brand: p.brand ?? "Unknown",
    isBestPrice: true,
    prices: [
      {
        store: "amazon",
        price: p.price.toFixed(0),
        iconColor: "bg-yellow-500",
      },
      {
        store: "noon",
        price: (p.price * 0.95).toFixed(0),
        iconColor: "bg-yellow-400",
      },
      {
        store: "extra",
        price: (p.price * 1.05).toFixed(0),
        iconColor: "bg-blue-500",
      },
    ],
  }));

  return (
    <main className="h-100vh bg-gray-50 dark:bg-[#0b1120] font-sans flex flex-col transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 space-y-5 flex-1 w-full">
        {/* Welcome Banner */}
        <section
          className="bg-linear-to-r from-teal-50 to-teal-100
                        dark:from-[#0f172a] dark:to-[#0d9488]/20
                        rounded-2xl p-4 flex justify-between items-center
                        border border-teal-200 dark:border-teal-900/30
                        relative overflow-hidden"
        >
          <div className="z-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              👋 Welcome back, Ahmed! 👋
            </h2>
            <p className=" text-teal-700 ml-13 dark:text-teal-200/80">
              Great deals, better prices, all in one place.
            </p>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 hidden sm:flex items-center justify-end pr-10">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Banner"
              className="h-32 object-contain opacity-80"
            />
          </div>
        </section>

        {/* Top Deals Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="text-orange-500">🔥</span> Top Deals for You
            </h2>
            <button className="text-teal-600 dark:text-teal-400 text-sm flex items-center hover:underline">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          {mappedProducts.length === 0 ? (
            <p className="text-gray-400 text-center py-10">
              No products found. Please try again later.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mappedProducts.map((product) => (
                <Link href="#" key={product.id}>
                  <ProductCard key={product.id} {...product} />
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Recently Viewed */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <History className="w-5 h-5 text-gray-500 dark:text-gray-400" />{" "}
              Recently Viewed
            </h2>
            <div className="flex gap-2">
              <button className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              <button className="p-1 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="min-w-37.5 bg-white dark:bg-[#111a2c]
                       border border-gray-200 dark:border-gray-800
                       rounded-xl p-2 flex gap-3 items-center"
              >
                <div className="">
                  <img
                    src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-max-1.jpg"
                    alt="Recent"
                    className="w-16 h-16 object-contain rounded-lg "
                  />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white text-sm text-center font-sans">
                    iPhone 15 Pro
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-[13px]">
                    Apple
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
