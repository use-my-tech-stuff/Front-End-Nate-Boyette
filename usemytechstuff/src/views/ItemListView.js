import React from "react";
import { connect } from "react-redux";

import { getItems, getUsers } from "../store/actions";

import ItemList from "../components/ItemList/ItemList";

import styled from "styled-components";

class ItemListView extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.getUsers();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.items.length !== this.props.items.length) {
      this.props.getItems();
    }
    console.log(prevProps)
  }
  render() {
    console.log(this.props.items);
    
    return (
      <>
        <h1>Item List</h1>
        <ItemListContainer>
          <ItemList items={this.props.items} users={this.props.users} />
        </ItemListContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.itemReducer.items)
  return {
    items: state.itemReducer.items,
    users: state.userReducer.users
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
  { getItems, getUsers }
)(ItemListView);
