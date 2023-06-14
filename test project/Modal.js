import React, { Fragment, useContext } from 'react';
import CartContext from './CartContext';
import ModalItem from './ModalItem';
import { ReactDOM } from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart} />;
  };

  const ModalOverlay = (props) => {
    const cartctx = useContext(CartContext);
    const Totalamount = `${cartctx.totalAmount.toFixed(2)}`;
    
    const hasItems = cartctx.items.length > 0;
  
    return (
      <div>
        <header>
          {cartctx.items.map((item) => (
            <ModalItem
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              amount={item.amount}
            
            />
          ))}
        </header>
  
        <div>
          <span>Total Amount</span>
          <span>${Totalamount}</span>
        </div>
        <footer >
          <button onClick={props.onHideCart}>close</button>
          {hasItems && <button>order</button>}
        </footer>
      </div>
    );
  };
  
  const CartOrder = (props) => {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onHideCart={props.onHideCart} />,
          document.getElementById("backdrop-root")
        )}
  
        {ReactDOM.createPortal(
          <ModalOverlay onHideCart={props.onHideCart} />,
          document.getElementById("overlay-root")
        )}
      </Fragment>
    );
  };