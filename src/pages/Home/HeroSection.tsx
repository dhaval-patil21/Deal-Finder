"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  
  const [currentDeal, setCurrentDeal] = useState(0);
  const [currentSlide, setCurrentSlide] = useState("");

  const featuredDeals = [
    "Up to 60% off Electronics",
    "50% off Fashion & Accessories",
    "70% off Footwear",
    "Buy 1 Get 1 Free on Books",
  ];

  const carouselSlides = [
    {
      image: "/carousel/carousel1.png",
      title: "Electronic Sales",
      discount: "Up to 60% Off",
      description:
        "Grab top smartphones and Headphones at unbeatable prices. Limited time only!",
    },
    {
      image: "/carousel/carousel2.png",
      title: "Clothes Sale",
      discount: "Flat 50% Off",
      description: "Men & women wear and more at half price!",
    },
    {
      image: "/carousel/carousel3.png",
      title: "Shoes Sale",
      discount: "Buy 1 Get 1 Free",
      description: "Trendy styles for men & women Shoes at amazing offers.",
    },
    {
      image: "/carousel/carousel4.png",
      title: "Books Sale",
      discount: "Buy 1 Get 1 Free",
      description: "Get Books at amazing offers.",
    },
  ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDeal((prev) => (prev + 1) % featuredDeals.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
      setCurrentSlide(
        (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
      );
    };

 

  return (
    <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-orange-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-orange-200 rounded-full blur-2xl"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full border border-orange-400/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium"> Deal Finder</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Find The Best
                <span className="block text-transparent bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text">
                  Deals Online
                </span>
              </h1>

              {/* Rotating Deal Text */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <p className="text-xl lg:text-2xl text-orange-200 font-medium animate-pulse">
                  {featuredDeals[currentDeal]}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover thousands of verified deals from top brands. Compare
              prices, read reviews, and save money on everything you love.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <button className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
                  Browse All Deals
                </button>

              </Link>
              {/* <Link href="/about">
                <button className="border-2 border-white text-white cursor-pointer hover:bg-white hover:text-slate-800 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg backdrop-blur-sm">
                  Learn More
                </button>
              </Link> */}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Deal Card with Carousel */}
            <div className="sm:col-span-2 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
              {/* Carousel Container */}
              <div className="relative h-100 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselSlides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex-shrink-0 relative"
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                      />
                      <div className=""></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                          DEAL OF THE DAY
                        </div>
                        <h3 className="text-lg font-bold mb-1">
                          {slide.title}
                        </h3>
                        <p className="text-2xl font-bold text-orange-300 mb-1">
                          {slide.discount}
                        </p>
                        {/* <p className="text-sm text-gray-200">
                          {slide.description}
                        </p> */}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                {/* <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button> */}

                {/* Dots Indicator */}
                <div className="">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? "bg-orange-400" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Shop Now Button */}
              <div className="p-4 text-center">
                {/* <button className="bg-white text-slate-800 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                  Shop Now
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">
            Find the Best Deals, All in One Place.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-white font-semibold text-lg">Amazon</div>
            <div className="text-white font-semibold text-lg">Flipkart</div>
            <div className="text-white font-semibold text-lg">Myntra</div>
            <div className="text-white font-semibold text-lg">Nykaa</div>
          </div>
        </div>
      </div>
    </section>
  );
}
