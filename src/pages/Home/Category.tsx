
"use client"
import CategoryCard from "../../components/CategoryCard";
import Link from 'next/link'

const categories = [
  {
    name: 'Electronics',
    image: '/category/electronic.jpg',
  },
  {
    name: 'Clothing',
    image: '/category/clothing.jpg',
  },
  {
    name: 'Footwear',
    image: '/category/footwear.jpg',
  },
  {
    name: 'Books',
    image: '/category/books.jpg',
  },

];

export default function PopularCategories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <span className="text-orange-500 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2 block">
              Shop by Category
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Explore Our
              <span className="block text-orange-500 relative">
                Categories
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </span>
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our most popular product categories and find exactly what you're looking for. 
              <span className="text-orange-600 font-medium">Quality meets style</span> in every collection.
            </p>
          </div>
        </div>
        
        {/* Categories Grid - Fixed 4 columns layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="flex justify-center"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <CategoryCard 
                name={category.name} 
                image={category.image}
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            <Link href='/products'>View All Products</Link>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
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
      `}</style>
    </section>
  );
}