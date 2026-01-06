import { Star, ExternalLink } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-medium transition-all duration-300 group">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="deal-badge">{product.badge}</span>
          </div>
        )}
        {product.discount && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              {product.discount}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-xs font-medium text-trust-600 mb-2">{product.category}</div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm text-gray-900">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviewCount.toLocaleString()} reviews)
          </span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
          )}
        </div>

        {/* CTA */}
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button w-full flex items-center justify-center gap-2"
        >
          Check Best Price
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
