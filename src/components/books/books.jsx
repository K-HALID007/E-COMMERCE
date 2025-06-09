"use client"
import React, { useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, Zap, Truck, Shield, Award, BookOpen, Calendar, Users } from 'lucide-react';

const BooksPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    author: [],
    priceRange: '',
    rating: '',
    genre: ''
  });

  // Books data with comprehensive collection
  const booksData = [
    {
      id: 1,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      genre: "Finance & Business",
      image: "books/The Psychology of Money.jpg",
      rating: 4.8,
      reviews: 5670,
      originalPrice: 599,
      salePrice: 449,
      discount: 25,
      pages: 256,
      publisher: "Jaico Publishing",
      language: "English",
      features: ["Bestseller", "Award Winner", "Financial Wisdom", "Easy to Read"],
      description: "Timeless lessons on wealth, greed, and happiness exploring the strange ways people think about money.",
      highlights: ["Real-world examples", "Behavioral finance", "Investment psychology", "Practical insights"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 2020,
      warranty: "30-day return policy"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      image: "books/Atomic Habits.jpg",
      rating: 4.7,
      reviews: 8920,
      originalPrice: 699,
      salePrice: 524,
      discount: 25,
      pages: 320,
      publisher: "Random House",
      language: "English",
      features: ["#1 New York Times Bestseller", "Life-changing", "Practical Guide", "Scientific Approach"],
      description: "An easy & proven way to build good habits & break bad ones with practical strategies for forming good habits.",
      highlights: ["Habit formation science", "Practical strategies", "Real-life examples", "Actionable advice"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 2018,
      warranty: "30-day return policy"
    },
    {
      id: 3,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History",
      image: "books/Sapiens.jpg",
      rating: 4.6,
      reviews: 12450,
      originalPrice: 799,
      salePrice: 599,
      discount: 25,
      pages: 464,
      publisher: "Vintage Books",
      language: "English",
      features: ["International Bestseller", "Thought-provoking", "Historical Analysis", "Evolutionary Biology"],
      description: "From the Stone Age to the twenty-first century, Sapiens explores how we came to believe in gods, nations and human rights.",
      highlights: ["Human evolution", "Cultural development", "Future predictions", "Engaging narrative"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 2014,
      warranty: "30-day return policy"
    },
    {
      id: 4,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      image: "books/The Alchemist.jpg",
      rating: 4.5,
      reviews: 15670,
      originalPrice: 399,
      salePrice: 299,
      discount: 25,
      pages: 208,
      publisher: "HarperCollins",
      language: "English",
      features: ["Classic Literature", "Inspirational", "Philosophical", "Timeless Story"],
      description: "A magical story about Santiago, an Andalusian shepherd boy who yearns to travel in search of treasure.",
      highlights: ["Life philosophy", "Adventure story", "Universal themes", "Spiritual journey"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1988,
      warranty: "30-day return policy"
    },
    {
      id: 5,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      genre: "Self-Help",
      image: "books/Think and Grow Rich.jpg",
      rating: 4.4,
      reviews: 6780,
      originalPrice: 499,
      salePrice: 374,
      discount: 25,
      pages: 384,
      publisher: "Penguin Random House",
      language: "English",
      features: ["Classic Success Book", "Wealth Building", "Mindset", "Time-tested Principles"],
      description: "The landmark bestseller now revised and updated for the 21st century with principles of success.",
      highlights: ["Success principles", "Wealth mindset", "Goal achievement", "Personal development"],
      format: "Paperback",
      inStock: true,
      fastDelivery: false,
      publication_year: 1937,
      warranty: "30-day return policy"
    },
    {
      id: 6,
      title: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      genre: "Psychology",
      image: "books/The Power of Your Subconscious Mind.jpeg",
      rating: 4.6,
      reviews: 4560,
      originalPrice: 349,
      salePrice: 262,
      discount: 25,
      pages: 312,
      publisher: "Bantam Books",
      language: "English",
      features: ["Psychology Classic", "Mind Power", "Self-Improvement", "Practical Techniques"],
      description: "Unlock the power of your subconscious mind to achieve success, happiness, and personal transformation.",
      highlights: ["Subconscious programming", "Positive thinking", "Mental techniques", "Life transformation"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1963,
      warranty: "30-day return policy"
    },
    {
      id: 7,
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      genre: "Self-Help",
      image: "books/The 7 Habits of Highly Effective People.jpeg",
      rating: 4.7,
      reviews: 7890,
      originalPrice: 699,
      salePrice: 524,
      discount: 25,
      pages: 432,
      publisher: "Free Press",
      language: "English",
      features: ["Leadership Classic", "Personal Effectiveness", "Character Building", "Timeless Wisdom"],
      description: "Powerful lessons in personal change that have helped millions achieve success and fulfillment.",
      highlights: ["Character ethics", "Principle-centered living", "Personal leadership", "Effectiveness habits"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1989,
      warranty: "30-day return policy"
    },
    {
      id: 8,
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      genre: "Finance & Business",
      image: "books/Rich Dad Poor Dad.jpeg",
      rating: 4.5,
      reviews: 9870,
      originalPrice: 599,
      salePrice: 449,
      discount: 25,
      pages: 336,
      publisher: "Plata Publishing",
      language: "English",
      features: ["Financial Education", "Investment Guide", "Wealth Building", "Money Mindset"],
      description: "What the rich teach their kids about money that the poor and middle class do not!",
      highlights: ["Financial literacy", "Asset vs liability", "Investment strategies", "Money education"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1997,
      warranty: "30-day return policy"
    },
    {
      id: 9,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: "Self-Help",
      image: "books/The Subtle Art of Not Giving a.jpeg",
      rating: 4.3,
      reviews: 6540,
      originalPrice: 499,
      salePrice: 374,
      discount: 25,
      pages: 224,
      publisher: "HarperOne",
      language: "English",
      features: ["Counterintuitive Approach", "Honest Advice", "Modern Philosophy", "Practical Wisdom"],
      description: "A counterintuitive approach to living a good life by focusing on what truly matters.",
      highlights: ["Value selection", "Uncomfortable truths", "Personal responsibility", "Meaningful life"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 2016,
      warranty: "30-day return policy"
    },
    {
      id: 10,
      title: "1984",
      author: "George Orwell",
      genre: "Fiction",
      image: "books/1984.jpeg",
      rating: 4.8,
      reviews: 11230,
      originalPrice: 449,
      salePrice: 337,
      discount: 25,
      pages: 328,
      publisher: "Penguin Classics",
      language: "English",
      features: ["Literary Classic", "Dystopian Fiction", "Political Commentary", "Timeless Relevance"],
      description: "A dystopian social science fiction novel exploring themes of totalitarianism and mass surveillance.",
      highlights: ["Political prophecy", "Social commentary", "Thought control", "Individual freedom"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1949,
      warranty: "30-day return policy"
    },
    {
      id: 11,
      title: "The Lean Startup",
      author: "Eric Ries",
      genre: "Business",
      image: "books/The Lean Startup.jpeg",
      rating: 4.4,
      reviews: 3450,
      originalPrice: 799,
      salePrice: 599,
      discount: 25,
      pages: 336,
      publisher: "Crown Business",
      language: "English",
      features: ["Startup Guide", "Innovation Method", "Business Strategy", "Entrepreneurship"],
      description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
      highlights: ["Build-measure-learn", "Validated learning", "Innovation accounting", "Pivot strategies"],
      format: "Paperback",
      inStock: true,
      fastDelivery: false,
      publication_year: 2011,
      warranty: "30-day return policy"
    },
    {
      id: 12,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      image: "books/To Kill a Mockingbird.jpeg",
      rating: 4.7,
      reviews: 8920,
      originalPrice: 399,
      salePrice: 299,
      discount: 25,
      pages: 376,
      publisher: "Grand Central Publishing",
      language: "English",
      features: ["Pulitzer Prize Winner", "American Classic", "Social Justice", "Coming of Age"],
      description: "A gripping tale of racial injustice and childhood innocence in the American South.",
      highlights: ["Moral courage", "Social inequality", "Childhood perspective", "Timeless themes"],
      format: "Paperback",
      inStock: true,
      fastDelivery: true,
      publication_year: 1960,
      warranty: "30-day return policy"
    }
  ];

  // Format price consistently
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const BookCard = ({ book }) => {
    const discountAmount = book.originalPrice - book.salePrice;
    
    return (
      <div className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 mb-4">
        <div className="flex p-4">
          {/* Left Side - Book Cover */}
          <div className="w-64 flex-shrink-0">
            <div className="relative h-64 flex items-center justify-center">
              <img 
                src={book.image} 
                alt={book.title}
                className="w-full h-auto max-h-64 object-contain rounded-lg"
                loading="lazy"
              />
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Heart className="w-4 h-4 text-gray-600" />
              </button>
              {book.fastDelivery && (
                <div className="absolute bottom-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Fast Delivery
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Book Details */}
          <div className="flex-1 ml-6 space-y-3">
            {/* Book Title and Author */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">by {book.author} • {book.genre}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                <span className="font-medium">{book.rating}</span>
                <Star className="w-3 h-3 ml-1 fill-current" />
              </div>
              <span className="text-sm text-gray-600">({book.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Features */}
            <div className="space-y-1">
              {book.features.map((feature, index) => (
                <div key={index} className="text-sm text-gray-700 flex items-center">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {book.description}
            </p>

            {/* Book Details */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <BookOpen className="w-3 h-3 mr-1 text-blue-600" />
                  {book.pages} pages
                </div>
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1 text-green-600" />
                  {book.publisher}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1 text-purple-600" />
                  {book.publication_year}
                </div>
                <div>
                  Language: {book.language}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Key Highlights:</h4>
              <div className="grid grid-cols-2 gap-1">
                {book.highlights.map((highlight, index) => (
                  <div key={index} className="text-xs text-gray-600 flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            {/* Return Policy */}
            <div className="flex items-center text-sm text-gray-600">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              {book.warranty}
            </div>
          </div>

          {/* Right Side - Price and Actions */}
          <div className="w-80 flex-shrink-0 ml-6 space-y-4">
            {/* Price Section */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{formatPrice(book.salePrice)}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ₹{formatPrice(book.originalPrice)}
                </span>
                <span className="text-green-600 font-medium">
                  {book.discount}% off
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
                  {book.fastDelivery ? 'Free delivery by tomorrow' : 'Free delivery in 3-5 days'}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="w-4 h-4 mr-2 text-green-600" />
                <span className="text-gray-700">Shop verse Assured</span>
              </div>
            </div>

            {/* Stock Status */}
            <div className={`text-sm font-medium ${book.inStock ? 'text-green-600' : 'text-red-600'}`}>
              {book.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                disabled={!book.inStock}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 ${
                  book.inStock 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>ADD TO CART</span>
              </button>
              
              <button 
                disabled={!book.inStock}
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  book.inStock 
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
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Books & Literature Collection</h1>
        
        {/* Featured Books Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {booksData.slice(0, 4).map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-64 flex items-center justify-center">
                  <img 
                    src={book.image} 
                    alt={book.title}
                    className="w-full h-auto max-h-64 object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{book.title}</h3>
                  <p className="text-gray-700 mb-2">by {book.author}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-600 font-bold">₹{formatPrice(book.salePrice)}</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Books List */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">All Books</h2>
          <div className="space-y-4">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;