import { Shield, Search, Users, TrendingUp, CheckCircle, Clock, Award, Target } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const stats = [
    { number: '1M+', label: 'Happy Users', icon: Users },
    { number: '50,000+', label: 'Products Compared Daily', icon: Search },
    { number: '₹100Cr+', label: 'Savings Generated', icon: TrendingUp },
    { number: '99%', label: 'User Satisfaction', icon: Award }
  ];

  const features = [
    {
      icon: Search,
      title: 'Smart Price Comparison',
      description: 'Our advanced algorithms scan multiple platforms in real-time to find you the best deals across Amazon, Flipkart, Myntra, Meesho, and more.'
    },
    {
      icon: Shield,
      title: 'Verified & Trusted',
      description: 'All deals are verified for authenticity. We partner directly with platforms to ensure you get genuine products at the best prices.'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Prices change constantly online. Our system updates every few minutes to ensure you always see the most current deals available.'
    },
    {
      icon: CheckCircle,
      title: 'Easy to Use',
      description: 'Simply search for any product and instantly see prices from all major platforms. No more opening multiple tabs or apps.'
    }
  ];


  const timeline = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Started with a simple idea: help people save money while shopping online.'
    },
    {
      year: '2023',
      title: 'Platform Launch',
      description: 'Launched with price comparison for 5 major platforms and 10,000+ products.'
    },
    {
      year: '2024',
      title: 'Major Growth',
      description: 'Reached 500K+ users and expanded to cover 25+ shopping platforms.'
    },
    {
      year: '2025',
      title: 'Market Leader',
      description: 'Now India\'s #1 price comparison platform with 1M+ active users.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About 
              <span className="pl-4 text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text">
                Deal Finder
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to help millions of Indians save money by finding the best deals across all major shopping platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Making Smart Shopping Simple for Everyone
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Shopping online shouldn't mean spending hours comparing prices across different platforms. 
                That's why we created Deal Finder – to do all the hard work for you.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform instantly compares prices from Amazon, Flipkart, Myntra, Meesho, and dozens of 
                other trusted platforms, ensuring you always get the best deal possible.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Our Promise
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "We guarantee you'll find the lowest price available online, 
                  or we'll help you find an even better deal."
                </p>
                <div className="mt-6 text-sm text-orange-600 font-medium">
                  - Deal Finder Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Trusted by Millions
            </h2>
            <p className="text-lg text-gray-600">
              Here's how we're helping Indians save money every day
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-colors duration-200">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              How Deal Finder Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our advanced technology makes finding the best deals effortless
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              From a simple idea to India's leading price comparison platform
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-orange-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-8 text-right' : 'ml-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative">
                      <div className={`absolute top-6 ${index % 2 === 0 ? '-right-3' : '-left-3'} w-6 h-6 bg-orange-400 rounded-full border-4 border-white`}></div>
                      <div className="text-orange-600 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Saving Money?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join over 1 million Indians who trust Deal Finder to find the best prices online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 text-lg">
              Start Comparing Prices
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-colors duration-200 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}