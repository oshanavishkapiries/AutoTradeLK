<<<<<<< Updated upstream
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Car, Bike, Truck, Shield, Users, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';
=======
import { Car, Bike, Truck, Shield, Users, MapPin, Star } from 'lucide-react';
import PopularCategories from '../components/homePage/PopularCategories';
import SearchBar from '../components/homePage/SearchBar';
import LatestListing from '../components/homePage/LatestListing';
import AutoTradeLK from '../components/homePage/AutoTradeLK';
import CallToAction from '../components/homePage/CallToAction';
>>>>>>> Stashed changes

const Home = () => {
  const categories = [
    { name: 'Cars', icon: Car, count: '1,245', color: 'bg-blue-500' },
    { name: 'Motorcycles', icon: Bike, count: '856', color: 'bg-green-500' },
    { name: 'Vans', icon: Truck, count: '432', color: 'bg-purple-500' },
    { name: 'Three Wheelers', icon: Car, count: '298', color: 'bg-orange-500' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All listings are verified and sellers are authenticated for your security.'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: 'Join thousands of satisfied buyers and sellers across Sri Lanka.'
    },
    {
      icon: MapPin,
      title: 'Islandwide Coverage',
      description: 'Find vehicles from Colombo to Jaffna, covering all provinces.'
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Get expert support and premium features for successful transactions.'
    }
  ];

  const latestListings = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Toyota Aqua 2017',
      price: 'Rs. 3,850,000',
      location: 'Colombo',
      year: '2017',
      mileage: '45,000 km'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Honda Civic 2019',
      price: 'Rs. 7,250,000',
      location: 'Kandy',
      year: '2019',
      mileage: '32,000 km'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Suzuki Alto 2020',
      price: 'Rs. 2,950,000',
      location: 'Galle',
      year: '2020',
      mileage: '28,000 km'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1719649/pexels-photo-1719649.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Nissan Leaf 2018',
      price: 'Rs. 4,100,000',
      location: 'Negombo',
      year: '2018',
      mileage: '52,000 km'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Buy, Sell & Lease Vehicles<br />
              <span className="text-accent-300">Across Sri Lanka</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Join Sri Lanka's most trusted automotive marketplace. Find your perfect vehicle or sell with confidence.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <input
                    type="text"
                    placeholder="Search vehicles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900">
                    <option>All Categories</option>
                    <option>Cars</option>
                    <option>Motorcycles</option>
                    <option>Vans</option>
                    <option>Three Wheelers</option>
                  </select>
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900">
                    <option>All Locations</option>
                    <option>Colombo</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                    <option>Jaffna</option>
                    <option>Negombo</option>
                  </select>
                </div>
                <div>
                  <Link
                    to="/browse"
                    className="w-full bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600">Explore vehicles by category</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/browse"
                className="group bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Listings</h2>
              <p className="text-xl text-gray-600">Fresh vehicles added daily</p>
            </div>
            <Link
              to="/browse"
              className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <span>View All</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestListings.map((listing, index) => (
              <Link
                key={listing.id}
                to={`/vehicle/${listing.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-2xl font-bold text-primary-600 mb-3">{listing.price}</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{listing.year}</span>
                    <span>{listing.mileage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{listing.location}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link
              to="/browse"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <span>View All Listings</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why AutoTradeLK */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AutoTradeLK?</h2>
            <p className="text-xl text-gray-600">Your trusted partner in automotive transactions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="h-10 w-10 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Next Vehicle?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect vehicle through AutoTradeLK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/browse"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Search className="h-5 w-5" />
              <span>Browse Vehicles</span>
            </Link>
            <Link
              to="/post-ad"
              className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Sell Your Vehicle</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;