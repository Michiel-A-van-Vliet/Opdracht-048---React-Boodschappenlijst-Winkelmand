import React from "react";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "Plak varken" },
        { id: 4, title: "Stuk koe" },
      ],
      shoppingListItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 4, title: "Stuk koe" },
      ],
    };
    this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
  }

  handleClickGroceryItem(id) {
    console.log("Click! ");
    console.log(id);
  }

  render() {
    return (
      <div>
        <h1>Container</h1>;
        <GroceryList
          list={this.state.groceryItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
        />
        <ShoppingCart
          list={this.state.shoppingListItems}
          handleClickGroceryItem={this.handleClickGroceryItem}
        />
      </div>
    );
  }
}

export default Container;
