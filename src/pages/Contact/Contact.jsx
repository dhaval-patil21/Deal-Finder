"use client"

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, HeadphonesIcon, Bug, Lightbulb } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our support team',
      contact: '+91 98765 43210',
      availability: 'Mon-Fri, 9 AM - 7 PM IST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions',
      contact: 'support@dealfinder.com',
      availability: 'We respond within 24 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us instantly',
      contact: 'Available on website',
      availability: 'Mon-Sat, 10 AM - 8 PM IST'
    }
  ];

  const supportCategories = [
    {
      icon: HeadphonesIcon,
      title: 'General Support',
      description: 'Questions about using Deal Finder'
    },
    {
      icon: Bug,
      title: 'Report a Bug',
      description: 'Found an issue? Let us know'
    },
    {
      icon: Lightbulb,
      title: 'Feature Request',
      description: 'Suggest new features or improvements'
    }
  ];

  const faqs = [
    {
      question: 'How accurate are your price comparisons?',
      answer: 'Our prices are updated every 30 minutes from official retailer APIs. We guarantee 99.9% accuracy across all platforms.'
    },
    {
      question: 'Is Deal Finder free to use?',
      answer: 'Yes! Deal Finder is completely free for all users. We earn small commissions from partner retailers when you make purchases.'
    },
    {
      question: 'How do you ensure the deals are legitimate?',
      answer: 'We partner directly with retailers and verify all deals through official channels. Every deal is checked for authenticity before being displayed.'
    },
    {
      question: 'Can I save my favorite products?',
      answer: 'Yes! Create a free account to save products, set price alerts, and track your favorite deals across all platforms.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in 
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text">
                {' '}Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have questions? Need help? Our dedicated support team is here to assist you with anything related to Deal Finder.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-lg text-gray-600">
              Choose the best way to reach us
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <div className="text-orange-600 font-semibold text-lg mb-2">
                    {method.contact}
                  </div>
                  <div className="text-sm text-gray-500">
                    {method.availability}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
               {` Fill out the form below and we'll get back to you as soon as possible.`}
              </p>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600">
                    {` Thank you for contacting us. We'll respond within 24 hours.`}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Support</option>
                      <option value="bug">Report a Bug</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border dark:text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Please provide as much detail as possible..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Support Categories */}
            <div className="space-y-8">
              
              {/* Office Info */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Visit Our Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-800">Address</div>
                      <div className="text-gray-600">
                        {/* Tech Park, Science City Road<br /> */}
                        Gujarat, 
                        India
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-slate-800">Office Hours</div>
                      <div className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                        Saturday: 10:00 AM - 4:00 PM IST<br />
                        Sunday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  What Can We Help With?
                </h3>
                <div className="space-y-4">
                  {supportCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-200 hover:bg-orange-50 transition-all">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <Icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-800">
                            {category.title}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
             {` Didn't find what you were looking for?` }
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Response Time Banner */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Clock className="w-8 h-8 text-white" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Quick Response Guarantee
            </h2>
          </div>
          <p className="text-xl text-white/90">
            We respond to all inquiries within <span className="font-bold">24 hours</span> or less. 
            For urgent matters, use our live chat for instant support.
          </p>
        </div>
      </section>

    </div>
  );
}