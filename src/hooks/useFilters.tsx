import { useState } from 'react';
import { filterProducts, getUniqueValues } from '../utils/helpers';

export const useFilters = (products) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const filteredProducts = filterProducts(products, searchTerm, selectedCategory, selectedPlatform);
  const categories = getUniqueValues(products, 'category');
  const platforms = getUniqueValues(products, 'platform');

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedPlatform,
    setSelectedPlatform,
    filteredProducts,
    categories,
    platforms
  };
};