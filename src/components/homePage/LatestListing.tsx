import React from 'react'
import { MapPin , ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

type LatestListingProps = {
  latestListings: {
    id: number;
    image: string;
    title: string;
    price: string;
    location: string;
    year: string;
    mileage: string;
  }[];
};

const LatestListing: React.FC<LatestListingProps> = ({ latestListings }) => {
    return (
        <div>
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
        </div>
    )
}

export default LatestListing