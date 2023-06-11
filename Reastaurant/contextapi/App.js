//import logo from './logo.svg';
import { useState } from 'react';
//import './App.css';
import Header from './component/Layout/Header';
import Meals from './component/Meals/Meals';
import CartOrder from './component/Cart/CartOrder';
import CartProvider from './store/CartProvider';

const App = () => {
  const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);
    };
    const HideCartHandler = () => {
        setShowCart(false);
    }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
     {showCart && <CartOrder  onHideCart={HideCartHandler} />}
    </CartProvider>
  );
}

export default App;