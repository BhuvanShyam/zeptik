// src/store.js
import { configureStore } from '@reduxjs/toolkit'; // Import configureStore from Redux Toolkit
import { Provider } from 'react-redux';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer

// Configure the store using configureStore
const store = configureStore({
  reducer: {
    cart: cartReducer, // Set the cart reducer
  },
});

// Export the store
export default store;
