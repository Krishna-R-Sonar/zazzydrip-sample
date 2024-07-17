// src/App.js

import React, { useState } from 'react';
import './index.css';
import ClothingSection from './components/ClothingSection';
import SignIn from './components/SignIn';
import ShoppingCart from './components/ShoppingCart';
import { FaSearch } from 'react-icons/fa';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    if (!loggedIn) {
      alert('You must be logged in to add items to the cart.');
      return;
    }
    setCartItems([...cartItems, item]);
    alert('1 item added to cart');
  };

  const handleSignInClose = (loggedInStatus) => {
    setShowSignIn(false);
    setLoggedIn(loggedInStatus);
  };

  const featuredGarments = [
    {
      imgSrc: 'https://kaashcollection.com/cdn/shop/products/IMG_3399_800x.jpg?v=1676960126',
      title: 'Wedding Wear',
      price: 200,
      rating: 4,
      reviews: 120,
      likes: 45,
      rentLink: 'https://example.com/rent',
      cartLink: 'https://example.com/cart',
    },
    {
      imgSrc: 'https://shreeman.in/cdn/shop/files/4_04c4e56c-ad4e-458d-8370-d909b41e88c1.jpg?v=1712052582&width=700',
      title: 'Fashion Wear',
      price: 220,
      rating: 5,
      reviews: 200,
      likes: 75,
      rentLink: 'https://example.com/rent',
      cartLink: 'https://example.com/cart',
    },
    {
      imgSrc: 'https://5.imimg.com/data5/FY/KS/XC/SELLER-86091887/whatsapp-image-2020-05-30-at-11-15-53-am.jpeg',
      title: 'Birthday Party Wear',
      price: 180,
      rating: 4,
      reviews: 95,
      likes: 60,
      rentLink: 'https://example.com/rent',
      cartLink: 'https://example.com/cart',
    },
    {
      imgSrc: 'https://www.libas.in/cdn/shop/files/peach-printed-silk-fit-and-flare-dress-libas-2.jpg?v=1713522926',
      title: 'Reception Wear',
      price: 250,
      rating: 4,
      reviews: 150,
      likes: 80,
      rentLink: 'https://example.com/rent',
      cartLink: 'https://example.com/cart',
    },
    {
      imgSrc: 'https://cms.landmarkshops.in/cdn-cgi/image/w=288,q=85,fit=cover/LS-Fest/LS-new/LS-BC12-1-Desktop-women-10Jul24.jpg',
      title: 'Casual Wear',
      price: 150,
      rating: 3,
      reviews: 80,
      likes: 35,
      rentLink: 'https://example.com/rent',
      cartLink: 'https://example.com/cart',
    },
  ];

  const newArrivals = [
    {
      imgSrc: 'https://example.com/new-arrival1.jpg',
      title: 'New Arrival 1',
      price: 210,
      rating: 5,
      reviews: 90,
      likes: 55,
      rentLink: 'https://example.com/rent1',
      cartLink: 'https://example.com/cart1',
    },
    {
      imgSrc: 'https://example.com/new-arrival2.jpg',
      title: 'New Arrival 2',
      price: 230,
      rating: 4,
      reviews: 110,
      likes: 65,
      rentLink: 'https://example.com/rent2',
      cartLink: 'https://example.com/cart2',
    },
  ];

  const bestSellers = [
    {
      imgSrc: 'https://example.com/best-seller1.jpg',
      title: 'Best Seller 1',
      price: 240,
      rating: 5,
      reviews: 130,
      likes: 70,
      rentLink: 'https://example.com/rent3',
      cartLink: 'https://example.com/cart3',
    },
    {
      imgSrc: 'https://example.com/best-seller2.jpg',
      title: 'Best Seller 2',
      price: 260,
      rating: 4,
      reviews: 150,
      likes: 85,
      rentLink: 'https://example.com/rent4',
      cartLink: 'https://example.com/cart4',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {showSignIn && <SignIn onClose={handleSignInClose} />}
      {showCart && <ShoppingCart items={cartItems} onClose={() => setShowCart(false)} />}
      <header className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow fixed w-full z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">ZAZZYDRIP</h1>
          <nav className="flex space-x-6 items-center">
            <ul className="flex space-x-6">
              <li className="group relative">
                <a href="#" className="text-white hover:text-gray-200">MEN</a>
                <div className="absolute left-0 w-64 bg-white shadow-md mt-1 p-4 hidden group-hover:block transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <a href="#" className="block text-gray-700">Tops</a>
                  <a href="#" className="block text-gray-700">Bottoms</a>
                  <a href="#" className="block text-gray-700">Accessories</a>
                </div>
              </li>
              <li className="group relative">
                <a href="#" className="text-white hover:text-gray-200">WOMEN</a>
                <div className="absolute left-0 w-64 bg-white shadow-md mt-1 p-4 hidden group-hover:block transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <a href="#" className="block text-gray-700">Tops</a>
                  <a href="#" className="block text-gray-700">Bottoms</a>
                  <a href="#" className="block text-gray-700">Accessories</a>
                </div>
              </li>
              <li className="group relative">
                <a href="#" className="text-white hover:text-gray-200">KIDS</a>
                <div className="absolute left-0 w-64 bg-white shadow-md mt-1 p-4 hidden group-hover:block transition-all duration-300 transform scale-95 group-hover:scale-100">
                  <a href="#" className="block text-gray-700">Tops</a>
                  <a href="#" className="block text-gray-700">Bottoms</a>
                  <a href="#" className="block text-gray-700">Accessories</a>
                </div>
              </li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your ZAZZY"
                className="py-2 px-4 rounded-full"
              />
              <FaSearch className="absolute right-2 top-2 text-gray-600" />
            </div>
            {loggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-white">Welcome, User</span>
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded relative"
                  onClick={() => setShowCart(true)}
                >
                  Cart <span className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">{cartItems.length}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button className="bg-white text-blue-600 py-2 px-4 rounded" onClick={() => setShowSignIn(true)}>Sign In</button>
                <button className="bg-white text-blue-600 py-2 px-4 rounded">Sign Up</button>
              </div>
            )}
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-24"> {/* Add padding-top to main to prevent content overlap */}
        <ClothingSection title="Featured Garments" garments={featuredGarments} onAddToCart={handleAddToCart} />
        <ClothingSection title="New Arrivals" garments={newArrivals} onAddToCart={handleAddToCart} />
        <ClothingSection title="Best Sellers" garments={bestSellers} onAddToCart={handleAddToCart} />
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Follow Us</h2>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Contact Us</h2>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fas fa-phone"></i> Phone
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fas fa-envelope"></i> Email
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fas fa-map-marker-alt"></i> Address
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
