"use client"

import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (product) => {
    if (compareList.length >= 3) {
      return { success: false, message: 'Maximum 3 products can be compared at once' };
    }
    
    if (compareList.some(item => item.id === product.id)) {
      return { success: false, message: 'Product is already in comparison list' };
    }

    setCompareList(prev => [...prev, product]);
    return { success: true, message: 'Product added to comparison' };
  };

  const removeFromCompare = (productId) => {
    setCompareList(prev => prev.filter(item => item.id !== productId));
  };

  const clearCompareList = () => {
    setCompareList([]);
  };

  const isInCompareList = (productId) => {
    return compareList.some(item => item.id === productId);
  };

  const canCompare = () => {
    return compareList.length >= 2;
  };

  const isCompareFull = () => {
    return compareList.length >= 3;
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompareList,
      isInCompareList,
      canCompare,
      isCompareFull,
      compareCount: compareList.length
    }}>
      {children}
    </CompareContext.Provider>
  );
};