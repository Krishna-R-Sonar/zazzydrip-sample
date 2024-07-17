// src/components/ClothingSection.js

import React from 'react';

const ClothingSection = ({ title, garments, onAddToCart }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {garments.map((garment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={garment.imgSrc} alt={garment.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-bold">{garment.title}</h3>
            <p className="text-gray-600">${garment.price.toFixed(2)}</p>
            <p className="text-gray-600">Rating: {garment.rating} stars</p>
            <p className="text-gray-600">{garment.reviews} reviews</p>
            <p className="text-gray-600">{garment.likes} likes</p>
            <div className="flex justify-between mt-4">
              <a href={garment.rentLink} className="bg-green-600 text-white py-2 px-4 rounded">Rent</a>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={() => onAddToCart(garment)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClothingSection;
