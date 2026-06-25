const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/*
                IMAGE SLOT — footer logo (white version)
                <img src="/images/logo-white.png" alt="Era Marketplace" className="h-8 w-auto" />
              */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 text-xs font-bold">E</span>
              </div>
              <div className="leading-none">
                <p className="text-sm font-bold text-white">Era</p>
                <p className="text-[10px] text-green-300 font-medium">Marketplace</p>
              </div>
            </div>
            <p className="text-sm text-green-300 leading-relaxed mb-5 max-w-xs">
              Connecting farmers directly with buyers. Supporting local, building a better future.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <WhatsAppIcon />
              </a>
              {["f", "ig", "in"].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-green-800 hover:bg-green-600 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Marketplace links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Marketplace</p>
            <ul className="space-y-2.5 text-sm text-green-300">
              {["Categories", "All Products", "How it works", "Become a Seller"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-green-300">
              {["About Us", "Contact Us", "Careers", "Blog"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Stay connected */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Stay Connected</p>
            <p className="text-sm text-green-300 mb-4 leading-relaxed">
              Join our WhatsApp channel for updates and tips.
            </p>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <WhatsAppIcon />
              Join on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-green-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-green-400">© 2026 Era Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-green-400">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}