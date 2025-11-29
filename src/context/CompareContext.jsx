
"use client"
import React, { useState, createContext, useContext } from 'react';

const CompareContext = createContext(null);

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  const addToCompare = (product) => {
    // Check if we have products and if they're from a different category
    if (compareList.length > 0 && currentCategory !== product.category) {
      return { 
        success: false, 
        message: `Can only compare products from the same category. Current: ${currentCategory}` 
      };
    }

    if (compareList.length >= 3) {
      return { success: false, message: 'Maximum 3 products can be compared at once' };
    }
    
    if (compareList.some(item => item.id === product.id)) {
      return { success: false, message: 'Product is already in comparison list' };
    }

    // Set category on first product addition
    if (compareList.length === 0) {
      setCurrentCategory(product.category);
    }

    setCompareList(prev => [...prev, product]);
    return { success: true, message: `Product added to ${product.category} comparison` };
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => {
      const newList = prev.filter(item => item.id !== productId);
      // Reset category if list becomes empty
      if (newList.length === 0) {
        setCurrentCategory(null);
      }
      return newList;
    });
  };

  const clearCompareList = () => {
    setCompareList([]);
    setCurrentCategory(null);
  };

  const isInCompareList = (productId) => {
    return compareList.some(item => item.id === productId);
  };

  const canCompare = () => {
    return compareList.length >= 1;
  };

  const isCompareFull = () => {
    return compareList.length >= 3;
  };

  const isSameCategory = (productCategory) => {
    return currentCategory === null || currentCategory === productCategory;
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      currentCategory,
      addToCompare,
      removeFromCompare,
      clearCompareList,
      isInCompareList,
      canCompare,
      isCompareFull,
      isSameCategory,
      compareCount: compareList.length
    }}>
      {children}
    </CompareContext.Provider>
  );
};