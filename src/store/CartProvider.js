import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    const indexOfItem = cartItems.findIndex((ele) => ele.id === item.id);
    const existingItem = cartItems[indexOfItem];

    // this solution works correctly!
    // MAX Solution

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + item.amount,
      };
      setCartItems((prevItems) => {
        const prevList = [...prevItems];
        prevList[indexOfItem] = updatedItem;
        return prevList;
      });
    } else {
      setCartItems((prevItems) => {
        return [...prevItems, item];
      });
    }

    // not working correctly!
    // written by me! :D

    // if (indexOfItem !== -1) {
    //   setCartItems((prevItems) => {
    //     const prevList = [...prevItems];
    //     prevList[indexOfItem].amount = prevList[indexOfItem].amount + item.amount;
    //     return prevList;
    //   });
    // } else {
    //   setCartItems((prevItems) => {
    //     return [...prevItems, item];
    //   });
    // }

    setTotalAmount((prevAmount) => prevAmount + item.price * item.amount);
  };

  const removeItemFromCartHandler = (id) => {
    const reqIndex = cartItems.findIndex((ele) => ele.id === id);
    const existingItem = cartItems[reqIndex];

    if (existingItem.amount === 1) {
      // cartItems[reqIndex] = updatedItem;
      setCartItems((prevItems) => {
        return prevItems.filter((ele) => ele.id !== id);
      });
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[reqIndex] = updatedItem;
        return updatedItems;
      });
    }
    setTotalAmount((prevAmount) => prevAmount - cartItems[reqIndex].price);
  };

  const clearCartHandler = () => setCartItems([]);

  const cartContext = {
    items: cartItems,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
