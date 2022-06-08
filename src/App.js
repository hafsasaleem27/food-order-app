import { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(null);

  const openCartHandler = () => setIsCartOpen(true);

  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <Fragment>
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler}></Header>
      <Meals />
    </Fragment>
  );
}

export default App;
