import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-medium transition-all duration-300 group flex flex-col h-full">
      {/* Image Container - Fixed for full visibility */}
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-sm text-trust-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
            {post.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-display font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-trust-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Meta */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Read More */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 mt-4 text-trust-600 font-semibold hover:text-trust-700 transition-colors group/link"
        >
          Read Full Review
          <span className="group-hover/link:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </article>
  );
}