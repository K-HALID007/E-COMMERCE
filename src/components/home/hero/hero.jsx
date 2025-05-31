"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Zap, Users, Star, Timer } from 'lucide-react';

const EcommerceHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample product deals data
  const deals = [
    {
      id: 1,
      title: "Mobile Phone Mega Sale",
      subtitle: "Latest Smartphones at Unbeatable Prices",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=400&fit=crop",
      discount: "Up to 50% OFF",
      category: "Electronics",
      originalPrice: "₹49,999",
      salePrice: "₹24,999"
    },
    {
      id: 2,
      title: "Men's Fashion Week",
      subtitle: "Trendy Clothes & Accessories for Every Occasion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop",
      discount: "Up to 40% OFF",
      category: "Men's Fashion",
      originalPrice: "₹2,999",
      salePrice: "₹1,799"
    },
    {
      id: 3,
      title: "Women's Collection",
      subtitle: "Designer Outfits & Ethnic Wear Collection",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=400&fit=crop",
      discount: "Up to 60% OFF",
      category: "Women's Fashion",
      originalPrice: "₹3,499",
      salePrice: "₹1,399"
    },
    {
      id: 4,
      title: "Summer Sale Bonanza",
      subtitle: "Beat the Heat with Cool Deals on Everything",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop",
      discount: "Up to 70% OFF",
      category: "Seasonal Sale",
      originalPrice: "₹1,999",
      salePrice: "₹599"
    },
    {
      id: 5,
      title: "Electronics & Gadgets",
      subtitle: "Latest Tech Gadgets at Best Prices",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=400&fit=crop",
      discount: "Up to 45% OFF",
      category: "Technology",
      originalPrice: "₹15,999",
      salePrice: "₹8,799"
    },
    {
      id: 6,
      title: "Home & Kitchen",
      subtitle: "Transform Your Home with Amazing Deals",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=400&fit=crop",
      discount: "Up to 55% OFF",
      category: "Home & Living",
      originalPrice: "₹4,999",
      salePrice: "₹2,249"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % deals.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [deals.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
  };

  return (
    <div className="bg-white relative">
      {/* Image Carousel Section */}
      <div className="bg-gray-50 py-8 relative">
        <div className="max-w-7xl mx-auto px-4">
          {/* Carousel Container */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {deals.map((deal, index) => (
                <div key={deal.id} className="w-full flex-shrink-0 relative">
                  <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side - Deal Info */}
                    <div className="w-full md:w-2/5 p-8 md:p-12 space-y-6">
                      <div className="space-y-4">
                        <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                          {deal.discount}
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                            {deal.category}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            {deal.title}
                          </h2>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {deal.subtitle}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl font-bold text-green-600">{deal.salePrice}</span>
                            <span className="text-lg text-gray-500 line-through">{deal.originalPrice}</span>
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            You Save: ₹{parseInt(deal.originalPrice.replace('₹', '').replace(',', '')) - parseInt(deal.salePrice.replace('₹', '').replace(',', ''))}
                          </div>
                        </div>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center space-x-2">
                          <ShoppingBag className="w-5 h-5" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Product Image */}
                    <div className="w-full md:w-3/5 h-64 md:h-96">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-6">
            {deals.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Categories Bar */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4">
            {['Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Sports', 'Books'].map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-colors duration-300 border hover:border-blue-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Live Shopping Activity */}
      <div className="fixed bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border z-[60]">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-sm">
            <div className="font-semibold text-gray-900">1,247 people</div>
            <div className="text-gray-600">shopping right now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeroSection;