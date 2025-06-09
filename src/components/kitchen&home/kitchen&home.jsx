"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, Filter, ChevronDown } from 'lucide-react';

const Kitchenpage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    priceRange: '',
    rating: '',
    category: ''
  });

  // Kitchen & Home products data with properly matched images
  const kitchenProducts = [
    {
      id: 1,
      name: "Stainless Steel Cookware Set",
      brand: "Prestige",
      category: "Cookware",
      image: "kitchen/Stainless Steel Cookware Set.jpg",
      rating: 4.6,
      reviews: 3250,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["7-Piece Set", "Stainless Steel", "Induction Compatible", "Dishwasher Safe"],
      description: "Premium stainless steel cookware set with heat-resistant handles and superior cooking performance.",
      highlights: ["Even heat distribution", "Scratch resistant", "Easy to clean", "Professional grade"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      name: "Smart Coffee Maker",
      brand: "Philips",
      category: "Appliances",
      image: "kitchen/Smart Coffee Maker.jpg",
      rating: 4.5,
      reviews: 2180,
      originalPrice: 12999,
      salePrice: 9999,
      discount: 23,
      features: ["Programmable Timer", "Auto Shut-off", "12-Cup Capacity", "Built-in Grinder"],
      description: "Advanced coffee maker with smart features for the perfect brew every morning.",
      highlights: ["Precise temperature control", "Customizable strength", "Easy maintenance", "Sleek design"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 3,
      name: "Egyptian Cotton Bed Sheets",
      brand: "Spaces",
      category: "Bedding",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop&q=80",
      rating: 4.4,
      reviews: 1950,
      originalPrice: 4999,
      salePrice: 3499,
      discount: 30,
      features: ["100% Egyptian Cotton", "400 Thread Count", "King Size", "Machine Washable"],
      description: "Luxurious Egyptian cotton bed sheets offering ultimate comfort and breathability.",
      highlights: ["Ultra-soft texture", "Breathable fabric", "Fade resistant", "Hotel quality"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 4,
      name: "Ceramic Dinner Set",
      brand: "Corelle",
      category: "Dinnerware",
      image: "kitchen/Ceramic Dinner Set.jpg",
      rating: 4.7,
      reviews: 2850,
      originalPrice: 6999,
      salePrice: 5249,
      discount: 25,
      features: ["16-Piece Set", "Chip Resistant", "Microwave Safe", "Elegant Design"],
      description: "Beautiful ceramic dinner set perfect for everyday dining and special occasions.",
      highlights: ["Durable construction", "Elegant patterns", "Easy to stack", "Dishwasher safe"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 5,
      name: "Air Purifier with HEPA Filter",
      brand: "Dyson",
      category: "Home Appliances",
      image: "kitchen/Air Purifier with HEPA Filter.jpg",
      rating: 4.8,
      reviews: 1680,
      originalPrice: 24999,
      salePrice: 19999,
      discount: 20,
      features: ["HEPA H13 Filter", "360° Air Intake", "Smart Sensors", "App Control"],
      description: "Advanced air purifier that captures 99.97% of particles for cleaner, healthier air.",
      highlights: ["Removes allergens", "Real-time monitoring", "Quiet operation", "Energy efficient"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 6,
      name: "Memory Foam Mattress",
      brand: "Sleepwell",
      category: "Mattresses",
      image: "kitchen/Memory Foam Mattress.jpg",
      rating: 4.6,
      reviews: 3420,
      originalPrice: 18999,
      salePrice: 14249,
      discount: 25,
      features: ["Queen Size", "Gel-Infused Memory Foam", "Medium Firm", "10-Year Warranty"],
      description: "Premium memory foam mattress providing optimal support and temperature regulation.",
      highlights: ["Pressure point relief", "Motion isolation", "Temperature control", "Hypoallergenic"],
      warranty: "10 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 7,
      name: "Non-Stick Frying Pan Set",
      brand: "Tefal",
      category: "Cookware",
      image: "kitchen/Non-Stick Frying Pan Set.jpg",
      rating: 4.3,
      reviews: 4250,
      originalPrice: 3999,
      salePrice: 2799,
      discount: 30,
      features: ["3-Piece Set", "Non-Stick Coating", "Heat Indicator", "Ergonomic Handle"],
      description: "High-quality non-stick frying pans with superior coating and heat distribution.",
      highlights: ["Easy food release", "Scratch resistant", "Even heating", "Easy to clean"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 8,
      name: "LED Table Lamp",
      brand: "IKEA",
      category: "Lighting",
      image: "kitchen/LED Table Lamp.jpg",
      rating: 4.2,
      reviews: 1560,
      originalPrice: 2499,
      salePrice: 1749,
      discount: 30,
      features: ["Adjustable Brightness", "USB Charging Port", "Touch Control", "Modern Design"],
      description: "Stylish LED table lamp with adjustable brightness and convenient USB charging port.",
      highlights: ["Energy efficient", "Eye-friendly light", "Space-saving design", "Durable build"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 9,
      name: "Vacuum Cleaner",
      brand: "Eureka Forbes",
      category: "Cleaning",
      image: "kitchen/Vacuum Cleaner.jpg",
      rating: 4.4,
      reviews: 2890,
      originalPrice: 15999,
      salePrice: 11999,
      discount: 25,
      features: ["Bagless Design", "HEPA Filter", "Multiple Attachments", "Cord Rewind"],
      description: "Powerful vacuum cleaner with advanced filtration system for thorough cleaning.",
      highlights: ["Strong suction power", "Easy maintenance", "Versatile cleaning", "Compact storage"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 10,
      name: "Wooden Dining Table",
      brand: "Urban Ladder",
      category: "Furniture",
      image: "kitchen/Wooden Dining Table.jpg",
      rating: 4.7,
      reviews: 1240,
      originalPrice: 25999,
      salePrice: 19499,
      discount: 25,
      features: ["Solid Wood", "6-Seater", "Modern Design", "Easy Assembly"],
      description: "Elegant wooden dining table crafted from premium solid wood for lasting durability.",
      highlights: ["Premium wood finish", "Sturdy construction", "Timeless design", "Easy maintenance"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 11,
      name: "Microwave Oven",
      brand: "LG",
      category: "Appliances",
      image: "kitchen/Microwave Oven.jpg",
      rating: 4.5,
      reviews: 3680,
      originalPrice: 8999,
      salePrice: 6749,
      discount: 25,
      features: ["25L Capacity", "Auto Cook Menu", "Child Lock", "Stainless Steel Interior"],
      description: "Versatile microwave oven with multiple cooking modes and convenient auto-cook features.",
      highlights: ["Even heating", "Easy controls", "Energy efficient", "Durable interior"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 12,
      name: "Blackout Curtains",
      brand: "Home Centre",
      category: "Home Decor",
      image: "kitchen/Blackout Curtains.jpg",
      rating: 4.3,
      reviews: 2150,
      originalPrice: 3999,
      salePrice: 2799,
      discount: 30,
      features: ["100% Blackout", "Thermal Insulated", "Machine Washable", "Multiple Colors"],
      description: "Premium blackout curtains that block light and provide thermal insulation.",
      highlights: ["Complete light blocking", "Energy saving", "Noise reduction", "Easy installation"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 13,
      name: "Knife Set with Block",
      brand: "Wusthof",
      category: "Kitchen Tools",
      image: "kitchen/Knife Set with Block.jpg",
      rating: 4.8,
      reviews: 1890,
      originalPrice: 12999,
      salePrice: 9749,
      discount: 25,
      features: ["High Carbon Steel", "Ergonomic Handles", "Wooden Block", "Professional Grade"],
      description: "Professional knife set with precision-forged blades and ergonomic handles.",
      highlights: ["Razor sharp blades", "Comfortable grip", "Organized storage", "Long-lasting edge"],
      warranty: "5 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 14,
      name: "Throw Pillows Set",
      brand: "Fabindia",
      category: "Home Decor",
      image: "kitchen/Throw Pillows Set.jpg",
      rating: 4.4,
      reviews: 1650,
      originalPrice: 2999,
      salePrice: 1999,
      discount: 33,
      features: ["Cotton Cover", "Soft Filling", "Decorative Patterns", "Machine Washable"],
      description: "Stylish throw pillows to add comfort and aesthetic appeal to your living space.",
      highlights: ["Soft and comfortable", "Decorative designs", "Easy care", "Versatile styling"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 15,
      name: "Electric Kettle",
      brand: "Bajaj",
      category: "Appliances",
      image: "kitchen/Electric Kettle.jpg",
      rating: 4.2,
      reviews: 4520,
      originalPrice: 1999,
      salePrice: 1399,
      discount: 30,
      features: ["1.7L Capacity", "Auto Shut-off", "Cordless Design", "Fast Boiling"],
      description: "Efficient electric kettle with safety features and rapid boiling capability.",
      highlights: ["Quick heating", "Safety features", "Easy pouring", "Compact design"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    }
  ];

  // Format price consistently
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const ProductCard = ({ product }) => {
    const discountAmount = product.originalPrice - product.salePrice;
    
    return (
      <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-4">
        <div className="flex p-4">
          {/* Left Side - Product Image */}
          <div className="w-64 flex-shrink-0">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {product.fastDelivery && (
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Fast Delivery
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 ml-6 space-y-3">
            {/* Product Title and Brand */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{product.brand} • {product.category}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                <span className="font-medium">{product.rating}</span>
                <Star className="w-3 h-3 ml-1 fill-current" />
              </div>
              <span className="text-sm text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Features */}
            <div className="space-y-1">
              {product.features.map((feature, index) => (
                <div key={index} className="text-sm text-gray-700 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Highlights */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Highlights:</h4>
              <div className="grid grid-cols-2 gap-1">
                {product.highlights.map((highlight, index) => (
                  <div key={index} className="text-xs text-gray-600 flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty */}
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              {product.warranty}
            </div>
          </div>

          {/* Right Side - Price and Actions */}
          <div className="w-80 flex-shrink-0 ml-6 space-y-4">
            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{formatPrice(product.salePrice)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{formatPrice(product.originalPrice)}
                </span>
                <span className="text-green-600 font-medium">
                  {product.discount}% off
                </span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                You save: ₹{formatPrice(discountAmount)}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Truck className="w-4 h-4 mr-2 text-blue-600" />
                <span className="text-gray-700">
                  {product.fastDelivery ? 'Free delivery by tomorrow' : 'Free delivery in 3-5 days'}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-gray-700">Shop verse Assured</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                disabled={!product.inStock}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${
                  product.inStock 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>ADD TO CART</span>
              </button>
              
              <button 
                disabled={!product.inStock}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  product.inStock 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                BUY NOW
              </button>
            </div>

            {/* Share Option */}
            <button className="w-full py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Kitchen & Home Collection</h1>
        
        {/* Featured Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kitchenProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-600 font-bold">₹{formatPrice(product.salePrice)}</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Products List */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">All Products</h2>
          <div className="space-y-4">
            {kitchenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchenpage;