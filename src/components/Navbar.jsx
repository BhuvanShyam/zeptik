import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ onSearch }) {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(""); 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); 
      setSearchTerm(""); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(); 
    }
  };

  const openCart = () => {
    navigate("/cart"); 
  };

  return (
    <nav className="bg-white shadow-md p-4 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa4SYLUr_4sWmnnruMfy0Ow0ygXZ7JfxNzg&s"
              alt="Logo"
              className="w-20 h-20 mr-4 object-cover rounded-full"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            placeholder="Search"
            className="w-full max-w-md p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearchSubmit} 
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={openCart}
            className="relative ml-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.5 9H5.5L3 3zm0 0h18M3 3v18h18V3"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
