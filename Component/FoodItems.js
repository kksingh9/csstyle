import React, { Fragment } from "react";
import Productdetail from "./Productdetail";

const FoodItems = (props) => {
  return (
    <div>
      <h1>FoodItem</h1>
      { localStorage.getItem("detail") && JSON.parse(localStorage.getItem("detail")).map((item) => (
     
        <Fragment>
          {item.choosecategory === "FoodItem" && (
            <Productdetail
              key={item.productid}
              productid={item.productid}
              productname={item.productname}
              sellingprice={item.sellingprice}
              choosecategory={item.choosecategory}
              onRemove={props.removeItem}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default FoodItems;