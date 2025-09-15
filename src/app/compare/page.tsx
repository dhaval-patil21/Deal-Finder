"use client"
import React from 'react';
import { ArrowLeft, Star, ExternalLink, ShoppingCart, X, GitCompare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCompare } from '../../context/CompareContext';
import { formatPrice, getPlatformColor } from '../../utils/helpers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ComparePage = () => {
  const router = useRouter();
  const { compareList, removeFromCompare, clearCompareList, canCompare } = useCompare();

  const handleGoBack = () => {
    router.push('/products');
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center justify-center">
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
      </div>
    );
  };

  const getHighestRating = () => {
    if (compareList.length === 0) return 0;
    return Math.max(...compareList.map(p => p.rating));
  };

  const getLowestPrice = () => {
    if (compareList.length === 0) return Infinity;
    return Math.min(...compareList.map(p => p.price));
  };

  const highestRating = getHighestRating();
  const lowestPrice = getLowestPrice();

  if (!canCompare()) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center py-16">
              <GitCompare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-700 mb-2">No Products to Compare</h2>
              <p className="text-gray-500 mb-6">Add at least 2 products to start comparing</p>
              <button
                onClick={handleGoBack}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Browse Products</span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleGoBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Products</span>
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-800">
                Compare Products ({compareList.length}/3)
              </h1>
            </div>
            <button
              onClick={clearCompareList}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Clear All</span>
            </button>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {/* Product Images Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-6 px-4 bg-gray-50 font-semibold text-gray-700 w-32">
                      Products
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-6 px-4 text-center relative">
                        <button
                          onClick={() => removeFromCompare(product.id)}
                          className="absolute top-2 right-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full p-1 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                        />
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getPlatformColor(product.platform)}`}>
                          {product.platform}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Product Title Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Title
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4">
                        <h3 className="font-semibold text-gray-800 text-center">
                          {product.title}
                        </h3>
                      </td>
                    ))}
                  </tr>

                  {/* Category Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Category
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4 text-center">
                        <span className="text-gray-600 uppercase text-sm">
                          {product.category}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Price Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Price
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4 text-center">
                        <div className="space-y-1">
                          <div className={`text-2xl font-bold ${
                            product.price === lowestPrice ? 'text-green-600' : 'text-orange-600'
                          }`}>
                            {formatPrice(product.price)}
                            {product.price === lowestPrice && (
                              <div className="text-xs text-green-600 font-normal">Best Price!</div>
                            )}
                          </div>
                          {product.originalPrice && (
                            <>
                              <div className="text-sm text-gray-500 line-through">
                                {formatPrice(product.originalPrice)}
                              </div>
                              <div className="text-sm text-green-600 font-medium">
                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
                              </div>
                            </>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Rating Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Rating
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4">
                        <div className="flex flex-col items-center space-y-2">
                          {renderStars(product.rating)}
                          <div className={`text-sm ${
                            product.rating === highestRating ? 'text-green-600 font-semibold' : 'text-gray-600'
                          }`}>
                            {product.rating}/5
                            {product.rating === highestRating && (
                              <div className="text-xs text-green-600">Highest Rated!</div>
                            )}
                          </div>
                        </div>
                      </td>
                    ))}
                  </tr>

                  {/* Platform Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Platform
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPlatformColor(product.platform)}`}>
                          {product.platform}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* Offers Row */}
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 bg-gray-50 font-semibold text-gray-700">
                      Offers
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-4 px-4 text-center">
                        {product.offer ? (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {product.offer}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-sm">No offers</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Action Buttons Row */}
                  <tr>
                    <td className="py-6 px-4 bg-gray-50 font-semibold text-gray-700">
                      Actions
                    </td>
                    {compareList.map((product) => (
                      <td key={product.id} className="py-6 px-4">
                        <div className="space-y-3">
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>View Product</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="w-full bg-red-100 hover:bg-red-200 text-red-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                          >
                            <X className="w-4 h-4" />
                            <span>Remove</span>
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Comparison Insights */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Comparison Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">💰 Best Price</h3>
                <p className="text-green-700">
                  {compareList.find(p => p.price === lowestPrice)?.title} at {formatPrice(lowestPrice)}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">⭐ Highest Rated</h3>
                <p className="text-blue-700">
                  {compareList.find(p => p.rating === highestRating)?.title} with {highestRating}/5 rating
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h3 className="font-semibold text-purple-800 mb-2">🏷️ Best Offer</h3>
                <p className="text-purple-700">
                  {compareList.find(p => p.offer)?.offer || 'No special offers available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComparePage;