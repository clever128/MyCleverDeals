import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! Check your email for exclusive deals.');
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-br from-trust-600 to-trust-700 py-16">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-trust-100 text-lg mb-8">
            Join 50,000+ smart shoppers and get exclusive coupons, early access to sales, and our best finds delivered weekly.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-deal-500 hover:bg-deal-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              Get Deals
            </button>
          </form>
          <p className="text-trust-200 text-sm mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
