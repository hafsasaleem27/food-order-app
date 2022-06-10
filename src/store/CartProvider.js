import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    console.log("item: ", item);
    const indexOfItem = cartItems.findIndex((ele) => ele.id === item.id);

    if (indexOfItem !== -1) {
      setCartItems((prevItems) => {
        console.log('prevItems: ', prevItems)
        const prevList = [...prevItems];
        // prevList[indexOfItem].amount += item.amount;
        // console.log('prevList[indexOfItem].amount: ', prevList[indexOfItem].amount);
        // console.log('item.amount: ', item.amount)
        return prevList;
      });
    } else {
      setCartItems((prevItems) => {
        return [...prevItems, item];
      });
    }
    setTotalAmount((prevAmount) => prevAmount + item.price * item.amount);
  };

  const removeItemFromCartHandler = (id) => {
    const reqIndex = cartItems.findIndex((ele) => ele.id === id);

    if (cartItems[reqIndex].amount === 1) {
      setCartItems((prevItems) => {
        return prevItems.filter((ele) => ele.id !== id);
      });
    } else {
      setCartItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[reqIndex].amount--;
        return updatedItems;
      });
    }
    setTotalAmount((prevAmount) => prevAmount - cartItems[reqIndex].price);
  };

  const cartContext = {
    items: cartItems,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
