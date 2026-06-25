
const categories = [
  { name: "Grains",     count: 32, image: "/products/grains.jpg",     fallbackColor: "bg-amber-100" },
  { name: "Vegetables", count: 66, image: "/products/vegetables.jpg", fallbackColor: "bg-green-100" },
  { name: "Fruits",     count: 45, image: "/products/fruits.jpg",     fallbackColor: "bg-red-100"   },
  { name: "Fishery",    count: 28, image: "/products/fishery.jpg",    fallbackColor: "bg-blue-100"  },
  { name: "Livestock",  count: 15, image: "/products/livestock.jpg",  fallbackColor: "bg-orange-100"},
  { name: "Others",     count: 12, image: "/products/others.jpg",     fallbackColor: "bg-gray-200"  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
          <a href="#" className="text-sm text-green-600 font-medium hover:underline">
            View all categories
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {categories.map(({ name, count, image, fallbackColor }) => (
            <button
              key={name}
              className="group relative rounded-2xl overflow-hidden aspect-square hover:shadow-md transition-all duration-200"
            >
              {/* Real image background */}
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />

              {/* Fallback color background (hidden unless image errors) */}
              <div
                className={`absolute inset-0 w-full h-full ${fallbackColor} items-center justify-center hidden`}
              >
                <span className="text-2xl font-black text-white/50">{name[0]}</span>
              </div>

              {/* Dark gradient overlay so text is always readable */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Text at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5 text-left">
                <p className="text-xs font-bold text-white leading-tight">{name}</p>
                <p className="text-[10px] text-white/70 mt-0.5">{count} products</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}