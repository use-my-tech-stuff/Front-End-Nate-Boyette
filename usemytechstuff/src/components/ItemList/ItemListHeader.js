import React from "react";

import { CardTitle } from "reactstrap";

const ItemListHeader = props => {
  const itemOwner = props.users.find(user => {
    return user.userId === props.ownerId;
  });
  const userName = itemOwner && itemOwner.username;

  return <CardTitle>{`Renter: ${userName}`}</CardTitle>;
};

export default ItemListHeader;
