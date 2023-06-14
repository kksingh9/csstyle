import { useState, Fragment } from "react";



const CartItem = () => {
    const [entertedTshirt, setEnteredTshirt] = useState("")
    const [entertedDescription, setEnteredDescription] = useState("")
    const [entertedPrice, setEnteredPrice] = useState("")
    const [entertedLargesize, setEnteredLargesize] = useState("")
    const [entertedMediumsize, setEnteredMediumsize] = useState("")
    const [entertedSmallsize, setEnteredSmallsize] = useState("")

    const tshirtHandler = (event) => {
        setEnteredTshirt(event.target.value);
    }
    const descriptionHandler = (event) => {
        setEnteredDescription(event.target.value);
    }
    const priceHandler = (event) => {
        setEnteredPrice(event.target.value);
    }
    const largesizeHandler = (event) => {
        setEnteredLargesize(event.target.value);
    }
    const smallsizeHandler = (event) => {
        setEnteredSmallsize(event.target.value);
    }
    const mediumsizeHandler = (event) => {
        setEnteredMediumsize(event.target.value);
    }

    const onsubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Fragment>
            <form onSubmit={onsubmitHandler} >
                <label>TshirtName</label>
                <input type="text" onChange={tshirtHandler} value={entertedTshirt} />
                <label>description</label>
                <input type="text" onChange={descriptionHandler} value={entertedDescription} />
                <label>price</label>
                <input type="number" onChange={priceHandler} value={entertedPrice} />
                <div>
                <h1>Quantity Available</h1>
                <label>L</label>
                <input type="text" onChange={largesizeHandler} value={entertedLargesize} />
                <label>M</label>
                <input type="text" onChange={mediumsizeHandler} value={entertedMediumsize} />
                <label>S</label>
                <input type="text" onChange={smallsizeHandler} value={entertedSmallsize} />
                </div>
                <button type="submit" >Add product</button>
            </form>
        </Fragment>
    );

};

export default CartItem ;