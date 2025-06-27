import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'Complete Guide to Buying Your First Car in Sri Lanka',
    excerpt: 'Everything you need to know about purchasing your first vehicle, from budgeting to paperwork and insurance.',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Samantha Fernando',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Buying Guide'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Top 10 Most Fuel Efficient Cars in Sri Lanka 2025',
      excerpt: 'With rising fuel costs, discover the most economical vehicles available in the Sri Lankan market.',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Rohan Silva',
      date: '2025-01-12',
      readTime: '6 min read',
      category: 'Reviews'
    },
    {
      id: 3,
      title: 'Electric Vehicles: The Future of Transportation in Sri Lanka',
      excerpt: 'Exploring the growing electric vehicle market and what it means for Sri Lankan consumers.',
      image: 'https://images.pexels.com/photos/1719649/pexels-photo-1719649.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Priya Jayawardena',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      id: 4,
      title: 'How to Sell Your Vehicle Quickly and at the Best Price',
      excerpt: 'Expert tips on preparing your vehicle for sale and maximizing its market value.',
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Kasun Perera',
      date: '2025-01-08',
      readTime: '5 min read',
      category: 'Selling Tips'
    },
    {
      id: 5,
      title: 'Understanding Vehicle Leasing vs Buying in Sri Lanka',
      excerpt: 'A comprehensive comparison to help you decide between leasing and purchasing your next vehicle.',
      image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Nimal Rajapaksa',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Finance'
    },
    {
      id: 6,
      title: 'Motorcycle Safety Tips for Sri Lankan Roads',
      excerpt: 'Essential safety guidelines and best practices for motorcycle riders in Sri Lanka.',
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Chaminda Wickramasinghe',
      date: '2025-01-03',
      readTime: '4 min read',
      category: 'Safety'
    },
    {
      id: 7,
      title: 'Vehicle Maintenance Schedule: Keep Your Car Running Smoothly',
      excerpt: 'A detailed maintenance checklist to ensure your vehicle stays in optimal condition.',
      image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Dilshan Fernando',
      date: '2025-01-01',
      readTime: '6 min read',
      category: 'Maintenance'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 25 },
    { name: 'Buying Guide', count: 8 },
    { name: 'Selling Tips', count: 6 },
    { name: 'Reviews', count: 5 },
    { name: 'Technology', count: 3 },
    { name: 'Finance', count: 2 },
    { name: 'Safety', count: 1 }
  ];

  const popularPosts = [
    'Complete Guide to Buying Your First Car',
    'Top 10 Most Fuel Efficient Cars 2025',
    'How to Negotiate Vehicle Prices',
    'Understanding Vehicle Insurance',
    'Electric Vehicles in Sri Lanka'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AutoTradeLK Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest automotive news, buying guides, and expert tips 
            for the Sri Lankan vehicle market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1">
                        <span>Read</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50">
                  Previous
                </button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Next</button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Tag className="h-5 w-5 mr-2 text-primary-600" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <button className="w-full flex justify-between items-center py-2 px-3 text-left hover:bg-gray-50 rounded transition-colors">
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Posts</h3>
              <ul className="space-y-3">
                {popularPosts.map((post, index) => (
                  <li key={index}>
                    <button className="text-left hover:text-primary-600 transition-colors text-sm text-gray-700 leading-relaxed">
                      {post}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-primary-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Stay Updated</h3>
              <p className="text-sm text-gray-700 mb-4">
                Subscribe to our newsletter for the latest automotive news and tips.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;