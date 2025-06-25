import React, { useMemo, useState } from 'react';
import SideBar from '../components/browsePage/SideBar';
import VehiclesCard from '../components/browsePage/VehiclesCard';
import { Search } from '../components/browsePage/Search';
import Pagination from '../components/browsePage/Pagination';
import { useBrowseStore } from '../store/browseStore';

const Browse = () => {
  
  const { viewMode } = useBrowseStore();
  const { showFilters } = useBrowseStore()
  const [sortOption, setSortOption] = useState('latest');

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

  const sortVehicles = useMemo(() => {
    let sorted = [...vehicles];

    switch (sortOption) {
      case 'priceLowHigh':
        sorted.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        break;
      case 'priceHighLow':
        sorted.sort((a, b) => parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')));
        break;
      case 'yearNewest':
        sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case 'mileageLowHigh':
        sorted.sort((a, b) => parseInt(a.mileage.replace(/[^0-9]/g, '')) - parseInt(b.mileage.replace(/[^0-9]/g, '')));
        break;
      default:
        break; 
    }

    return sorted;
  }, [sortOption, vehicles]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const brands = ['Toyota', 'Honda', 'Nissan', 'Suzuki', 'BMW', 'Mercedes', 'Audi', 'Hyundai'];
  const locations = ['Colombo', 'Kandy', 'Galle', 'Jaffna', 'Negombo', 'Kurunegala', 'Anuradhapura'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Vehicles</h1>
          <p className="text-gray-600">Find your perfect vehicle from our extensive collection</p>
        </div>

        {/* Search and Filters */}
        <Search />

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Filters Sidebar */}
          <SideBar
            brands={brands}
            locations={locations}
            showFilters={showFilters}
          />

          {/* Results */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{sortVehicles.length} vehicles found</p>
              <select
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="latest">Sort by: Latest</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="yearNewest">Year: Newest First</option>
                <option value="mileageLowHigh">Mileage: Low to High</option>
              </select>
            </div>

            {/* Vehicle Grid/List */}
            <VehiclesCard
              viewMode={viewMode}
              vehicles={sortVehicles}
            />

            {/* Pagination */}
            <Pagination />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Browse;