import React, { useState } from 'react';
import MainForm from '../components/postAdPage/MainForm';
import SideBar from '../components/postAdPage/SideBar';

const PostAd = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isLeasing, setIsLeasing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you'd upload these to a server
      // For demo, we'll use placeholder URLs
      const newImages = Array.from(files).map((_, index) =>
        `https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&${index}`
      );
      setImages(prev => [...prev, ...newImages].slice(0, 8));
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Your Vehicle Advertisement</h1>
          <p className="text-gray-600">Fill in the details below to list your vehicle for sale or lease</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Form */}
          <div className="lg:col-span-2">
            <MainForm
              removeImage={removeImage}
              images={images}
              isLeasing={isLeasing}
              setIsLeasing={setIsLeasing}
              handleImageUpload={handleImageUpload}
            />
          </div>

          {/* Sidebar */}
          <SideBar />

        </div>
      </div>
    </div>
  );
};

export default PostAd;