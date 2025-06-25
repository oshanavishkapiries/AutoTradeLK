import React from 'react'
import { Search } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const SearchBar = () => {
    return (
        <div>
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
    )
}

export default SearchBar