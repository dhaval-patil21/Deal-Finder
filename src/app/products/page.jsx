
"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { useProducts } from '../../hooks/useProducts';
import { useFilters } from '../../hooks/useFilters';
import { useCompare } from '../../context/CompareContext';
import LoadingSpinner from '../../components/LoadingSpinner';
import SearchFilters from '../../components/SearchFilters';
import ProductsGrid from '../../components/ProductGrid';
import CompareFloatingWidget from '../../components/CompareFloatingWidget';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Product = () => {
  const router = useRouter();
  const { products, loading, error } = useProducts();
  const { compareCount } = useCompare();
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    filteredProducts,
    categories,
    platforms
  } = useFilters(products);

  const navigateToCompare = () => {
    router.push('/compare');
  };

  if (loading) return <LoadingSpinner />;
  if (error) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
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
          {/* Header with Compare Info */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-800 ">Products</h1>
              {compareCount > 0 && (
                <div className="bg-orange-100 border border-orange-200 rounded-lg px-4 py-2">
                  <span className="text-orange-800 font-medium">
                    🔍 {compareCount}/3 products selected for comparison
                  </span>
                </div>
              )}
            </div>
            <p className="text-gray-600 mt-2">
              Discover and compare products from multiple platforms
            </p>
          </div>

          <SearchFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
            categories={categories}
            platforms={platforms}
          />
          
          <ProductsGrid
            products={products}
            filteredProducts={filteredProducts}
          />
        </div>
      </div>
      
      {/* Floating Compare Widget */}
      <CompareFloatingWidget onNavigateToCompare={navigateToCompare} />
      
      <Footer />
    </>
  );
};

export default Product;