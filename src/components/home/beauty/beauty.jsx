"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, Sparkles, Eye, Droplets, Sun } from 'lucide-react';

const BeautyPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  // Beauty products data
  const beautyProducts = [
    {
      id: 1,
      name: "Luminous Glow Foundation",
      brand: "Fenty Beauty",
      category: "Foundation",
      image: "beauty/Luminous Glow Foundation.jpg",
      rating: 4.8,
      reviews: 3420,
      originalPrice: 3499,
      salePrice: 2799,
      discount: 20,
      features: ["40+ Shades", "SPF 15", "Dewy Finish", "Long-lasting"],
      description: "Weightless medium-to-full coverage foundation with a luminous finish.",
      benefits: ["Hydrates skin", "Evens skin tone", "Buildable coverage", "Photo-ready finish"],
      skinType: "All skin types",
      inStock: true,
      isNew: true,
      fastDelivery: true,
      warranty: "100% Authentic Product"
    },
    {
      id: 2,
      name: "Vitamin C Brightening Serum",
      brand: "The Ordinary",
      category: "Skincare",
      image: "beauty/Vitamin C Brightening Serum.jpg",
      rating: 4.9,
      reviews: 5680,
      originalPrice: 1299,
      salePrice: 999,
      discount: 23,
      features: ["15% L-Ascorbic Acid", "Antioxidants", "Brightening", "Clinical Grade"],
      description: "Potent vitamin C serum for radiant, youthful-looking skin.",
      benefits: ["Brightens complexion", "Reduces dark spots", "Boosts collagen", "Protects from damage"],
      skinType: "Normal to oily",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Tested"
    },
    {
      id: 3,
      name: "Naked Eyeshadow Palette",
      brand: "Urban Decay",
      category: "Eyes",
      image: "beauty/Naked Eyeshadow Palette.jpg",
      rating: 4.7,
      reviews: 2890,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["12 Shades", "Neutral Tones", "Shimmer & Matte", "Blendable"],
      description: "Iconic neutral eyeshadow palette with versatile shades for any look.",
      benefits: ["Highly pigmented", "Long-wearing", "Easy to blend", "Professional finish"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: false,
      warranty: "Cruelty-Free Certified"
    },
    {
      id: 4,
      name: "Hydrating Facial Cleanser",
      brand: "CeraVe",
      category: "Skincare",
      image: "beauty/Hydrating Facial Cleanser.jpg",
      rating: 4.6,
      reviews: 4200,
      originalPrice: 899,
      salePrice: 719,
      discount: 20,
      features: ["Ceramides", "Hyaluronic Acid", "Non-foaming", "pH Balanced"],
      description: "Gentle daily cleanser that maintains skin's natural barrier.",
      benefits: ["Removes makeup", "Doesn't strip skin", "Maintains moisture", "Suitable for sensitive skin"],
      skinType: "Dry to normal",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Recommended"
    },
    {
      id: 5,
      name: "Ruby Woo Lipstick",
      brand: "MAC",
      category: "Lips",
      image: "beauty/Ruby Woo Lipstick.jpg",
      rating: 4.5,
      reviews: 3850,
      originalPrice: 2199,
      salePrice: 1759,
      discount: 20,
      features: ["Matte Finish", "Iconic Red", "Full Coverage", "Retro Matte"],
      description: "The ultimate red matte lipstick that's become a beauty icon.",
      benefits: ["Long-lasting color", "Comfortable wear", "Doesn't feather", "Classic look"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Authentic MAC Product"
    },
    {
      id: 6,
      name: "Retinol Renewal Serum",
      brand: "Paula's Choice",
      category: "Skincare",
      image: "beauty/Retinol Renewal Serum.jpg",
      rating: 4.4,
      reviews: 2760,
      originalPrice: 2899,
      salePrice: 2319,
      discount: 20,
      features: ["Clinical 0.3% Retinol", "Peptides", "Anti-aging", "Gentle Formula"],
      description: "Advanced retinol treatment for smoother, younger-looking skin.",
      benefits: ["Reduces fine lines", "Improves texture", "Minimizes pores", "Boosts renewal"],
      skinType: "Normal to oily",
      inStock: false,
      isNew: true,
      fastDelivery: false,
      warranty: "Clinically Tested"
    },
    {
      id: 7,
      name: "Hydrating Sheet Mask Set",
      brand: "The Face Shop",
      category: "Skincare",
      image: "beauty/Hydrating Sheet Mask Set.jpg",
      rating: 4.3,
      reviews: 1890,
      originalPrice: 1499,
      salePrice: 1049,
      discount: 30,
      features: ["10-Piece Set", "Hyaluronic Acid", "Natural Extracts", "Korean Beauty"],
      description: "Intensive hydrating sheet masks for instant moisture boost.",
      benefits: ["Deep hydration", "Instant glow", "Soothing effect", "Plumping action"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "K-Beauty Authentic"
    },
    {
      id: 8,
      name: "Volumizing Mascara",
      brand: "Maybelline",
      category: "Eyes",
      image: "beauty/Volumizing Mascara.jpg",
      rating: 4.4,
      reviews: 4560,
      originalPrice: 899,
      salePrice: 629,
      discount: 30,
      features: ["Waterproof Formula", "Volume Boost", "Curved Wand", "All-Day Wear"],
      description: "Dramatic volumizing mascara for bold, beautiful lashes.",
      benefits: ["Instant volume", "No clumping", "Smudge-proof", "Easy removal"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Ophthalmologist Tested"
    },
    {
      id: 9,
      name: "Dewy Skin Toner",
      brand: "Laneige",
      category: "Skincare",
      image: "beauty/Dewy Skin Toner.jpg",
      rating: 4.7,
      reviews: 2890,
      originalPrice: 1899,
      salePrice: 1519,
      discount: 20,
      features: ["Alcohol-Free", "Hydrating", "pH Balanced", "Korean Formula"],
      description: "Gentle hydrating toner that preps skin for the rest of your routine.",
      benefits: ["Balances pH", "Hydrates deeply", "Soothes skin", "Improves absorption"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "K-Beauty Authentic"
    },
    {
      id: 10,
      name: "Matte Liquid Lipstick",
      brand: "NYX",
      category: "Lips",
      image: "beauty/Matte Liquid Lipstick.jpg",
      rating: 4.5,
      reviews: 3150,
      originalPrice: 799,
      salePrice: 599,
      discount: 25,
      features: ["Long-lasting", "Transfer-proof", "Vegan", "Cruelty-free"],
      description: "Ultra-matte liquid lipstick that stays put all day.",
      benefits: ["No transfer", "Comfortable wear", "Rich pigment", "Quick-drying"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 11,
      name: "Hyaluronic Acid Moisturizer",
      brand: "Neutrogena",
      category: "Skincare",
      image: "beauty/Hyaluronic Acid Moisturizer.jpg",
      rating: 4.6,
      reviews: 4280,
      originalPrice: 999,
      salePrice: 799,
      discount: 20,
      features: ["Oil-free", "Fragrance-free", "Non-comedogenic", "Dermatologist tested"],
      description: "Lightweight gel moisturizer with hyaluronic acid for intense hydration.",
      benefits: ["24hr hydration", "Oil-free formula", "Plumps skin", "Reduces fine lines"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Recommended"
    },
    {
      id: 12,
      name: "Brow Pomade",
      brand: "Anastasia Beverly Hills",
      category: "Eyes",
      image: "beauty/Brow Pomade.jpg",
      rating: 4.8,
      reviews: 2950,
      originalPrice: 1999,
      salePrice: 1599,
      discount: 20,
      features: ["Waterproof", "Long-lasting", "Smudge-proof", "Multiple shades"],
      description: "Professional-grade brow pomade for perfectly defined brows.",
      benefits: ["Precise application", "Natural finish", "All-day wear", "Buildable color"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Authentic Product"
    },
    {
      id: 13,
      name: "Silk Foundation Brush",
      brand: "Real Techniques",
      category: "Foundation",
      image: "beauty/Silk Foundation Brush.jpg",
      rating: 4.7,
      reviews: 1890,
      originalPrice: 1299,
      salePrice: 909,
      discount: 30,
      features: ["Synthetic bristles", "Ergonomic handle", "Professional quality", "Cruelty-free"],
      description: "Ultra-soft foundation brush for flawless application.",
      benefits: ["Streak-free finish", "Easy blending", "No shedding", "Easy to clean"],
      skinType: "All skin types",
      inStock: true,
      isNew: true,
      fastDelivery: true,
      warranty: "Quality Guaranteed"
    },
    {
      id: 14,
      name: "Charcoal Face Mask",
      brand: "Innisfree",
      category: "Skincare",
      image: "beauty/Charcoal Face Mask.jpg",
      rating: 4.4,
      reviews: 2180,
      originalPrice: 899,
      salePrice: 719,
      discount: 20,
      features: ["Deep cleansing", "Pore minimizing", "Natural ingredients", "Wash-off type"],
      description: "Purifying charcoal mask that deeply cleanses and detoxifies skin.",
      benefits: ["Removes impurities", "Unclogs pores", "Controls oil", "Brightens skin"],
      skinType: "Oily to combination",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "K-Beauty Authentic"
    },
    {
      id: 15,
      name: "Setting Spray",
      brand: "Urban Decay",
      category: "Foundation",
      image: "beauty/Setting Spray.jpg",
      rating: 4.8,
      reviews: 5670,
      originalPrice: 2699,
      salePrice: 2159,
      discount: 20,
      features: ["16hr lasting", "Oil-control", "Temperature control", "Microfine mist"],
      description: "Long-lasting setting spray that locks makeup in place.",
      benefits: ["Prevents fading", "Controls shine", "Cooling effect", "No melting"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 16,
      name: "Gel Eyeliner",
      brand: "Maybelline",
      category: "Eyes",
      image: "beauty/Gel Eyeliner.jpg",
      rating: 4.5,
      reviews: 3420,
      originalPrice: 699,
      salePrice: 559,
      discount: 20,
      features: ["Waterproof", "Smudge-proof", "Intense black", "With brush"],
      description: "Long-wearing gel eyeliner for precise application.",
      benefits: ["Easy application", "Intense color", "Stays put", "No smudging"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Ophthalmologist Tested"
    },
    {
      id: 17,
      name: "Rose Gold Highlighter",
      brand: "BECCA",
      category: "Foundation",
      image: "beauty/Rose Gold Highlighter.jpg",
      rating: 4.9,
      reviews: 2890,
      originalPrice: 3299,
      salePrice: 2639,
      discount: 20,
      features: ["Highly pigmented", "Buildable glow", "Buttery texture", "Long-lasting"],
      description: "Stunning rose gold highlighter for an ethereal glow.",
      benefits: ["Natural glow", "Blends easily", "Multi-dimensional", "Suits all tones"],
      skinType: "All skin types",
      inStock: true,
      isNew: true,
      fastDelivery: true,
      warranty: "Authentic Product"
    },
    {
      id: 18,
      name: "Tea Tree Oil Serum",
      brand: "The Body Shop",
      category: "Skincare",
      image: "beauty/Tea Tree Oil Serum.jpg",
      rating: 4.6,
      reviews: 2150,
      originalPrice: 1299,
      salePrice: 909,
      discount: 30,
      features: ["100% Natural", "Anti-bacterial", "Oil control", "Vegan"],
      description: "Targeted treatment serum for acne-prone skin.",
      benefits: ["Reduces blemishes", "Controls oil", "Calms skin", "Prevents breakouts"],
      skinType: "Oily and acne-prone",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Vegan Certified"
    },
    {
      id: 19,
      name: "Velvet Matte Bronzer",
      brand: "NARS",
      category: "Foundation",
      image: "beauty/Velvet Matte Bronzer.jpg",
      rating: 4.7,
      reviews: 1980,
      originalPrice: 3999,
      salePrice: 3199,
      discount: 20,
      features: ["Matte finish", "Buildable color", "Silky texture", "Natural look"],
      description: "Luxurious matte bronzer for a sun-kissed glow.",
      benefits: ["Natural contour", "Blends seamlessly", "No orange tone", "Long-lasting"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 20,
      name: "Lip Plumping Gloss",
      brand: "Too Faced",
      category: "Lips",
      image: "beauty/Lip Plumping Gloss.jpg",
      rating: 4.5,
      reviews: 2340,
      originalPrice: 2499,
      salePrice: 1999,
      discount: 20,
      features: ["Plumping effect", "High shine", "Tingling sensation", "Hydrating"],
      description: "Volumizing lip gloss for fuller-looking lips.",
      benefits: ["Instant plump", "Moisturizing", "Non-sticky", "Long-lasting shine"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Tested"
    },
    {
      id: 21,
      name: "Micellar Water",
      brand: "Bioderma",
      category: "Skincare",
      image: "beauty/Micellar Water.jpg",
      rating: 4.8,
      reviews: 6780,
      originalPrice: 999,
      salePrice: 799,
      discount: 20,
      features: ["Gentle cleansing", "No-rinse formula", "Fragrance-free", "Non-irritating"],
      description: "Gentle micellar water for effective makeup removal.",
      benefits: ["Removes makeup", "Soothes skin", "No residue", "No harsh rubbing"],
      skinType: "Sensitive skin",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Recommended"
    },
    {
      id: 22,
      name: "Baked Blush Duo",
      brand: "Milani",
      category: "Foundation",
      image: "beauty/Baked Blush Duo.jpg",
      rating: 4.6,
      reviews: 1890,
      originalPrice: 1299,
      salePrice: 909,
      discount: 30,
      features: ["Dual shades", "Baked formula", "Shimmer finish", "Buildable color"],
      description: "Beautiful baked blush duo for a radiant flush of color.",
      benefits: ["Natural flush", "Luminous finish", "Blends easily", "Long-wearing"],
      skinType: "All skin types",
      inStock: true,
      isNew: true,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 23,
      name: "Lash Extension Kit",
      brand: "Ardell",
      category: "Eyes",
      image: "beauty/Lash Extension Kit.jpg",
      rating: 4.4,
      reviews: 2560,
      originalPrice: 899,
      salePrice: 719,
      discount: 20,
      features: ["Natural look", "Easy application", "Reusable", "With adhesive"],
      description: "Professional-quality false lashes for glamorous eyes.",
      benefits: ["Natural look", "Comfortable wear", "Easy to apply", "Lightweight"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Quality Guaranteed"
    },
    {
      id: 24,
      name: "Overnight Repair Cream",
      brand: "Estée Lauder",
      category: "Skincare",
      image: "beauty/Overnight Repair Cream.jpg",
      rating: 4.9,
      reviews: 4320,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["Anti-aging", "Rich texture", "Overnight repair", "Luxurious formula"],
      description: "Intensive night cream for rejuvenated skin by morning.",
      benefits: ["Repairs skin", "Reduces wrinkles", "Boosts collagen", "Deep hydration"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Dermatologist Tested"
    },
    {
      id: 25,
      name: "Brow Gel",
      brand: "Benefit Cosmetics",
      category: "Eyes",
      image: "beauty/Brow Gel.jpg",
      rating: 4.7,
      reviews: 3150,
      originalPrice: 2299,
      salePrice: 1839,
      discount: 20,
      features: ["Tinted formula", "24hr hold", "Volumizing", "Water-resistant"],
      description: "Tinted brow gel for perfectly groomed, fuller-looking brows.",
      benefits: ["Defines brows", "Natural look", "Stays in place", "Easy to use"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 26,
      name: "Vitamin E Oil",
      brand: "The Ordinary",
      category: "Skincare",
      image: "beauty/Vitamin E Oil.jpg",
      rating: 4.5,
      reviews: 2890,
      originalPrice: 799,
      salePrice: 639,
      discount: 20,
      features: ["100% Pure", "Cold-pressed", "Antioxidant", "Multi-purpose"],
      description: "Pure vitamin E oil for multiple skincare benefits.",
      benefits: ["Moisturizes", "Heals scars", "Antioxidant", "Nourishing"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "Quality Guaranteed"
    },
    {
      id: 27,
      name: "Lip Sleeping Mask",
      brand: "Laneige",
      category: "Lips",
      image: "beauty/Lip Sleeping Mask.jpg",
      rating: 4.8,
      reviews: 5670,
      originalPrice: 1999,
      salePrice: 1599,
      discount: 20,
      features: ["Overnight treatment", "Berry complex", "Moisturizing", "With applicator"],
      description: "Nourishing lip mask that works while you sleep.",
      benefits: ["Deep hydration", "Softens lips", "Removes dead skin", "Long-lasting"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "K-Beauty Authentic"
    },
    {
      id: 28,
      name: "Mineral Setting Powder",
      brand: "Laura Mercier",
      category: "Foundation",
      image: "beauty/Mineral Setting Powder.jpg",
      rating: 4.9,
      reviews: 4890,
      originalPrice: 3999,
      salePrice: 3199,
      discount: 20,
      features: ["Translucent", "Oil-control", "Flashback-free", "Finely milled"],
      description: "Cult-favorite setting powder for a flawless finish.",
      benefits: ["Sets makeup", "Blurs pores", "No flashback", "All-day wear"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    },
    {
      id: 29,
      name: "Jade Face Roller",
      brand: "Mount Lai",
      category: "Skincare",
      image: "beauty/Jade Face Roller.jpg",
      rating: 4.6,
      reviews: 1890,
      originalPrice: 2499,
      salePrice: 1999,
      discount: 20,
      features: ["100% Real Jade", "Dual-ended", "Cooling effect", "Anti-aging"],
      description: "Traditional beauty tool for facial massage and lymphatic drainage.",
      benefits: ["Reduces puffiness", "Improves circulation", "Relaxing", "Skincare absorption"],
      skinType: "All skin types",
      inStock: true,
      isNew: true,
      fastDelivery: true,
      warranty: "Authenticity Certificate"
    },
    {
      id: 30,
      name: "Shimmer Eyeshadow Stick",
      brand: "Bobbi Brown",
      category: "Eyes",
      image: "beauty/Shimmer Eyeshadow Stick.jpg",
      rating: 4.7,
      reviews: 2340,
      originalPrice: 2999,
      salePrice: 2399,
      discount: 20,
      features: ["Cream formula", "Long-wearing", "No-crease", "Easy application"],
      description: "Convenient eyeshadow stick for quick and easy application.",
      benefits: ["One-swipe color", "No fallout", "Blends easily", "Water-resistant"],
      skinType: "All skin types",
      inStock: true,
      isNew: false,
      fastDelivery: true,
      warranty: "100% Authentic"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Sparkles },
    { id: 'Skincare', name: 'Skincare', icon: Droplets },
    { id: 'Foundation', name: 'Foundation', icon: Sun },
    { id: 'Eyes', name: 'Eyes', icon: Eye },
    { id: 'Lips', name: 'Lips', icon: Heart }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? beautyProducts 
    : beautyProducts.filter(product => product.category === selectedCategory);

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
              <button 
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <Heart className={`w-4 h-4 ${favorites.includes(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-600'}`} />
              </button>
              {product.fastDelivery && (
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Fast Delivery
                </div>
              )}
              {product.isNew && (
                <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  NEW
                </div>
              )}
              {product.discount > 0 && (
                <div className="absolute top-12 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  {product.discount}% OFF
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 ml-6 space-y-3">
            {/* Product Title and Brand */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-pink-600 cursor-pointer">
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

            {/* Benefits */}
            <div className="bg-pink-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Benefits:</h4>
              <div className="grid grid-cols-2 gap-1">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="text-xs text-gray-600 flex items-center">
                    <span className="w-1 h-1 bg-pink-400 rounded-full mr-2"></span>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Skin Type & Warranty */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-pink-500" />
                <span>Suitable for {product.skinType}</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                <span>{product.warranty}</span>
              </div>
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
                <span className="text-gray-700">Beauty verse Assured</span>
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
                    ? 'bg-pink-500 hover:bg-pink-600 text-white' 
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
                    ? 'bg-rose-600 hover:bg-rose-700 text-white' 
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
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Beauty & Personal Care</h1>
        
        {/* Category Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-2 shadow-md border border-gray-200">
            <div className="flex space-x-2">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-pink-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-pink-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Featured Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredProducts.slice(0, 4).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      NEW
                    </div>
                  )}
                  {product.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      {product.discount}% OFF
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 mb-2">{product.brand}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-pink-600 font-bold">₹{formatPrice(product.salePrice)}</p>
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
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💄</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeautyPage;