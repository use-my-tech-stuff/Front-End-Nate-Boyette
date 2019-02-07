import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

import {
  getUserById,
  getItemsByUserId,
  getItemById,
  deleteItem,
  getItems
} from "../../store/actions";

class ItemList extends React.Component{
   
  
  
  
  routeToItemPage = (e, item) => {
    e.preventDefault();
    this.props.history.push(`/item-list/${item.itemId}`);
    this.props.getItemById(item.itemId);
  };

  // const item : {
  // available: true
  // brand: "velit"
  // dailyPrice: 497.98
  // description: "Soluta enim et vitae. Saepe amet dolorem eius explicabo nihil ratione architecto. Mollitia ea rerum aperiam praesentium earum quam. Expedita suscipit veritatis libero. Adipisci reprehenderit voluptatem maxime et est at ut."
  // imgUrl: "http://lorempixel.com/640/480/technics"
  // itemId: 42
  // label: null
  // model: "eos"
  // owner: 4
  // renter: null
  // title: "Suscipit et doloremque voluptas occaecati voluptates laborum molestiae."
  // weeklyPrice: 664.65
  // }

  // const itemOwnerId = item.owner;
  // console.log(itemOwnerId)
  // const user = this.props.getUserById(itemOwnerId);
  // console.log(user)
  // const username = user.username;
  // console.log(username)
  // const thumbnail = user.thumbnail;
  
  render(){
    console.log(this.props.filteredItems);
    // console.log("RENTAL OWNER", this.props.rentalOwner)
    const username = this.props.rentalOwner ? this.props.rentalOwner.username : null
    const thumbnail = this.props.rentalOwner ? this.props.rentalOwner.thumbnail : null

    // console.log('USERNAME', username)
    return (
      <>
        {this.props.filteredItems.length === 0 ? (
          <h2>No Items To Display Yet</h2>
        ) : (
            this.props.filteredItems.map(item => {
              

              return (
                <ItemCardContainer key={item.itemId}>
                  <Card>
                    <UserInfoContainer>
                      <ProfileAvatarContainer>
                        <ProfileImage src={thumbnail} />
                        <CardTitle>{username}</CardTitle>
                      </ProfileAvatarContainer>
                      {/* More DATA CAN GO IN THE USER ITEM LIST HEADER*/}
                    </UserInfoContainer>
                    <CardImg top width="50%" src={item.imgUrl} alt={item.title} />
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
                      {/* <CardText>{item.description}</CardText> */}
                      <ItemButtonContainer>
                        <Button onClick={e => this.routeToItemPage(e, item)}>
                          View Item
                    </Button>
                      </ItemButtonContainer>
                    </CardBody>
                  </Card>
                </ItemCardContainer>
              );
            })
          )}
      </>
    );
  }
  
};


const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    items: state.userReducer.items,
    
  };
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






export default connect(
  mapStateToProps,
  { getUserById }
)(ItemList);
