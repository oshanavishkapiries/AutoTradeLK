import React from 'react'
import { useAuthStore } from '../store/authStore';
import { User, Plus } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Profile = () => {

    const { user, token, logout } = useAuthStore();

    return (
        <div>
            <div className="hidden md:flex items-center space-x-4">
                {token && user ? (
                    <>
                        <img
                            src={user?.picture}
                            alt="Profile"
                            className="h-10 w-10 rounded-full object-cover border-2 border-primary-600"
                        />
                        <button
                            onClick={logout}
                            className="text-gray-700 hover:text-red-600 py-2 rounded-md font-medium transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md font-medium transition-colors duration-200"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-1"
                        >
                            <User className="h-4 w-4" />
                            <span>Register</span>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Profile