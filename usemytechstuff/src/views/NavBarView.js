import React from "react";

import NavBar from "../components/NavBar/NavBar";

import { withRouter } from "react-router";

import { connect } from "react-redux";

import { logOut } from "../store/actions";

class NavBarView extends React.Component {
  userLogOut = e => {
    this.props.logOut();
    
  };

  routeToDashboard = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem(`userId`);

    if (userId) {
      this.props.history.push(`/dashboard/${userId}`);
    }
  };

  render() {
    console.log(this.props.isLoggedIn);
    // console.log(localStorage)
    return (
      <>
        <NavBar
          userLogOut={this.userLogOut}
          routeToDashboard={this.routeToDashboard}
          isLoggedIn={this.props.isLoggedIn}
          history={this.props.history}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducer.userStatus.isLoggedIn
  }
}

export default connect(
  mapStateToProps,
  { logOut }
)(withRouter(NavBarView));
