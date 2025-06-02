"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Zap } from 'lucide-react';

const SeasonalTopPicks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Winter Woolen Sweater",
      brand: "Allen Solly",
      price: 1299,
      originalPrice: 2499,
      image: "Allen Solly.jpg",
      rating: 4.2,
      reviews: 1847,
      offer: "48% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 2,
      name: "Men's Thermal Jacket",
      brand: "Roadster",
      price: 2199,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1604025677169-6b07c4b5d3c3?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 892,
      offer: "45% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 3,
      name: "Wool Blend Muffler",
      brand: "FabSeasons",
      price: 399,
      originalPrice: 899,
      image: "Wool Blend Muffler.jpg",
      rating: 3.9,
      reviews: 2156,
      offer: "55% off",
      delivery: "₹40 delivery charge",
      shopverseAssured: false
    },
    {
      id: 4,
      name: "Winter Ankle Boots",
      brand: "BATA",
      price: 1899,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=400&fit=crop",
      rating: 4.1,
      reviews: 3203,
      offer: "36% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 5,
      name: "Warm Winter Gloves",
      brand: "Jockey",
      price: 549,
      originalPrice: 999,
      image: "gloves.jpeg",
      rating: 4.3,
      reviews: 674,
      offer: "45% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 6,
      name: "Cotton Flannel Night Suit",
      brand: "Jockey",
      price: 1199,
      originalPrice: 1999,
      image: "night.jpg",
      rating: 4.5,
      reviews: 1298,
      offer: "40% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 7,
      name: "Winter Hooded Parka Jacket",
      brand: "Fort Collins",
      price: 2499,
      originalPrice: 4999,
      image: "Winter Hooded Parka Jacket.jpeg",
      rating: 4.3,
      reviews: 956,
      offer: "50% off",
      delivery: "Free delivery",
      shopverseAssured: true
    },
    {
      id: 8,
      name: "Cashmere Wool Winter Scarf",
      brand: "Monte Carlo",
      price: 899,
      originalPrice: 1799,
      image: "Monte Carlo.jpeg",
      rating: 4.6,
      reviews: 423,
      offer: "50% off",
      delivery: "Free delivery",
      shopverseAssured: true
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 4)) % Math.ceil(products.length / 4));
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN').format(price);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-[1580px] mx-auto px-6 lg:px-12">
        {/* Header - ShopVerse Style */}
        <div className="bg-white rounded-lg shadow-sm mb-6 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Top Picks for Winter
              </h2>
              <p className="text-gray-600">Trending items this season</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded text-sm font-medium">
                <Zap className="w-4 h-4 inline mr-1" />
                Big Saving Days
              </div>
              <button className="text-blue-600 font-medium hover:underline">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(products.length / 4) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(slideIndex * 4, slideIndex * 4 + 4).map((product) => (
                      <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group">
                        {/* Product Image */}
                        <div className="relative p-4">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                          />
                          {/* Wishlist Heart */}
                          <button 
                            onClick={() => toggleFavorite(product.id)}
                            className="absolute top-6 right-6 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-shadow"
                          >
                            <Heart 
                              className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                            />
                          </button>
                          {/* Offer Badge */}
                          <div className="absolute bottom-6 left-6 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                            {product.offer}
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="px-4 pb-4">
                          {/* Brand */}
                          <div className="text-gray-500 text-sm mb-1">{product.brand}</div>
                          
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
                            <span className="text-gray-500 text-xs">({formatPrice(product.reviews)})</span>
                          </div>

                          {/* Price */}
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg font-bold text-gray-900">₹{formatPrice(product.price)}</span>
                            <span className="text-sm text-gray-500 line-through">₹{formatPrice(product.originalPrice)}</span>
                          </div>

                          {/* Delivery Info */}
                          <div className="text-xs text-gray-600 mb-3">
                            {product.delivery}
                          </div>

                          {/* Shopverse Assured or placeholder for consistent spacing */}
                          <div className="mb-2 min-h-[24px]">
                            {product.shopverseAssured && (
                              <div className="flex items-center gap-1">
                                <img 
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMEw5Ljc5IDUuMjFMMTYgNUwxMS4wOSA5LjI5TDEzIDEyTDggMTBMMy4wOSA5LjI5TDAgNUw2LjIxIDUuMjFMOCAwWiIgZmlsbD0iIzIzN0VGRiIvPgo8L3N2Zz4K" 
                                  alt="Shopverse Assured" 
                                  className="w-4 h-4"
                                />
                                <span className="text-xs text-gray-600">Shopverse Assured</span>
                              </div>
                            )}
                          </div>

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
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-[calc(50%-32px)] z-10 bg-white shadow-md h-16 px-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          {currentSlide < Math.ceil(products.length / 4) - 1 && (
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-[calc(50%-32px)] z-10 bg-white shadow-md h-16 px-1 hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(products.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Bottom Banner - ShopVerse Style */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mt-8 p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">🛍️ Winter Sale - Up to 70% Off</h3>
          <p className="mb-4">Free delivery on orders above ₹499 | Easy returns</p>
          <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100 transition-colors">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalTopPicks;