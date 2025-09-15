// // "use client"
// // import React, { useState, useEffect } from 'react';
// // import { Heart, Star, ExternalLink, GitCompare, ShoppingCart, Search, Filter } from 'lucide-react';
// // import  product  from "../../utils/products.json";

// // const ProductCard = ({ product }) => {
// //   const [isWishlisted, setIsWishlisted] = useState(false);

// //   const getPlatformColor = (platform) => {
// //     const colors = {
// //       'Amazon': 'bg-yellow-400 text-black',
// //       'Flipkart': 'bg-blue-500 text-white',
// //       'Meesho': 'bg-pink-500 text-white',
// //       'Myntra': 'bg-purple-500 text-white',
// //       'Ajio': 'bg-red-500 text-white'
// //     };
// //     return colors[platform] || 'bg-gray-500 text-white';
// //   };

// //   const handleWishlist = () => {
// //     setIsWishlisted(!isWishlisted);
// //   };

// //   const renderStars = (rating) => {
// //     const fullStars = Math.floor(rating);
// //     const hasHalfStar = rating % 1 !== 0;
// //     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

// //     return (
// //       <div className="flex items-center">
// //         {[...Array(fullStars)].map((_, i) => (
// //           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
// //         ))}
// //         {hasHalfStar && (
// //           <div className="relative">
// //             <Star className="w-4 h-4 text-gray-300" />
// //             <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
// //               <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
// //             </div>
// //           </div>
// //         )}
// //         {[...Array(emptyStars)].map((_, i) => (
// //           <Star key={i} className="w-4 h-4 text-gray-300" />
// //         ))}
// //         <span className="ml-1 text-sm text-slate-500">({rating})</span>
// //       </div>
// //     );
// //   };

// //   const formatPrice = (price) => {
// //     return new Intl.NumberFormat('en-IN', {
// //       style: 'currency',
// //       currency: 'INR',
// //       minimumFractionDigits: 0
// //     }).format(price);
// //   };

// //   return (
// //     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm">
// //       {/* Image Section */}
// //       <div className="relative group">
// //         <img 
// //           src={product.image} 
// //           alt={product.title}
// //           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// //         />
        
// //         {/* Wishlist Button */}
// //         <button 
// //           onClick={handleWishlist}
// //           className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
// //         >
// //           <Heart 
// //             className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
// //           />
// //         </button>

// //         {/* Platform Badge */}
// //         <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(product.platform)}`}>
// //           {product.platform}
// //         </div>

// //         {/* Offer Badge */}
// //         {product.offer && (
// //           <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
// //             {product.offer}
// //           </div>
// //         )}
// //       </div>

// //       {/* Content Section */}
// //       <div className="p-4">
// //         {/* Category */}
// //         <div className="text-xs text-slate-500 font-medium mb-1 uppercase">
// //           {product.category}
// //         </div>

// //         {/* Title */}
// //         <h3 className="text-slate-700 font-semibold text-lg mb-2 line-clamp-2 leading-tight">
// //           {product.title}
// //         </h3>

// //         {/* Rating */}
// //         <div className="mb-3">
// //           {renderStars(product.rating)}
// //         </div>

// //         {/* Price */}
// //         <div className="mb-4">
// //           <div className="flex items-center space-x-2">
// //             <span className="text-2xl font-bold text-orange-600">{formatPrice(product.price)}</span>
// //             {product.originalPrice && (
// //               <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
// //             )}
// //           </div>
// //           {product.originalPrice && (
// //             <span className="text-sm text-green-600 font-medium">
// //               {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
// //             </span>
// //           )}
// //         </div>

// //         {/* Action Buttons */}
// //         <div className="space-y-2">
// //           {/* View Product Button */}
// //           <a
// //             href={product.link}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
// //           >
// //             <ShoppingCart className="w-4 h-4" />
// //             <span>View Product</span>
// //             <ExternalLink className="w-4 h-4" />
// //           </a>

// //           {/* Compare Button */}
// //           <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm">
// //             <GitCompare className="w-4 h-4" />
// //             <span>Compare</span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main component that fetches products from external JSON file
// // const ProductCatalog = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [selectedPlatform, setSelectedPlatform] = useState('all');

// //   // Load products from JSON file
// //   useEffect(() => {
// //     const loadProductsFromFile = async () => {
  
// //         // Method 1: Using fetch to load from a JSON file in public folder
// //         const response = await fetch('/products.json');
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch products');
// //         }
// //         const data = await response.json();

// //         // Method 2: Using dynamic import (recommended for build systems)
// //         // const productsModule = await import('./products.json');
// //         // const data = productsModule.default;

