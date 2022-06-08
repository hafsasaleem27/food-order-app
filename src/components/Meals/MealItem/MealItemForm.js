import React, { useContext } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  console.log('cartCtx: ', cartCtx)

  const addItemToCart = (e) => {
    e.preventDefault();

    cartCtx.onAddItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: props.amount,
    });
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
