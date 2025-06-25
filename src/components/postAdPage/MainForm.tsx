import React from 'react'
import { Upload, X } from 'lucide-react';

interface MainFormProps {
    removeImage: (index: number) => void;
    images: string[];
    isLeasing: boolean;
    setIsLeasing: React.Dispatch<React.SetStateAction<boolean>>;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MainForm: React.FC<MainFormProps> = ({ removeImage, images, isLeasing, setIsLeasing, handleImageUpload }) => {
    return (
        <div>
            <form className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                {/* Basic Information */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Title *</label>
                            <input
                                type="text"
                                placeholder="e.g., Toyota Aqua 2017"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Category</option>
                                <option>Cars</option>
                                <option>Motorcycles</option>
                                <option>Vans</option>
                                <option>Three Wheelers</option>
                                <option>Trucks</option>
                                <option>Buses</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Brand *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Brand</option>
                                <option>Toyota</option>
                                <option>Honda</option>
                                <option>Nissan</option>
                                <option>Suzuki</option>
                                <option>BMW</option>
                                <option>Mercedes-Benz</option>
                                <option>Audi</option>
                                <option>Hyundai</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                            <input
                                type="text"
                                placeholder="e.g., Aqua"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Year *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Year</option>
                                {Array.from({ length: 25 }, (_, i) => 2025 - i).map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Condition</option>
                                <option>Brand New</option>
                                <option>Used</option>
                                <option>Reconditioned</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Technical Details */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Technical Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Type *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Fuel Type</option>
                                <option>Petrol</option>
                                <option>Diesel</option>
                                <option>Hybrid</option>
                                <option>Electric</option>
                                <option>LPG</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Transmission *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Transmission</option>
                                <option>Manual</option>
                                <option>Automatic</option>
                                <option>Semi-Automatic</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Engine Capacity (CC)</label>
                            <input
                                type="number"
                                placeholder="e.g., 1500"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mileage (KM)</label>
                            <input
                                type="number"
                                placeholder="e.g., 45000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Pricing */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Pricing & Location</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Price (LKR) *</label>
                            <input
                                type="number"
                                placeholder="e.g., 3850000"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                                <option value="">Select Location</option>
                                <option>Colombo</option>
                                <option>Kandy</option>
                                <option>Galle</option>
                                <option>Jaffna</option>
                                <option>Negombo</option>
                                <option>Kurunegala</option>
                                <option>Anuradhapura</option>
                                <option>Batticaloa</option>
                                <option>Matara</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                            <input
                                type="tel"
                                placeholder="+94 77 123 4567"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                        rows={4}
                        placeholder="Describe your vehicle in detail. Include any special features, service history, or other relevant information..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                    ></textarea>
                </div>

                {/* Images Upload */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Photos *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                            id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-2">Click to upload images or drag and drop</p>
                            <p className="text-sm text-gray-500">PNG, JPG up to 10MB each (Max 8 images)</p>
                        </label>
                    </div>

                    {images.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={image}
                                        alt={`Upload ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Leasing Option */}
                <div className="border-t pt-6">
                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="leasing"
                            checked={isLeasing}
                            onChange={(e) => setIsLeasing(e.target.checked)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="leasing" className="text-sm font-medium text-gray-700">
                            Also list for leasing
                        </label>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Check this if you want to make your vehicle available for leasing as well</p>
                </div>

                {/* Submit Button */}
                <div className="flex space-x-4 pt-6">
                    <button
                        type="submit"
                        className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    >
                        Post Advertisement
                    </button>
                    <button
                        type="button"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Save Draft
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MainForm