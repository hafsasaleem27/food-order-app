import React, { Fragment } from "react";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
