import React from "react";
import { connect } from "react-redux";

import { getItems, getUsers, getItemById } from "../store/actions";

import ItemList from "../components/ItemList/ItemList";

import styled from "styled-components";

class ItemListView extends React.Component {
  componentDidMount() {
    // Conditionally call functions based on match
    this.props.getItems();
    this.props.getUsers();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.items.length !== this.props.items.length) {
  //     console.log(this.props.items)
  //     console.log(prevProps.items);
  //     this.props.getItems();

  //   }
  // }
  render() {
    // console.log(this.props.items);

    return (
      <>
        <h1>Item List</h1>
        { this.props.itemStatus.isFetchingItems ? <h1>Loading Data</h1> :
          <ItemListContainer>
            <ItemList
              history={this.props.history}
              items={this.props.items}
              users={this.props.users}
              getItemById={this.props.getItemById}
              userStatus={this.props.userStatus}
              itemStatus={this.props.itemStatus}
            />
          </ItemListContainer>
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.itemReducer.items)
  return {
    items: state.itemReducer.items,
    itemStatus: state.itemReducer.itemStatus,
    users: state.userReducer.users,
    userStatus: state.userReducer.userStatus
  };
};

/* 
==== Component Styles ====
*/

const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 2% auto;
`;

export default connect(
  mapStateToProps,
  { getItems, getUsers, getItemById }
)(ItemListView);
