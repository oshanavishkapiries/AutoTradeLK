import { useState } from "react";
import {
  Plus,
  X,
  Search,
  Star,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface Vehicle {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
  year: string;
  mileage: string;
  fuel: string;
  transmission: string;
  rating: number;
  totalReviews: number;
  features: string[];
  specifications: { [key: string]: string };
  pros: string[];
  cons: string[];
}

const VehicleComparison = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
  const [showVehicleSelector, setShowVehicleSelector] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "basic",
    "specifications",
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const availableVehicles: Vehicle[] = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Toyota Aqua 2017",
      price: "Rs. 3,850,000",
      location: "Colombo",
      year: "2017",
      mileage: "45,000 km",
      fuel: "Hybrid",
      transmission: "Automatic",
      rating: 4.8,
      totalReviews: 23,
      features: [
        "Air Conditioning",
        "Power Steering",
        "Electric Windows",
        "Central Locking",
        "ABS Brakes",
        "Airbags",
      ],
      specifications: {
        "Engine Type": "Hybrid",
        "Power Output": "74 HP",
        "Fuel Economy": "25 km/l",
        "Seating Capacity": "5",
        "Boot Space": "360 L",
      },
      pros: [
        "Excellent fuel economy",
        "Low maintenance cost",
        "Reliable brand",
      ],
      cons: ["Limited boot space", "Hybrid battery replacement cost"],
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Honda Civic 2019",
      price: "Rs. 7,250,000",
      location: "Kandy",
      year: "2019",
      mileage: "32,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      rating: 4.6,
      totalReviews: 18,
      features: [
        "Air Conditioning",
        "Power Steering",
        "Electric Windows",
        "Central Locking",
        "ABS Brakes",
        "Airbags",
        "Bluetooth",
      ],
      specifications: {
        "Engine Type": "Petrol",
        "Power Output": "141 HP",
        "Fuel Economy": "15 km/l",
        "Seating Capacity": "5",
        "Boot Space": "428 L",
      },
      pros: ["Sporty design", "Good performance", "Spacious interior"],
      cons: ["Higher fuel consumption", "Expensive maintenance"],
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Suzuki Alto 2020",
      price: "Rs. 2,950,000",
      location: "Galle",
      year: "2020",
      mileage: "28,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      rating: 4.4,
      totalReviews: 31,
      features: [
        "Air Conditioning",
        "Power Steering",
        "Electric Windows",
        "Central Locking",
        "ABS Brakes",
        "Airbags",
      ],
      specifications: {
        "Engine Type": "Petrol",
        "Power Output": "47 HP",
        "Fuel Economy": "20 km/l",
        "Seating Capacity": "5",
        "Boot Space": "177 L",
      },
      pros: ["Affordable price", "Good fuel economy", "Easy to park"],
      cons: ["Small size", "Limited features", "Low power output"],
    },
  ];

  const addVehicle = (vehicle: Vehicle) => {
    if (
      selectedVehicles.length < 4 &&
      !selectedVehicles.find((v) => v.id === vehicle.id)
    ) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  const removeVehicle = (vehicleId: number) => {
    setSelectedVehicles(selectedVehicles.filter((v) => v.id !== vehicleId));
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const filteredVehicles = availableVehicles.filter(
    (vehicle) =>
      vehicle.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.fuel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Vehicle Comparison
          </h1>
          <p className="text-gray-600">
            Compare up to 4 vehicles side by side to make the best decision
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Selected Vehicles ({selectedVehicles.length}/4)
            </h2>
            <button
              onClick={() => setShowVehicleSelector(!showVehicleSelector)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Vehicle</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-gray-50 rounded-lg p-4 relative"
              >
                <button
                  onClick={() => removeVehicle(vehicle.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {vehicle.title}
                </h3>
                <p className="text-primary-600 font-bold text-sm">
                  {vehicle.price}
                </p>
                <div className="flex items-center mt-2">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-600 ml-1">
                    {vehicle.rating}
                  </span>
                  <span className="text-xs text-gray-500 ml-1">
                    ({vehicle.totalReviews})
                  </span>
                </div>
              </div>
            ))}

            {Array.from({ length: 4 - selectedVehicles.length }).map(
              (_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300 flex items-center justify-center min-h-[200px]"
                >
                  <div className="text-center text-gray-500">
                    <Plus className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Add Vehicle</p>
                  </div>
                </div>
              )
            )}
          </div>

          {showVehicleSelector && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Select Vehicles to Compare
                </h3>
                <button
                  onClick={() => setShowVehicleSelector(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                {filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all ${
                      selectedVehicles.find((v) => v.id === vehicle.id)
                        ? "border-primary-600 bg-primary-50"
                        : "border-gray-200 hover:border-primary-300"
                    }`}
                    onClick={() => addVehicle(vehicle)}
                  >
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-[200px] object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {vehicle.title}
                    </h4>
                    <p className="text-primary-600 font-bold text-sm mb-2">
                      {vehicle.price}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{vehicle.year}</span>
                      <span>{vehicle.mileage}</span>
                      <span>{vehicle.fuel}</span>
                    </div>
                    {selectedVehicles.find((v) => v.id === vehicle.id) && (
                      <div className="mt-2 flex items-center text-primary-600 text-sm">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span>Selected</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedVehicles.length > 0 ? (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("basic")}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Basic Information
                </h3>
                {expandedSections.includes("basic") ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedSections.includes("basic") && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedVehicles.map((vehicle) => (
                      <div key={vehicle.id} className="text-center">
                        <img
                          src={vehicle.image}
                          alt={vehicle.title}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {vehicle.title}
                        </h4>
                        <p className="text-2xl font-bold text-primary-600 mb-3">
                          {vehicle.price}
                        </p>

                        <div className="space-y-2 text-sm">
                          <div className="flex items-center justify-center space-x-2">
                            <MapPin className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">
                              {vehicle.location}
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">
                              {vehicle.year}
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Gauge className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">
                              {vehicle.mileage}
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Fuel className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">
                              {vehicle.fuel}
                            </span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Settings className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">
                              {vehicle.transmission}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">
                            {vehicle.rating}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({vehicle.totalReviews})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("specifications")}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Specifications
                </h3>
                {expandedSections.includes("specifications") ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedSections.includes("specifications") && (
                <div className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {Object.keys(
                          selectedVehicles[0]?.specifications || {}
                        ).map((spec) => (
                          <tr key={spec} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50">
                              {spec}
                            </td>
                            {selectedVehicles.map((vehicle) => (
                              <td
                                key={vehicle.id}
                                className="py-3 px-4 text-center"
                              >
                                {vehicle.specifications[spec] || "N/A"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("features")}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Features
                </h3>
                {expandedSections.includes("features") ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedSections.includes("features") && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedVehicles.map((vehicle) => (
                      <div key={vehicle.id}>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {vehicle.title}
                        </h4>
                        <div className="space-y-2">
                          {vehicle.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-b border-gray-200">
              <button
                onClick={() => toggleSection("pros-cons")}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Pros & Cons
                </h3>
                {expandedSections.includes("pros-cons") ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {expandedSections.includes("pros-cons") && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedVehicles.map((vehicle) => (
                      <div key={vehicle.id}>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {vehicle.title}
                        </h4>

                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-green-700 mb-2 flex items-center">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Pros
                          </h5>
                          <ul className="space-y-1">
                            {vehicle.pros.map((pro, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-700 flex items-start"
                              >
                                <span className="text-green-500 mr-2">•</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-red-700 mb-2 flex items-center">
                            <XCircle className="h-4 w-4 mr-1" />
                            Cons
                          </h5>
                          <ul className="space-y-1">
                            {vehicle.cons.map((con, index) => (
                              <li
                                key={index}
                                className="text-sm text-gray-700 flex items-start"
                              >
                                <span className="text-red-500 mr-2">•</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Start Comparing Vehicles
              </h3>
              <p className="text-gray-600 mb-6">
                Add up to 4 vehicles to compare their specifications, features,
                and more.
              </p>
              <button
                onClick={() => setShowVehicleSelector(true)}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2 mx-auto"
              >
                <Plus className="h-5 w-5" />
                <span>Add Your First Vehicle</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleComparison;
