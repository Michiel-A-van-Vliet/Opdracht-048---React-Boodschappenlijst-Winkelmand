// import React from "react";
import List from "./List";

function GroceryList(props) {
  console.log("GroceryList");
  console.log(props);
  console.log(props.list);
  return (
    <div>
      <h1>GroceryList</h1>;
      <List
        list={props.list}
        handleClickGroceryItem={props.handleClickGroceryItem}
      />
    </div>
  );
}

export default GroceryList;
