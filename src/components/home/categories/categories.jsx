"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Categories = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const handleCategoryClick = (categoryName) => {
    setActiveDropdown(categoryName === activeDropdown ? null : categoryName);
  };

  const handleItemClick = (category, subcategory, item) => {
    // Close the dropdown
    setActiveDropdown(null);
    // Navigate to the electronic route
    if (category.toLowerCase() === 'electronics') {
      router.push('/electronic');
    }
  };

  const categories = [
    { 
      name: 'Electronics', 
      image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: 'Mobiles',
          items: ['Smartphones', 'Basic Mobiles', 'Mobile Accessories', 'Cases & Covers', 'Screen Guards']
        },
        {
          title: 'Laptops & Computers',
          items: ['Laptops', 'Desktop PCs', 'Gaming Laptops', 'Tablets', 'Hard Drives', 'Monitors']
        },
        {
          title: 'Audio & Video',
          items: ['Headphones', 'Speakers', 'Home Theater', 'Smart TVs', 'Cameras', 'Gaming Consoles']
        },
        {
          title: 'Appliances',
          items: ['Air Conditioners', 'Refrigerators', 'Washing Machines', 'Microwaves', 'Water Purifiers']
        }
      ],
      products: [
        { name: 'iPhone 15 Pro Max', price: '₹1,49,900', image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=150&h=100&fit=crop' },
        { name: 'Samsung Galaxy S24', price: '₹79,999', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=100&fit=crop' },
        { name: 'MacBook Air M3', price: '₹1,14,900', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=150&h=100&fit=crop' },
        { name: 'Sony WH-1000XM5', price: '₹29,990', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=150&h=100&fit=crop' }
      ]
    },
    { 
      name: 'Fashion', 
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: "Men's Fashion",
          items: ['Shirts', 'T-Shirts', 'Jeans', 'Formal Wear', 'Ethnic Wear', 'Shoes', 'Watches']
        },
        {
          title: "Women's Fashion",
          items: ['Sarees', 'Kurtas', 'Dresses', 'Tops', 'Jeans', 'Ethnic Wear', 'Handbags']
        },
        {
          title: 'Kids Fashion',
          items: ['Boys Clothing', 'Girls Clothing', 'Baby Care', 'Kids Footwear', 'School Supplies']
        },
        {
          title: 'Accessories',
          items: ['Bags', 'Belts', 'Sunglasses', 'Jewellery', 'Perfumes', 'Wallets']
        }
      ],
      products: [
        { name: 'Casual Cotton Shirt', price: '₹899', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=150&h=100&fit=crop' },
        { name: 'Designer Kurti', price: '₹1,299', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=100&fit=crop' },
        { name: 'Formal Blazer', price: '₹2,499', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop' },
        { name: 'Running Shoes', price: '₹3,999', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=100&fit=crop' }
      ]
    },
    { 
      name: 'Home & Kitchen', 
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: 'Kitchen & Dining',
          items: ['Cookware', 'Kitchen Tools', 'Coffee Makers', 'Dinner Sets', 'Storage Containers']
        },
        {
          title: 'Home Decor',
          items: ['Wall Art', 'Curtains', 'Cushions', 'Rugs', 'Lighting', 'Candles']
        },
        {
          title: 'Furniture',
          items: ['Sofas', 'Beds', 'Dining Tables', 'Office Chairs', 'Storage', 'Mattresses']
        },
        {
          title: 'Garden & Outdoor',
          items: ['Plants', 'Garden Tools', 'Outdoor Furniture', 'BBQ & Grills', 'Pool Supplies']
        }
      ],
      products: [
        { name: 'Non-Stick Cookware Set', price: '₹4,999', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=100&fit=crop' },
        { name: 'LED Table Lamp', price: '₹1,299', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=150&h=100&fit=crop' },
        { name: 'Wooden Dining Table', price: '₹24,999', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=100&fit=crop' },
        { name: 'Decorative Cushions', price: '₹799', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=150&h=100&fit=crop' }
      ]
    },
    { 
      name: 'Beauty', 
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: 'Makeup',
          items: ['Face Makeup', 'Eye Makeup', 'Lip Makeup', 'Makeup Tools', 'Nail Care']
        },
        {
          title: 'Skincare',
          items: ['Face Care', 'Body Care', 'Cleansers', 'Moisturizers', 'Sunscreen', 'Anti-Aging']
        },
        {
          title: 'Hair Care',
          items: ['Shampoo', 'Conditioner', 'Hair Oil', 'Hair Styling', 'Hair Color', 'Hair Tools']
        },
        {
          title: 'Fragrance',
          items: ['Perfumes', 'Body Sprays', 'Deodorants', 'Essential Oils', 'Room Fresheners']
        }
      ],
      products: [
        { name: 'Vitamin C Serum', price: '₹1,499', image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=150&h=100&fit=crop' },
        { name: 'Lipstick Set', price: '₹899', image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=150&h=100&fit=crop' },
        { name: 'Hair Dryer', price: '₹2,299', image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=150&h=100&fit=crop' },
        { name: 'Premium Perfume', price: '₹3,999', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=150&h=100&fit=crop' }
      ]
    },
    { 
      name: 'Sports', 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: 'Fitness Equipment',
          items: ['Treadmills', 'Exercise Bikes', 'Dumbbells', 'Yoga Mats', 'Protein Supplements']
        },
        {
          title: 'Outdoor Sports',
          items: ['Cricket', 'Football', 'Badminton', 'Tennis', 'Basketball', 'Cycling']
        },
        {
          title: 'Indoor Games',
          items: ['Chess', 'Carrom', 'Table Tennis', 'Board Games', 'Puzzles', 'Card Games']
        },
        {
          title: 'Sports Wear',
          items: ['Sports Shoes', 'Gym Wear', 'Track Suits', 'Sports T-Shirts', 'Swimwear']
        }
      ],
      products: [
        { name: 'Professional Cricket Bat', price: '₹4,999', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=100&fit=crop' },
        { name: 'Yoga Mat Premium', price: '₹1,299', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&h=100&fit=crop' },
        { name: 'Dumbbell Set', price: '₹3,499', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=100&fit=crop' },
        { name: 'Sports Shoes', price: '₹5,999', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=100&fit=crop' }
      ]
    },
    { 
      name: 'Books', 
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=80&fit=crop&crop=center',
      subcategories: [
        {
          title: 'Academic Books',
          items: ['School Books', 'College Books', 'Competitive Exams', 'Reference Books', 'Dictionaries']
        },
        {
          title: 'Fiction',
          items: ['Romance', 'Mystery', 'Sci-Fi', 'Fantasy', 'Historical Fiction', 'Bestsellers']
        },
        {
          title: 'Non-Fiction',
          items: ['Biography', 'Self-Help', 'Business', 'Health', 'Travel', 'Cooking']
        },
        {
          title: 'Digital Content',
          items: ['E-Books', 'Audiobooks', 'Online Courses', 'Educational Apps', 'Study Materials']
        }
      ],
      products: [
        { name: 'The Atomic Habits', price: '₹399', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=100&fit=crop' },
        { name: 'Programming Guide', price: '₹899', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop' },
        { name: 'Novel Collection', price: '₹599', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=100&fit=crop' },
        { name: 'Kids Story Books', price: '₹299', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=100&fit=crop' }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 border-t border-gray-200 relative z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-6 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative flex flex-col items-center space-y-3 min-w-[100px]"
            >
              <div className="relative w-16 h-12 overflow-hidden rounded-lg group">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-200"></div>
              </div>
              <button 
                onClick={() => handleCategoryClick(category.name)}
                className={`flex items-center justify-center space-x-2 whitespace-nowrap font-medium transition-colors duration-200 text-sm group py-1.5 px-3 rounded-lg hover:bg-white relative w-full ${
                  activeDropdown === category.name ? 'text-blue-600 bg-white' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span>{category.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                  activeDropdown === category.name ? 'rotate-180 text-blue-500' : 'text-gray-400 group-hover:text-blue-500'
                }`} />
              </button>
            </div>
          ))}
          <div className="relative flex flex-col items-center space-y-3 min-w-[100px]">
            <div className="relative w-16 h-12 overflow-hidden rounded-lg group">
              <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>
            <button className="flex items-center justify-center space-x-2 whitespace-nowrap text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group py-1.5 px-3 rounded-lg hover:bg-white w-full">
              <span>View All</span>
              <ChevronDown className="w-3 h-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {activeDropdown && (
        <div className="fixed inset-0 bg-black/40 z-[999] pt-32">
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 animate-in fade-in slide-in-from-top-5 duration-300">
              {/* Header with close button */}
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <h2 className="text-xl font-semibold text-gray-800">{activeDropdown} Categories</h2>
                <button 
                  onClick={() => setActiveDropdown(null)}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                {/* Horizontal Layout for Categories */}
                <div className="flex flex-wrap gap-8">
                  {categories.find(cat => cat.name === activeDropdown)?.subcategories.map((subcategory, index) => (
                    <div key={index} className="min-w-[200px] max-w-[250px]">
                      <h3 className="font-semibold text-gray-900 text-sm border-b border-gray-100 pb-2 mb-3">
                        {subcategory.title}
                      </h3>
                      <ul className="space-y-2">
                        {subcategory.items.slice(0, 5).map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={activeDropdown.toLowerCase() === 'electronics' ? '/electronic' : '#'}
                              onClick={() => handleItemClick(activeDropdown, subcategory.title, item)}
                              className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 block py-1 hover:translate-x-1 transform transition-transform"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mt-6">
                  <Link
                    href={activeDropdown.toLowerCase() === 'electronics' ? '/electronic' : '#'}
                    className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center space-x-1 group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>View All {activeDropdown} Categories</span>
                    <ChevronDown className="w-3 h-3 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;