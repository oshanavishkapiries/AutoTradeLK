import { MapPin, Calendar, Gauge, Fuel } from 'lucide-react';

type Vehicle = {
    id: number;
    image: string;
    title: string;
    price: string;
    location: string;
    year: string;
    mileage: string;
    fuel: string;
    transmission: string;
    condition: string;
    description: string;
};

type VehiclesCardProps = {
    viewMode: 'grid' | 'list';
    vehicles: Vehicle[];
};

const VehiclesCard: React.FC<VehiclesCardProps> = ({ viewMode, vehicles }) => {

    return (
        <div>
            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                            <img
                                src={vehicle.image}
                                alt={vehicle.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.title}</h3>
                                <p className="text-2xl font-bold text-primary-600 mb-3">{vehicle.price}</p>
                                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                                    <div className="flex items-center space-x-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{vehicle.year}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Gauge className="h-4 w-4" />
                                        <span>{vehicle.mileage}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Fuel className="h-4 w-4" />
                                        <span>{vehicle.fuel}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <MapPin className="h-4 w-4" />
                                        <span>{vehicle.location}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {vehicles.map((vehicle) => (
                        <div key={vehicle.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row">
                                <img
                                    src={vehicle.image}
                                    alt={vehicle.title}
                                    className="w-full md:w-64 h-48 md:h-auto object-cover"
                                />
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.title}</h3>
                                            <p className="text-2xl font-bold text-primary-600">{vehicle.price}</p>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                                            {vehicle.condition}
                                        </span>
                                    </div>

                                    <p className="text-gray-600 mb-4">{vehicle.description}</p>

                                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{vehicle.year}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Gauge className="h-4 w-4" />
                                            <span>{vehicle.mileage}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Fuel className="h-4 w-4" />
                                            <span>{vehicle.fuel}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{vehicle.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">Transmission: {vehicle.transmission}</span>
                                        <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default VehiclesCard