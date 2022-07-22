import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import createNotification from "../../../utils/CreateNotification";

const MealItem = (props) => {
  const price = `$${props.price}`;
  const cartCtx = useContext(CartContext);

  const notify = (amount) => {
    const title = 'Item Added Successfully!';
    const message = `Added ${amount} ${props.name} to the cart.`;
    createNotification('success', title, message); 
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: +amount,
      price: props.price,
    });
    notify(amount);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddCart={addToCartHandler}
        />
      </div>
    </li>
  );
};

export default MealItem;
