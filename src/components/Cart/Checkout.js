import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

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
    console.log("value in name input field: ", nameInputRef.current.value);
    if (nameInputRef.current.value.trim() === "") setIsNameValid(false);
    else setIsNameValid(true);
    if (streetInputRef.current.value.trim() === "") setIsStreetValid(false);
    else setIsStreetValid(true);
    if (postalInputRef.current.value.trim() === "") setIsPostalValid(false);
    else setIsPostalValid(true);
    if (cityInputRef.current.value.trim() === "") setIsCityValid(false);
    else setIsCityValid(true);

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
        <label htmlFor="street" >
          Street
        </label>
        <input id="street" type="text" ref={streetInputRef} />
      </div>
      <div className={postalInputClasses}>
        <label htmlFor="postal" >
          Postal Code
        </label>
        <input id="postal" type="text" ref={postalInputRef}/>
      </div>
      <div className={cityInputClasses}>
        <label htmlFor="city" >
          City
        </label>
        <input id="city" type="text" ref={cityInputRef}/>
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
