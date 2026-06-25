import farmerImg from "../assets/Farmer.png";

export default function Hero() {
  const stats = [
    { number: "500+", label: "Verified Farmers" },
    { number: "2,500+", label: "Products Listed" },
    { number: "20+", label: "States Reached" },
    { number: "98%", label: "Positive Feedback" },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16">

          {/* Left */}
          <div className="flex-1 max-w-xl">
            <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-4 py-2 rounded-full border border-green-100 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Connecting Nigeria's Farmers to the World
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Fresh Produce.
              <span className="block text-green-600">
                Trusted Farmers.
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-base sm:text-lg leading-relaxed">
              Buy quality agricultural products directly from verified farmers
              across Nigeria. Chat directly with sellers on WhatsApp and get
              fresh produce delivered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition">
                Browse Products
              </button>

              <button className="border border-gray-200 hover:border-green-300 text-gray-700 px-6 py-3 rounded-full font-semibold transition">
                How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-4"
                >
                  <p className="text-2xl font-extrabold text-gray-900">
                    {stat.number}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-lg">

              {/* Background glow */}
              <div className="absolute inset-0 bg-green-100 rounded-[40px] blur-3xl opacity-60"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-b from-green-50 to-green-100 rounded-[40px] overflow-hidden">
                <img
                  src={farmerImg}
                  alt="Farmer"
                  className="w-full object-cover object-top"
                />
              </div>

              {/* Top badge */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3">
                <p className="text-xs text-gray-400">
                  Active Farmers
                </p>
                <p className="text-xl font-bold text-green-600">
                  500+
                </p>
              </div>

              {/* Bottom badge */}
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-4 py-3">
                <p className="text-xs text-gray-400">
                  Live Listings
                </p>
                <p className="font-bold text-green-600">
                  2,500+
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}