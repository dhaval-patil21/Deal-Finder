

import React, { useState } from 'react';
import { GitCompare, Check, X, AlertCircle } from 'lucide-react';
import { useCompare } from '../context/CompareContext';
const CompareButton = ({ product, className = "" }) => {
  const { 
    addToCompare, 
    removeFromCompare, 
    isInCompareList, 
    isCompareFull,
    isSameCategory,
    currentCategory
  } = useCompare();
  const [notification, setNotification] = useState(null);
  
  const isProductInCompare = isInCompareList(product.id);
  const isDifferentCategory = !isSameCategory(product.category);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleCompareClick = () => {
    if (isProductInCompare) {
      removeFromCompare(product.id);
      showNotification('Product removed from comparison', 'success');
    } else {
      const result = addToCompare(product);
      showNotification(result.message, result.success ? 'success' : 'error');
      
      if (result.success) {
        // Navigate to compare page after a short delay
        setTimeout(() => {
          console.log('Navigate to compare page');
          // router.push('/compare'); // Uncomment when using Next.js router
        }, 1000);
      }
    }
  };

  const buttonDisabled = (!isProductInCompare && isCompareFull()) || isDifferentCategory;

  const getButtonText = () => {
    if (isProductInCompare) {
      return (
        <>
          <Check className="w-4 h-4" />
          <span>Added to Compare</span>
          <X className="w-4 h-4" />
        </>
      );
    }
    if (isDifferentCategory) {
      return (
        <>
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs">Different Category</span>
        </>
      );
    }
    return (
      <>
        <GitCompare className="w-4 h-4" />
        <span>Compare</span>
      </>
    );
  };

  return (
    <div className="relative">
      <button
        onClick={handleCompareClick}
        disabled={buttonDisabled}
        className={`${className} ${
          isProductInCompare
            ? 'bg-green-100 hover:bg-green-200 text-green-700 border-green-300'
            : buttonDisabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
            : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
        } w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm border`}
        title={isDifferentCategory ? `Only ${currentCategory} products can be compared` : ''}
      >
        {getButtonText()}
      </button>

      {/* Notification Toast */}
      {/* {notification && (
        <div className={`absolute top-full left-0 right-0 mt-2 p-2 rounded text-xs text-center z-10 shadow-lg ${
          notification.type === 'success'
            ? 'bg-green-100 text-green-800 border border-green-300'
            : 'bg-red-100 text-red-800 border border-red-300'
        }`}>
          {notification.message}
        </div>
      )} */}
    </div>
  );
};


export default CompareButton