import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity as increaseItemQuantity,
  decreaseQuantity as decreaseItemQuantity,
} from "../actions/cartActions";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems
    .reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    )
    .toFixed(2);

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseItemQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseItemQuantity(productId));
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-4 max-w-3xl mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">My Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-gray-200 py-3 px-2 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    ❌
                  </button>
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                  >
                    ➕
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded hover:bg-gray-400 transition-colors"
                  >
                    ➖
                  </button>
                </div>
                <span className="text-gray-700 font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex justify-between text-gray-700 font-medium mb-2">
              <span>Total Quantity:</span>
              <span>{totalQuantity}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-semibold text-lg">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
          </div>
          <Link to="/checkout">
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors">
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
