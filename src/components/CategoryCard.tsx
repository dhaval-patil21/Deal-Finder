
import Link from "next/link";
import Image from "next/image";

export default function CategoryCard({ name = '', image = '' }) {
  // Ensure name is a string and not empty
  const categoryName = name && typeof name === 'string' ? name : 'Category';
  
  return (
    <div className="w-full max-w-sm mx-auto">
      <Link 
        href='/products'
        className="group block cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100 hover:border-orange-200 w-full"
      >
        <div className="relative w-full h-48 overflow-hidden">
          {image ? (
            <Image 
              src={image} 
              alt={`${categoryName} category`}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center relative">
              <div className="text-orange-400 text-4xl font-bold opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {categoryName.charAt(0).toUpperCase()}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
            </div>    
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Floating badge */}
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            Explore
          </div>
        </div>
        
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300 mb-1">
            {categoryName}
          </h3>
          <p className="text-slate-600 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 mb-2">
            Discover our {categoryName.toLowerCase()} collection
          </p>
          
          {/* Animated arrow */}
          <div className="flex items-center justify-center text-orange-500 font-medium text-sm group-hover:text-orange-600 transition-colors duration-300">
            <span className="mr-1">Shop Now</span>
            <svg 
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}