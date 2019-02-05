import React from "react";

import { connect } from "react-redux";
import { getUserById, getItemsByUserId, getItemById } from "../store/actions";

import UserProfilePage from "../components/User/UserProfilePage"


class UserProfileView extends React.Component {
  componentDidMount() {
    
    // get items by userid
    this.props.getUserById(this.props.match.params.id)
    this.props.getItemsByUserId(this.props.match.params.id);
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <UserProfilePage user={this.props.user} items={this.props.items} history={this.props.history} getItemById={this.props.getItemById} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    items: state.userReducer.items
  }
}


export default connect(
  mapStateToProps,
  { getUserById, getItemsByUserId, getItemById }
)(UserProfileView);
