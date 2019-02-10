import React from "react";
import { connect } from "react-redux";

import { getItems, getUsers, getItemById } from "../store/actions";

import ItemList from "../components/ItemList/ItemList";

import styled from "styled-components";

import Typography from "@material-ui/core/Typography";

class ItemListView extends React.Component {
  componentDidMount() {
    // Conditionally call functions based on match
    this.props.getItems();
    this.props.getUsers();
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.items !== this.props.items) {
  //     console.log(this.props.items)
  //     console.log(prevProps.items);
  //     this.props.getItems();
  //   }
  // }
  render() {
    // console.log(this.props.items);

    return (
      <ItemListPageContainer>
        {this.props.itemStatus.isFetchingItems ? (
          <Typography variant="h2" align="center">
            Loading Data
          </Typography>
        ) : (
          <Typography variant="h2" align="center">
            Item List
          </Typography>
        )}
        {this.props.itemStatus.isFetchingItems ? null : (
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
        )}
      </ItemListPageContainer>
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

const ItemListPageContainer = styled.div`
  margin-top: 10%;
`

const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 2% auto;
`;

export default connect(
  mapStateToProps,
  { getItems, getUsers, getItemById }
)(ItemListView);
