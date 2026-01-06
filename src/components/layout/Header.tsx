import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const categories = [
    // Nome no Menu        // Link da Categoria (Slug)
    { name: 'Weight & Fitness', path: '/category/weight-fitness' },
    { name: 'Pain Relief', path: '/category/pain-relief' },
    { name: 'Wellness & Vitality', path: '/category/wellness-vitality' },
    // Mantive uma genérica caso queira vender gadgets variados, se não quiser, apague a linha abaixo:
    { name: 'Gadgets & Gear', path: '/category/gadgets' }, 
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-trust-600 text-white py-2">
        <div className="section-container">
          <p className="text-center text-sm font-medium">
            🎉 New Year Sale: Up to 60% OFF on Selected Items!
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-trust-500 to-deal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MD</span>
            </div>
            <span className="font-display font-bold text-xl text-trust-700">MyCleverDeals</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-trust-600 font-medium transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-700 hover:text-trust-600 font-medium transition-colors"
              >
                {category.name}
              </Link>
            ))}
            <Link to="/blog" className="text-gray-700 hover:text-trust-600 font-medium transition-colors">
              Blog & Reviews
            </Link>
          </nav>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="section-container py-4 flex flex-col gap-3">
            <Link
              to="/"
              className="py-2 text-gray-700 hover:text-trust-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="py-2 text-gray-700 hover:text-trust-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            <Link
              to="/blog"
              className="py-2 text-gray-700 hover:text-trust-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog & Reviews
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
