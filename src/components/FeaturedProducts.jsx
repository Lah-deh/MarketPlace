import { useState } from "react";
import { Heart, Star, Clock, MapPin } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);


const products = [
  {
    id: 1,
    name: "Ofada Rice",
    category: "Local Rice",
    state: "Kwara State",
    price: "₦1,250",
    unit: "1kg",
    rating: 4.8,
    reviews: 24,
    replyTime: "15 mins",
    verified: true,
    seller: "Adoela Farms",
    whatsapp: "2348144316917",
    image: "/products/ofada.jpg",   
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    name: "Fresh Tomatoes",
    category: "Tomatoes",
    state: "Kaduna State",
    price: "₦6000",
    unit: "basket",
    rating: 4.9,
    reviews: 32,
    replyTime: "10 mins",
    verified: true,
    seller: "Green Fields Farm",
    whatsapp: "2348144316917",
    image: "/products/tomato.jpg",
    bgColor: "bg-red-50",
  },
  {
    id: 3,
    name: "Catfish (Live)",
    category: "Fresh from Farm",
    state: "Delta State",
    price: "₦2000",
    unit: "kg",
    rating: 4.7,
    reviews: 15,
    replyTime: "20 mins",
    verified: true,
    seller: "Delta Fishery",
    whatsapp: "2348144316917",
    image: "/products/catfish.jpg",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    name: "Yellow Maize",
    category: "Quality Maize",
    state: "Kano State",
    price: "₦3000",
    unit: "10kg",
    rating: 4.6,
    reviews: 18,
    replyTime: "12 mins",
    verified: true,
    seller: "Kano Agro Farm",
    whatsapp: "2348144316917",
    image: "/products/maize.jpg",
    bgColor: "bg-yellow-50",
  },
];

function ProductCard({ product }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I found your listing on Era Marketplace. I'm interested in your ${product.name} (${product.price}/${product.unit}). Is it still available?`
    );
    window.open(`https://wa.me/${product.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      {/* Product image */}
      <div className={`relative h-44 ${product.bgColor} overflow-hidden`}>
        {!imgError && (
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}
        {/* Fallback — shows if image errors or while loading */}
        {(imgError || !imgLoaded) && (
          <div className={`absolute inset-0 w-full h-full ${product.bgColor} flex items-center justify-center`}>
            <span className="text-5xl font-black text-white/40">
              {product.name[0]}
            </span>
          </div>
        )}

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            size={14}
            className={wishlisted ? "text-red-500 fill-red-500" : "text-gray-400"}
          />
        </button>

        {product.verified && (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            ✓ Verified
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-4">
        <p className="text-[11px] text-gray-400 mb-1">{product.category}</p>
        <h3 className="font-bold text-gray-900 text-sm mb-1">{product.name}</h3>

        <div className="flex items-center gap-1 text-gray-400 mb-3">
          <MapPin size={11} />
          <span className="text-[11px]">{product.state}</span>
        </div>

        <p className="text-lg font-extrabold text-gray-900 mb-1">
          {product.price}{" "}
          <span className="text-sm font-normal text-gray-400">/ {product.unit}</span>
        </p>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-[8px] font-bold text-green-700">{product.seller[0]}</span>
            </div>
            <span className="text-[11px] text-gray-600">{product.seller}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={11} className="text-amber-400 fill-amber-400" />
            <span className="text-[11px] font-semibold text-gray-700">{product.rating}</span>
            <span className="text-[11px] text-gray-400">({product.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-400 mb-3">
          <Clock size={11} />
          <span className="text-[11px]">Replies within {product.replyTime}</span>
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 text-white text-sm font-semibold py-2.5 rounded-xl transition-all"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-900">Featured Products</h2>
          <a href="#" className="text-sm text-green-600 font-medium hover:underline flex items-center gap-1">
            View all products →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}