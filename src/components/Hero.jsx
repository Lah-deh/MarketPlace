import farmerImg from "../assets/Farmer.png";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-16">

          {/* Left — Text content */}
          <div className="flex-1 max-w-lg">
            <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-100 mb-6">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Connecting Nigeria's Farmers to the World
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
              Fresh Produce.{" "}
              <span className="text-green-600 block">Trusted Farmers.</span>
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Buy quality agricultural products directly from verified farmers across Nigeria. Chat with sellers on WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#featured"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors shadow-md shadow-green-100"
              >
                Browse Products
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 border border-gray-200 hover:border-green-300 text-gray-700 hover:text-green-700 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                How it works
              </a>
            </div>

            <div className="flex items-center divide-x divide-gray-200">
              {[
                { number: "500+", label: "Verified Farmers" },
                { number: "2,500+", label: "Products Listed" },
                { number: "20+", label: "States Reached" },
                { number: "98%", label: "Positive Feedback" },
              ].map((stat, i) => (
                <div key={i} className={i === 0 ? "pr-5" : "px-5"}>
                  <p className="text-xl font-extrabold text-gray-900">{stat.number}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Hero image inside green rounded container */}
          <div className="flex-1 flex justify-center items-end">
            <div className="relative w-full max-w-md">
              {/* Green rounded background card */}
              <div className="w-full rounded-3xl overflow-hidden bg-green-50 flex items-end justify-center pt-8 min-h-[400px]">
                <img
                  src={farmerImg}
                  alt="Nigerian farmer with fresh produce"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "420px" }}
                />
              </div>
              {/* Floating stat badge */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-lg px-4 py-3">
                <p className="text-xs text-gray-400 font-medium">Active Farmers</p>
                <p className="text-lg font-extrabold text-green-600">500+</p>
              </div>
              {/* Floating badge bottom right */}
              <div className="absolute bottom-5 right-5 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <p className="text-xs font-semibold text-gray-700">Live Listings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}