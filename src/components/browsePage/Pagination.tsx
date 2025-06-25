import React from 'react'

const Pagination = () => {
    return (
        <div>
            <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Previous</button>
                    <button className="px-3 py-2 bg-primary-600 text-white rounded">1</button>
                    <button className="px-3 py-2 text-gray-700 hover:text-gray-900">2</button>
                    <button className="px-3 py-2 text-gray-700 hover:text-gray-900">3</button>
                    <button className="px-3 py-2 text-gray-500 hover:text-gray-700">Next</button>
                </nav>
            </div>
        </div>
    )
}

export default Pagination