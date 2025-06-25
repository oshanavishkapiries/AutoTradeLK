import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Car, Bike, Truck, Shield, Users, MapPin, Star, ArrowRight, CheckCircle } from 'lucide-react';

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
            <SearchBar />

          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <PopularCategories categories={categories}/>

      {/* Latest Listings */}
      <LatestListing latestListings={latestListings}/>

      {/* Why AutoTradeLK */}
      <AutoTradeLK features={features}/>

      {/* Call to Action */}
      <CallToAction />

    </div>
  );
};

export default Home;