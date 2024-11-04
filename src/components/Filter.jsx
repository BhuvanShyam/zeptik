// src/components/Filter.js
import React, { useState } from 'react';

function Filter({ closeFilter, applyFilter }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => 
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) => 
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleApplyFilter = () => {
    applyFilter({ categories: selectedCategories, brands: selectedBrands }); // Pass selected filters to parent
    closeFilter(); // Close the filter modal after applying
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        
        {/* Categories */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            {['Eggs', 'Noodles & Pasta', 'Chips & Crisps', 'Fast Food'].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Brands</h3>
          <div className="space-y-2">
            {['Cocola', 'Individual Collection', 'Ilad', 'Kazi Farms'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleApplyFilter}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Apply Filter
          </button>
          <button
            onClick={handleClearFilters}
            className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md"
          >
            Clear Filters
          </button>
          <button
            onClick={closeFilter}
            className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
