import { ShieldCheck, MessageCircle, Tag, Lock } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified Farmers",
    desc: "All farmers are verified for your peace of mind.",
  },
  {
    icon: MessageCircle,
    title: "Direct Communication",
    desc: "Chat directly with farmers on WhatsApp.",
  },
  {
    icon: Tag,
    title: "Fair Prices",
    desc: "Get the best prices from trusted local farmers.",
  },
  {
    icon: Lock,
    title: "Safe & Transparent",
    desc: "No hidden fees. 100% transparent marketplace.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="shrink-0 w-9 h-9 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <Icon size={16} className="text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}