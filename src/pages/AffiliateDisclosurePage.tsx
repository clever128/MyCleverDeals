import { DollarSign, CheckCircle2 } from 'lucide-react';

export default function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-trust-600" />
            <span className="text-sm font-semibold text-trust-600 uppercase tracking-wide">Transparency</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Affiliate Disclosure
          </h1>
          <p className="text-gray-600">Last updated: January 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Our Commitment to Transparency</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At MyCleverDeals, we believe in complete transparency with our readers. This page explains how 
              we generate revenue and how it affects our content.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Affiliate Relationships</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              MyCleverDeals participates in various affiliate marketing programs. This means that when you click 
              on certain links and make a purchase, we may receive a commission at no additional cost to you. 
              These affiliate programs include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Amazon Associates Program</li>
              <li>ShareASale</li>
              <li>Commission Junction</li>
              <li>Other merchant affiliate programs</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">How It Works</h2>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>You Click:</strong> When you click on an affiliate link, you're redirected to the 
                  retailer's website
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>You Purchase:</strong> If you make a purchase, the retailer pays us a small 
                  commission
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>No Extra Cost:</strong> You pay the same price as you would if you went directly 
                  to the retailer
                </span>
              </li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Our Editorial Independence</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we do earn commissions from affiliate links, this does not influence our reviews or 
              recommendations. We maintain strict editorial independence:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>We only recommend products we genuinely believe in</li>
              <li>Our reviews are based on thorough research and testing</li>
              <li>We're honest about both pros and cons</li>
              <li>Commission potential does not affect our ratings</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Why Affiliate Marketing?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Affiliate commissions help us cover the costs of running MyCleverDeals, including website hosting, 
              purchasing products for review, and compensating our team of writers and editors. This business 
              model allows us to provide free, high-quality content to our readers.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Questions?</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about our affiliate relationships or how we operate, please don't 
              hesitate to contact us at{' '}
              <a href="mailto:info@mycleverdeals.com" className="text-trust-600 hover:text-trust-700 font-semibold">
                info@mycleverdeals.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
