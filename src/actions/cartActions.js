// src/actions/cartActions.js

// Action for adding a product to the cart
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: { ...product, quantity: 1 }, // Initialize quantity to 1 when adding a product
  };
};

// Action for removing a product from the cart
export const removeFromCart = (productId) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: productId, // Assuming productId is a unique identifier for the product
  };
};

// Action for increasing the quantity of a product in the cart
export const increaseQuantity = (productId) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: productId,
  };
};

// Action for decreasing the quantity of a product in the cart
export const decreaseQuantity = (productId) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: productId,
  };
};
