"use client"
import React, { useRef, useState, useEffect } from 'react';
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const ShoppingSectionOnly499 = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isPaused) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft >= scrollWidth - clientWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: 1, behavior: 'auto' });
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      setIsPaused(true); // Pause auto-scroll
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      // Resume auto-scroll after animation
      setTimeout(() => setIsPaused(false), 500);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      setIsPaused(true); // Pause auto-scroll
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      // Resume auto-scroll after animation
      setTimeout(() => setIsPaused(false), 500);
    }
  };

  // Mouse event handlers for pausing animation
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      originalPrice: 899,
      rating: 4.5,
      reviews: 128,
      category: "Fashion"
    },
    {
      id: 2,
      name: "Wireless Bluetooth Earbuds",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
      originalPrice: 1299,
      rating: 4.3,
      reviews: 256,
      category: "Electronics"
    },
    {
      id: 3,
      name: "Leather Wallet",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop",
      originalPrice: 799,
      rating: 4.7,
      reviews: 89,
      category: "Accessories"
    },
    {
      id: 4,
      name: "Steel Water Bottle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop",
      originalPrice: 649,
      rating: 4.4,
      reviews: 167,
      category: "Lifestyle"
    },
    {
      id: 5,
      name: "Phone Stand",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=300&fit=crop",
      originalPrice: 699,
      rating: 4.2,
      reviews: 203,
      category: "Accessories"
    },
    {
      id: 6,
      name: "Face Cream",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop",
      originalPrice: 899,
      rating: 4.6,
      reviews: 145,
      category: "Beauty"
    },
    {
      id: 7,
      name: "Canvas Bag",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      originalPrice: 599,
      rating: 4.1,
      reviews: 76,
      category: "Fashion"
    },
    {
      id: 8,
      name: "LED Lamp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      originalPrice: 1099,
      rating: 4.8,
      reviews: 312,
      category: "Home"
    },
    {
      id: 9,
      name: "Smart Watch",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      originalPrice: 1499,
      rating: 4.5,
      reviews: 189,
      category: "Electronics"
    },
    {
      id: 10,
      name: "Coffee Mug",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
      originalPrice: 599,
      rating: 4.3,
      reviews: 92,
      category: "Home"
    },
    {
      id: 11,
      name: "Sunglasses",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop",
      originalPrice: 799,
      rating: 4.4,
      reviews: 156,
      category: "Fashion"
    },
    {
      id: 12,
      name: "Notebook Set",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      originalPrice: 649,
      rating: 4.2,
      reviews: 78,
      category: "Stationery"
    },
    {
      id: 13,
      name: "Keychain",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      originalPrice: 299,
      rating: 4.0,
      reviews: 45,
      category: "Accessories"
    },
    {
      id: 14,
      name: "Hand Cream",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
      originalPrice: 699,
      rating: 4.5,
      reviews: 123,
      category: "Beauty"
    },
    {
      id: 15,
      name: "Socks Pack",
      image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=300&h=300&fit=crop",
      originalPrice: 599,
      rating: 4.1,
      reviews: 67,
      category: "Fashion"
    },
    {
      id: 16,
      name: "Wireless Mouse",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
      originalPrice: 899,
      rating: 4.3,
      reviews: 134,
      category: "Electronics"
    },
    {
      id: 17,
      name: "Travel Pillow",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      originalPrice: 799,
      rating: 4.2,
      reviews: 98,
      category: "Travel"
    },
    {
      id: 18,
      name: "Desk Plant",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
      originalPrice: 649,
      rating: 4.6,
      reviews: 87,
      category: "Home"
    },
    {
      id: 19,
      name: "Phone Case",
      image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=300&h=300&fit=crop",
      originalPrice: 699,
      rating: 4.4,
      reviews: 156,
      category: "Accessories"
    },
    {
      id: 20,
      name: "Lip Balm Set",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
      originalPrice: 549,
      rating: 4.1,
      reviews: 73,
      category: "Beauty"
    },
    {
      id: 21,
      name: "Hair Band",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
      originalPrice: 399,
      rating: 4.0,
      reviews: 52,
      category: "Fashion"
    },
    {
      id: 22,
      name: "Car Charger",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      originalPrice: 799,
      rating: 4.5,
      reviews: 142,
      category: "Electronics"
    },
    {
      id: 23,
      name: "Bookmark Set",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      originalPrice: 299,
      rating: 3.9,
      reviews: 34,
      category: "Stationery"
    },
    {
      id: 24,
      name: "Mini Fan",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      originalPrice: 899,
      rating: 4.3,
      reviews: 118,
      category: "Electronics"
    },
    {
      id: 25,
      name: "Candle Set",
      image: "https://images.unsplash.com/photo-1602874801006-47c3a3279c5a?w=300&h=300&fit=crop",
      originalPrice: 749,
      rating: 4.7,
      reviews: 91,
      category: "Home"
    },
    {
      id: 26,
      name: "Pen Set",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      originalPrice: 649,
      rating: 4.2,
      reviews: 67,
      category: "Stationery"
    },
    {
      id: 27,
      name: "Card Holder",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop",
      originalPrice: 599,
      rating: 4.4,
      reviews: 89,
      category: "Accessories"
    },
    {
      id: 28,
      name: "Face Mask",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=300&h=300&fit=crop",
      originalPrice: 699,
      rating: 4.5,
      reviews: 103,
      category: "Beauty"
    },
    {
      id: 29,
      name: "Cable Organizer",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      originalPrice: 449,
      rating: 4.1,
      reviews: 78,
      category: "Electronics"
    },
    {
      id: 30,
      name: "Coaster Set",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop",
      originalPrice: 549,
      rating: 4.0,
      reviews: 56,
      category: "Home"
    }
  ];

  const discount = (originalPrice) => Math.round(((originalPrice - 499) / originalPrice) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse shadow-lg">
            ⚡ FLASH SALE
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">
            Everything at ₹499 Only!
          </h2>
          <p className="text-lg text-slate-600">
            Limited time offer • Grab them before they're gone!
          </p>
        </div>

        {/* Horizontal Scrolling Products */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-200 border border-slate-200"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
          )}
          
          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:shadow-xl transition-all duration-200 border border-slate-200"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {products.map((product) => (
              <div 
                key={product.id} 
                className="min-w-60 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden border border-slate-200"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-bold">
                    {discount(product.originalPrice)}% OFF
                  </div>
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 hover:bg-blue-50 transition-colors cursor-pointer">
                    <Heart className="w-4 h-4 text-slate-600 hover:text-blue-600 transition-colors" />
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-sm text-slate-800 mb-2 line-clamp-1">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-blue-600">₹499</span>
                    <span className="text-sm text-slate-400 line-through">₹{product.originalPrice}</span>
                  </div>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium py-2 px-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll Progress Indicator */}
          <div className="flex justify-center mt-6">
            <div className="bg-slate-200 rounded-full h-2 w-32 overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-300"
                style={{
                  width: scrollRef.current 
                    ? `${Math.min(100, (scrollRef.current.scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) * 100)}%`
                    : '0%'
                }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md border border-slate-200">
            <span className="text-slate-600">⏰ Hurry! Sale ends in:</span>
            <span className="font-bold text-blue-600">23:45:12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSectionOnly499;