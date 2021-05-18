// import React from "react";

function ListItem(props) {
  // const clickItem = props.handleClickGroceryItem(props.item.item);
  const clickItem = (id) => props.handleClickGroceryItem(id);
  return (
    <li
      key={props.id}
      className="list-item"
      onClick={clickItem}
      value={props.item.title}
    >
      {props.item.title}
    </li>
  );
}

export default ListItem;
