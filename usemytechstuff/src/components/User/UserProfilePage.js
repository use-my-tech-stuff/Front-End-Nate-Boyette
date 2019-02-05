import React from "react";
import faker from "faker";

import ItemList from "../ItemList/ItemList"

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

const UserProfilePage = props => {
  return (
    <>
      <UserPageContainer>
        <Card className="text-left">
          <CardBody>
            <UserInfoContainer>
              <ProfileAvatarContainer>
                <ProfileImage src={faker.image.avatar()} />
                <CardTitle>{props.user.username}</CardTitle>
              </ProfileAvatarContainer>

              <div>
                <CardText>Items Owned: 50</CardText>
                <CardText>Reviews: 156</CardText>
                <Button>View My List</Button>
              </div>
            </UserInfoContainer>
          </CardBody>
        </Card>
      </UserPageContainer>
      <UserItemListContainer>
        <hr />
        Items Listed
        <UserItemsContainer>
          <ItemList items={props.items} users={props.user} />
        </UserItemsContainer>
      </UserItemListContainer>
    </>
  );
};

/* 
==== Component Styles ====
*/

const UserPageContainer = styled.div`
  max-width: 350px;
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
`

const ProfileAvatarContainer = styled.div`
  text-align: center;
`

const UserItemListContainer = styled.div`
  margin: 5% 0;
`

const UserItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 2% auto;
`;

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 100px;
`;

export default UserProfilePage;