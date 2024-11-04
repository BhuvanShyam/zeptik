import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer"; // Import the Footer component

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [products] = useState([
    {
      id: 1,
      name: "Egg Chicken Red",
      price: "$1.99",
      category: "Eggs",
      brand: "Cocola",
      image: "https://via.placeholder.com/150?text=Egg+Chicken+Red",
    },
    {
      id: 2,
      name: "Egg Chicken White",
      price: "$1.50",
      category: "Eggs",
      brand: "Ilad",
      image: "https://via.placeholder.com/150?text=Egg+Chicken+White",
    },
    {
      id: 3,
      name: "Egg Pasta",
      price: "$15.99",
      category: "Noodles & Pasta",
      brand: "Kazi Farms",
      image: "https://via.placeholder.com/150?text=Egg+Pasta",
    },
    {
      id: 4,
      name: "Egg Noodles",
      price: "$15.99",
      category: "Noodles & Pasta",
      brand: "Individual Collection",
      image: "https://via.placeholder.com/150?text=Egg+Noodles",
    },
    {
      id: 5,
      name: "Mayonnaise Eggless",
      price: "$2.50",
      category: "Fast Food",
      brand: "Cocola",
      image: "https://via.placeholder.com/150?text=Mayonnaise+Eggless",
    },
  ]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const applyFilter = (selectedFilters) => {
    const { categories, brands } = selectedFilters;
    const filtered = products.filter(
      (product) =>
        (categories.length === 0 || categories.includes(product.category)) &&
        (brands.length === 0 || brands.includes(product.brand))
    );
    setFilteredData(filtered);
    toggleFilter();
  };

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar onSearch={handleSearch} toggleCart={toggleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={
              <div className="p-4">
                <button onClick={toggleFilter} className="btn btn-success mb-4">
                  Open Filter
                </button>
                <ProductList
                  filteredProducts={
                    filteredData.length > 0 ? filteredData : products
                  }
                  addToCart={addToCart}
                />
                {isFilterOpen && (
                  <Filter
                    closeFilter={toggleFilter}
                    applyFilter={applyFilter}
                  />
                )}
                {isCartVisible && <Cart cartItems={cartItems} />}
              </div>
            }
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer /> {/* Footer added at the bottom of the App */}
      </div>
    </Router>
  );
}

export default App;
