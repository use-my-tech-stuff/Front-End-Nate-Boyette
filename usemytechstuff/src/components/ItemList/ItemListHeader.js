import React from "react"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Media
} from "reactstrap";

const ItemListHeader = props => {
  
  const itemOwner = props.users.find(user => {
    return user.userId === props.ownerId

  })
  const userName = itemOwner && itemOwner.username
 
return <CardTitle>{`Renter: ${userName}`}</CardTitle>;
}

export default ItemListHeader