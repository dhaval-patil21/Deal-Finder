// Utility functions for the product catalog

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(price);
};

export const getPlatformColor = (platform) => {
  const colors = {
    'Amazon': 'bg-yellow-400 text-black',
    'Flipkart': 'bg-blue-500 text-white',
    'Meesho': 'bg-pink-500 text-white',
    'Myntra': 'bg-purple-500 text-white',
    'Ajio': 'bg-red-500 text-white'
  };
  return colors[platform] || 'bg-gray-500 text-white';
};

export const filterProducts = (products, searchTerm, selectedCategory, selectedPlatform) => {
  return products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPlatform = selectedPlatform === 'all' || product.platform === selectedPlatform;
    
    return matchesSearch && matchesCategory && matchesPlatform;
  });
};

export const getUniqueValues = (products, key) => {
  return ['all', ...new Set(products.map(product => product[key]))];
};