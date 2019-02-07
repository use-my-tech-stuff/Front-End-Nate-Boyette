import React from "react";
import styled from "styled-components";

import faker from "faker";

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

  // console.log(props);
  return (
    <>
      {props.items.length === 0 ? (
        <h2>No Items To Display Yet</h2>
      ) : (
        props.items.map(item => {
          return (
            <ItemCardContainer key={item.itemId}>
              
              <Card>
                <UserInfoContainer>
                  <ProfileAvatarContainer>
                    <ProfileImage src={props.user.thumbnail} />
                    <CardTitle>{props.user.username}</CardTitle>
                  </ProfileAvatarContainer>
                  {/* More DATA CAN GO IN THE USER ITEM LIST HEADER*/}
                </UserInfoContainer>
                <CardImg
                  top
                  width="50%"
                  src={item.imgUrl}
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
                  <CardSubtitle>{`$${
                    item.dailyPrice
                  } / day`}</CardSubtitle>
                  <CardSubtitle>{`$${
                    item.weeklyPrice
                  } / week`}</CardSubtitle>
                  {/* <CardText>{item.description}</CardText> */}
                  <ItemButtonContainer>
                    <Button onClick={e => routeToItemPage(e, item)}>
                      View Item
                    </Button>
                    {localStorage.getItem('jwt') && (
                      <>
                        <Button onClick={e => {
                          props.updateItem(e, item)
                          console.log(item)
                          props.history.push(`/item-form`)
                        }}>Edit</Button>
                        <Button color="danger" onClick={e => props.deleteItem(e, item.itemId)}>Delete</Button>
                      </>
                    )}
                  </ItemButtonContainer>
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
  width: 40%;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: left;

  

`;

const ItemButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProfileAvatarContainer = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 100px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default ItemList;
