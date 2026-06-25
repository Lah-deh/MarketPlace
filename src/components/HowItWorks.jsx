import { Search, MessageCircle, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Browse Products",
    desc: "Search across hundreds of verified listings from Nigerian farmers. Filter by category, state, or price.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Chat with Farmer",
    desc: "Click 'Chat on WhatsApp' to connect directly with the seller. Negotiate price, ask about quantity, no middlemen.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Agree & Receive",
    desc: "Finalise your order on WhatsApp, arrange delivery or pickup, and get fresh produce from farm to you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-green-600 text-sm font-semibold uppercase tracking-widest mb-2">
            Simple Process
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            From the Farm to Your Table
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm leading-relaxed">
            Era connects you directly with verified farmers across Nigeria in three easy steps.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-green-100 z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
                
                <div className="w-20 h-20 bg-green-50 border-2 border-green-100 rounded-full flex items-center justify-center mb-5 shadow-sm">
                  <Icon size={28} className="text-green-600" />
                </div>

                
                <span className="text-xs font-bold text-green-500 tracking-widest mb-2">
                  STEP {step.number}
                </span>

                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>

        
        <div className="text-center mt-12">
          <a
            href="#featured"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors shadow-md shadow-green-100"
          >
            Start Browsing →
          </a>
        </div>
      </div>
    </section>
  );
}