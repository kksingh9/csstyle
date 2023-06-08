import React, { Fragment } from "react";

const Productdetail = (props) => {
    const removeItem = () => {
        const onremove = {
            productid: props.productid,
            productname: props.productname,
            sellingprice: props.sellingprice,
            choosecategory: props.choosecategory
        }
        props.onRemove(onremove);
    }
 
  return (
    <Fragment>
      <li>
        <span>{props.productid}</span>
                    -
        <span>{props.productname}</span>
                    -
        <span>{props.sellingprice}</span>
                    -
        <span>{props.choosecategory}</span>

        <button type="button" onClick={removeItem}>
          Delete
        </button>
        
      </li>
    </Fragment>
  );
};

export default Productdetail;