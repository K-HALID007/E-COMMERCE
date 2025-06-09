"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, Filter, ChevronDown } from 'lucide-react';

const Sports = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    priceRange: '',
    rating: '',
    category: ''
  });

  // Sports products data with comprehensive collection
  const sportsProducts = [
    {
      id: 1,
      name: "Professional Cricket Bat",
      brand: "MRF",
      category: "Cricket",
      image: "sports/Professional Cricket Bat.jpeg",
      rating: 4.7,
      reviews: 2450,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["Grade 1 English Willow", "Short Handle", "2.8-2.10 lbs", "Professional Grade"],
      description: "Premium cricket bat crafted from finest English willow for professional performance.",
      highlights: ["Superior wood grain", "Perfect balance", "Professional finish", "Match ready"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      name: "Football Boots - Predator",
      brand: "Adidas",
      category: "Football",
      image: "sports/Football Boots - Predator.jpg",
      rating: 4.6,
      reviews: 3280,
      originalPrice: 12999,
      salePrice: 9999,
      discount: 23,
      features: ["Firm Ground Studs", "Synthetic Upper", "Boost Technology", "Professional Fit"],
      description: "High-performance football boots designed for precision and control on the field.",
      highlights: ["Enhanced ball control", "Superior traction", "Comfortable fit", "Durable construction"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 3,
      name: "Basketball - Official Size",
      brand: "Spalding",
      category: "Basketball",
      image: "sports/Basketball - Official Size.jpg",
      rating: 4.5,
      reviews: 1890,
      originalPrice: 2999,
      salePrice: 2199,
      discount: 27,
      features: ["Official Size 7", "Composite Leather", "Deep Channel Design", "Indoor/Outdoor"],
      description: "Official size basketball with superior grip and consistent bounce for serious players.",
      highlights: ["Professional quality", "All-weather performance", "Excellent grip", "Tournament approved"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 4,
      name: "Tennis Racket - Pro Staff",
      brand: "Wilson",
      category: "Tennis",
      image: "sports/Tennis Racket - Pro Staff.jpg",
      rating: 4.8,
      reviews: 2156,
      originalPrice: 15999,
      salePrice: 12999,
      discount: 19,
      features: ["97 sq.in Head Size", "315g Weight", "Graphite Frame", "16x19 String Pattern"],
      description: "Professional tennis racket offering exceptional control and power for competitive play.",
      highlights: ["Superior control", "Powerful shots", "Comfortable grip", "Tournament quality"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 5,
      name: "Gym Dumbbells Set",
      brand: "PowerMax",
      category: "Fitness",
      image: "sports/Gym Dumbbells Set.jpg",
      rating: 4.4,
      reviews: 3450,
      originalPrice: 8999,
      salePrice: 6749,
      discount: 25,
      features: ["Adjustable Weight", "Rubber Coated", "Anti-Roll Design", "Ergonomic Grip"],
      description: "Professional dumbbells set perfect for home gym and strength training workouts.",
      highlights: ["Space efficient", "Durable coating", "Non-slip grip", "Complete workout"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 6,
      name: "Badminton Racket",
      brand: "Yonex",
      category: "Badminton",
      image: "sports/Badminton Racket.jpg",
      rating: 4.7,
      reviews: 1980,
      originalPrice: 6999,
      salePrice: 5249,
      discount: 25,
      features: ["Carbon Fiber Frame", "Medium Flex", "Even Balance", "Pre-strung"],
      description: "High-quality badminton racket designed for intermediate to advanced players.",
      highlights: ["Lightweight design", "Excellent power", "Superior control", "Professional grade"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 7,
      name: "Swimming Goggles",
      brand: "Speedo",
      category: "Swimming",
      image: "sports/Swimming Goggles.jpg",
      rating: 4.3,
      reviews: 2890,
      originalPrice: 1999,
      salePrice: 1499,
      discount: 25,
      features: ["Anti-Fog Coating", "UV Protection", "Adjustable Strap", "Comfortable Seal"],
      description: "Professional swimming goggles with crystal clear vision and comfortable fit.",
      highlights: ["Clear underwater vision", "Leak-proof seal", "Adjustable fit", "Durable construction"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 8,
      name: "Yoga Mat Premium",
      brand: "Liforme",
      category: "Yoga",
      image: "sports/Yoga Mat Premium.jpg",
      rating: 4.6,
      reviews: 1650,
      originalPrice: 4999,
      salePrice: 3749,
      discount: 25,
      features: ["6mm Thickness", "Non-Slip Surface", "Eco-Friendly", "Alignment Guides"],
      description: "Premium yoga mat with superior grip and cushioning for comfortable practice.",
      highlights: ["Excellent grip", "Joint protection", "Eco-friendly material", "Perfect alignment"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 9,
      name: "Cycling Helmet",
      brand: "Giro",
      category: "Cycling",
      image: "sports/Cycling Helmet.jpg",
      rating: 4.5,
      reviews: 2340,
      originalPrice: 5999,
      salePrice: 4499,
      discount: 25,
      features: ["MIPS Technology", "Lightweight Design", "18 Vents", "Adjustable Fit"],
      description: "Advanced cycling helmet with superior protection and ventilation system.",
      highlights: ["Maximum safety", "Excellent ventilation", "Comfortable fit", "Aerodynamic design"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 10,
      name: "Boxing Gloves",
      brand: "Everlast",
      category: "Boxing",
      image: "sports/Boxing Gloves.jpg",
      rating: 4.4,
      reviews: 1780,
      originalPrice: 3999,
      salePrice: 2999,
      discount: 25,
      features: ["16oz Weight", "Leather Construction", "Thumb Lock", "Wrist Support"],
      description: "Professional boxing gloves with superior protection and comfort for training.",
      highlights: ["Superior padding", "Wrist protection", "Durable leather", "Professional quality"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 11,
      name: "Golf Driver",
      brand: "TaylorMade",
      category: "Golf",
      image: "sports/Golf Driver.jpg",
      rating: 4.8,
      reviews: 1234,
      originalPrice: 25999,
      salePrice: 21999,
      discount: 15,
      features: ["460cc Head Size", "Adjustable Loft", "Carbon Crown", "Speed Pocket"],
      description: "Professional golf driver engineered for maximum distance and accuracy.",
      highlights: ["Increased distance", "Improved accuracy", "Adjustable settings", "Tour proven"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 12,
      name: "Table Tennis Paddle",
      brand: "Butterfly",
      category: "Table Tennis",
      image: "sports/Table Tennis Paddle.jpg",
      rating: 4.6,
      reviews: 1890,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["Professional Rubber", "5-Ply Blade", "Flared Handle", "ITTF Approved"],
      description: "High-performance table tennis paddle for competitive and recreational play.",
      highlights: ["Excellent spin", "Superior control", "Tournament approved", "Professional grade"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 13,
      name: "Running Shoes",
      brand: "Nike",
      category: "Running",
      image: "sports/Running Shoes.jpeg",
      rating: 4.7,
      reviews: 4560,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["Air Zoom Technology", "Breathable Mesh", "Responsive Cushioning", "Durable Outsole"],
      description: "Advanced running shoes with superior cushioning and support for all distances.",
      highlights: ["Maximum comfort", "Energy return", "Breathable design", "All-terrain grip"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 14,
      name: "Skateboard Complete",
      brand: "Element",
      category: "Skateboarding",
      image: "sports/Skateboard Complete.jpg",
      rating: 4.3,
      reviews: 1450,
      originalPrice: 6999,
      salePrice: 5249,
      discount: 25,
      features: ["7-Ply Maple Deck", "ABEC 7 Bearings", "52mm Wheels", "Aluminum Trucks"],
      description: "Complete skateboard setup perfect for beginners and intermediate riders.",
      highlights: ["Ready to ride", "Durable construction", "Smooth rolling", "Street ready"],
      warranty: "3 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 15,
      name: "Volleyball",
      brand: "Mikasa",
      category: "Volleyball",
      image: "sports/Volleyball.jpg",
      rating: 4.5,
      reviews: 2100,
      originalPrice: 2499,
      salePrice: 1999,
      discount: 20,
      features: ["Official Size", "Synthetic Leather", "Machine Stitched", "Indoor/Outdoor"],
      description: "Professional volleyball with excellent flight characteristics and durability.",
      highlights: ["Consistent performance", "Excellent touch", "Durable construction", "Official quality"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 16,
      name: "Protein Powder",
      brand: "Optimum Nutrition",
      category: "Supplements",
      image: "sports/Protein Powder.jpg",
      rating: 4.6,
      reviews: 5670,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["25g Protein per Serving", "Fast Absorption", "Multiple Flavors", "No Artificial Fillers"],
      description: "Premium whey protein powder for muscle building and recovery support.",
      highlights: ["High quality protein", "Great taste", "Fast mixing", "Proven results"],
      warranty: "N/A",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 17,
      name: "Hockey Stick",
      brand: "CCM",
      category: "Hockey",
      image: "sports/Hockey Stick.jpg",
      rating: 4.4,
      reviews: 890,
      originalPrice: 7999,
      salePrice: 5999,
      discount: 25,
      features: ["Carbon Fiber Construction", "Mid Flex", "Grip Finish", "Pro Curve"],
      description: "Professional hockey stick with superior performance and durability.",
      highlights: ["Lightweight design", "Excellent feel", "Powerful shots", "Pro-level quality"],
      warranty: "30 Days Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 18,
      name: "Resistance Bands Set",
      brand: "Bodylastics",
      category: "Fitness",
      image: "sports/Resistance Bands Set.jpg",
      rating: 4.3,
      reviews: 2890,
      originalPrice: 2999,
      salePrice: 2249,
      discount: 25,
      features: ["5 Resistance Levels", "Door Anchor", "Handles & Ankle Straps", "Exercise Guide"],
      description: "Complete resistance bands set for full-body strength training at home.",
      highlights: ["Portable workout", "Multiple resistance levels", "Full-body training", "Space-saving"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 19,
      name: "Baseball Glove",
      brand: "Rawlings",
      category: "Baseball",
      image: "sports/Baseball Glove.jpg",
      rating: 4.7,
      reviews: 1560,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["Premium Leather", "12.5 inch", "Pro Taper Fit", "Dual Welting"],
      description: "Professional baseball glove crafted from premium leather for superior performance.",
      highlights: ["Game-ready", "Durable leather", "Perfect fit", "Professional quality"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 20,
      name: "Treadmill",
      brand: "NordicTrack",
      category: "Cardio Equipment",
      image: "sports/Treadmill.jpg",
      rating: 4.5,
      reviews: 2340,
      originalPrice: 89999,
      salePrice: 69999,
      discount: 22,
      features: ["3.5 CHP Motor", "Incline Training", "iFit Compatible", "Cushioned Deck"],
      description: "Professional treadmill with advanced features for home fitness enthusiasts.",
      highlights: ["Powerful motor", "Incline training", "Shock absorption", "Interactive workouts"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 21,
      name: "Archery Bow Set",
      brand: "PSE",
      category: "Archery",
      image: "sports/Archery Bow Set.jpg",
      rating: 4.4,
      reviews: 670,
      originalPrice: 15999,
      salePrice: 12999,
      discount: 19,
      features: ["Compound Bow", "Adjustable Draw", "Sight Included", "Carbon Arrows"],
      description: "Complete archery set perfect for beginners and intermediate archers.",
      highlights: ["Adjustable settings", "Accurate shooting", "Complete package", "Quality construction"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 22,
      name: "Kettlebell Set",
      brand: "Rep Fitness",
      category: "Strength Training",
      image: "sports/Kettlebell Set.jpg",
      rating: 4.6,
      reviews: 1890,
      originalPrice: 12999,
      salePrice: 9999,
      discount: 23,
      features: ["Cast Iron Construction", "Wide Handle", "Flat Bottom", "Multiple Weights"],
      description: "Professional kettlebell set for functional strength and conditioning workouts.",
      highlights: ["Durable construction", "Comfortable grip", "Versatile training", "Space efficient"],
      warranty: "5 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 23,
      name: "Soccer Ball",
      brand: "Nike",
      category: "Soccer",
      image: "sports/Soccer Ball.jpg",
      rating: 4.5,
      reviews: 3450,
      originalPrice: 3999,
      salePrice: 2999,
      discount: 25,
      features: ["FIFA Approved", "Size 5", "Machine Stitched", "Durable Construction"],
      description: "Official soccer ball with superior flight characteristics and durability.",
      highlights: ["Professional quality", "Consistent performance", "All-weather play", "FIFA approved"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 24,
      name: "Surfboard",
      brand: "Channel Islands",
      category: "Surfing",
      image: "sports/Surfboard.jpg",
      rating: 4.7,
      reviews: 890,
      originalPrice: 45999,
      salePrice: 36999,
      discount: 20,
      features: ["Epoxy Construction", "6'2\" Length", "Performance Shape", "FCS Fin System"],
      description: "High-performance surfboard designed for intermediate to advanced surfers.",
      highlights: ["Excellent performance", "Durable construction", "Responsive feel", "Pro-level quality"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 25,
      name: "Wrestling Shoes",
      brand: "ASICS",
      category: "Wrestling",
      image: "sports/Wrestling Shoes.jpg",
      rating: 4.6,
      reviews: 1230,
      originalPrice: 6999,
      salePrice: 5249,
      discount: 25,
      features: ["Split Sole Design", "Ankle Support", "Breathable Upper", "Gum Rubber Outsole"],
      description: "Professional wrestling shoes with superior grip and ankle support.",
      highlights: ["Excellent traction", "Ankle protection", "Lightweight design", "Competition ready"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 26,
      name: "Punching Bag",
      brand: "Century",
      category: "Martial Arts",
      image: "sports/Punching Bag.jpg",
      rating: 4.4,
      reviews: 1670,
      originalPrice: 8999,
      salePrice: 6749,
      discount: 25,
      features: ["Heavy Duty Vinyl", "Pre-filled", "Reinforced Seams", "Hanging Chains"],
      description: "Professional heavy bag perfect for boxing and martial arts training.",
      highlights: ["Durable construction", "Consistent feel", "Easy setup", "Professional quality"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 27,
      name: "Inline Skates",
      brand: "Rollerblade",
      category: "Skating",
      image: "sports/Inline Skates.jpg",
      rating: 4.3,
      reviews: 2100,
      originalPrice: 12999,
      salePrice: 9999,
      discount: 23,
      features: ["Aluminum Frame", "ABEC 7 Bearings", "Adjustable Sizing", "Brake System"],
      description: "High-quality inline skates with adjustable sizing and superior performance.",
      highlights: ["Smooth rolling", "Adjustable fit", "Durable construction", "Safety features"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 28,
      name: "Cross Trainer",
      brand: "Reebok",
      category: "Cross Training",
      image: "sports/Cross Trainer.jpg",
      rating: 4.5,
      reviews: 2890,
      originalPrice: 7999,
      salePrice: 5999,
      discount: 25,
      features: ["Multi-Directional Support", "Breathable Mesh", "Durable Outsole", "Comfortable Fit"],
      description: "Versatile cross-training shoes designed for multiple workout activities.",
      highlights: ["Multi-sport performance", "Superior support", "Comfortable fit", "Durable design"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 29,
      name: "Fishing Rod Set",
      brand: "Shimano",
      category: "Fishing",
      image: "sports/Fishing Rod Set.jpg",
      rating: 4.6,
      reviews: 1450,
      originalPrice: 9999,
      salePrice: 7499,
      discount: 25,
      features: ["Carbon Fiber Rod", "Spinning Reel", "Tackle Box", "Complete Setup"],
      description: "Complete fishing rod set perfect for freshwater and saltwater fishing.",
      highlights: ["Complete package", "Quality construction", "Versatile use", "Beginner friendly"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 30,
      name: "Exercise Bike",
      brand: "Schwinn",
      category: "Cardio Equipment",
      image: "sports/Exercise Bike.jpg",
      rating: 4.4,
      reviews: 1890,
      originalPrice: 35999,
      salePrice: 27999,
      discount: 22,
      features: ["Magnetic Resistance", "LCD Display", "Adjustable Seat", "Heart Rate Monitor"],
      description: "Professional exercise bike with advanced features for effective cardio workouts.",
      highlights: ["Smooth operation", "Adjustable resistance", "Comfortable seating", "Progress tracking"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 31,
      name: "Snowboard",
      brand: "Burton",
      category: "Snowboarding",
      image: "sports/Snowboard.jpg",
      rating: 4.7,
      reviews: 1230,
      originalPrice: 35999,
      salePrice: 28999,
      discount: 19,
      features: ["All-Mountain Design", "Directional Shape", "Sintered Base", "FSC Wood Core"],
      description: "High-performance snowboard designed for all-mountain riding and freestyle.",
      highlights: ["Versatile performance", "Durable construction", "Smooth ride", "Professional quality"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 32,
      name: "Rock Climbing Harness",
      brand: "Black Diamond",
      category: "Climbing",
      image: "sports/Rock Climbing Harness.jpg",
      rating: 4.8,
      reviews: 890,
      originalPrice: 6999,
      salePrice: 5599,
      discount: 20,
      features: ["Adjustable Fit", "Gear Loops", "Belay Loop", "Comfort Padding"],
      description: "Professional climbing harness with superior comfort and safety features.",
      highlights: ["Maximum comfort", "Safety certified", "Durable construction", "Adjustable fit"],
      warranty: "3 Years Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 33,
      name: "Lacrosse Stick",
      brand: "STX",
      category: "Lacrosse",
      image: "sports/Lacrosse Stick.jpg",
      rating: 4.5,
      reviews: 670,
      originalPrice: 8999,
      salePrice: 6999,
      discount: 22,
      features: ["Complete Stick", "Strung Head", "Aluminum Shaft", "Grip Tape"],
      description: "Complete lacrosse stick ready for game play with superior performance.",
      highlights: ["Game ready", "Durable construction", "Excellent balance", "Professional quality"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 34,
      name: "Foam Roller",
      brand: "TriggerPoint",
      category: "Recovery",
      image: "sports/Foam Roller.jpg",
      rating: 4.6,
      reviews: 2340,
      originalPrice: 3999,
      salePrice: 2999,
      discount: 25,
      features: ["High-Density Foam", "Textured Surface", "18-inch Length", "Instructional Guide"],
      description: "Professional foam roller for muscle recovery and injury prevention.",
      highlights: ["Effective recovery", "Durable construction", "Versatile use", "Professional grade"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 35,
      name: "Dart Board Set",
      brand: "Winmau",
      category: "Darts",
      image: "sports/Dart Board Set.jpg",
      rating: 4.4,
      reviews: 1230,
      originalPrice: 4999,
      salePrice: 3749,
      discount: 25,
      features: ["Sisal Fiber Board", "Steel Tip Darts", "Mounting Hardware", "Scoreboard"],
      description: "Professional dart board set with everything needed for competitive play.",
      highlights: ["Tournament quality", "Self-healing surface", "Complete setup", "Durable construction"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 36,
      name: "Water Bottle - Insulated",
      brand: "Hydro Flask",
      category: "Hydration",
      image: "sports/Water Bottle - Insulated.jpg",
      rating: 4.7,
      reviews: 4560,
      originalPrice: 2999,
      salePrice: 2249,
      discount: 25,
      features: ["24oz Capacity", "Double Wall Insulated", "Leak-Proof Cap", "BPA Free"],
      description: "Premium insulated water bottle keeping drinks cold for 24 hours or hot for 12 hours.",
      highlights: ["Temperature retention", "Leak-proof design", "Durable construction", "Easy to clean"],
      warranty: "Lifetime Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 37,
      name: "Camping Tent",
      brand: "Coleman",
      category: "Camping",
      image: "sports/Camping Tent.jpg",
      rating: 4.3,
      reviews: 1890,
      originalPrice: 12999,
      salePrice: 9749,
      discount: 25,
      features: ["4-Person Capacity", "Weather Resistant", "Easy Setup", "Carry Bag Included"],
      description: "Spacious camping tent with weather protection and easy setup for outdoor adventures.",
      highlights: ["Weather resistant", "Spacious interior", "Quick setup", "Portable design"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 38,
      name: "Hiking Backpack",
      brand: "Osprey",
      category: "Hiking",
      image: "sports/Hiking Backpack.jpg",
      rating: 4.8,
      reviews: 1450,
      originalPrice: 15999,
      salePrice: 12799,
      discount: 20,
      features: ["50L Capacity", "Adjustable Torso", "Hydration Compatible", "Rain Cover"],
      description: "Professional hiking backpack with adjustable fit and comprehensive features.",
      highlights: ["Perfect fit", "Ample storage", "Comfortable carry", "Weather protection"],
      warranty: "Lifetime Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 39,
      name: "Paddleboard",
      brand: "BOTE",
      category: "Water Sports",
      image: "sports/Paddleboard.jpg",
      rating: 4.6,
      reviews: 890,
      originalPrice: 45999,
      salePrice: 36999,
      discount: 20,
      features: ["Inflatable Design", "10'6\" Length", "Pump Included", "Carry Backpack"],
      description: "High-quality inflatable paddleboard perfect for recreational and fitness paddling.",
      highlights: ["Portable design", "Stable platform", "Easy storage", "Complete package"],
      warranty: "2 Years Brand Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 40,
      name: "Baseball Bat",
      brand: "Louisville Slugger",
      category: "Baseball",
      image: "sports/Baseball Bat.jpg",
      rating: 4.7,
      reviews: 2100,
      originalPrice: 6999,
      salePrice: 5249,
      discount: 25,
      features: ["Aluminum Alloy", "32-inch Length", "Balanced Weight", "Grip Tape"],
      description: "Professional baseball bat with superior performance and durability.",
      highlights: ["Balanced swing", "Durable construction", "Excellent pop", "Tournament approved"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 41,
      name: "Martial Arts Uniform",
      brand: "Hayabusa",
      category: "Martial Arts",
      image: "sports/Martial Arts Uniform.jpg",
      rating: 4.5,
      reviews: 1230,
      originalPrice: 4999,
      salePrice: 3749,
      discount: 25,
      features: ["100% Cotton", "Reinforced Stitching", "Pre-shrunk", "Belt Included"],
      description: "High-quality martial arts uniform suitable for training and competition.",
      highlights: ["Comfortable fit", "Durable construction", "Professional appearance", "Easy care"],
      warranty: "6 Months Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 42,
      name: "Compression Shorts",
      brand: "Under Armour",
      category: "Athletic Wear",
      image: "sports/Compression Shorts.jpg",
      rating: 4.4,
      reviews: 3450,
      originalPrice: 2999,
      salePrice: 2249,
      discount: 25,
      features: ["Moisture Wicking", "4-Way Stretch", "Anti-Odor Technology", "Flatlock Seams"],
      description: "High-performance compression shorts for enhanced athletic performance.",
      highlights: ["Superior comfort", "Moisture management", "Flexible fit", "Odor control"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 43,
      name: "Agility Ladder",
      brand: "SKLZ",
      category: "Training Equipment",
      image: "sports/Agility Ladder.jpg",
      rating: 4.3,
      reviews: 1890,
      originalPrice: 1999,
      salePrice: 1499,
      discount: 25,
      features: ["15-Foot Length", "Adjustable Rungs", "Carry Bag", "Training Guide"],
      description: "Professional agility ladder for speed and coordination training.",
      highlights: ["Improves agility", "Adjustable spacing", "Portable design", "Versatile training"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 44,
      name: "Speed Rope",
      brand: "Crossrope",
      category: "Jump Rope",
      image: "sports/Speed Rope.jpg",
      rating: 4.6,
      reviews: 2340,
      originalPrice: 3999,
      salePrice: 2999,
      discount: 25,
      features: ["Fast Handles", "Steel Cable", "Adjustable Length", "Ball Bearings"],
      description: "Professional speed rope designed for high-intensity cardio workouts.",
      highlights: ["Lightning fast", "Smooth rotation", "Adjustable length", "Durable construction"],
      warranty: "1 Year Brand Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 45,
      name: "Pull-up Bar",
      brand: "Perfect Pushup",
      category: "Home Gym",
      image: "sports/Pull-up Bar.jpg",
      rating: 4.4,
      reviews: 1670,
      originalPrice: 2999,
      salePrice: 2249,
      discount: 25,
      features: ["Doorway Mount", "No Screws Required", "Foam Grips", "Multiple Grip Positions"],
      description: "Convenient pull-up bar for home workouts with multiple grip positions.",
      highlights: ["Easy installation", "No damage to doors", "Multiple exercises", "Compact storage"],
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
            <div className="relative h-64 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                className={`w-full ${product.name === "Wrestling Shoes" ? "h-auto max-h-64 object-contain" : "h-64 object-cover"} rounded-lg`}
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
                <span className="text-gray-700">Sports Store Assured</span>
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
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Sports Equipment Store</h1>
        
        {/* Featured Products Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sportsProducts.slice(0, 4).map((product) => (
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
          <h2 className="text-2xl font-bold mb-6 text-gray-900">All Products ({sportsProducts.length} items)</h2>
          <div className="space-y-4">
            {sportsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;