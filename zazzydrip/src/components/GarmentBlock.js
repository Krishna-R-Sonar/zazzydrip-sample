// src/components/GarmentBlock.js

import React from 'react';

const GarmentBlock = ({ imgSrc, title, price, rating, reviews, likes, rentLink, cartLink }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imgSrc} alt={title} className="w-full h-64 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">${price}</p>
      <p className="text-yellow-500">{rating}</p>
      <p className="text-gray-600">{reviews} reviews</p>
      <p className="text-gray-600">{likes} likes</p>
      <div className="mt-4 flex space-x-4">
        <a href={rentLink} className="bg-green-500 text-white px-4 py-2 rounded">Rent</a>
        <a href={cartLink} className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</a>
      </div>
    </div>
  );
}

export default GarmentBlock;
