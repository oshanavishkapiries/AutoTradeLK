import React, { useState } from 'react';
import { Search, Filter, Grid, List, MapPin, Calendar, Gauge, Fuel } from 'lucide-react';

const Browse = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const vehicles = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Toyota Aqua 2017',
      price: 'Rs. 3,850,000',
      location: 'Colombo',
      year: '2017',
      mileage: '45,000 km',
      fuel: 'Hybrid',
      transmission: 'Auto',
      condition: 'Used',
      description: 'Excellent condition, well maintained vehicle with full service records.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Honda Civic 2019',
      price: 'Rs. 7,250,000',
      location: 'Kandy',
      year: '2019',
      mileage: '32,000 km',
      fuel: 'Petrol',
      transmission: 'Manual',
      condition: 'Used',
      description: 'Sporty and reliable. Perfect for city driving and long trips.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Suzuki Alto 2020',
      price: 'Rs. 2,950,000',
      location: 'Galle',
      year: '2020',
      mileage: '28,000 km',
      fuel: 'Petrol',
      transmission: 'Auto',
      condition: 'Used',
      description: 'Economic and fuel efficient. Ideal for first-time buyers.'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1719649/pexels-photo-1719649.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Nissan Leaf 2018',
      price: 'Rs. 4,100,000',
      location: 'Negombo',
      year: '2018',
      mileage: '52,000 km',
      fuel: 'Electric',
      transmission: 'Auto',
      condition: 'Used',
      description: 'Eco-friendly electric vehicle with modern features.'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'BMW 320i 2020',
      price: 'Rs. 12,500,000',
      location: 'Colombo',
      year: '2020',
      mileage: '15,000 km',
      fuel: 'Petrol',
      transmission: 'Auto',
      condition: 'Used',
      description: 'Luxury sedan with premium features and excellent performance.'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Toyota Hiace 2019',
      price: 'Rs. 8,750,000',
      location: 'Kurunegala',
      year: '2019',
      mileage: '75,000 km',
      fuel: 'Diesel',
      transmission: 'Manual',
      condition: 'Used',
      description: 'Spacious van perfect for commercial or family use.'
    }
  ];

  const brands = ['Toyota', 'Honda', 'Nissan', 'Suzuki', 'BMW', 'Mercedes', 'Audi', 'Hyundai'];
  const locations = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Kurunegala', 'Anuradhapura'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Vehicles</h1>
          <p className="text-gray-600">Find your perfect vehicle from our extensive collection</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by make, model, or keywords..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min Price"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <input
                    type="number"
                    placeholder="Max Price"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Cars</option>
                  <option>Motorcycles</option>
                  <option>Vans</option>
                  <option>Three Wheelers</option>
                </select>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Brands</option>
                  {brands.map(brand => (
                    <option key={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Year Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Year Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>From Year</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>To Year</option>
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
              </div>

              {/* Fuel Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Fuel Types</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  <option>All Locations</option>
                  {locations.map(location => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>

              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{vehicles.length} vehicles found</p>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Sort by: Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Year: Newest First</option>
                <option>Mileage: Low to High</option>
              </select>
            </div>

            {/* Vehicle Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.title}</h3>
                      <p className="text-2xl font-bold text-primary-600 mb-3">{vehicle.price}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{vehicle.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Gauge className="h-4 w-4" />
                          <span>{vehicle.mileage}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Fuel className="h-4 w-4" />
                          <span>{vehicle.fuel}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{vehicle.location}</span>
                        </div>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      <img
                        src={vehicle.image}
                        alt={vehicle.title}
                        className="w-full md:w-64 h-48 md:h-auto object-cover"
                      />
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.title}</h3>
                            <p className="text-2xl font-bold text-primary-600">{vehicle.price}</p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                            {vehicle.condition}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{vehicle.description}</p>
                        
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{vehicle.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Gauge className="h-4 w-4" />
                            <span>{vehicle.mileage}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Fuel className="h-4 w-4" />
                            <span>{vehicle.fuel}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{vehicle.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">Transmission: {vehicle.transmission}</span>
                          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Previous</button>
                <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;