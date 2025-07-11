"use client"
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Heart, Bell, Store } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-[100]">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo with Icon */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <div className="flex-shrink-0">
              <div className="flex flex-col items-center">
                {/* Logo Icon */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1.5 rounded-lg mb-1">
                  <Store className="w-5 h-5 text-white" />
                </div>
                {/* Logo Text */}
                <h1 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                  ShopVerse
                </h1>
              </div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2.5 pl-4 pr-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors duration-200">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Login/User Profile */}
            <div className="relative">
              <button 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Login</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* User Dropdown */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[110] animate-in fade-in duration-200">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Sign In
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Create Account
                  </a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    My Orders
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    Wishlist
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors">
                    My Account
                  </a>
                </div>
              )}
            </div>

            {/* Become a Seller */}
            <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center space-x-2">
              <Store className="w-5 h-5" />
              <span>Become a Seller</span>
            </button>

            {/* Wishlist */}
            <button className="relative text-gray-700 hover:text-red-500 transition-colors duration-200">
              <Heart className="w-6 h-6" />
            </button>

            {/* Cart */}
            <button className="relative text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <ShoppingCart className="w-6 h-6" />
            </button>

            {/* Notifications */}
            <button className="relative text-gray-700 hover:text-yellow-500 transition-colors duration-200">
              <Bell className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-4">
            
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2.5 pr-12 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-md">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span>Login / Sign Up</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
              
              <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-yellow-500 transition-colors">
                <Bell className="w-5 h-5" />
                <span>Notifications</span>
              </a>
              
              <hr className="my-3" />
              
              <a href="#" className="flex items-center space-x-3 text-blue-600 font-medium">
                <Store className="w-5 h-5" />
                <span>Become a Seller</span>
              </a>
              
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Customer Service
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {isUserDropdownOpen && (
        <div 
          className="fixed inset-0 z-[105]" 
          onClick={() => setIsUserDropdownOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;