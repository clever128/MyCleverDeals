import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-12">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-trust-600" />
            <span className="text-sm font-semibold text-trust-600 uppercase tracking-wide">Support</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Have a question or feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Mail className="w-8 h-8 text-trust-600 mb-4" />
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">
                We typically respond within 24 hours
              </p>
              <a
                href="mailto:cleverson128@hotmail.com"
                className="text-trust-600 hover:text-trust-700 font-semibold"
              >
                cleverson128@hotmail.com
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <Send className="w-8 h-8 text-trust-600 mb-4" />
              <h3 className="font-display font-bold text-lg text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Fill out the form and we'll get back to you as soon as possible with helpful answers.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">Send a Message</h2>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 outline-none transition-all"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="technical">Technical Issue</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-500 focus:border-trust-500 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-trust-600 hover:bg-trust-700 text-white font-bold py-4 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-trust-600 hover:text-trust-700">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
