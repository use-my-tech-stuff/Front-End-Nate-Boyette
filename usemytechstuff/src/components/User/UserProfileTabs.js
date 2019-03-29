import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

import UserItemList from "./UserItemList";
import UserRentalList from "./UserRentalList";

import styled from "styled-components";

class UserProfileTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const filteredItems = this.props.siteItems.filter(item => {
      // console.log(item.renter)
      return item.renter == localStorage.getItem('userId')
    })

    // console.log('USER ID',localStorage.getItem('userId'))
    
    const filteredItem = filteredItems.find(item => item.owner);
    const rentalOwnerId = filteredItem ? filteredItem.owner : null
    
    // Finding the correct owner of for each item in the rental list
    const rentalOwner = this.props.allUsers.find(user => {
      return user.userId === rentalOwnerId
    })

    


    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "1"
              })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              My Items
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "2"
              })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Rented Items
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
                <UserItemsContainer>
                  <UserItemList
                    items={this.props.items}
                    user={this.props.user}
                    history={this.props.history}
                    getItemById={this.props.getItemById}
                    userStatus={this.props.userStatus}
                    deleteItem={this.props.deleteItem}
                    updateItem={this.props.updateItem}
                  />
                </UserItemsContainer>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <UserRentalList
                  // siteItems={this.props.siteItems}
                  filteredItems={filteredItems}
                  user={this.props.user}
                  rentalOwner={rentalOwner}
                />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

const UserItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin: 2% auto;
`;

export default UserProfileTabs;
