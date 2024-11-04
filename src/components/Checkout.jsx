// src/components/Checkout.js
import React from "react";
import { motion } from "framer-motion";

function Checkout() {
  const pageTransition = {
    initial: { opacity: 0, x: "-100vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50 },
    },
    exit: { opacity: 0, x: "100vw", transition: { ease: "easeInOut" } },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { delay: 0.2 } },
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const handleCheckout = () => {
    alert("Checkout successful!");
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-6"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-800"
        variants={fadeInUp}
      >
        Checkout
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg"
        variants={staggerContainer}
      >
        <motion.div className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Shipping Information
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="john@example.com"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Address
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="123 Main St"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">City</label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="New York"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Postal Code
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="10001"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Country
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="USA"
              />
            </div>
          </form>
        </motion.div>

        <motion.div className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Payment Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Expiration Date
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="MM/YY"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">CVV</label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="123"
              />
            </div>
            <div className="col-span-1">
              <label className="block mb-2 text-sm text-gray-600">
                Name on Card
              </label>
              <input
                type="text"
                className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>
          </form>
        </motion.div>

        <motion.button
          className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600 transition-colors font-semibold"
          variants={fadeInUp}
          onClick={() => handleCheckout}
        >
          Confirm and Pay
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Checkout;
