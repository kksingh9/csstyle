import  ReactDOM  from "react-dom";
import { Fragment } from "react";
//import Card from "../UI/Card";
import classes from './CartOrder.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop}  />
};

const ModalOverlay = (props) => {
    return (
        <div 
        className={classes.modal}
        >
            <header className={classes.header}>
                <p>Sushi</p>
            </header>
            <div className={classes.content}>
                <span>Total Amount</span>
                <span>35.23</span>
            </div>
            <footer className={classes.actions}>
               <button >close</button>
               <button >order</button>
            </footer>
        </div>
    )
}

const CartOrder = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop />, document.getElementById('backdrop-root')
            )}

            {ReactDOM.createPortal(
                <ModalOverlay /> , document.getElementById('overlay-root')
            )}
                
            
        </Fragment>
    );
};

export default CartOrder;