import { Shield, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-trust-600" />
            <span className="text-sm font-semibold text-trust-600 uppercase tracking-wide">Legal</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: January 3, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At MyCleverDeals, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you visit our website.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Information We Collect</h2>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Email Addresses:</strong> When you subscribe to our newsletter
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Usage Data:</strong> Pages visited, time spent, and browsing behavior
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-trust-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  <strong>Device Information:</strong> Browser type, IP address, and device characteristics
                </span>
              </li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Send you our weekly newsletter with exclusive deals and content</li>
              <li>Improve our website and user experience</li>
              <li>Analyze trends and visitor behavior</li>
              <li>Respond to your inquiries and support requests</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies to enhance your browsing experience. You can control cookie settings through 
              your browser preferences. Note that disabling cookies may affect website functionality.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may use third-party analytics services (such as Google Analytics) to understand how 
              visitors use our site. These services may collect information about your use of this and 
              other websites.
            </p>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from our newsletter at any time</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4 mt-12">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@mycleverdeals.com" className="text-trust-600 hover:text-trust-700 font-semibold">
                privacy@mycleverdeals.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
