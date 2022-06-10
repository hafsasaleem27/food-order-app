import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(null);

  const openCartHandler = () => setIsCartOpen(true);
  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <CartProvider>
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler}></Header>
      <Meals />
    </CartProvider>
  );
}

export default App;
