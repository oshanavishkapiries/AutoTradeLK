import { useState } from 'react';
import { Car, Heart, User, CreditCard, LogOut, Plus, Edit, Trash2, Eye, Calendar, MapPin } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('listings');

  const myListings = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Toyota Aqua 2017',
      price: 'Rs. 3,850,000',
      status: 'Active',
      views: 245,
      inquiries: 12,
      postedDate: '2025-01-10'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1719649/pexels-photo-1719649.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Nissan Leaf 2018',
      price: 'Rs. 4,100,000',
      status: 'Pending',
      views: 89,
      inquiries: 5,
      postedDate: '2025-01-08'
    }
  ];

  const savedVehicles = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Honda Civic 2019',
      price: 'Rs. 7,250,000',
      location: 'Kandy',
      savedDate: '2025-01-12'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=300',
      title: 'Suzuki Alto 2020',
      price: 'Rs. 2,950,000',
      location: 'Galle',
      savedDate: '2025-01-11'
    }
  ];

  const sidebarItems = [
    { id: 'listings', name: 'My Listings', icon: Car },
    { id: 'saved', name: 'Saved Vehicles', icon: Heart },
    { id: 'profile', name: 'My Profile', icon: User },
    { id: 'payments', name: 'Payment History', icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Dashboard</h1>
          <p className="text-gray-600">Manage your vehicle listings and account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-6 pb-6 border-b">
                <div className="h-12 w-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">John Perera</h3>
                  <p className="text-sm text-gray-600">john@example.com</p>
                </div>
              </div>

              <nav className="space-y-2">
                {sidebarItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
                
                <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-red-600 hover:bg-red-50 transition-colors mt-6">
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'listings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-gray-900">My Listings</h2>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add New Listing</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myListings.map((listing) => (
                    <div key={listing.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-900">{listing.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            listing.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {listing.status}
                          </span>
                        </div>
                        <p className="text-lg font-bold text-primary-600 mb-3">{listing.price}</p>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{listing.views} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{listing.inquiries} inquiries</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <button className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                            <Edit className="h-4 w-4" />
                            <span>Edit</span>
                          </button>
                          <button className="flex-1 bg-red-100 text-red-700 px-3 py-2 rounded text-sm hover:bg-red-200 transition-colors flex items-center justify-center space-x-1">
                            <Trash2 className="h-4 w-4" />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Saved Vehicles</h2>
                
                <div className="space-y-4">
                  {savedVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="flex">
                        <img
                          src={vehicle.image}
                          alt={vehicle.title}
                          className="w-32 h-32 object-cover"
                        />
                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-gray-900 mb-1">{vehicle.title}</h3>
                              <p className="text-lg font-bold text-primary-600 mb-2">{vehicle.price}</p>
                              <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span>{vehicle.location}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500 mb-2">Saved on {vehicle.savedDate}</p>
                              <button className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700 transition-colors">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">My Profile</h2>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Perera"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="john@example.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+94 77 123 4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option>Colombo</option>
                          <option>Kandy</option>
                          <option>Galle</option>
                          <option>Jaffna</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about yourself..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      Save Changes
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeTab === 'payments' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Payment History</h2>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
                  </div>
                  <div className="p-6">
                    <div className="text-center py-12">
                      <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">No payment history yet</p>
                      <p className="text-sm text-gray-400">
                        Your transaction history will appear here once you make payments for premium features or services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;