// //         // Method 3: Using window.fs.readFile API (for uploaded files in Claude environment)
       
// //         setProducts(data.products || []);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error('Error loading products:', err);
// //         setError('Failed to load products from file');
// //         setLoading(false);
// //       }
// //     };

// //     loadProductsFromFile();
// //   }, []);

// //   // Filter products based on search and filters
// //   const filteredProducts = products.filter(product => {
// //     const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
// //     const matchesPlatform = selectedPlatform === 'all' || product.platform === selectedPlatform;
    
// //     return matchesSearch && matchesCategory && matchesPlatform;
// //   });

// //   // Get unique categories and platforms
// //   const categories = ['all', ...new Set(products.map(p => p.category))];
// //   const platforms = ['all', ...new Set(products.map(p => p.platform))];

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
// //           <p className="mt-4 text-slate-600">Loading products from file...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
// //         <div className="text-center">
// //           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
// //             <strong className="font-bold">Error: </strong>
// //             <span className="block sm:inline">{error}</span>
// //           </div>
// //           <div className="mt-4 text-slate-600">
// //             <p>Make sure your JSON file is properly formatted and accessible.</p>
// //             <p className="text-sm mt-2">Expected file: <code className="bg-gray-200 px-1 rounded">products.json</code></p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8">
// //       <div className="max-w-7xl mx-auto px-4">
// //         {/* Header */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-bold text-slate-800 mb-2">Product Catalog</h1>
// //           <p className="text-slate-600">
// //             Loaded {products.length} products from JSON file
// //           </p>
// //         </div>

 

// //         {/* Search and Filters */}
// //         <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             {/* Search */}
// //             <div className="relative">
// //               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //               <input
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
// //               />
// //             </div>

// //             {/* Category Filter */}
// //             <div className="relative">
// //               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //               <select
// //                 value={selectedCategory}
// //                 onChange={(e) => setSelectedCategory(e.target.value)}
// //                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
// //               >
// //                 {categories.map(category => (
// //                   <option key={category} value={category}>
// //                     {category === 'all' ? 'All Categories' : category}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>

// //             {/* Platform Filter */}
// //             <div>
// //               <select
// //                 value={selectedPlatform}
// //                 onChange={(e) => setSelectedPlatform(e.target.value)}
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
// //               >
// //                 {platforms.map(platform => (
// //                   <option key={platform} value={platform}>
// //                     {platform === 'all' ? 'All Platforms' : platform}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Results Count */}
// //         <div className="mb-6">
// //           <p className="text-slate-600">
// //             Showing {filteredProducts.length} of {products.length} products
// //           </p>
// //         </div>

// //         {/* Products Grid */}
// //         {filteredProducts.length > 0 ? (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
// //             {filteredProducts.map(product => (
// //               <ProductCard key={product.id} product={product} />
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="text-center py-12">
// //             <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
// //           </div>
// //         )}

// //         {/* Statistics */}
// //         <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
// //           <h2 className="text-xl font-bold text-slate-800 mb-4">📊 File Statistics</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
// //             <div>
// //               <div className="text-2xl font-bold text-orange-600">{products.length}</div>
// //               <div className="text-slate-600">Products Loaded</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold text-blue-600">{categories.length - 1}</div>
// //               <div className="text-slate-600">Categories</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold text-green-600">{platforms.length - 1}</div>
// //               <div className="text-slate-600">Platforms</div>
// //             </div>
// //             <div>
// //               <div className="text-2xl font-bold text-purple-600">
// //                 {products.length > 0 ? Math.round(products.reduce((sum, p) => sum + p.rating, 0) / products.length * 10) / 10 : 0}
// //               </div>
// //               <div className="text-slate-600">Avg Rating</div>
// //             </div>
// //           </div>
// //         </div>

     
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductCatalog;































// "use client"
// import React, { useState, useEffect } from 'react';
// import { Heart, Star, ExternalLink, GitCompare, ShoppingCart, Search, Filter } from 'lucide-react';

