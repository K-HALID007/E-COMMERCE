"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, Filter, ChevronDown } from 'lucide-react';

const ElectronicsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    priceRange: '',
    rating: '',
    category: ''
  });

  // Extended electronics data
  const electronics = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      brand: "Apple",
      category: "Smartphones",
      image: "iPhone 15 Pro Max.jpeg",
      rating: 4.5,
      reviews: 15420,
      originalPrice: 159900,
      salePrice: 149900,
      discount: 6,
      features: ["256GB Storage", "Pro Camera System", "A17 Pro Chip", "Titanium Build"],
      description: "Experience the most advanced iPhone ever with titanium design, pro camera system, and powerful A17 Pro chip.",
      highlights: ["6.7-inch Super Retina XDR display", "48MP Main camera", "Up to 29 hours video playback", "iOS 17"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S23 Ultra",
      brand: "Samsung",
      category: "Smartphones",
      image: "Samsung Galaxy S24 Ultra.jpeg",
      rating: 4.4,
      reviews: 12850,
      originalPrice: 134999,
      salePrice: 124999,
      discount: 7,
      features: ["512GB Storage", "200MP Camera", "S Pen Included", "AI Features"],
      description: "The ultimate productivity powerhouse with S Pen, advanced AI features, and professional cameras.",
      highlights: ["6.8-inch Dynamic AMOLED 2X", "200MP Pro camera", "5000mAh battery", "One UI 6.1"],
      warranty: "1 Year Samsung Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 3,
      name: "MacBook Air M3",
      brand: "Apple",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 8540,
      originalPrice: 134900,
      salePrice: 124900,
      discount: 7,
      features: ["M3 Chip", "16GB RAM", "512GB SSD", "Liquid Retina Display"],
      description: "Supercharged by M3 chip, incredibly thin and light laptop with all-day battery life.",
      highlights: ["13.6-inch Liquid Retina display", "M3 8-core CPU", "Up to 18 hours battery", "macOS Sonoma"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 4,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 6420,
      originalPrice: 34990,
      salePrice: 24990,
      discount: 29,
      features: ["Active Noise Canceling", "30hr Battery", "Quick Charge", "Premium Sound"],
      description: "Industry-leading noise canceling headphones with exceptional sound quality and comfort.",
      highlights: ["30 hours battery life", "Quick Charge (3 min = 3 hours)", "Speak-to-Chat technology", "LDAC support"],
      warranty: "1 Year Sony Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 5,
      name: "iPad Pro 12.9-inch M4",
      brand: "Apple",
      category: "Tablets",
      image: "iPad Pro 12.9-inch M4.jpeg",
      rating: 4.5,
      reviews: 4820,
      originalPrice: 112900,
      salePrice: 104900,
      discount: 7,
      features: ["M4 Chip", "1TB Storage", "12.9-inch Display", "Apple Pencil Support"],
      description: "The most advanced iPad Pro with M4 chip delivers extreme performance for demanding workflows.",
      highlights: ["12.9-inch Ultra Retina XDR display", "M4 chip performance", "All-day battery life", "iPadOS 17"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 6,
      name: "Dell XPS 13 Plus",
      brand: "Dell",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      rating: 4.2,
      reviews: 3650,
      originalPrice: 149999,
      salePrice: 134999,
      discount: 10,
      features: ["13th Gen Intel i7", "16GB RAM", "1TB SSD", "4K Display"],
      description: "Premium ultrabook with stunning 4K display, powerful performance and sleek design.",
      highlights: ["13.4-inch 4K+ touchscreen", "Intel Evo platform", "Up to 12 hours battery", "Windows 11"],
      warranty: "1 Year Dell Warranty",
      inStock: false,
      fastDelivery: false
    },
    {
      id: 7,
      name: "iPad Air 5th Gen",
      brand: "Apple",
      category: "Tablets",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 3250,
      originalPrice: 59900,
      salePrice: 54900,
      discount: 8,
      features: ["M1 Chip", "10.9-inch Display", "64GB Storage", "Touch ID"],
      description: "The powerful and colorful iPad Air with M1 chip and stunning Liquid Retina display.",
      highlights: ["10.9-inch Liquid Retina display", "M1 chip", "All-day battery", "iPadOS 16"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 8,
      name: "Samsung 65\" Neo QLED 8K",
      brand: "Samsung",
      category: "TVs",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 890,
      originalPrice: 299990,
      salePrice: 269990,
      discount: 10,
      features: ["8K Resolution", "Neural Quantum Processor", "Infinity Screen", "Object Tracking Sound+"],
      description: "Experience the future of television with Samsung's Neo QLED 8K smart TV.",
      highlights: ["Real 8K Resolution", "AI Upscaling", "Gaming Hub", "SmartThings"],
      warranty: "2 Years Samsung Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 9,
      name: "Bose QuietComfort Ultra",
      brand: "Bose",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 2150,
      originalPrice: 34900,
      salePrice: 29900,
      discount: 14,
      features: ["Immersive Audio", "Advanced ANC", "24hr Battery", "Bluetooth 5.3"],
      description: "Premium noise cancelling headphones with immersive spatial audio.",
      highlights: ["CustomTune technology", "6 mic array", "Multi-point connection", "Touch controls"],
      warranty: "1 Year Bose Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 10,
      name: "DJI Mini 3 Pro",
      brand: "DJI",
      category: "Drones",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 1280,
      originalPrice: 89990,
      salePrice: 84990,
      discount: 6,
      features: ["4K/60fps Video", "249g Weight", "34min Flight Time", "Tri-Directional Sensors"],
      description: "Ultra-lightweight drone with professional-grade camera capabilities.",
      highlights: ["True Vertical Shooting", "FocusTrack", "MasterShots", "O3+ Transmission"],
      warranty: "1 Year DJI Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      brand: "Sony",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 8920,
      originalPrice: 54990,
      salePrice: 49990,
      discount: 9,
      features: ["4K Gaming", "Ray Tracing", "825GB SSD", "DualSense Controller"],
      description: "Next-gen gaming console with lightning-fast loading and stunning graphics.",
      highlights: ["4K/120Hz Output", "3D Audio", "Haptic Feedback", "PS5 Game Library"],
      warranty: "1 Year Sony Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 12,
      name: "Canon EOS R6 Mark II",
      brand: "Canon",
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 1240,
      originalPrice: 249990,
      salePrice: 234990,
      discount: 6,
      features: ["24.2MP Sensor", "40fps Shooting", "4K/60p Video", "Dual Card Slots"],
      description: "Professional mirrorless camera with advanced autofocus and high-speed shooting.",
      highlights: ["Full-frame Sensor", "In-body Stabilization", "Subject Detection AF", "Wi-Fi & Bluetooth"],
      warranty: "2 Years Canon Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 13,
      name: "Apple Watch Series 9",
      brand: "Apple",
      category: "Wearables",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 5640,
      originalPrice: 41900,
      salePrice: 39900,
      discount: 5,
      features: ["Always-On Display", "ECG App", "Blood Oxygen", "S9 Chip"],
      description: "Advanced health and fitness companion with powerful features.",
      highlights: ["Temperature Sensing", "Crash Detection", "watchOS 10", "18-hour Battery"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 14,
      name: "Samsung 34\" Odyssey OLED G8",
      brand: "Samsung",
      category: "Monitors",
      image: "Samsung 34 Odyssey OLED G8.jpg",
      rating: 4.6,
      reviews: 890,
      originalPrice: 124990,
      salePrice: 109990,
      discount: 12,
      features: ["3440x1440 OLED", "175Hz Refresh", "0.1ms Response", "1800R Curve"],
      description: "Ultra-wide curved OLED gaming monitor for immersive gaming experience.",
      highlights: ["VESA HDR 400", "AMD FreeSync", "Core Lighting", "Smart Hub"],
      warranty: "3 Years Samsung Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 15,
      name: "Google Pixel 8 Pro",
      brand: "Google",
      category: "Smartphones",
      image: "Google Pixel 8 Pro.jpeg",
      rating: 4.5,
      reviews: 3240,
      originalPrice: 106999,
      salePrice: 99999,
      discount: 7,
      features: ["50MP Camera", "Tensor G3", "6.7\" Display", "5000mAh Battery"],
      description: "Advanced AI-powered smartphone with exceptional camera capabilities.",
      highlights: ["Android 14", "7 Years Updates", "Magic Editor", "Face Unlock"],
      warranty: "1 Year Google Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 16,
      name: "LG C3 65\" 4K OLED TV",
      brand: "LG",
      category: "TVs",
      image: "LG C3 65 4K OLED TV.jpg",
      rating: 4.8,
      reviews: 2150,
      originalPrice: 249990,
      salePrice: 229990,
      discount: 8,
      features: ["4K OLED evo", "α9 AI Processor", "Dolby Vision IQ", "4 HDMI 2.1"],
      description: "Premium OLED TV with stunning picture quality and gaming features.",
      highlights: ["120Hz Display", "G-SYNC Compatible", "webOS 23", "Magic Remote"],
      warranty: "1 Year LG Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 17,
      name: "ASUS ROG Zephyrus G14",
      brand: "ASUS",
      category: "Laptops",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 1840,
      originalPrice: 174990,
      salePrice: 159990,
      discount: 9,
      features: ["AMD Ryzen 9", "RTX 4090", "1TB SSD", "16GB RAM"],
      description: "Powerful gaming laptop in a compact 14-inch form factor.",
      highlights: ["165Hz Display", "ROG Nebula HDR", "Windows 11", "AniMe Matrix"],
      warranty: "1 Year ASUS Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 18,
      name: "Meta Quest 3",
      brand: "Meta",
      category: "VR Headsets",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 2340,
      originalPrice: 69999,
      salePrice: 64999,
      discount: 7,
      features: ["128GB Storage", "Mixed Reality", "Snapdragon XR2", "Touch Controllers"],
      description: "Advanced VR headset with high-resolution displays and mixed reality capabilities.",
      highlights: ["2064x2208 per eye", "Pancake Lenses", "Wi-Fi 6E", "Pass-through AR"],
      warranty: "1 Year Meta Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 19,
      name: "Sonos Arc",
      brand: "Sonos",
      category: "Audio",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 1560,
      originalPrice: 99999,
      salePrice: 89999,
      discount: 10,
      features: ["Dolby Atmos", "11 Drivers", "Voice Control", "AirPlay 2"],
      description: "Premium soundbar with immersive 3D audio and smart features.",
      highlights: ["Room Calibration", "Multi-room Audio", "HDMI eARC", "Voice Assistants"],
      warranty: "2 Years Sonos Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 20,
      name: "Fujifilm X-T5",
      brand: "Fujifilm",
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 980,
      originalPrice: 189990,
      salePrice: 174990,
      discount: 8,
      features: ["40MP X-Trans", "6.2K Video", "5-axis IBIS", "3-way Tilt LCD"],
      description: "Professional mirrorless camera with classic design and modern features.",
      highlights: ["15fps Shooting", "AI Autofocus", "Film Simulations", "Weather Sealed"],
      warranty: "2 Years Fujifilm Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 21,
      name: "Samsung Galaxy Watch 6 Pro",
      brand: "Samsung",
      category: "Wearables",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 2890,
      originalPrice: 44999,
      salePrice: 39999,
      discount: 11,
      features: ["AMOLED Display", "Body Composition", "ECG Monitor", "GPX Routes"],
      description: "Advanced smartwatch with comprehensive health and fitness tracking.",
      highlights: ["Wear OS", "Samsung Pay", "IP68 Rating", "Rotating Bezel"],
      warranty: "1 Year Samsung Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 22,
      name: "Nothing Phone (2)",
      brand: "Nothing",
      category: "Smartphones",
      image: "Nothing Phone (2).jpg",
      rating: 4.4,
      reviews: 1870,
      originalPrice: 44999,
      salePrice: 39999,
      discount: 11,
      features: ["Glyph Interface", "Snapdragon 8+", "50MP Camera", "4700mAh Battery"],
      description: "Unique smartphone with innovative Glyph interface and clean design.",
      highlights: ["120Hz OLED", "Nothing OS 2.0", "Wireless Charging", "Gorilla Glass"],
      warranty: "1 Year Nothing Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 23,
      name: "Microsoft Xbox Series X",
      brand: "Microsoft",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 5640,
      originalPrice: 54990,
      salePrice: 49990,
      discount: 9,
      features: ["4K Gaming", "1TB SSD", "12 TeraFLOPS", "Ray Tracing"],
      description: "Most powerful Xbox console for next-gen gaming experience.",
      highlights: ["Quick Resume", "Smart Delivery", "Game Pass", "120fps Gaming"],
      warranty: "1 Year Microsoft Warranty",
      inStock: true,
      fastDelivery: false
    },
    {
      id: 24,
      name: "GoPro HERO12 Black",
      brand: "GoPro",
      category: "Cameras",
      image: "GoPro HERO12 Black.jpg",
      rating: 4.6,
      reviews: 890,
      originalPrice: 45000,
      salePrice: 41900,
      discount: 7,
      features: ["5.3K Video", "27MP Photos", "HDR", "HyperSmooth 6.0"],
      description: "Ultimate action camera with professional-grade stabilization and features.",
      highlights: ["TimeWarp 3.0", "Waterproof 33ft", "GP2 Processor", "Dual Displays"],
      warranty: "1 Year GoPro Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 25,
      name: "Dyson V15 Detect",
      brand: "Dyson",
      category: "Smart Home",
      image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 2340,
      originalPrice: 62900,
      salePrice: 58900,
      discount: 6,
      features: ["Laser Detection", "LCD Screen", "60min Runtime", "Root Cyclone"],
      description: "Advanced cordless vacuum with laser dust detection technology.",
      highlights: ["HEPA Filtration", "Acoustic Dust Sensing", "11 Attachments", "Wall Dock"],
      warranty: "2 Years Dyson Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 26,
      name: "Anker 737 Power Bank",
      brand: "Anker",
      category: "Accessories",
      image: "Anker 737 Power Bank.jpg",
      rating: 4.7,
      reviews: 3240,
      originalPrice: 14999,
      salePrice: 12999,
      discount: 13,
      features: ["24000mAh Capacity", "140W Output", "LED Display", "Triple Ports"],
      description: "High-capacity power bank with fast charging capabilities for laptops and mobile devices.",
      highlights: ["GaN Technology", "USB-C PD 3.0", "Airline Safe", "Smart Digital Display"],
      warranty: "18 Months Anker Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 27,
      name: "Belkin 3-in-1 Wireless Charger",
      brand: "Belkin",
      category: "Accessories",
      image: "Belkin 3-in-1 Wireless Charger.jpg",
      rating: 4.6,
      reviews: 1890,
      originalPrice: 12999,
      salePrice: 10999,
      discount: 15,
      features: ["15W Fast Charging", "MagSafe Compatible", "Apple Certified", "Night Mode"],
      description: "Premium wireless charging station for iPhone, Apple Watch, and AirPods.",
      highlights: ["Qi Certification", "Adjustable Stand", "LED Indicator", "Sleek Design"],
      warranty: "2 Years Belkin Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 28,
      name: "Samsung T7 Shield SSD",
      brand: "Samsung",
      category: "Storage",
      image: "Samsung T7 Shield SSD.jpg",
      rating: 4.8,
      reviews: 2560,
      originalPrice: 16999,
      salePrice: 14999,
      discount: 12,
      features: ["1TB Storage", "1050MB/s Speed", "IP65 Rating", "Password Protection"],
      description: "Rugged portable SSD with fast transfer speeds and durability.",
      highlights: ["Drop Resistant", "USB 3.2 Gen2", "Compact Size", "Compatible with all devices"],
      warranty: "3 Years Samsung Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 29,
      name: "Logitech MX Master 3S",
      brand: "Logitech",
      category: "Accessories",
      image: "Logitech MX Master 3S.jpg",
      rating: 4.7,
      reviews: 4280,
      originalPrice: 9999,
      salePrice: 8999,
      discount: 10,
      features: ["8000 DPI Sensor", "Silent Clicks", "Multi-Device", "USB-C Charging"],
      description: "Premium wireless mouse with ergonomic design and customizable buttons.",
      highlights: ["Flow Technology", "App Specific", "90-day Battery", "Darkfield Tracking"],
      warranty: "1 Year Logitech Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 30,
      name: "Keychron K2 Keyboard",
      brand: "Keychron",
      category: "Accessories",
      image: "Keychron K2 Keyboard.jpg",
      rating: 4.6,
      reviews: 1920,
      originalPrice: 8999,
      salePrice: 7999,
      discount: 11,
      features: ["Hot-swappable", "RGB Backlight", "Bluetooth 5.1", "Aluminum Frame"],
      description: "Wireless mechanical keyboard with Mac/Windows compatibility.",
      highlights: ["84 Keys Layout", "Gateron Switches", "4000mAh Battery", "Type-C Port"],
      warranty: "1 Year Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 31,
      name: "UGREEN Nexode 100W GaN Charger",
      brand: "UGREEN",
      category: "Accessories",
      image: "UGREEN Nexode 100W GaN Charger.jpg",
      rating: 4.5,
      reviews: 2140,
      originalPrice: 6999,
      salePrice: 5999,
      discount: 14,
      features: ["100W Output", "4 Ports", "GaN Technology", "Smart Power Distribution"],
      description: "Compact GaN charger for multiple devices with fast charging support.",
      highlights: ["PD 3.0/PPS", "Foldable Plug", "Temperature Control", "Universal Compatibility"],
      warranty: "18 Months Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 32,
      name: "SanDisk Extreme Pro SD Card",
      brand: "SanDisk",
      category: "Storage",
      image: "SanDisk Extreme Pro SD Card.jpg",
      rating: 4.8,
      reviews: 5670,
      originalPrice: 4999,
      salePrice: 3999,
      discount: 20,
      features: ["128GB Storage", "200MB/s Speed", "V30 Rating", "4K Ready"],
      description: "Professional-grade SD card for cameras and video recording.",
      highlights: ["UHS-I Speed", "Water Proof", "Temperature Proof", "X-ray Proof"],
      warranty: "Lifetime Limited Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 33,
      name: "Anker USB-C Hub",
      brand: "Anker",
      category: "Accessories",
      image: "Anker USB-C Hub.jpg",
      rating: 4.6,
      reviews: 3280,
      originalPrice: 7999,
      salePrice: 6499,
      discount: 19,
      features: ["8-in-1 Hub", "4K HDMI", "100W PD", "Data Transfer"],
      description: "Versatile USB-C hub with multiple ports for laptops and tablets.",
      highlights: ["Ethernet Port", "SD Card Slots", "USB 3.0 Ports", "Aluminum Design"],
      warranty: "18 Months Anker Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 34,
      name: "Apple AirTag",
      brand: "Apple",
      category: "Accessories",
      image: "Apple AirTag.jpg",
      rating: 4.7,
      reviews: 8920,
      originalPrice: 3490,
      salePrice: 3190,
      discount: 9,
      features: ["Precision Finding", "U1 Chip", "Water Resistant", "1-Year Battery"],
      description: "Smart tracker for keeping track of your belongings in the Find My network.",
      highlights: ["Lost Mode", "Replaceable Battery", "Privacy Protected", "Setup Touch"],
      warranty: "1 Year Apple Warranty",
      inStock: true,
      fastDelivery: true
    },
    {
      id: 35,
      name: "Baseus Magnetic Car Mount",
      brand: "Baseus",
      category: "Accessories",
      image: "Baseus Magnetic Car Mount.jpg",
      rating: 4.5,
      reviews: 2340,
      originalPrice: 2499,
      salePrice: 1999,
      discount: 20,
      features: ["MagSafe Compatible", "Strong Magnet", "Adjustable Angle", "One-hand Operation"],
      description: "Magnetic car phone mount with strong hold and easy installation.",
      highlights: ["360° Rotation", "Dashboard/Vent Mount", "Anti-shake", "Universal Fit"],
      warranty: "1 Year Warranty",
      inStock: true,
      fastDelivery: true
    }
  ];

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
                  ₹{product.salePrice.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
                <span className="text-green-600 font-medium">
                  {product.discount}% off
                </span>
              </div>
              <div className="text-sm text-green-600 font-medium">
                You save: ₹{discountAmount.toLocaleString()}
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
                <span className="text-gray-700">Flipkart Assured</span>
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
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-900">Electronics</h1>
        
        {/* Featured Categories - Extended */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Mobiles & Tablets</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smartphones</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Tablets</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Mobile Accessories</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Tablet Accessories</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Mobile Chargers</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Computers</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Laptops</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Desktop PCs</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Laptops</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Monitors</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">PC Components</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Audio & Video</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Headphones</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Speakers</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart TVs</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Soundbars</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Microphones</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Smart Home</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart Speakers</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Security Cameras</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart Lights</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart Plugs</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Robot Vacuums</li>
              </ul>
            </div>
          </div>

          {/* Additional Categories Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Gaming</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Consoles</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Laptops</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Accessories</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Monitors</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Gaming Chairs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Cameras</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">DSLR Cameras</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Mirrorless Cameras</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Action Cameras</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Camera Lenses</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Camera Accessories</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Wearables</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smartwatches</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Fitness Trackers</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart Glasses</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Smart Rings</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">VR Headsets</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">Accessories</h2>
              <ul className="space-y-2">
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Power Banks</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Cables & Chargers</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Cases & Covers</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Storage Devices</li>
                <li className="text-gray-700 hover:text-blue-600 cursor-pointer">Screen Protectors</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Featured Products - Extended Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Original featured products */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="iPhone 15 Pro Max.jpeg" 
                  alt="iPhone 15 Pro Max"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">iPhone 15 Pro Max</h3>
                <p className="text-gray-700 mb-2">Latest Apple Flagship</p>
                <p className="text-blue-600 font-bold">₹1,49,900</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop" 
                  alt="MacBook Air M3"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">MacBook Air M3</h3>
                <p className="text-gray-700 mb-2">Power and Portability</p>
                <p className="text-blue-600 font-bold">₹1,14,900</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop" 
                  alt="Sony WH-1000XM5"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Sony WH-1000XM5</h3>
                <p className="text-gray-700 mb-2">Premium Noise Cancelling</p>
                <p className="text-blue-600 font-bold">₹29,990</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=200&fit=crop" 
                  alt="Samsung QLED TV"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Samsung QLED TV</h3>
                <p className="text-gray-700 mb-2">4K Smart TV</p>
                <p className="text-blue-600 font-bold">₹89,990</p>
              </div>
            </div>

            {/* Additional Featured Products */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop" 
                  alt="iPad Air"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">iPad Air 5th Gen</h3>
                <p className="text-gray-700 mb-2">M1 Chip Powered</p>
                <p className="text-blue-600 font-bold">₹54,900</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop" 
                  alt="Bose QuietComfort"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Bose QuietComfort Ultra</h3>
                <p className="text-gray-700 mb-2">Immersive Audio</p>
                <p className="text-blue-600 font-bold">₹29,900</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=200&fit=crop" 
                  alt="DJI Mini 3 Pro"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">DJI Mini 3 Pro</h3>
                <p className="text-gray-700 mb-2">Lightweight Drone</p>
                <p className="text-blue-600 font-bold">₹84,990</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=300&h=200&fit=crop" 
                  alt="Samsung Neo QLED"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Samsung 65" Neo QLED 8K</h3>
                <p className="text-gray-700 mb-2">Next-Gen TV</p>
                <p className="text-blue-600 font-bold">₹2,69,990</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Listings */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-gray-900">All Products</h2>
          <div className="space-y-6">
            {electronics.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsPage;