// src/components/ProductList.js
import React from "react";
import ProductCard from "./ProductCard";

import eggChickenRed from "../Assets/egg-red.png";
import eggChickenWhite from "../Assets/egg-white.png";
import eggPasta from "../Assets/egg-pasta.png";
import eggNoodles from "../Assets/egg-noodles.png";
import mayo from "../Assets/mayo.png";

// Define a static list of products
const productsData = [
  {
    id: 1,
    name: "Egg Chicken Red",
    price: "$1.99",
    category: "Eggs",
    brand: "Cocola",
    image: eggChickenRed, // Replace with actual path
  },
  {
    id: 2,
    name: "Egg Chicken White",
    price: "$1.50",
    category: "Eggs",
    brand: "Ilad",
    image: eggChickenWhite, // Replace with actual path
  },
  {
    id: 3,
    name: "Egg Pasta",
    price: "$15.99",
    category: "Noodles & Pasta",
    brand: "Kazi Farms",
    image: eggPasta, // Replace with actual path
  },
  {
    id: 4,
    name: "Egg Noodles",
    price: "$15.99",
    category: "Noodles & Pasta",
    brand: "Individual Collection",
    image: eggNoodles, // Replace with actual path
  },
  {
    id: 5,
    name: "Mayonnaise Eggless",
    price: "$2.50",
    category: "Fast Food",
    brand: "Cocola",
    image: mayo, 
  },
];

function ProductList({ filteredProducts }) {
  // Use filteredProducts if provided; otherwise, fallback to static products
  const productsToDisplay =
    filteredProducts.length > 0 ? filteredProducts : productsData;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsToDisplay.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