// const ProductCard = ({ product }) => {
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   const getPlatformColor = (platform) => {
//     const colors = {
//       'Amazon': 'bg-yellow-400 text-black',
//       'Flipkart': 'bg-blue-500 text-white',
//       'Meesho': 'bg-pink-500 text-white',
//       'Myntra': 'bg-purple-500 text-white',
//       'Ajio': 'bg-red-500 text-white'
//     };
//     return colors[platform] || 'bg-gray-500 text-white';
//   };

//   const handleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//     return (
//       <div className="flex items-center">
//         {[...Array(fullStars)].map((_, i) => (
//           <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//         ))}
//         {hasHalfStar && (
//           <div className="relative">
//             <Star className="w-4 h-4 text-gray-300" />
//             <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
//               <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//             </div>
//           </div>
//         )}
//         {[...Array(emptyStars)].map((_, i) => (
//           <Star key={i} className="w-4 h-4 text-gray-300" />
//         ))}
//         <span className="ml-1 text-sm text-slate-500">({rating})</span>
//       </div>
//     );
//   };

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 0
//     }).format(price);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden max-w-sm">
//       {/* Image Section */}
//       <div className="relative group">
//         <img 
//           src={product.image} 
//           alt={product.title}
//           className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
        
//         {/* Wishlist Button */}
//         <button 
//           onClick={handleWishlist}
//           className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200"
//         >
//           <Heart 
//             className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
//           />
//         </button>

//         {/* Platform Badge */}
//         <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getPlatformColor(product.platform)}`}>
//           {product.platform}
//         </div>

//         {/* Offer Badge */}
//         {product.offer && (
//           <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
//             {product.offer}
//           </div>
//         )}
//       </div>

//       {/* Content Section */}
//       <div className="p-4">
//         {/* Category */}
//         <div className="text-xs text-slate-500 font-medium mb-1 uppercase">
//           {product.category}
//         </div>

//         {/* Title */}
//         <h3 className="text-slate-700 font-semibold text-lg mb-2 line-clamp-2 leading-tight">
//           {product.title}
//         </h3>

//         {/* Rating */}
//         <div className="mb-3">
//           {renderStars(product.rating)}
//         </div>

//         {/* Price */}
//         <div className="mb-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-orange-600">{formatPrice(product.price)}</span>
//             {product.originalPrice && (
//               <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
//             )}
//           </div>
//           {product.originalPrice && (
//             <span className="text-sm text-green-600 font-medium">
//               {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off
//             </span>
//           )}
//         </div>

//         {/* Action Buttons */}
//         <div className="space-y-2">
//           {/* View Product Button */}
//           <a
//             href={product.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
//           >
//             <ShoppingCart className="w-4 h-4" />
//             <span>View Product</span>
//             <ExternalLink className="w-4 h-4" />
//           </a>

//           {/* Compare Button */}
//           <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm">
//             <GitCompare className="w-4 h-4" />
//             <span>Compare</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main component that fetches products from external JSON file
// const ProductCatalog = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedPlatform, setSelectedPlatform] = useState('all');

//   // Load products from JSON file
//   useEffect(() => {
//     const loadProductsFromFile = async () => {
//       try {
//         const response = await fetch('/products.json');
//         if (!response.ok) {
//           throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
//         }
//         const data = await response.json();
//         setProducts(data.products || data || []);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error loading products:', err);
//         setError(`Failed to load products: ${err.message}`);
//         setLoading(false);
//       }
//     };

//     loadProductsFromFile();
//   }, []);

//   // Filter products based on search and filters
//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
//     const matchesPlatform = selectedPlatform === 'all' || product.platform === selectedPlatform;
    
//     return matchesSearch && matchesCategory && matchesPlatform;
//   });

//   // Get unique categories and platforms
//   const categories = ['all', ...new Set(products.map(p => p.category))];
//   const platforms = ['all', ...new Set(products.map(p => p.platform))];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
//           <p className="mt-4 text-slate-600">Loading products...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//             <strong className="font-bold">Error: </strong>
//             <span className="block sm:inline">{error}</span>
//           </div>
//           <div className="mt-4 text-slate-600">
//             <p>Make sure your JSON file is properly formatted and accessible.</p>
//             <p className="text-sm mt-2">Expected file: <code className="bg-gray-200 px-1 rounded">public/products.json</code></p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
       

//         {/* Search and Filters */}
//         <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Search */}
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//               />
//             </div>

//             {/* Category Filter */}
//             <div className="relative">
//               <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
//               >
//                 {categories.map(category => (
//                   <option key={category} value={category}>
//                     {category === 'all' ? 'All Categories' : category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Platform Filter */}
//             <div>
//               <select
//                 value={selectedPlatform}
//                 onChange={(e) => setSelectedPlatform(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//               >
//                 {platforms.map(platform => (
//                   <option key={platform} value={platform}>
//                     {platform === 'all' ? 'All Platforms' : platform}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Results Count */}
//         <div className="mb-6">
//           <p className="text-slate-600">
//             Showing {filteredProducts.length} of {products.length} products
//           </p>
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
//             {filteredProducts.map(product => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
//           </div>
//         )}

        
//       </div>
//     </div>
//   );
// };

// export default ProductCatalog;