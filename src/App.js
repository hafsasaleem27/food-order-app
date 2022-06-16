import { useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { NotificationContainer } from 'react-notifications';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(null);

  const openCartHandler = () => setIsCartOpen(true);
  const closeCartHandler = () => setIsCartOpen(false);

  return (
    <CartProvider>
      {isCartOpen && <Cart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={openCartHandler}></Header>
      <Meals />
      <NotificationContainer/>
    </CartProvider>
  );
}

export default App;
