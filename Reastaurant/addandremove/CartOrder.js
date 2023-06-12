import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import CartItem from "./CartItem";
import classes from "./CartOrder.module.css";
//import Card from "../UI/Card";

import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
  const cartctx = useContext(CartContext);
  const Totalamount = `${cartctx.totalAmount.toFixed(2)}`;
  const removeHandler = (id) => {};
  const addHandler = (item) => {};
  console.log(cartctx.items);
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        {cartctx.items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        ))}
      </header>

      <div className={classes.content}>
        <span>Total Amount</span>
        <span>${Totalamount}</span>
      </div>
      <footer className={classes.actions}>
        <button onClick={props.onHideCart}>close</button>
        <button>order</button>
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

export default CartOrder;