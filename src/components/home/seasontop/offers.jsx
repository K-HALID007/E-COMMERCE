import React from 'react';
import { ChevronRight, ShoppingCart } from 'lucide-react';

const EcommerceHomepage = () => {
  const categories = [
    {
      title: "Mosquito Nets",
      discount: "Min. 50% Off",
      image: "Mosquito Nets.jpg",
      bgColor: "bg-pink-50"
    },
    {
      title: "Water Bottles & Flasks", 
      discount: "Min. 50% Off",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-50"
    },
    {
      title: "Cameras",
      discount: "Min. 30% Off", 
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-gray-50"
    },
    {
      title: "Smart Speakers",
      discount: "Don't Miss",
      image: "Smart Speakers.jpg",
      bgColor: "bg-purple-50"
    },
    {
      title: "Torches",
      discount: "Min. 50% Off",
      image: "Torches.jpg",
      bgColor: "bg-orange-50"
    },
    {
      title: "Wall Clocks",
      discount: "Min. 50% Off",
      image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-green-50"
    },
    {
      title: "Wireless Headphones",
      discount: "Min. 50% Off",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-50"
    },
    {
      title: "Refrigerators", 
      discount: "Min. 50% Off",
      image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Smart Home Devices",
      discount: "Up to 40% Off",
      image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-cyan-50"
    },
    {
      title: "Kitchen Appliances",
      discount: "Min. 30% Off",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-rose-50"
    },
    {
      title: "Fitness Equipment",
      discount: "Starting ₹999",
      image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Home Decor",
      discount: "Up to 60% Off",
      image: "Home Decor.jpg",
      bgColor: "bg-amber-50"
    },
    {
      title: "LED Lights",
      discount: "From ₹299",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Bean Bags",
      discount: "Min 40% Off",
      image: "Bean Bags.jpg",
      bgColor: "bg-purple-50"
    },
    {
      title: "Study Tables",
      discount: "Up to 55% Off",
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-blue-50"
    },
    {
      title: "Floor Mats",
      discount: "Under ₹999",
      image: "https://images.unsplash.com/photo-1534889156217-d643df14f14a?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-teal-50"
    },
    {
      title: "Curtains",
      discount: "40-70% Off",
      image: "Curtains.jpg",
      bgColor: "bg-pink-50"
    },
    {
      title: "Artificial Plants",
      discount: "Under ₹499",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop&crop=center",
      bgColor: "bg-green-50"
    }
  ];

  const summerAppliances = [
    {
      title: "Camera Lenses",
      discount: "Min. 30% Off",
      image: "Cameras.jpg",
      description: "Professional & Drone Cameras"
    },
    {
      title: "Smart Speakers",
      discount: "Don't Miss",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center",
      description: "Bluetooth & Smart Speakers"
    },
    {
      title: "Air Coolers",
      discount: "Up to 60% Off",
      image: "Air Coolers.jpg",
      description: "Tower & Desert Air Coolers"
    },
    {
      title: "Fans",
      discount: "Starting ₹999",
      image: "Fans.jpg",
      description: "Ceiling & Table Fans"
    }
  ];

  const furnitureItems = [
    {
      image: "outdoor chair.jpg",
      title: "Outdoor Chairs"
    },
    {
      image: "Hanging Chair.jpg",
      title: "Hanging Chair"
    },
    {
      image: "Recliner Chair.jpg",
      title: "Recliner Chair"
    }
  ];

  const additionalCategories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Books",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop&crop=center"
    },
    {
      name: "Toys",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const ProductCard = ({ category }) => (
    <div className={`${category.bgColor} rounded-xl p-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-white/50`}>
      <div className="aspect-square mb-3 bg-white rounded-lg overflow-hidden shadow-inner relative">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
      </div>
      <h3 className="font-semibold text-gray-800 text-sm mb-1 leading-tight">{category.title}</h3>
      <p className={`font-bold text-xs ${category.discount.includes("Don't") ? 'text-red-600' : 'text-green-600'}`}>
        {category.discount}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-[1580px] mx-auto px-6 lg:px-12">
        {/* Header Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Home Decor & Furnishings Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Home Decor & Furnishings
              </h2>
              <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors cursor-pointer group">
                <span className="text-sm font-medium">View All</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {categories.slice(0, 6).map((category, index) => (
                <ProductCard key={index} category={category} />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
              {categories.slice(6, 12).map((category, index) => (
                <ProductCard key={index + 6} category={category} />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
              {categories.slice(12, 18).map((category, index) => (
                <ProductCard key={index + 12} category={category} />
              ))}
            </div>
          </div>

          {/* Appliance for Cool Summer Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Appliance for Cool Summer
              </h2>
              <div className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors cursor-pointer group">
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {summerAppliances.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                  <div className="aspect-square mb-3 bg-gray-100 rounded-xl overflow-hidden shadow-inner relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <h3 className="font-bold text-gray-800 text-base mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-xs mb-2">{item.description}</p>
                  <p className={`font-bold text-sm ${item.discount.includes("Don't") || item.discount.includes("Starting") ? 'text-red-600' : 'text-green-600'}`}>
                    {item.discount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Furniture Collection Section */}
        <div className="bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-amber-200/50">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 to-orange-700 bg-clip-text text-transparent mb-4 leading-tight">
                Find furnitures that speak to you
              </h2>
              <p className="text-gray-700 mb-8 text-lg font-medium">
                Discover our Premium Furniture Collection!
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {furnitureItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-xs font-medium truncate">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group">
                <span className="text-lg">See Collection</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200/30 relative">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop&crop=center" 
                  alt="Premium Furniture Collection"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h3 className="text-2xl font-bold text-amber-800 mb-2">Premium Collection</h3>
                    <p className="text-amber-700 font-medium">Handcrafted Furniture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Categories Grid */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-4">
          {additionalCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-4 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-3 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="font-bold text-gray-800 text-sm">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Winter Collection Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
                Winter Collection 2024
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Cozy up with our latest winter essentials. From warm jackets to stylish boots, find everything you need for the cold season.
              </p>
              <div className="flex gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2">
                  Shop Collection <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border border-blue-200 hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-xl font-semibold transition-colors">
                  View Lookbook
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1515434126000-961d90ff09db?w=300&h=300&fit=crop&crop=center" 
                  alt="Winter Jacket"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-gray-800">Winter Jackets</h3>
                <p className="text-green-600 font-bold">Up to 40% Off</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <img 
                  src="Winter Boots.jpg" 
                  alt="Winter Boots"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-gray-800">Winter Boots</h3>
                <p className="text-green-600 font-bold">Starting ₹1,499</p>
              </div>
            </div>
          </div>
        </div>

        {/* Electronics Deals Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Smart TVs",
              image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop&crop=center",
              discount: "Up to 55% Off",
              description: "4K Ultra HD Smart LED TVs"
            },
            {
              title: "Laptops",
              image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop&crop=center",
              discount: "Starting ₹29,999",
              description: "Latest Gen Processors"
            },
            {
              title: "Smartwatches",
              image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop&crop=center",
              discount: "Min 30% Off",
              description: "Fitness & Health Tracking"
            },
            {
              title: "Gaming",
              image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop&crop=center",
              discount: "Up to 40% Off",
              description: "Consoles & Accessories"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white hover:scale-105 transition-transform">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-bold">{item.discount}</span>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fashion Trends Section */}
        <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Fashion Trends</h2>
            <p className="text-gray-600">Discover the latest styles and trends in fashion</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                category: "Women's Wear",
                image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=400&fit=crop&crop=center",
                discount: "30-70% Off"
              },
              {
                category: "Men's Fashion",
                image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=300&h=400&fit=crop&crop=center",
                discount: "Min 40% Off"
              },
              {
                category: "Kids Wear",
                image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=300&h=400&fit=crop&crop=center",
                discount: "Up to 50% Off"
              },
              {
                category: "Accessories",
                image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=300&h=400&fit=crop&crop=center",
                discount: "Starting ₹299"
              }
            ].map((item, index) => (
              <div key={index} className="group relative rounded-xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                  <p className="text-pink-300 font-semibold">{item.discount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHomepage;   
