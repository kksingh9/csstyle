import { Fragment } from 'react' ;
import classes from './Summary.module.css' ;

const Mealsummary = () => {
    return (
        <Fragment>
            <div className={classes.summary}>
                <h1>Delicious Food, Delivered To You</h1>
                <p>Choose your favorite meal from our broad selection of available 
                    meals and enjoy a delicious lunch or dinner at home.
                </p>
                <p>All our meals are cocked with high quality ingredients, just-in-time and of course by 
                    experienced chefs!
                </p>
            </div>
        </Fragment>

    );

}

export default Mealsummary