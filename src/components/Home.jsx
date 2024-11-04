import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
  const navigate = useNavigate();

  const handleShowProducts = () => {
    navigate('/products'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="mb-6">Discover amazing products just for you.</p>
        <button
          onClick={handleShowProducts}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Show Products
        </button>
      </motion.div>
    </div>
  );
};

export default Home;
