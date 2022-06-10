import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  const totalCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  // useful piece of code for adding visual tweaks, notifications etc!

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onOpenCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
