import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountOfItem, setAmountOfItem] = useState(1);
  const [amountIsValid, setAmountIsValid] = useState(true);

  const addItemToCart = (e) => {
    e.preventDefault();

    if (
      // amountOfItem.trim().length === 0 ||
      +amountOfItem < 1 ||
      +amountOfItem > 5
    ) {
      console.log("here");
      setAmountIsValid(false);
      return;
    }

    props.onAddCart(amountOfItem);
  };

  const amountHandler = (e) => {
    setAmountOfItem(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={addItemToCart}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
        value={amountOfItem}
        onChange={amountHandler}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a value between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
