import { useParams } from 'react-router-dom';
import ProductCard from '@/components/features/ProductCard';
import NewsletterSection from '@/components/features/NewsletterSection';
import { allCategoryProducts } from '@/constants/data';
import { Category } from '@/types';

// Mapeamento: Define o Título e Ícone para CADA categoria (Antiga e Nova)
const categoryInfo: Record<string, { title: string; description: string; icon: string }> = {
  // --- NOVAS CATEGORIAS ---
  'weight-fitness': {
    title: 'Weight & Fitness',
    description: 'Supplements and tools to help you reach your body goals.',
    icon: '💪',
  },
  'pain-relief': {
    title: 'Pain Relief Solutions',
    description: 'Effective relief for joints, back pain, and mobility.',
    icon: '😌',
  },
  'wellness-vitality': {
    title: 'Wellness & Vitality',
    description: 'Boost your energy, dental health, and overall well-being.',
    icon: '✨',
  },
  'gadgets': {
    title: 'Gadgets & Gear',
    description: 'Smart tech to upgrade your daily life.',
    icon: '🚀',
  },
  // --- CATEGORIAS ANTIGAS (Mantidas para segurança) ---
  electronics: { title: 'Electronics', description: 'Latest tech gadgets', icon: '💻' },
  'home-living': { title: 'Home & Living', description: 'Upgrade your space', icon: '🏠' },
  fashion: { title: 'Fashion', description: 'Style essentials', icon: '👔' },
  'beauty-wellness': { title: 'Beauty', description: 'Self-care routines', icon: '✨' },
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  // O "as string" evita conflito de tipos temporariamente
  const info = categoryInfo[category || ''] || null;
  
  // Busca produtos. Se não achar a categoria nova, tenta retornar array vazio para não dar erro
  const products = allCategoryProducts[category as keyof typeof allCategoryProducts] || [];

  if (!info) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="font-display font-bold text-3xl mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-6">We couldn't find the category: {category}</p>
        <a href="/" className="text-trust-600 hover:text-trust-700 font-semibold">
          ← Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header da Categoria */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-b border-gray-200">
        <div className="section-container">
          <div className="text-5xl mb-4">{info.icon}</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {info.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            {info.description}
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-600">
            <span>{products.length} products reviewed</span>
            <span>•</span>
            <span>Updated daily</span>
          </div>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
            <p className="text-gray-600 text-lg">New products are coming to this collection soon.</p>
          </div>
        )}
      </section>

      <NewsletterSection />
    </div>
  );
}