import React from 'react'
import { LucideIcon } from 'lucide-react';
import { Link } from '@tanstack/react-router';

type Category = {
  name: string;
  icon: LucideIcon;
  count: string;
  color: string;
};

interface PopularCategoriesProps {
  categories: Category[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ categories }) => {
    return (
        <div>
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
        </div>
    )
}

export default PopularCategories