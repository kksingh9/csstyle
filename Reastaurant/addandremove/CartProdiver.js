import { useState } from "react";
import CartContext from "./cart-context";

// const defaultCartState = {
//     items: [],
//     totalAmount: 0
// }

// const cartReducer = (state, action) => {
//     // if(action.type === 'ADD'){
//     //     const updatedItems = state.items.concat(action.item);
//     //     const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount ;
//     // return {
//     //     items: updatedItems,
//     //     totalAmount: updatedTotalAmount
//     // }
//     // }
//     // return defaultCartState;
// };

const CartProvider = (props) => {
  // const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const [cartState, setCartState] = useState([]);
  const [amountState, setAmountState] = useState(0);
  
  //let updatedItems;
  const addItemToCartHandler = (item) => {
    // dispatchCartAction({type: 'ADD', item: item});
    const arr = [...cartState, item];
    setCartState(arr);
//     const existingCartItemIndex = arr.findIndex((m) =>
//     m.id === item.id );
//   const existingCartItem = cartState[existingCartItemIndex];
  
  
//   if(existingCartItem){
//     const updatedItem = {
//         ...existingCartItem,
//         amount: existingCartItem.amount + item.amount
//     }
//     updatedItems = [...cartState];
//     updatedItems[existingCartItemIndex] = updatedItem;
//   }else{
//     updatedItems = [...cartState, item]
//   }
    const price = arr.map((p) => {
      return parseFloat(p.price);
    });
    const sum = price.reduce((curr, prev) => {
      return curr + prev;
    }, 0);
    setAmountState(sum);
  };

  const removeItemFromCartHandler = (item) => {
    // defaultCartState({type: 'REMOVE', id: id});
    let newarray = [];
    for (let items of cartState) {
      if (items.id !== item.id) {
        newarray.push(items);
      }
    }
    setCartState(newarray);
    console.log(item);

    const price = newarray.map((p) => {
      return parseFloat(p.price);
    });
    const sum = price.reduce((curr, prev) => {
      return curr + prev;
    }, 0);
    setAmountState(sum);
  };
  const cartContext = {
    items: cartState,
    totalAmount: amountState,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;