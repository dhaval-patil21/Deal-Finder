
"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const deals = [
  {
    id: 1,
    title: "Samsung Galaxy S24 Ultra",
    originalPrice: '1,34,999',
    salePrice: '1,19,999',
    discount: 23,
    image: "/trendingdeals/samsung.jpeg",
    rating: 4.8,
    reviews: 2847,
    timeLeft: "2d 14h 23m",
    badge: "Hot Deal",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Nike Air Max 270 Sneakers",
    originalPrice: 14999,
    salePrice: '12,999',
    discount: 41,
    image: "/trendingdeals/shoes.jpeg",
    rating: 4.6,
    reviews: 1532,
    timeLeft: "1d 8h 45m",
    badge: "Limited Time",
    category: "Footwear"
  },
  {
    id: 3,
    title: "MacBook Air M3 13-inch",
    originalPrice: '1,49,999',
    salePrice: '1,24,999',
    discount: 14,
    image: "/trendingdeals/Laptop.jpg",
    rating: 4.9,
    reviews: 3245,
    timeLeft: "3d 2h 17m",
    badge: "Best Seller",
    category: "Electronics"
  },
  {
    id: 4,
    title: "Books",
    originalPrice: 549,
    salePrice: 349,
    discount: 27,
    image: "/trendingdeals/Books.png",
    rating: 4.7,
    reviews: 892,
    timeLeft: "5h 32m",
    badge: "Flash Sale",
    category: "Home & Garden"
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Headphones",
    originalPrice: 399,
    salePrice: 299,
    discount: 25,
    image: "/trendingdeals/headphone.jpeg",
    rating: 4.8,
    reviews: 1876,
    timeLeft: "1d 19h 8m",
    badge: "Trending",
    category: "Electronics"
  },
  {
    id: 6,
    title: "Levi's 501 Original T-Shirt",
    originalPrice: 999,
    salePrice: 799,
    discount: 34,
    image: "/trendingdeals/tshirt.jpg",
    rating: 4.4,
    reviews: 672,
    timeLeft: "4d 11h 55m",
    badge: "Classic",
    category: "Clothing"
  }
];

const DealCard = ({ deal }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Hot Deal":
        return "bg-red-500";
      case "Flash Sale":
        return "bg-orange-500";
      case "Limited Time":
        return "bg-purple-500";
      case "Best Seller":
        return "bg-green-500";
      case "Trending":
        return "bg-blue-500";
      default:
        return "bg-orange-500";
    }
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-orange-200 overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="relative w-full h-48 b">
          {deal.image ? (
            <Image
              src={deal.image}
              alt={deal.title}
              width={300}
              height={200}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-orange-300 text-6xl font-bold opacity-50">
                {deal.title.charAt(0)}
              </div>
            </div>
          )}
          
          {/* Discount Badge */}
          <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            -{deal.discount}%
          </div>
          
          {/* Deal Badge */}
          <div className={`absolute top-3 right-3 ${getBadgeColor(deal.badge)} text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg`}>
            {deal.badge}
          </div>
          
          {/* Wishlist Button */}
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <svg 
              className={`w-4 h-4 transition-colors duration-300 ${isWishlisted ? 'text-red-500' : 'text-gray-400'}`}
              fill={isWishlisted ? 'currentColor' : 'none'}
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <span className="text-orange-500 text-xs font-medium uppercase tracking-wide">
          {deal.category}
        </span>
        
        {/* Title */}
        <h3 className="text-slate-800 font-bold text-lg mt-1 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
          {deal.title}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-slate-600 text-sm ml-2">
            {deal.rating} ({deal.reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900">
              ₹{deal.salePrice}
            </span>
            <span className="text-slate-500 line-through text-sm">
              ₹{deal.originalPrice}
            </span>
          </div>
        </div>
        
        {/* Timer */}
        <div className="bg-orange-50 rounded-lg p-2 mb-4">
          <div className="flex items-center justify-center text-orange-600">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold">Ends in {deal.timeLeft}</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-2">
          {/* <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm">
            Add to Cart
          </button> */}
          <Link 
            href='/products'
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function TrendingDeals() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-200 rounded-full opacity-15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-orange-500 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2 block">
              Limited Time Offers
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Trending
              <span className="block text-orange-500 relative">
                Deals
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              </span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              {`Don't miss out on these incredible deals! `}
              <span className="text-orange-600 font-medium"> Limited quantities</span> and time remaining.
            </p>
          </div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div 
              key={deal.id}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <DealCard deal={deal} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link 
            href="/deals"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            <span>View All Deals</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}