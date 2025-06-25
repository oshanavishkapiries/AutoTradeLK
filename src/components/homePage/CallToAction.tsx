import React from 'react'
import { Search, CheckCircle } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const CallToAction = () => {
    return (
        <div>
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
    )
}

export default CallToAction