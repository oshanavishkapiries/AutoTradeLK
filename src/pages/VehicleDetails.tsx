import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Gauge,
  Fuel,
  MapPin,
  Phone,
  Mail,
  Heart,
  Share2,
  Flag,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  BarChart3,
} from "lucide-react";

const VehicleDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const vehicle = {
    id: 1,
    images: [
      "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=800",
    ],
    title: "Toyota Aqua 2017",
    price: "Rs. 3,850,000",
    location: "Colombo",
    year: "2017",
    mileage: "45,000 km",
    fuel: "Hybrid",
    transmission: "Automatic",
    condition: "Used",
    engineCapacity: "1500 CC",
    color: "Pearl White",
    description: `Excellent condition Toyota Aqua 2017 for sale. This vehicle has been well maintained with full service records. 
    Features include automatic transmission, hybrid engine for excellent fuel economy, air conditioning, power steering, 
    electric windows, and more. Perfect for city driving and long trips. Serious buyers only. Price is slightly negotiable.`,
    features: [
      "Air Conditioning",
      "Power Steering",
      "Electric Windows",
      "Central Locking",
      "ABS Brakes",
      "Airbags",
      "Alloy Wheels",
      "GPS Navigation",
    ],
    seller: {
      name: "Kasun Silva",
      phone: "+94 77 123 4567",
      email: "kasun@example.com",
      rating: 4.8,
      totalReviews: 23,
      joinedDate: "Member since 2020",
      profileImage:
        "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={vehicle.title}
                  className="w-full h-96 object-cover"
                />

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {vehicle.images.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? "border-primary-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {vehicle.title}
                  </h1>
                  <p className="text-3xl font-bold text-primary-600">
                    {vehicle.price}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsSaved(!isSaved)}
                    className={`p-2 rounded-lg border transition-colors ${
                      isSaved
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isSaved ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-2 rounded-lg border border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg border border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors">
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Calendar className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Year</p>
                  <p className="font-semibold text-gray-900">{vehicle.year}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Gauge className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Mileage</p>
                  <p className="font-semibold text-gray-900">
                    {vehicle.mileage}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Fuel className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Fuel</p>
                  <p className="font-semibold text-gray-900">{vehicle.fuel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold text-gray-900">
                    {vehicle.location}
                  </p>
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
                <div>
                  <span className="text-gray-600">Transmission:</span>
                  <span className="ml-2 font-medium">
                    {vehicle.transmission}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Condition:</span>
                  <span className="ml-2 font-medium">{vehicle.condition}</span>
                </div>
                <div>
                  <span className="text-gray-600">Engine:</span>
                  <span className="ml-2 font-medium">
                    {vehicle.engineCapacity}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="ml-2 font-medium">{vehicle.color}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Seller Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Seller Information
              </h3>

              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={vehicle.seller.profileImage}
                  alt={vehicle.seller.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {vehicle.seller.name}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">
                      {vehicle.seller.rating} ({vehicle.seller.totalReviews}{" "}
                      reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                {vehicle.seller.joinedDate}
              </p>

              <div className="space-y-3">
                <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Call {vehicle.seller.phone}</span>
                </button>

                <Link
                  to="/vehicle-comparison"
                  className="w-full bg-accent-500 text-white py-3 px-4 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Compare Vehicles</span>
                </Link>

                <button className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>View Seller Profile</span>
                </button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Safety Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Meet in a public place</li>
                <li>• Inspect the vehicle thoroughly</li>
                <li>• Verify ownership documents</li>
                <li>• Take a test drive</li>
                <li>• Get a mechanic's inspection</li>
                <li>• Never pay in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
