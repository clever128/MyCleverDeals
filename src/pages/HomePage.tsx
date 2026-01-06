import { Sparkles, TrendingUp, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/features/ProductCard';
import BlogCard from '@/components/features/BlogCard';
import NewsletterSection from '@/components/features/NewsletterSection';
import { featuredProducts, techProducts, homeKitchenProducts, blogPosts } from '@/constants/data';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-trust-700 via-trust-600 to-trust-500 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="section-container relative py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Curated by Shopping Experts</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              The Best Deals and Finds on the Internet
            </h1>
            
            <p className="text-xl md:text-2xl text-trust-100 mb-8 max-w-2xl leading-relaxed">
              We research, compare, and handpick quality products so you can shop smarter and save more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#weekly-highlights" className="cta-button text-center text-lg">
                Explore Top Deals
              </a>
              <a
                href="/blog"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200 text-center text-lg"
              >
                Read Reviews
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">50K+</div>
                <div className="text-trust-100 text-sm">Happy Shoppers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">2,000+</div>
                <div className="text-trust-100 text-sm">Products Reviewed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
                <div className="text-trust-100 text-sm">Honest Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Highlights */}
      <section id="weekly-highlights" className="section-container py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6 text-deal-500" />
              <span className="text-sm font-semibold text-deal-600 uppercase tracking-wide">This Week</span>
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
              Weekly Highlights
            </h2>
            <p className="text-gray-600 mt-2">Handpicked deals that offer exceptional value</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Tech Gadgets */}
      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              Tech Gadgets
            </h2>
            <p className="text-gray-600">Latest tech to upgrade your digital life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Home & Kitchen */}
      <section className="section-container py-20">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
            Home & Kitchen Essentials
          </h2>
          <p className="text-gray-600">Make your home smarter and more efficient</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeKitchenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="section-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="w-6 h-6 text-deal-500" />
                <span className="text-sm font-semibold text-deal-400 uppercase tracking-wide">Most Popular</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">
                Best Sellers
              </h2>
              <p className="text-gray-300">What smart shoppers are buying right now</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="section-container py-20">
        <div className="mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-2">
            Latest Reviews & Guides
          </h2>
          <p className="text-gray-600">Expert insights to help you make informed decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 bg-trust-600 hover:bg-trust-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Reviews
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
