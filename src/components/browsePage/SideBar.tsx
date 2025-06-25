import React from 'react'

interface SideBarProps {
    brands: string[];
    locations: string[];
    showFilters?: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ brands , locations , showFilters }) => {
    return (
        <div>
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
        </div>
    )
}

export default SideBar