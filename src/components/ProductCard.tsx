
"use client"
import React, { useState } from 'react';
import { Heart, Star, ExternalLink, ShoppingCart } from 'lucide-react';
import { formatPrice, getPlatformColor } from '../utils/helpers';
import CompareButton from '../components/CompareButton';
import Image from 'next/image';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm text-slate-500">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm">
      {/* Image Section */}
      <div className="relative group">
        <Image
          src={product.image} 
          alt={product.title}
          width={320}
          height={350}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Wishlist Button */}
        <button 
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
        >
          <Heart 
            className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>

        {/* Platform Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(product.platform)}`}>
          {product.platform}
        </div>

        {/* Offer Badge */}
        {product.offer && (
          <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
            {product.offer}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <div className="text-xs text-slate-500 font-medium mb-1 uppercase">
          {product.category}
        </div>

        {/* Title */}
        <h3 className="text-slate-700 font-semibold text-lg mb-2 line-clamp-2 leading-tight">
          {product.title}
        </h3>

        {/* Rating */}
        <div className="mb-3">
          {renderStars(product.rating)}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-600">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          {product.originalPrice && (
            <span className="text-sm text-green-600 font-medium">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* View Product Button */}
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>View Product</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Compare Button */}
          <CompareButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;