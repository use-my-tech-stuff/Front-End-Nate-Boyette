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
  // console.log(props)
  const itemOwner = props.users.filter(user => {
    if (user.userId === props.itemId){
      return user
    }
  })
  console.log(itemOwner)
  const userName = itemOwner && itemOwner.username
return <CardTitle>{itemOwner.username}</CardTitle>;
}

export default ItemListHeader