import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import { blogPosts } from '@/constants/data';
import NewsletterSection from '@/components/features/NewsletterSection';

export default function BlogPostPage() {
  const { slug } = useParams();
  // Busca o post correto
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-trust-600 hover:text-trust-700 font-semibold">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Se não tiver link cadastrado, usa '#' para não quebrar
  const buyLink = (post as any).affiliateLink || '#';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="section-container">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-trust-600 hover:text-trust-700 font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reviews
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block bg-trust-100 text-trust-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image - Ajustado para não cortar na página do post */}
      <section className="section-container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-white rounded-2xl shadow-medium p-4 flex items-center justify-center">
             <img
               src={post.image}
               alt={post.title}
               className="max-h-[500px] w-auto object-contain"
             />
          </div>
        </div>
      </section>

      {/* Content Dinâmico */}
      <article className="section-container pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              {post.excerpt}
            </p>

            {/* Renderiza o HTML vindo do data.ts */}
            {post.content ? (
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="text-gray-700 leading-relaxed space-y-6"
              />
            ) : (
              <p className="text-gray-500 italic">Content coming soon...</p>
            )}

            {/* CTA Final com Link Correto */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-center my-12">
              <h3 className="font-display font-bold text-2xl text-white mb-3">
                Ready to Make Your Purchase?
              </h3>
              <p className="text-gray-300 mb-6">
                Check the latest prices and availability from trusted retailers
              </p>
              
              {/* O LINK CORRIGIDO AQUI: */}
              <a
                href={buyLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-trust-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-trust-700 transition-all shadow-lg hover:shadow-trust-200"
              >
                View Best Deals Now
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="section-container">
          <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:shadow-medium transition-all group"
              >
                <span className="text-xs font-semibold text-trust-600 mb-2 block">
                  {relatedPost.category}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-trust-600 transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}