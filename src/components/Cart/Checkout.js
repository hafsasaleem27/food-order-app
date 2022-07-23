import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const [isNameValid, setIsNameValid] = useState(true);
  const [isStreetValid, setIsStreetValid] = useState(true);
  const [isPostalValid, setIsPostalValid] = useState(true);
  const [isCityValid, setIsCityValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    if (isEmpty(enteredName)) setIsNameValid(false);
    else setIsNameValid(true);
    if (isEmpty(enteredStreet)) setIsStreetValid(false);
    else setIsStreetValid(true);
    if (isEmpty(enteredPostalCode)) setIsPostalValid(false);
    else setIsPostalValid(true);
    if (isEmpty(enteredCity)) setIsCityValid(false);
    else setIsCityValid(true);

    const formIsValid =
      isNameValid && isStreetValid && isPostalValid && isCityValid;
    
    if (!formIsValid) {
        return;
    }

    // submit the cart
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    nameInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  const nameInputClasses = isNameValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const streetInputClasses = isStreetValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const postalInputClasses = isPostalValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const cityInputClasses = isCityValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" ref={nameInputRef} />
      </div>
      <div className={streetInputClasses}>
        <label htmlFor="street">Street</label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input id="postal" type="text" ref={postalInputRef} />
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city">City</label>
        <input id="city" type="text" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
