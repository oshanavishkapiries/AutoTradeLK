import React from 'react'
import { Info } from 'lucide-react';

const SideBar = () => {
    return (
        <div>
            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Info className="h-5 w-5 text-primary-600 mr-2" />
                        Tips for Better Ads
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Upload high-quality, well-lit photos from multiple angles</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Write a detailed description highlighting key features</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Set a competitive price based on market research</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Mention service history and any recent maintenance</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Be honest about the vehicle's condition</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span>Respond promptly to inquiries</span>
                        </li>
                    </ul>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Ad Policies</h4>
                        <p className="text-sm text-blue-700">
                            Please ensure your ad complies with our terms of service.
                            All ads are subject to review before publication.
                        </p>
                        <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                            Read full policies →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar