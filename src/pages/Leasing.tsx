import React from 'react';
import { MapPin, Phone, Mail, Star, Building, Users, Calendar } from 'lucide-react';

const Leasing = () => {
  const leasingCompanies = [
    {
      id: 1,
      name: 'Lanka Leasing Company',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Colombo',
      rating: 4.8,
      totalReviews: 156,
      phone: '+94 11 234 5678',
      email: 'info@lankaleasing.lk',
      description: 'Leading vehicle leasing company in Sri Lanka with over 20 years of experience.',
      specialties: ['Cars', 'Vans', 'Commercial Vehicles'],
      established: '2003',
      totalVehicles: '2,500+'
    },
    {
      id: 2,
      name: 'Central Finance Leasing',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Kandy',
      rating: 4.6,
      totalReviews: 89,
      phone: '+94 81 234 5678',
      email: 'leasing@centralfinance.lk',
      description: 'Trusted leasing partner for individuals and businesses across central province.',
      specialties: ['Cars', 'Motorcycles', 'Three Wheelers'],
      established: '2008',
      totalVehicles: '1,200+'
    },
    {
      id: 3,
      name: 'Southern Auto Lease',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Galle',
      rating: 4.7,
      totalReviews: 124,
      phone: '+94 91 234 5678',
      email: 'contact@southernlease.lk',
      description: 'Flexible leasing solutions with competitive rates and excellent customer service.',
      specialties: ['Cars', 'Vans', 'Trucks'],
      established: '2010',
      totalVehicles: '800+'
    },
    {
      id: 4,
      name: 'Metro Vehicle Leasing',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
      location: 'Negombo',
      rating: 4.5,
      totalReviews: 67,
      phone: '+94 31 234 5678',
      email: 'info@metrolease.lk',
      description: 'Modern leasing solutions with digital processes and quick approvals.',
      specialties: ['Cars', 'Electric Vehicles', 'Luxury Cars'],
      established: '2015',
      totalVehicles: '600+'
    }
  ];

  const benefits = [
    {
      title: 'No Large Down Payment',
      description: 'Start driving with minimal upfront costs'
    },
    {
      title: 'Fixed Monthly Payments',
      description: 'Predictable budgeting with fixed installments'
    },
    {
      title: 'Maintenance Included',
      description: 'Many packages include maintenance and insurance'
    },
    {
      title: 'Upgrade Options',
      description: 'Easily upgrade to newer models'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vehicle Leasing Companies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with trusted leasing companies across Sri Lanka. Find flexible financing options 
            for your next vehicle with competitive rates and excellent service.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Vehicle Leasing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>All Locations</option>
                <option>Colombo</option>
                <option>Kandy</option>
                <option>Galle</option>
                <option>Negombo</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>All Types</option>
                <option>Cars</option>
                <option>Vans</option>
                <option>Motorcycles</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {leasingCompanies.map((company) => (
            <div key={company.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{company.name}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {company.rating} ({company.totalReviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{company.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{company.description}</p>

                {/* Company Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="h-4 w-4 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">Established</p>
                    <p className="font-semibold text-gray-900">{company.established}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Building className="h-4 w-4 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">Fleet Size</p>
                    <p className="font-semibold text-gray-900">{company.totalVehicles}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">Reviews</p>
                    <p className="font-semibold text-gray-900">{company.totalReviews}</p>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Specializes in:</p>
                  <div className="flex flex-wrap gap-2">
                    {company.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-center justify-center space-x-2 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">Call Now</span>
                    </a>
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">Send Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-600 text-white rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Your Vehicle?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Contact any of our trusted leasing partners to discuss your requirements and get the best deal for your next vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Compare Rates
            </button>
            <button className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Apply for Leasing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leasing;