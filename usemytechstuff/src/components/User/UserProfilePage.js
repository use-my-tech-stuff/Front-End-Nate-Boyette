import React from "react";
import faker from "faker";

import UserProfileTabs from "./UserProfileTabs";

import UserItemList from "./UserItemList";

import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Media,
  Row,
  Col
} from "reactstrap";

import { Route, NavLink } from "react-router-dom";

const UserProfilePage = props => {
  const routeToFormPage = (e, item) => {
    e.preventDefault();
    localStorage.removeItem("editItem");
    localStorage.removeItem("editItemId");
    props.history.push(`/item-form/`);
  };
  // console.log(props);
  const userId = localStorage.getItem("userId");

  console.log('SITE ITEMS', props.siteItems)

  const rentedItems = props.siteItems === null ? null : props.siteItems.filter(item => {
    return item.renter === Number(userId)
  }) 

  console.log('RENTED ITEMS', rentedItems.length)
  
  return !props.items ? <h1>Loading...</h1> :  (
    <>
      <UserPageContainer>
        <Card className="text-left">
          <CardBody>
            <UserInfoContainer>
              <ProfileAvatarContainer>
                <ProfileImage src={props.user.thumbnail} />
                <CardTitle>{props.user.username}</CardTitle>
              </ProfileAvatarContainer>

              <JustInfoContainer>
                <CardText>
                  Items For Rent:{" "}
                  {props.items.length}
                </CardText>
                <CardText>Items Renting: {rentedItems.length }</CardText>
                <ButtonContainer>
                  <Button size="sm" onClick={routeToFormPage}>
                    Add Item
                  </Button>
                  {/* <Button size="sm">View Rentals</Button> */}
                </ButtonContainer>
              </JustInfoContainer>
            </UserInfoContainer>
          </CardBody>
        </Card>
      </UserPageContainer>
      {/* <UserItemListContainer> */}
        <hr />

        {/* <NavLink exact to={`/dashboard/${userId}`}>
          My Items
        </NavLink>
        <NavLink to={`/dashboard/${userId}/rented`}>My Rentals</NavLink> */}

        {/* <UserItemsContainer>
          <UserItemList
            items={props.items}
            user={props.user}
            history={props.history}
            getItemById={props.getItemById}
            userStatus={props.userStatus}
            deleteItem={props.deleteItem}
            updateItem={props.updateItem}
          />
        </UserItemsContainer> */}

        <UserProfileTabs
          items={props.items}
          user={props.user}
          history={props.history}
          getItemById={props.getItemById}
          userStatus={props.userStatus}
          deleteItem={props.deleteItem}
          updateItem={props.updateItem}
          siteItems={props.siteItems}
          allUsers={props.allUsers}
        />
      {/* </UserItemListContainer> */}
    </>
    // TODO - Bring in ItemListView instead of ItemList
    // Will need to conditionally call getItems and getUsers on componentDidMount.
  );
};

/* 
==== Component Styles ====
*/

const UserPageContainer = styled.div`
  max-width: 400px;
  margin: 5% auto 0;
  ${"" /* padding: 50px; */}
  ${"" /* border: 1px solid lightgrey; */}
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 17px -4px rgba(0, 0, 0, 0.16);
  text-align: left;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JustInfoContainer = styled.div`
  width: 50%;
`;

const ProfileAvatarContainer = styled.div`
  text-align: center;
`;

const UserItemListContainer = styled.div`
  margin: 5% 0;
`;

const UserItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 2% auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 100px;
`;

export default UserProfilePage;
