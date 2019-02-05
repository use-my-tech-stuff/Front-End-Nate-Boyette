import React from "react";
import styled from "styled-components";
import ItemListHeader from "./ItemListHeader";

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
  const routeToItemPage = (e, item) => {
    e.preventDefault();
    props.history.push(`/item-list/${item.itemId}`);
    props.getItemById(item.itemId);
  };

  return (
    <>
      {props.items.length === 0 ? (
        <h2>Loading Item data...</h2>
      ) : (
        props.items.map(item => {
          return (
            <ItemCardContainer key={item.itemId}>
              <Card>
                <CardBody>
                  <ItemListHeader ownerId={item.owner} users={props.users} />
                  {/* MORE DATA CAN GO INTO THE ITEM LIST HEADER*/}
                </CardBody>
                <CardImg top width="100%" src={item.image} alt={item.title} />
                <CardBody>
                  <CardTitle>
                    <h3>{item.title}</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <h4>
                      {item.brand} - {item.model}
                    </h4>
                  </CardSubtitle>
                  <CardSubtitle>{`$${item.dailyPrice} / day`}</CardSubtitle>
                  <CardSubtitle>{`$${item.weeklyPrice} / week`}</CardSubtitle>
                  <CardText>{item.description}</CardText>

                  <Button onClick={e => routeToItemPage(e, item)}>
                    View Item
                  </Button>
                </CardBody>
              </Card>
            </ItemCardContainer>
          );
        })
      )}
    </>
  );
};

/* 
==== Component Styles ====
*/

const ItemCardContainer = styled.div`
  width: 45%;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: left;
`;

const ItemButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ItemList;
