
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);

   
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };


  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
      <div className="overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mb-4"
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.description}</p>
      <p className="text-green-500 font-bold">{product.price}</p>
      <button
        onClick={handleAddToCart}
        className={`mt-2 ${
          isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
        } text-white px-3 py-1 rounded-md hover:bg-blue-600 transition`}
        disabled={isInCart}
      >
        {isAdded ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
