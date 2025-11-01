import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md bg-green-700/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                {/* Placeholder image: replace /logo.png with your PNG in public/ or use an imported asset */}
                <img
                  src="https://previews.dropbox.com/p/thumb/ACzFLWshn_ykf9LuBtjZ9rc_YGe6iRbZdqtPh8nS5glKqZD_RAECIa7xtNGiOtoWh0dU6yLFJpCa8-xWOunyprfZbChIFUYCumkgOs7GKh7Atg6SNqVVOPYKpxu3TcaExAZdxmYtBnCDwOThKIpwws9bhAYHECoJlmGT7qlRLtuIN6R6q4pdxuuxcawYYT3MrbHfjFBKOEyz_nUFgDeRiQk0Hq5ytwFSlKU8WyejGzSSrKbOXkXVlQZwG1KgEsXx0fEoliDcPyr9I1sIBqltrezCal8P2zliYH_-V4zkeDl6LYiwT8LSgjGeb6Nbzw3Ug3VBhhmFhMMWzdA5NJLjHz6v/p.png?is_prewarmed=true"
                  alt="Shinung Square logo"
                  className="block w-full h-full object-contain"
                  onError={(e) => {
                    // fallback to a local logo in public/logo.png if the external URL fails on some devices
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = "/logo.png";
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold">Shinung Square</h3>
                <p className="text-sm text-gray-400">
                  Premium Seafood & Catering
                </p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 max-w-sm">
              Your one-stop shop for premium seafood, natural spices, and
              professional catering services — delivered fresh and handled with
              care.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/12 transition"
              >
                {/* Instagram SVG */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 11.37A3 3 0 1112.63 9 3 3 0 0115 11.37z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/12 transition"
              >
                {/* Facebook SVG */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="#"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/12 transition"
              >
                {/* Fixed TikTok SVG (simpler, filled icon to render reliably on phones) */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2v9.25A3.75 3.75 0 1 0 15.75 13V6.5h-3.75V2z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.25 16.5a3.75 3.75 0 1 0 3.75 3.75v-3.75A3.75 3.75 0 0 1 8.25 16.5z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-400">
              <a href="#home" className="hover:text-green-400 transition">
                Home
              </a>
              <a href="#products" className="hover:text-green-400 transition">
                Products
              </a>
              <a href="#about" className="hover:text-green-400 transition">
                About
              </a>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Stay in the loop</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates, specials and seasonal
              offers.
            </p>

            <form
              className="flex gap-2 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-md bg-white/5 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+234 812 609 1840</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Mail className="w-5 h-5 text-green-400" />
                <span>shiningsquare@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 mt-2 text-gray-400">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shinung Square. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:text-green-400 transition">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-green-400 transition">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
