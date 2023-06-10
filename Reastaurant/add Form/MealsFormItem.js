import { Fragment } from "react";
import classes from './MealsFormItem.module.css';
import Input from "../UI/Input";

const MealsFormItem = () => {
    return (
        <Fragment>
            <form className={classes['meals-form']}>
                {/* <label htmlFor="amount">Amount</label>
                <input id="amount" /> */}
                <Input 
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'          
                }}
                />
                <br></br>
                <button>+ ADD</button>
            </form>
        </Fragment>
    );
}

export default MealsFormItem;