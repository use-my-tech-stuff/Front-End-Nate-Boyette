import React from "react";

import { connect } from "react-redux";

import { getUserById } from "../../store/actions";

import faker from "faker"
// import ItemListHeader from "../ItemList/ItemListHeader"

import styled from "styled-components"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";


class Item extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
   this.props.getUserById(this.props.item.owner)
  }

  handleClick = (e) =>{
    e.preventDefault();
    if (!localStorage.getItem('jwt')) {
      this.props.history.push('/register')
    } else {
      this.props.rentItem(this.props.item)
    }
  }

  
// User info accessible, add and format any data necessry
  render() {
    console.log(this.props);
    const userId = Number(localStorage.getItem('userId'))
    
    return !this.props.user ? <h1>Loading...</h1> : (
      <ItemCardContainer>
        <Card>
          <CardBody>
            <ItemProfileHeaderCont>
              <ProfileImage src={this.props.user.thumbnail} />
              <CardTitle>{this.props.user.username}</CardTitle>
            </ItemProfileHeaderCont>
          </CardBody>
          <CardImg
            top
            width="100%"
            src={this.props.item.imgUrl}
            alt={this.props.item.title}
          />
          <CardBody>
            <CardTitle>
              <h3>{this.props.item.title}</h3>
            </CardTitle>
            <CardSubtitle>
              <h4>
                {this.props.item.brand} - {this.props.item.model}
              </h4>
            </CardSubtitle>
            <CardSubtitle>{`$${
              this.props.item.dailyPrice
            } / day`}</CardSubtitle>
            <CardSubtitle>{`$${
              this.props.item.weeklyPrice
            } / week`}</CardSubtitle>
            <CardText>{this.props.item.description}</CardText>
            <CardText>
              Available: {this.props.item.available === true ? "Yes" : "No"}
            </CardText>
            {userId === this.props.item.owner || userId === this.props.item.renter || this.props.item.renter !== null ? null : (
              <Button onClick={(e) => this.handleClick(e)}>Request Rental</Button>
            )}
          </CardBody>
        </Card>
      </ItemCardContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
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

const ItemProfileHeaderCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`

const ProfileImage = styled.img`
  border-radius: 100px;
  width: 50px;
`;

export default connect(
  mapStateToProps,
  { getUserById }
)(Item);
