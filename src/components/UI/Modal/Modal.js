import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => <div className={classes.backdrop}></div>;
const CartModal = (props) => (
  <div className={classes.modal}>{props.children}</div>
);

const Modal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(
        <CartModal>{props.children}</CartModal>,
        document.getElementById("cart-modal")
      )}
    </div>
  );
};

export default Modal;
