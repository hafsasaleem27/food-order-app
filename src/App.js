import { Fragment } from 'react';
import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header></Header>
      <Meals/>
    </Fragment>
  );
}

export default App;
