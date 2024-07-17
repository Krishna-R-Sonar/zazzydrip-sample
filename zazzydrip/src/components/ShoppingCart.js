// src/components/ShoppingCart.js

import React from 'react';

const ShoppingCart = ({ items, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 lg:w-1/2">
        <button className="text-red-600 float-right" onClick={onClose}>Close</button>
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.imgSrc} alt={item.title} className="w-20 h-20 object-cover rounded-md mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button className="bg-red-600 text-white py-1 px-2 rounded">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShoppingCart;
