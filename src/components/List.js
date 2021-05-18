import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const groceryList = this.props.list.map((item) => {
      return (
        <ListItem
          key={item.id}
          item={item}
          handleClickGroceryItem={this.props.handleClickGroceryItem}
        />
      );
    });
    return <ul>{groceryList}</ul>;
  }
}

export default List;
