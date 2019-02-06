import React from "react";

import { CardTitle } from "reactstrap";

const ItemListHeader = props => {
  // console.log(props.users)
  
  // Checks if users is more than one, or more specifically getting it's data
  // from the ItemListView. If so it .find() to get the right item owner
  // otherwise data is coming from the user profile view and there is only one user

  

  const itemOwner = props.users && props.users.find(user => {
    return user.userId === props.ownerId;
  });

  const userName = !itemOwner ? "Loading" :  itemOwner.username;

  return <CardTitle>{`Owner: ${userName}`}</CardTitle>;
  return <h2>Item Header</h2>
};

export default ItemListHeader;
