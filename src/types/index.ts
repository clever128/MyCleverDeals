export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: string;
  originalPrice?: string;
  discount?: string;
  // ADICIONEI 'New Arrival' AQUI NO FINAL 👇
  badge?: 'Hot Deal' | 'Best Seller' | 'Editor\'s Pick' | 'Trending' | 'Best Value' | 'Doctor Formulated' | 'New Arrival';
  description: string;
  affiliateLink: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content?: string;
}

// Aceita tanto as categorias antigas quanto as novas
export type Category = 
  | 'electronics' | 'home-living' | 'fashion' | 'beauty-wellness' 
  | 'weight-fitness' | 'pain-relief' | 'wellness-vitality' | 'gadgets';