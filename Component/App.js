import React, { useState } from "react";
import Selleradmin from "./component/datagenerate/Selleradmin";
import Product from "./component/Product/Product";
import FoodItems from "./component/Product/FoodItems";

const App = () => {
  const [enteredProductDetail, setEnteredProductDetail] = useState([]);

  const products = (detail) => {
    const newarray = [...enteredProductDetail, detail];
    setEnteredProductDetail(newarray);

    localStorage.setItem('detail', JSON.stringify(newarray));
  };
  const newarray = [];
  const removeItem = (details) => {
    for (let item of enteredProductDetail) {
      if (details.productid !== item.productid) {
        newarray.push(item);
      }
    }
    setEnteredProductDetail(newarray);
    // const arr = [];
    // let cart = JSON.parse(localStorage.getItem('detail'));
    // for (let item of cart){
    //     if(item.productid !== details.productid){
    //         arr
    //     }
    // }
    localStorage.setItem('detail',JSON.stringify(newarray));
      
     //console.log(temp);
  };

  return (
    <div>
      <Selleradmin onSaveproductdetail={products} />
      <Product productdel={enteredProductDetail} removeItem={removeItem} />
      <FoodItems productdel={enteredProductDetail} removeItem={removeItem} />
    </div>
  );
};

export default App;