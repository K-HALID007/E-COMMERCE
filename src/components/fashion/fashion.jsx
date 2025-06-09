"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, Filter, ChevronDown } from 'lucide-react';

const FashionPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    priceRange: '',
    rating: '',
    category: ''
  });

  // Fashion products data
  const fashionProducts = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      brand: "Levi's",
      category: "Jackets",
      image: "fashion/Classic Denim Jacket.jpg",
      rating: 4.5,
      reviews: 2420,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["100% Cotton", "Classic Fit", "Machine Washable", "Vintage Look"],
      description: "Timeless denim jacket with a classic fit that never goes out of style. Perfect for layering.",
      highlights: ["Premium denim fabric", "Comfortable fit", "Durable construction", "Versatile styling"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      name: "Floral Maxi Dress",
      brand: "Zara",
      category: "Dresses",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 1850,
      originalPrice: 3499,
      salePrice: 2799,
      discount: 20,
      features: ["Floral Print", "Maxi Length", "Flowy Fabric", "Side Pockets"],
      description: "Elegant floral maxi dress perfect for summer occasions and casual outings.",
      highlights: ["Breathable fabric", "Comfortable fit", "Stylish print", "Easy care"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      brand: "H&M",
      category: "Trousers",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
      rating: 4.2,
      reviews: 3240,
      originalPrice: 2499,
      salePrice: 1999,
      discount: 20,
      features: ["Slim Fit", "Cotton Blend", "Multiple Colors", "Belt Loops"],
      description: "Versatile slim fit chinos that can be dressed up or down for any occasion.",
      highlights: ["Comfortable fit", "Wrinkle resistant", "Easy to style", "Durable fabric"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 4,
      name: "Cashmere Sweater",
      brand: "Uniqlo",
      category: "Sweaters",
      image: "fashion/Cashmere Sweater.jpeg",
      rating: 4.6,
      reviews: 1680,
      originalPrice: 5999,
      salePrice: 4799,
      discount: 20,
      features: ["100% Cashmere", "Soft Touch", "Crew Neck", "Machine Washable"],
      description: "Luxurious cashmere sweater offering ultimate comfort and sophisticated style.",
      highlights: ["Ultra-soft cashmere", "Premium quality", "Elegant design", "Long-lasting"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 5,
      name: "Leather Ankle Boots",
      brand: "Clarks",
      category: "Footwear",
      image: "fashion/Leather Ankle Boots.jpeg",
      rating: 4.4,
      reviews: 2160,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["Genuine Leather", "Comfortable Sole", "Ankle Height", "Lace-up Design"],
      description: "Premium leather ankle boots combining style and comfort for everyday wear.",
      highlights: ["Real leather upper", "Cushioned insole", "Durable outsole", "Versatile style"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 6,
      name: "Silk Top ",
      brand: "Mango",
      category: "Tops",
      image: "fashion/Silk Blouse.jpg",
      rating: 4.3,
      reviews: 1420,
      originalPrice: 3999,
      salePrice: 2999,
      discount: 25,
      features: ["100% Silk", "Button Front", "Long Sleeves", "Professional Look"],
      description: "Elegant silk blouse perfect for office wear and formal occasions.",
      highlights: ["Luxurious silk fabric", "Professional appearance", "Comfortable fit", "Versatile styling"],
      warranty: "3 Months Brand Warranty",
      inStock: false,
      fastDelivery: false
    },
    {
      id: 7,
      name: "Cotton T-Shirt",
      brand: "Gap",
      category: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      rating: 4.1,
      reviews: 5680,
      originalPrice: 1299,
      salePrice: 999,
      discount: 23,
      features: ["100% Cotton", "Crew Neck", "Short Sleeves", "Regular Fit"],
      description: "Classic cotton t-shirt with a comfortable fit, perfect for everyday wear.",
      highlights: ["Soft cotton fabric", "Breathable material", "Easy care", "Classic design"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 8,
      name: "Formal Blazer",
      brand: "Hugo Boss",
      category: "Blazers",
      image: "fashion/Formal Blazer.jpeg",
      rating: 4.7,
      reviews: 890,
      originalPrice: 15999,
      salePrice: 12799,
      discount: 20,
      features: ["Wool Blend", "Tailored Fit", "Two Button", "Interior Pockets"],
      description: "Premium formal blazer with a tailored fit, perfect for business and formal events.",
      highlights: ["High-quality fabric", "Professional tailoring", "Sophisticated design", "Versatile wear"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 9,
      name: "Athletic Sneakers",
      brand: "Nike",
      category: "Footwear",
      image: "fashion/Athletic Sneakers.jpg",
      rating: 4.8,
      reviews: 3250,
      originalPrice: 7999,
      salePrice: 6399,
      discount: 20,
      features: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Moisture-Wicking"],
      description: "High-performance athletic sneakers designed for comfort and durability during workouts.",
      highlights: ["Advanced cushioning", "Breathable design", "Ergonomic fit", "All-day comfort"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 10,
      name: "Summer Sundress",
      brand: "H&M",
      category: "Dresses",
      image: "fashion/Summer Sundress.jpg",
      rating: 4.4,
      reviews: 1580,
      originalPrice: 2999,
      salePrice: 2399,
      discount: 20,
      features: ["Cotton Blend", "A-Line Cut", "Sleeveless", "Floral Pattern"],
      description: "Light and breezy sundress perfect for warm summer days and casual outings.",
      highlights: ["Breathable fabric", "Flattering fit", "Easy care", "Versatile style"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 11,
      name: "Leather Crossbody Bag",
      brand: "Michael Kors",
      category: "Accessories",
      image: "fashion/Leather Crossbody Bag.jpeg",
      rating: 4.6,
      reviews: 2100,
      originalPrice: 12999,
      salePrice: 9749,
      discount: 25,
      features: ["Genuine Leather", "Adjustable Strap", "Multiple Compartments", "Gold Hardware"],
      description: "Elegant leather crossbody bag with practical compartments and stylish design.",
      highlights: ["Premium leather", "Spacious interior", "Durable construction", "Timeless design"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 12,
      name: "Wool Winter Coat",
      brand: "Burberry",
      category: "Outerwear",
      image: "fashion/Wool Winter Coat.jpg",
      rating: 4.9,
      reviews: 780,
      originalPrice: 29999,
      salePrice: 23999,
      discount: 20,
      features: ["100% Wool", "Double-Breasted", "Belted Waist", "Lined Interior"],
      description: "Luxurious wool coat that combines warmth with sophisticated style for winter wear.",
      highlights: ["Premium wool fabric", "Classic design", "Superior warmth", "Expert tailoring"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 13,
      name: "Yoga Leggings",
      brand: "Lululemon",
      category: "Activewear",
      image: "fashion/Yoga Leggings.jpg",
      rating: 4.7,
      reviews: 4200,
      originalPrice: 5999,
      salePrice: 4799,
      discount: 20,
      features: ["4-Way Stretch", "High-Waisted", "Moisture-Wicking", "Hidden Pocket"],
      description: "High-performance yoga leggings with comfortable compression and stylish design.",
      highlights: ["Squat-proof fabric", "Perfect fit", "Stay-in-place waistband", "Quick-dry technology"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 14,
      name: "Designer Sunglasses",
      brand: "Ray-Ban",
      category: "Accessories",
      image: "fashion/Designer Sunglasses.jpeg",
      rating: 4.5,
      reviews: 1850,
      originalPrice: 8999,
      salePrice: 7199,
      discount: 20,
      features: ["UV Protection", "Polarized Lenses", "Metal Frame", "Classic Design"],
      description: "Iconic designer sunglasses offering style and superior eye protection.",
      highlights: ["Premium quality", "Timeless style", "Durable construction", "Complete UV protection"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 15,
      name: "Printed Silk Scarf",
      brand: "Hermès",
      category: "Accessories",
      image: "fashion/Printed Silk Scarf.jpg",
      rating: 4.8,
      reviews: 920,
      originalPrice: 18999,
      salePrice: 15199,
      discount: 20,
      features: ["100% Silk", "Hand-Rolled Edges", "Artistic Print", "90cm Square"],
      description: "Luxurious silk scarf featuring an exclusive artistic print and premium craftsmanship.",
      highlights: ["Premium silk", "Unique design", "Versatile styling", "Gift-worthy packaging"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 16,
      name: "Leather Chelsea Boots",
      brand: "Dr. Martens",
      category: "Footwear",
      image: "fashion/Chelsea Boots.jpg",
      rating: 4.6,
      reviews: 2800,
      originalPrice: 11999,
      salePrice: 9599,
      discount: 20,
      features: ["Genuine Leather", "Elastic Sides", "Air-Cushioned Sole", "Pull Tab"],
      description: "Classic Chelsea boots with durable construction and timeless style.",
      highlights: ["Premium leather", "All-day comfort", "Slip-resistant sole", "Easy on/off"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 17,
      name: "Pleated Midi Skirt",
      brand: "COS",
      category: "Skirts",
      image: "fashion/Pleated Skirt.jpeg",
      rating: 4.4,
      reviews: 1450,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["Pleated Design", "A-Line Cut", "Elastic Waist", "Midi Length"],
      description: "Elegant pleated midi skirt perfect for both office wear and special occasions.",
      highlights: ["Flattering silhouette", "Comfortable fit", "Versatile styling", "Easy care"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 18,
      name: "Merino Wool Cardigan",
      brand: "J.Crew",
      category: "Knitwear",
      image: "fashion/Wool Cardigan.jpeg",
      rating: 4.7,
      reviews: 1680,
      originalPrice: 7999,
      salePrice: 6399,
      discount: 20,
      features: ["100% Merino Wool", "Button Front", "Ribbed Cuffs", "Regular Fit"],
      description: "Luxurious merino wool cardigan offering warmth and sophisticated style.",
      highlights: ["Premium wool", "Comfortable fit", "Versatile layering", "Season-spanning style"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 19,
      name: "Leather Belt Bag",
      brand: "Gucci",
      category: "Accessories",
      image: "fashion/Leather Belt Bag.jpeg",
      rating: 4.8,
      reviews: 890,
      originalPrice: 24999,
      salePrice: 19999,
      discount: 20,
      features: ["Genuine Leather", "Adjustable Belt", "Multiple Compartments", "Designer Hardware"],
      description: "Trendy leather belt bag combining functionality with luxury design elements.",
      highlights: ["Premium leather", "Hands-free convenience", "Signature design", "Versatile wear"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 20,
      name: "Satin Evening Gown",
      brand: "Vera Wang",
      category: "Dresses",
      image: "fashion/Satin Evening Gown.jpg",
      rating: 4.9,
      reviews: 560,
      originalPrice: 35999,
      salePrice: 28799,
      discount: 20,
      features: ["Luxe Satin", "Fitted Bodice", "Floor Length", "Side Slit"],
      description: "Stunning satin evening gown designed for special occasions and formal events.",
      highlights: ["Premium fabric", "Expert tailoring", "Elegant design", "Red carpet worthy"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: false
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
                <span className="text-gray-700">Shop verse </span>
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
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Fashion Collection</h1>
        
        {/* Featured Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {fashionProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
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
            {fashionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionPage;