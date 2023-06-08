import React, { useState } from "react";

const Selleradmin = (props) => {
  const [enterProductID, setEnterProductID] = useState("");
  const [enterSellingPrice, setEnterSellingPrice] = useState("");
  const [enterProductName, setEnterProductName] = useState("");
  const [enterChooseCategory, setEnterChooseCategory] = useState("");

  const Productid = (event) => {
    setEnterProductID(event.target.value);
  };
  const Productname = (event) => {
    setEnterProductName(event.target.value);
  };
  const Sellingprice = (event) => {
    setEnterSellingPrice(event.target.value);
  };
  const Choosecategory = (event) => {
    setEnterChooseCategory(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const productdetail = {
      productid: enterProductID,
      productname: enterProductName,
      sellingprice: enterSellingPrice,
      choosecategory: enterChooseCategory,
    };
    props.onSaveproductdetail(productdetail);
    setEnterProductID("");
    setEnterProductName("");
    setEnterSellingPrice("");
    setEnterChooseCategory("");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="num">Product ID</label>
        <input
          id="num"
          type="number"
          value={enterProductID}
          onChange={Productid}
        />

        <label htmlFor="nam">Product Name</label>
        <input
          id="nam"
          type="text"
          value={enterProductName}
          onChange={Productname}
        />
        <label htmlFor="sell">Selling Price</label>
        <input
          id="sell"
          type="number"
          value={enterSellingPrice}
          onChange={Sellingprice}
        />
        <label htmlFor="cat">Choose a Category</label>
        <select
          id="cat"
          value={enterChooseCategory}
          onChange={Choosecategory} >
            <option value='selectItem'>selectItem</option>
            <option value='ElectronicItem'>ElectronicItem</option>
            <option value='FoodItem'>FoodItem</option>
            <option value='StationaryItem'>StationaryItem</option>
          </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Selleradmin;