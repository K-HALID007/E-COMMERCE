"use client"
import React, { useRef, useState } from 'react';
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const ShoppingSectionOnly499 = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
      name: "Premium Coffee Mug",
      image: "https://images.pexels.com/photos/1307127/pexels-photo-1307127.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2",
      originalPrice: 599,
      rating: 4.3,
      reviews: 92,
      category: "Home"
    },  
  ];

  const discount = (originalPrice) => Math.round(((originalPrice - 499) / originalPrice) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-slate-100 py-8">
      <div className="max-w-[1580px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Deal of the Day | ₹499 Store
          </h2>
          <p className="text-slate-600">
            Grab your favorite items at unbelievable prices
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-[calc(50%-32px)] z-10 bg-white shadow-md h-16 px-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          
          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-[calc(50%-32px)] z-10 bg-white shadow-md h-16 px-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}

          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth px-1"
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
            
            {products.slice(0, 10).map((product) => (
              <div 
                key={product.id} 
                className="min-w-[280px] bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                {/* Product Image */}
                <div className="relative p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=300&h=300&fit=crop';
                    }}
                  />
                  {/* Wishlist Heart */}
                  <button 
                    className="absolute top-6 right-6 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                  </button>
                  {/* Offer Badge */}
                  <div className="absolute bottom-6 left-6 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {discount(product.originalPrice)}% off
                  </div>
                </div>

                {/* Product Details */}
                <div className="px-4 pb-4">
                  {/* Category as Brand */}
                  <div className="text-gray-500 text-sm mb-1">{product.category}</div>
                  
                  {/* Product Name */}
                  <h3 className="font-medium text-gray-800 text-sm mb-2 line-clamp-2 leading-5">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded text-xs">
                      <span className="font-medium">{product.rating}</span>
                      <Star className="w-3 h-3 ml-1 fill-current" />
                    </div>
                    <span className="text-gray-500 text-xs">({product.reviews})</span>
                  </div>
                  
                  {/* Pricing */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg font-bold text-gray-900">₹499</span>
                    <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>
                  
                  {/* Delivery Info */}
                  <div className="text-xs text-gray-600 mb-3">
                    Free delivery
                  </div>

                  {/* Placeholder for spacing (like Shopverse Assured) */}
                  <div className="mb-2 min-h-[24px]"></div>
                  
                  {/* Add to Cart Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded flex items-center justify-center gap-2 text-sm transition-colors duration-200">
                    <ShoppingCart className="w-4 h-4" />
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingSectionOnly499;