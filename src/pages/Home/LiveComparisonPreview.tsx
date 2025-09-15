"use client"
import { useState, useEffect } from 'react';

const sampleProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    image: "/images/iphone-15-pro.jpg",
    prices: [
      { retailer: "Apple Store", price: 1199, shipping: 0, total: 1199, rating: 4.8, inStock: true },
      { retailer: "Amazon", price: 1149, shipping: 0, total: 1149, rating: 4.7, inStock: true },
      { retailer: "Best Buy", price: 1179, shipping: 0, total: 1179, rating: 4.6, inStock: false },
      { retailer: "Target", price: 1199, shipping: 0, total: 1199, rating: 4.5, inStock: true }
    ],
    specs: {
      storage: "256GB",
      display: "6.7-inch Super Retina XDR",
      camera: "48MP Triple Camera",
      battery: "Up to 29 hours video"
    },
    reviews: 15420,
    overallRating: 4.7
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    image: "/images/samsung-s24-ultra.jpg",
    prices: [
      { retailer: "Samsung", price: 1299, shipping: 0, total: 1299, rating: 4.6, inStock: true },
      { retailer: "Amazon", price: 1249, shipping: 0, total: 1249, rating: 4.8, inStock: true },
      { retailer: "Best Buy", price: 1279, shipping: 0, total: 1279, rating: 4.5, inStock: true },
      { retailer: "Walmart", price: 1289, shipping: 15, total: 1304, rating: 4.3, inStock: true }
    ],
    specs: {
      storage: "256GB",
      display: "6.8-inch Dynamic AMOLED 2X",
      camera: "200MP Quad Camera",
      battery: "5000mAh"
    },
    reviews: 12890,
    overallRating: 4.6
  }
];

const searchSuggestions = [
  "iPhone 15 Pro Max",
  "Samsung Galaxy S24 Ultra",
  "MacBook Air M3",
  "Sony WH-1000XM5",
  "iPad Pro 12.9",
  "Nintendo Switch OLED"
];

const ComparisonTable = ({ products, activeProduct, onProductSelect }) => {
  const [sortBy, setSortBy] = useState('price');

  const sortedRetailers = (prices) => {
    return [...prices].sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.total - b.total;
        case 'rating':
          return b.rating - a.rating;
        case 'retailer':
          return a.retailer.localeCompare(b.retailer);
        default:
          return 0;
      }
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Product Selector Tabs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => onProductSelect(product)}
              className={`flex-shrink-0 px-6 py-4 font-semibold text-sm transition-all duration-300 border-b-2 ${
                activeProduct.id === product.id
                  ? 'border-orange-500 text-orange-600 bg-white'
                  : 'border-transparent text-slate-600 hover:text-orange-500 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-xs font-bold">
                  {product.brand.charAt(0)}
                </div>
                <span>{product.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Product Overview */}
      <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-25">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
              <span className="text-orange-500 text-2xl font-bold">
                {activeProduct.brand.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">{activeProduct.name}</h3>
              <div className="flex items-center space-x-2 mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(activeProduct.overallRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-slate-600 text-sm">
                  {activeProduct.overallRating} ({activeProduct.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Specs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {Object.entries(activeProduct.specs).map(([key, value]) => (
              <div key={key} className="bg-white rounded-lg p-2 text-center">
                <div className="text-slate-500 text-xs uppercase tracking-wide">{key}</div>
                <div className="text-slate-900 font-semibold">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">Sort by:</span>
          <div className="flex space-x-2">
            {[
              { key: 'price', label: 'Price' },
              { key: 'rating', label: 'Rating' },
              { key: 'retailer', label: 'Retailer' }
            ].map((option) => (
              <button
                key={option.key}
                onClick={() => setSortBy(option.key)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
                  sortBy === option.key
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-200 text-slate-600 hover:bg-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Retailer</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Shipping</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Total</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Rating</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Stock</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sortedRetailers(activeProduct.prices).map((retailer, index) => (
              <tr key={retailer.retailer} className={`hover:bg-orange-50 transition-colors duration-200 ${index === 0 && sortBy === 'price' ? 'bg-green-50 border-l-4 border-green-500' : ''}`}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-slate-600 text-xs font-bold">
                        {retailer.retailer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{retailer.retailer}</div>
                      {index === 0 && sortBy === 'price' && (
                        <div className="text-xs text-green-600 font-semibold">Best Price</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-lg font-bold text-slate-900">${retailer.price}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${retailer.shipping === 0 ? 'text-green-600 font-semibold' : 'text-slate-600'}`}>
                    {retailer.shipping === 0 ? 'Free' : `$${retailer.shipping}`}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-lg font-bold text-orange-600">${retailer.total}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-slate-900 mr-1">{retailer.rating}</span>
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    retailer.inStock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {retailer.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button 
                    disabled={!retailer.inStock}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                      retailer.inStock
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {retailer.inStock ? 'Buy Now' : 'Unavailable'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function LiveComparisonPreview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeProduct, setActiveProduct] = useState(sampleProducts[0]);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (animationStep < 3) {
        setAnimationStep(animationStep + 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [animationStep]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsSearching(true);
    setShowSuggestions(false);
    
    setTimeout(() => {
      setIsSearching(false);
    }, 2000);
  };

  const filteredSuggestions = searchSuggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length > 0
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-purple-100 rounded-full opacity-15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2 block">
            See It In Action
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Live
            <span className="block text-orange-500 relative">
              Comparison
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            Experience the power of our comparison engine in real-time. Search for any product and 
            <span className="text-orange-600 font-medium"> watch the magic happen</span>.
          </p>
        </div>

        {/* Interactive Search Demo */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Try It Now - Search Any Product
            </h3>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="Search for products to compare..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-300 pr-16"
                />
                <button 
                  onClick={() => handleSearch(searchTerm)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Search Suggestions */}
              {showSuggestions && (searchTerm.length > 0 || searchTerm.length === 0) && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-xl mt-2 z-10 max-h-64 overflow-y-auto">
                  <div className="p-2">
                    <div className="text-xs text-slate-500 uppercase tracking-wide px-3 py-2">Popular Searches</div>
                    {(filteredSuggestions.length > 0 ? filteredSuggestions : searchSuggestions.slice(0, 4)).map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearch(suggestion)}
                        className="w-full text-left px-3 py-2 hover:bg-orange-50 rounded-lg transition-colors duration-200 flex items-center"
                      >
                        <svg className="w-4 h-4 text-slate-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="text-slate-700">{suggestion}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Loading Animation */}
            {isSearching && (
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <span className="text-slate-600 ml-3">Searching across retailers...</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Real-Time Comparison Results
            </h3>
            <p className="text-slate-600">
              Compare prices, ratings, and availability across multiple retailers instantly
            </p>
          </div>
          
          <ComparisonTable 
            products={sampleProducts}
            activeProduct={activeProduct}
            onProductSelect={setActiveProduct}
          />
        </div>

        {/* Features Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "⚡",
              title: "Real-Time Updates",
              description: "Prices and availability updated every few minutes across all retailers"
            },
            {
              icon: "🔍",
              title: "Smart Filtering",
              description: "Sort by price, rating, shipping, or retailer to find the perfect match"
            },
            {
              icon: "🏆",
              title: "Best Deal Finder",
              description: "Automatically highlights the best deals and lowest prices for you"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Saving?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of smart shoppers who save money with our comparison tool
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
              <span>Start Comparing Products</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}