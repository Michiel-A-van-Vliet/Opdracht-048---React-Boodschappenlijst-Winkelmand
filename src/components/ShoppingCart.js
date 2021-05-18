// import React from "react";
import List from "./List";

function ShoppingCart(props) {
  console.log("ShoppingCart");
  console.log(props);
  console.log(props.list);
  return (
    <div>
      <h1>ShoppingCart</h1>;
      <List
        list={props.list}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default ShoppingCart;
