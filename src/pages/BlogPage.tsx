import BlogCard from '@/components/features/BlogCard';
import NewsletterSection from '@/components/features/NewsletterSection';
import { blogPosts } from '@/constants/data';
import { BookOpen } from 'lucide-react';

export default function BlogPage() {
  const categories = ['All', 'Electronics', 'Home & Kitchen', 'Fashion', 'Beauty & Wellness'];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-trust-600" />
            <span className="text-sm font-semibold text-trust-600 uppercase tracking-wide">Reviews & Guides</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Expert Product Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            In-depth analysis, honest opinions, and practical buying guides to help you choose the best products for your needs.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="border-b border-gray-200 bg-white sticky top-[73px] z-40">
        <div className="section-container py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  category === 'All'
                    ? 'bg-trust-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
