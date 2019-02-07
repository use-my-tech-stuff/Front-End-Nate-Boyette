import React from "react";

import { connect } from "react-redux";
import {
  getUserById,
  getItemsByUserId,
  getItemById,
  deleteItem,
  getItems,
  getUsers
} from "../store/actions";

import UserProfilePage from "../components/User/UserProfilePage";

class UserProfileView extends React.Component {
  componentDidMount() {
    // get items by userid
    const userId = localStorage.getItem("userId");
    this.props.getUserById(userId);
    this.props.getItemsByUserId(userId);
    this.props.getItems();
    this.props.getUsers();
  }

  handleDelete = (e, itemId) => {
    e.preventDefault();
    this.props.deleteItem(itemId);
  };

  componentDidUpdate(prevProps) {
    const userId = localStorage.getItem("userId");
    if (prevProps.itemDeleted !== this.props.itemDeleted) {
      this.props.getUserById(userId);
      this.props.getItemsByUserId(userId);
      this.props.getItems();
      this.props.getUsers();
    }

    if (prevProps.itemAdded !== this.props.itemAdded) {
      this.props.getUserById(userId);
      this.props.getItemsByUserId(userId);
      this.props.getItems();
      this.props.getUsers();
    }

    if (prevProps.isUpdatingItem !== this.props.isUpdatingItem) {
      this.props.getUserById(userId);
      this.props.getItemsByUserId(userId);
      this.props.getItems();
      this.props.getUsers();
    }
  }

  populateUpdateForm = (ev, item) => {
    ev.preventDefault();
    localStorage.setItem("editItem", JSON.stringify(item));
    localStorage.setItem("editItemId", item.itemId);
  };

  render() {
    // console.log("params.id", this.props.match.params.id);
    // console.log(this.props.siteItems);
    // console.log("ALL USERS", this.props.allUsers)
    return (
      <div>
        {!this.props.user ? (
          <h1>Loading...</h1>
        ) : (
          <UserProfilePage
            user={this.props.user}
            userStatus={this.props.userStatus}
            items={this.props.items}
            history={this.props.history}
            getItemById={this.props.getItemById}
            deleteItem={this.handleDelete}
            updateItem={this.populateUpdateForm}
            siteItems={this.props.siteItems}
            allUsers={this.props.allUsers}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    allUsers: state.userReducer.users,
    items: state.userReducer.items,
    siteItems: state.itemReducer.items,
    itemStatus: state.userReducer.items,
    userStatus: state.userReducer.userStatus,
    itemDeleted: state.itemReducer.itemStatus.itemDeleted,
    itemAdded: state.itemReducer.itemStatus.itemAdded,
    isUpdatingItem: state.itemReducer.itemStatus.isUpdatingItem
  };
};

export default connect(
  mapStateToProps,
  { getUserById, getItemsByUserId, getItemById, deleteItem, getItems, getUsers }
)(UserProfileView);
