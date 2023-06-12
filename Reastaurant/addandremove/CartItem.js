import { Fragment, useContext } from "react";
import classes from "./CartOrder.module.css";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
    const ctx = useContext(CartContext);
    const onRemove = () => {
            const remItem = {
                    id: props.id,
                    name: props.name,
                    price: props.price,
                    amount: props.amount
            }
            ctx.removeItem(remItem)
    }

  return (
    <Fragment>
      <li key={props.id} >
        <p>{props.name}</p>
        <br></br>
        <div className={classes.price}>
          <h4>${props.price}</h4>
          <span>X{props.amount}</span>
        </div>
        <div className={classes["cart-item"]}>
          <button
            type="button"
            onClick={onRemove}
            className={classes.btn}
          >
            {" "}
            -{" "}
          </button>
          <button type="button" 
          onClick={props.onAdd} 
          className={classes.btn}>
            {" "}
            +{" "}
          </button>
        </div>
        <hr></hr>
      </li>
    </Fragment>
  );
};

export default CartItem;