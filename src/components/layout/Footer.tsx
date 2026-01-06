import { Link } from 'react-router-dom';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-trust-500 to-deal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MD</span>
              </div>
              <span className="font-display font-bold text-xl text-trust-700">MyCleverDeals</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your trusted source for honest reviews and the best deals across wellness, fitness, pain relief, and gadgets.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-trust-500 hover:text-trust-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-trust-500 hover:text-trust-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-trust-500 hover:text-trust-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white border border-gray-200 rounded-lg hover:border-trust-500 hover:text-trust-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (CATEGORIAS ATUALIZADAS) */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/wellness-vitality" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Wellness & Vitality
                </Link>
              </li>
              <li>
                <Link to="/category/weight-fitness" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Weight & Fitness
                </Link>
              </li>
              <li>
                <Link to="/category/pain-relief" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Pain Relief
                </Link>
              </li>
              <li>
                <Link to="/category/gadgets" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Gadgets & Gear
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Blog & Reviews
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-trust-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get exclusive coupons & deals delivered to your inbox weekly.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-trust-600 hover:bg-trust-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} MyCleverDeals. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              As an affiliate partner, we may earn commissions from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}