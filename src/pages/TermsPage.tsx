import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-trust-600" />
            <span className="text-sm font-semibold text-trust-600 uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Terms of Use
          </h1>
          <p className="text-gray-600">Last updated: January 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using MyCleverDeals, you accept and agree to be bound by the terms and provisions 
              of this agreement. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Use of Website</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              MyCleverDeals provides product reviews, recommendations, and affiliate links for informational 
              purposes. You agree to use this website only for lawful purposes and in a way that does not 
              infringe on the rights of others.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on MyCleverDeals, including text, graphics, logos, images, and software, is the property 
              of MyCleverDeals or its content suppliers and is protected by international copyright laws.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Product information, prices, and availability are subject to change without notice. We make every 
              effort to provide accurate information, but we cannot guarantee that all product descriptions or 
              other content is error-free, complete, or current.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              MyCleverDeals shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your use of or inability to use the website.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">External Links</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website contains links to third-party websites. We have no control over and assume no 
              responsibility for the content, privacy policies, or practices of any third-party sites.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of the website after changes constitutes acceptance of the 
              new terms.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Use, please contact us at{' '}
              <a href="mailto:legal@mycleverdeals.com" className="text-trust-600 hover:text-trust-700 font-semibold">
                legal@mycleverdeals.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
