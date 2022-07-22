import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
