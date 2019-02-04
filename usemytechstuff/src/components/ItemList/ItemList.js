import React from "react";
import styled from "styled-components"
import ItemListHeader from "./ItemListHeader"

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ItemList = props => {
  console.log(props);
  return (
    <>
    
      {props.items.map(item => {
        return (
          <ItemCardContainer key={item.itemId}>
            {/* <div key={item.itemId}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
          </div> */}

            <Card>
              <CardBody>
                <ItemListHeader itemId={item.itemId} users={props.users} />
              </CardBody>
              <CardImg
                top
                width="100%"
                src={item.image}
                alt={item.title}
              />
              <CardBody>
                <CardTitle>
                  <h3>{item.title}</h3>
                </CardTitle>
                <CardSubtitle>
                  <h4>
                    {item.brand} - {item.model}
                  </h4>
                </CardSubtitle>
                <CardText>
                  <p>{item.description}</p>
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </ItemCardContainer>
        );
      })}
    </>
  );
};


/* 
==== Component Styles ====
*/

const ItemCardContainer = styled.div`
  width: 40%;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: left;
`


export default ItemList;
