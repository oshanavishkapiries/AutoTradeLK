import React, { useState, useEffect } from "react";
import {
  Clock,
  Gavel,
  Users,
  Eye,
  Heart,
  Share2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  XCircle,
  BarChart3,
  DollarSign,
  Timer,
} from "lucide-react";

interface Auction {
  id: number;
  title: string;
  image: string;
  currentBid: number;
  startingBid: number;
  reservePrice: number;
  endTime: Date;
  bids: number;
  watchers: number;
  status: "live" | "ending" | "ended" | "upcoming";
  vehicle: {
    year: string;
    mileage: string;
    fuel: string;
    transmission: string;
    location: string;
    condition: string;
    description: string;
    features: string[];
  };
  seller: {
    name: string;
    rating: number;
    totalSales: number;
    verified: boolean;
  };
  bidHistory: {
    id: number;
    bidder: string;
    amount: number;
    time: Date;
  }[];
}

const VehicleAuction = () => {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [selectedAuction, setSelectedAuction] = useState<Auction | null>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [showBidModal, setShowBidModal] = useState(false);
  const [filter, setFilter] = useState<
    "all" | "live" | "ending" | "upcoming" | "ended"
  >("all");
  const [sortBy, setSortBy] = useState<
    "ending" | "price" | "bids" | "watchers"
  >("ending");

  // Dummy auction data
  const dummyAuctions: Auction[] = [
    {
      id: 1,
      title: "Toyota Aqua 2017 - Hybrid",
      image:
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
      currentBid: 3200000,
      startingBid: 2800000,
      reservePrice: 3500000,
      endTime: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      bids: 12,
      watchers: 45,
      status: "live",
      vehicle: {
        year: "2017",
        mileage: "45,000 km",
        fuel: "Hybrid",
        transmission: "Automatic",
        location: "Colombo",
        condition: "Excellent",
        description:
          "Well-maintained Toyota Aqua with full service history. Excellent fuel economy and perfect for city driving.",
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
      },
      seller: {
        name: "Premium Motors",
        rating: 4.8,
        totalSales: 156,
        verified: true,
      },
      bidHistory: [
        {
          id: 1,
          bidder: "Bidder001",
          amount: 3200000,
          time: new Date(Date.now() - 5 * 60 * 1000),
        },
        {
          id: 2,
          bidder: "Bidder002",
          amount: 3150000,
          time: new Date(Date.now() - 15 * 60 * 1000),
        },
        {
          id: 3,
          bidder: "Bidder003",
          amount: 3100000,
          time: new Date(Date.now() - 30 * 60 * 1000),
        },
      ],
    },
    {
      id: 2,
      title: "Honda Civic 2019 - Sport",
      image:
        "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=600",
      currentBid: 6800000,
      startingBid: 6000000,
      reservePrice: 7000000,
      endTime: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now
      bids: 8,
      watchers: 32,
      status: "ending",
      vehicle: {
        year: "2019",
        mileage: "32,000 km",
        fuel: "Petrol",
        transmission: "Manual",
        location: "Kandy",
        condition: "Very Good",
        description:
          "Sporty Honda Civic with manual transmission. Perfect for enthusiasts who enjoy driving.",
        features: [
          "Air Conditioning",
          "Power Steering",
          "Electric Windows",
          "Central Locking",
          "ABS Brakes",
          "Airbags",
          "Bluetooth",
          "USB Ports",
        ],
      },
      seller: {
        name: "Auto Elite",
        rating: 4.6,
        totalSales: 89,
        verified: true,
      },
      bidHistory: [
        {
          id: 1,
          bidder: "Bidder004",
          amount: 6800000,
          time: new Date(Date.now() - 2 * 60 * 1000),
        },
        {
          id: 2,
          bidder: "Bidder005",
          amount: 6750000,
          time: new Date(Date.now() - 8 * 60 * 1000),
        },
        {
          id: 3,
          bidder: "Bidder006",
          amount: 6700000,
          time: new Date(Date.now() - 20 * 60 * 1000),
        },
      ],
    },
    {
      id: 3,
      title: "BMW 320i 2020 - Luxury",
      image:
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
      currentBid: 11500000,
      startingBid: 10000000,
      reservePrice: 12000000,
      endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
      bids: 15,
      watchers: 67,
      status: "live",
      vehicle: {
        year: "2020",
        mileage: "15,000 km",
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Colombo",
        condition: "Excellent",
        description:
          "Luxury BMW 320i with premium features. Low mileage and excellent condition.",
        features: [
          "Air Conditioning",
          "Power Steering",
          "Electric Windows",
          "Central Locking",
          "ABS Brakes",
          "Airbags",
          "Alloy Wheels",
          "GPS Navigation",
          "Leather Seats",
          "Sunroof",
          "Premium Audio",
        ],
      },
      seller: {
        name: "Luxury Motors",
        rating: 4.9,
        totalSales: 234,
        verified: true,
      },
      bidHistory: [
        {
          id: 1,
          bidder: "Bidder007",
          amount: 11500000,
          time: new Date(Date.now() - 10 * 60 * 1000),
        },
        {
          id: 2,
          bidder: "Bidder008",
          amount: 11400000,
          time: new Date(Date.now() - 25 * 60 * 1000),
        },
        {
          id: 3,
          bidder: "Bidder009",
          amount: 11300000,
          time: new Date(Date.now() - 45 * 60 * 1000),
        },
      ],
    },
    {
      id: 4,
      title: "Suzuki Alto 2020 - Economy",
      image:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600",
      currentBid: 2800000,
      startingBid: 2500000,
      reservePrice: 3000000,
      endTime: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
      bids: 6,
      watchers: 28,
      status: "live",
      vehicle: {
        year: "2020",
        mileage: "28,000 km",
        fuel: "Petrol",
        transmission: "Automatic",
        location: "Galle",
        condition: "Good",
        description:
          "Economic Suzuki Alto perfect for first-time buyers. Low maintenance and fuel efficient.",
        features: [
          "Air Conditioning",
          "Power Steering",
          "Electric Windows",
          "Central Locking",
          "ABS Brakes",
          "Airbags",
        ],
      },
      seller: {
        name: "City Motors",
        rating: 4.4,
        totalSales: 67,
        verified: true,
      },
      bidHistory: [
        {
          id: 1,
          bidder: "Bidder010",
          amount: 2800000,
          time: new Date(Date.now() - 12 * 60 * 1000),
        },
        {
          id: 2,
          bidder: "Bidder011",
          amount: 2750000,
          time: new Date(Date.now() - 30 * 60 * 1000),
        },
        {
          id: 3,
          bidder: "Bidder012",
          amount: 2700000,
          time: new Date(Date.now() - 60 * 60 * 1000),
        },
      ],
    },
  ];

  useEffect(() => {
    setAuctions(dummyAuctions);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-LK", {
      style: "currency",
      currency: "LKR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatTimeLeft = (endTime: Date) => {
    const now = new Date();
    const diff = endTime.getTime() - now.getTime();

    if (diff <= 0) return "Ended";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "text-green-600 bg-green-100";
      case "ending":
        return "text-red-600 bg-red-100";
      case "ended":
        return "text-gray-600 bg-gray-100";
      case "upcoming":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "live":
        return <TrendingUp className="h-4 w-4" />;
      case "ending":
        return <AlertCircle className="h-4 w-4" />;
      case "ended":
        return <XCircle className="h-4 w-4" />;
      case "upcoming":
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const handleBid = () => {
    if (!selectedAuction || !bidAmount) return;

    const amount = parseInt(bidAmount);
    if (amount <= selectedAuction.currentBid) {
      alert("Bid must be higher than current bid");
      return;
    }

    // In a real app, this would be an API call
    const updatedAuction = {
      ...selectedAuction,
      currentBid: amount,
      bids: selectedAuction.bids + 1,
      bidHistory: [
        {
          id: selectedAuction.bidHistory.length + 1,
          bidder: "You",
          amount: amount,
          time: new Date(),
        },
        ...selectedAuction.bidHistory,
      ],
    };

    setAuctions(
      auctions.map((a) => (a.id === selectedAuction.id ? updatedAuction : a))
    );
    setSelectedAuction(updatedAuction);
    setBidAmount("");
    setShowBidModal(false);
  };

  const filteredAuctions = auctions.filter((auction) => {
    if (filter === "all") return true;
    return auction.status === filter;
  });

  const sortedAuctions = [...filteredAuctions].sort((a, b) => {
    switch (sortBy) {
      case "ending":
        return a.endTime.getTime() - b.endTime.getTime();
      case "price":
        return b.currentBid - a.currentBid;
      case "bids":
        return b.bids - a.bids;
      case "watchers":
        return b.watchers - a.watchers;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Vehicle Auctions
              </h1>
              <p className="text-gray-600">
                Bid on quality vehicles and get the best deals
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>Live Auctions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-2">
              {["all", "live", "ending", "upcoming", "ended"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === status
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="ending">Ending Soon</option>
                <option value="price">Price</option>
                <option value="bids">Most Bids</option>
                <option value="watchers">Most Watchers</option>
              </select>
            </div>
          </div>
        </div>

        {/* Auctions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedAuctions.map((auction) => (
            <div
              key={auction.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedAuction(auction)}
            >
              <div className="relative">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(
                      auction.status
                    )}`}
                  >
                    {getStatusIcon(auction.status)}
                    <span>
                      {auction.status.charAt(0).toUpperCase() +
                        auction.status.slice(1)}
                    </span>
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all">
                    <Share2 className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {auction.title}
                </h3>

                <div className="mb-4">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {formatCurrency(auction.currentBid)}
                  </div>
                  <div className="text-sm text-gray-500">
                    Starting: {formatCurrency(auction.startingBid)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{auction.vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Gauge className="h-4 w-4" />
                    <span>{auction.vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{auction.vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{auction.vehicle.location}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Gavel className="h-4 w-4" />
                      <span>{auction.bids} bids</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{auction.watchers} watching</span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-red-600">
                    {formatTimeLeft(auction.endTime)}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAuction(auction);
                    setShowBidModal(true);
                  }}
                  className="w-full bg-accent-500 text-white py-2 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <DollarSign className="h-4 w-4" />
                  <span>Place Bid</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bid Modal */}
        {showBidModal && selectedAuction && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Place Your Bid
                </h3>
                <button
                  onClick={() => setShowBidModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-4">
                <img
                  src={selectedAuction.image}
                  alt={selectedAuction.title}
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-gray-900 mb-2">
                  {selectedAuction.title}
                </h4>
                <div className="text-sm text-gray-600 mb-3">
                  Current Bid:{" "}
                  <span className="font-semibold text-primary-600">
                    {formatCurrency(selectedAuction.currentBid)}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Reserve Price:{" "}
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(selectedAuction.reservePrice)}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Bid Amount (LKR)
                </label>
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={`Minimum ${formatCurrency(
                    selectedAuction.currentBid + 100000
                  )}`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  min={selectedAuction.currentBid + 100000}
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowBidModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBid}
                  className="flex-1 bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-accent-600 transition-colors"
                >
                  Place Bid
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Auction Details Modal */}
        {selectedAuction && !showBidModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedAuction.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span
                        className={`px-2 py-1 rounded-full flex items-center space-x-1 ${getStatusColor(
                          selectedAuction.status
                        )}`}
                      >
                        {getStatusIcon(selectedAuction.status)}
                        <span>
                          {selectedAuction.status.charAt(0).toUpperCase() +
                            selectedAuction.status.slice(1)}
                        </span>
                      </span>
                      <span>
                        Ends in: {formatTimeLeft(selectedAuction.endTime)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedAuction(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <XCircle className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedAuction.image}
                      alt={selectedAuction.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Vehicle Details
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-600">Year:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.year}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Mileage:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.mileage}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Fuel:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.fuel}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Transmission:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.transmission}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Location:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.location}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-600">Condition:</span>
                          <span className="ml-2 font-medium">
                            {selectedAuction.vehicle.condition}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Features
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        {selectedAuction.vehicle.features.map(
                          (feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-primary-50 rounded-lg p-4 mb-4">
                      <div className="text-center mb-4">
                        <div className="text-3xl font-bold text-primary-600 mb-1">
                          {formatCurrency(selectedAuction.currentBid)}
                        </div>
                        <div className="text-sm text-gray-600">Current Bid</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <span className="text-gray-600">Starting Bid:</span>
                          <div className="font-medium">
                            {formatCurrency(selectedAuction.startingBid)}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Reserve Price:</span>
                          <div className="font-medium">
                            {formatCurrency(selectedAuction.reservePrice)}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Total Bids:</span>
                          <div className="font-medium">
                            {selectedAuction.bids}
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-600">Watchers:</span>
                          <div className="font-medium">
                            {selectedAuction.watchers}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowBidModal(true)}
                        className="w-full bg-accent-500 text-white py-3 rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center space-x-2"
                      >
                        <DollarSign className="h-5 w-5" />
                        <span>Place Bid</span>
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Seller Information
                      </h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {selectedAuction.seller.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {selectedAuction.seller.name}
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-600">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{selectedAuction.seller.rating}</span>
                            <span>
                              ({selectedAuction.seller.totalSales} sales)
                            </span>
                            {selectedAuction.seller.verified && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-1">
                          <Phone className="h-4 w-4" />
                          <span>Call</span>
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1">
                          <Mail className="h-4 w-4" />
                          <span>Message</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-3">
                        Recent Bids
                      </h3>
                      <div className="space-y-2">
                        {selectedAuction.bidHistory.slice(0, 5).map((bid) => (
                          <div
                            key={bid.id}
                            className="flex justify-between items-center text-sm"
                          >
                            <div>
                              <span className="font-medium text-gray-900">
                                {bid.bidder}
                              </span>
                              <span className="text-gray-500 ml-2">
                                {bid.time.toLocaleTimeString()}
                              </span>
                            </div>
                            <span className="font-semibold text-primary-600">
                              {formatCurrency(bid.amount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleAuction;
