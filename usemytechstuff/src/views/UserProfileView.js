import React from "react";

import { connect } from "react-redux";
import {
  getUserById,
  getItemsByUserId,
  getItemById,
  deleteItem
} from "../store/actions";

import UserProfilePage from "../components/User/UserProfilePage";

class UserProfileView extends React.Component {
  
  componentDidMount() {
    // get items by userid
    this.props.getUserById(this.props.match.params.id);
    this.props.getItemsByUserId(this.props.match.params.id);
  }

  handleDelete = (e, itemId) => {
    e.preventDefault();
    this.props.deleteItem(itemId);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.itemDeleted !== this.props.itemDeleted) {
      this.props.getUserById(this.props.match.params.id);
      this.props.getItemsByUserId(this.props.match.params.id)
    }

    if (prevProps.itemAdded !== this.props.itemAdded) {
      this.props.getUserById(this.props.match.params.id);
      this.props.getItemsByUserId(this.props.match.params.id);
    }

  }

  render() {
    console.log('params.id', this.props.match.params.id);
    console.log(this.props.userStatus.isLoggedIn)
    return (
      <div>
        <UserProfilePage
          user={this.props.user}
          userStatus={this.props.userStatus}
          items={this.props.items}
          history={this.props.history}
          getItemById={this.props.getItemById}
          deleteItem={this.handleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    items: state.userReducer.items,
    itemStatus: state.userReducer.items,
    userStatus: state.userReducer.userStatus,
    itemDeleted: state.itemReducer.itemStatus.itemDeleted,
    itemAdded: state.itemReducer.itemStatus.itemAdded
  };
};

export default connect(
  mapStateToProps,
  { getUserById, getItemsByUserId, getItemById, deleteItem }
)(UserProfileView);
