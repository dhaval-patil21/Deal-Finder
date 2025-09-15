// components/WhyCompare.js
"use client"
import Link from 'next/link';
import { useState } from 'react';

// const features = [
//   {
//     id: 1,
//     icon: "💰",
//     title: "Save Money",
//     subtitle: "Find the Best Deals",
//     description: "Compare prices across multiple retailers and save up to 40% on your purchases. Our algorithm finds the lowest prices automatically.",
//     stats: "Average savings: $127 per purchase",
//     color: "from-green-400 to-green-600"
//   },
//   {
//     id: 2,
//     icon: "⚡",
//     title: "Save Time",
//     subtitle: "Instant Comparisons",
//     description: "No more browsing multiple websites. Get comprehensive product comparisons in seconds with real-time price updates.",
//     stats: "Research time reduced by 85%",
//     color: "from-blue-400 to-blue-600"
//   },
//   {
//     id: 3,
//     icon: "🔍",
//     title: "Smart Analysis",
//     subtitle: "AI-Powered Insights",
//     description: "Our advanced AI analyzes product reviews, ratings, and specifications to help you make informed decisions.",
//     stats: "99.2% accuracy in recommendations",
//     color: "from-purple-400 to-purple-600"
//   },
//   {
//     id: 4,
//     icon: "🛡️",
//     title: "Trusted Reviews",
//     subtitle: "Verified Information",
//     description: "Access authentic user reviews and expert ratings from verified buyers. Say goodbye to fake reviews and biased information.",
//     stats: "Over 2M verified reviews",
//     color: "from-orange-400 to-orange-600"
//   },
//   {
//     id: 5,
//     icon: "📊",
//     title: "Price History",
//     subtitle: "Track Price Trends",
//     description: "View detailed price history charts and get alerts when prices drop. Never miss a great deal again.",
//     stats: "Track prices for 30+ days",
//     color: "from-indigo-400 to-indigo-600"
//   },
//   {
//     id: 6,
//     icon: "🎯",
//     title: "Personalized",
//     subtitle: "Tailored Recommendations",
//     description: "Get product suggestions based on your preferences, budget, and shopping history. Find exactly what you need.",
//     stats: "95% user satisfaction rate",
//     color: "from-pink-400 to-pink-600"
//   }
// ];

// const FeatureCard = ({ feature, index, isActive, onHover }) => {
//   return (
//     <div 
//       className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-orange-200 cursor-pointer ${isActive ? 'ring-2 ring-orange-500 ring-opacity-50' : ''}`}
//       onMouseEnter={() => onHover(index)}
//       onMouseLeave={() => onHover(null)}
//       style={{
//         animationDelay: `${index * 150}ms`,
//         animation: 'fadeInUp 0.8s ease-out forwards'
//       }}
//     >
//       {/* Background Gradient */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
      
//       {/* Icon */}
//       <div className="relative mb-4">
//         <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
//           {feature.icon}
//         </div>
//         <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
//       </div>
      
//       {/* Content */}
//       <div className="relative">
//         <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">
//           {feature.title}
//         </h3>
//         <h4 className="text-orange-500 font-semibold text-sm mb-3 uppercase tracking-wide">
//           {feature.subtitle}
//         </h4>
//         <p className="text-slate-600 leading-relaxed mb-4 text-sm">
//           {feature.description}
//         </p>
        
//         {/* Stats */}
//         <div className="bg-orange-50 rounded-lg p-3 group-hover:bg-orange-100 transition-colors duration-300">
//           <p className="text-orange-600 font-semibold text-sm text-center">
//             {feature.stats}
//           </p>
//         </div>
//       </div>
      
//       {/* Hover Arrow */}
//       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
//         <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

const ProcessStep = ({ step, index }) => {
  const stepIcons = ["🔍", "⚖️", "✨"];
  const stepColors = ["from-blue-400 to-blue-600", "from-orange-400 to-orange-600", "from-green-400 to-green-600"];
  
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Number */}
      <div className={`relative w-20 h-20 bg-gradient-to-br ${stepColors[index]} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg`}>
        <span className="text-2xl">{stepIcons[index]}</span>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
      <p className="text-slate-600 text-sm max-w-xs">{step.description}</p>
      
      {/* Connection Line */}
      {index < 2 && (
        <div className="hidden md:block absolute top-10 left-full w-32 h-0.5 bg-gradient-to-r from-orange-300 to-orange-400 transform translate-x-4"></div>
      )}
    </div>
  );
};

export default function WhyCompare() {
  // const [activeFeature, setActiveFeature] = useState(null);
  
  const processSteps = [
    {
      title: "Search & Discover",
      description: "Enter the product you want to buy and we'll find all available options from trusted retailers."
    },
    {
      title: "Compare & Analyze",
      description: "Our Platform compares prices, features, reviews, and ratings to show you the complete picture."
    },
    {
      title: "Choose & Save",
      description: "Make informed decisions and get the best deal. Save money and time with confidence."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-15 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        {/* <div className="text-center mb-20">
          <span className="text-orange-500 font-semibold text-sm sm:text-base tracking-wide uppercase mb-2 block">
            Why Choose Our Platform
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Why
            <span className="block text-orange-500 relative">
              Compare?
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
            Stop wasting time and money on poor purchasing decisions. Our intelligent comparison platform 
            <span className="text-orange-600 font-medium"> empowers you</span> to make smarter choices every time.
          </p>
        </div> */}

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              feature={feature}
              index={index}
              isActive={activeFeature === index}
              onHover={setActiveFeature}
            />
          ))}
        </div> */}

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              How It <span className="text-orange-500">Works</span>
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our simple 3-step process makes product comparison effortless and accurate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { number: "2M+", label: "Happy Customers", icon: "👥" },
            { number: "50K+", label: "Products Compared", icon: "📦" },
            { number: "$127", label: "Average Savings", icon: "💰" },
            { number: "99.2%", label: "Accuracy Rate", icon: "🎯" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
              <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link href="/products"className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg">
            <span>Explore Products</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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